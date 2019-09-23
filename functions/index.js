const functions = require('firebase-functions');
const admin = require('firebase-admin');
const crypto = require("crypto");
const QRCode = require('qrcode');
const MemoryStream = require('memory-stream');
const config = functions.config();
const mailgun = require("mailgun-js")({
    apiKey: config.mailgun.key,
    domain: 'mailgun.allegro.tech',
    host: 'api.eu.mailgun.net'
});
const logoBase64 = 'iVBORw0KGgoAAAANSUhEUgAAADUAAAAYCAYAAABa1LWYAAAAAXNSR0IArs4c6QAABOxJREFUWAndV11oXEUUnnN3c/NXbDZpWpMQ0ibE/DVYKVaiIBE0Fa1SUIPFB7NNs1tREPHVQhREBakPonST2GygrZo8qOhDfRBSK5E+aMDabKLSak3zo9RsJOlmN3vn+M1tb/be3e0S041WB3Znzu+cM+fMOXNJZGHsr3uvnMmoFcS1LMV8cMI/lAW1a1bhXrMkBDvqe46xEHsNjhcKLMwf0ftY/XedYsHVcKTwRg5mPWS19VD6b+v8Xzp1Q3cqXURIiLs76gPHk2lE2oX+UNdLyfj1gFec6m4a1H8xwi1Mogl3voykKBZElzSNf5KcMxoMeX9cjQHMXAU+9XMMZnnMQjzTfNwTiS3cD7gZ+20hpi1MvBlzPuY5ISgM2s/Y+8P+Mf8Z7x1HSzkSf1KQ2CGk2IoqW8RMs5hnNBIjOQViqOcb/7ylHweLKlYX+AACjzCLAouQMhN9lkvs6wn5py3a0/WBERSKFgvONBPRi8Fx32FUzCPY5wBKpSsTv0WDgb/Ctlshk2PhUmYSl4nEgWDI/7GimXeKiQozOqQ4mffEpPjKtzOwSYF/d2jMo0oGWVCzWoeu8VdmdOgqUwl4hvbXB9oUaKYfwv4lyvMehcg0YFB1dEG8Bp6u6/HhZM8jpU4l02WebjpFgr9AWs9C114cVPbaAQu3IejI4BODtWb6dTb17YrHjTMw5E+kyfc4yRnkbD6ILXC2yG4gcFFPscfz1tftkXTphzQ4ERz3P2WXSbdGMbmA092aoBFs4kuAixHODQl8YoW9JQ5sEnRl0y0JSmJFLu1eM/0qS2u+VcC2sttKkPf3wKjHBiZ8D+kbuAJODidEzPTJDc+Fd9lx2VjD4DcHxv1VDzd7irDn2+l0IroBxbNtn8+DaKuMSR2GfMBMv+7h++KgnhZjQnQ29G1nKaulEOXLVzgfKTKbLInoVSTjsgW3D7UbuLeHYgvCBydy7XoJoVRwdzfJjtb+V3g69ixAR8TAUGY6hTJM3obe54Dwx6XRZCnC4/Q6g7J3F9LsoMozKrJKxeo0ZBMVHPYuddT1nMcB77DzIOIb3aZDjb3vYj5oJ2ZaM2KfiZ4NGipyBFmSURV6GniSWNDlNW9j3/Ms0zhEFENu/4EesZAkdtODaB+y02ElGplG9GAw1JWHolGiCdrnoDuBJSd4c0AawodmmBjoWX39477PEaXkwCaYrq1wcdMUkfVPzRRDkhCqpC/bcegDDXY40xqN9LdUOreqt1oq/p/DuHHaE6ggd65syfwo3mcnUQtOkpBRKUXrCi1pwaxNoh86sSzKZCQ+CR3TSYQj6H+vK5y3MXCXlFRudj0nU1Ygt9DoBPp0wimoRSXcjb/dV/MvQxbq8lMRozcg4ayGzDqkquwWIikvKvjg7QMVkejSR9Cv2+nZXGt6gXwH92dkLUqDZ/3jeBK/uhpZt1sbfaFlMD8SjX6Ce1y2Gpm18mhodMub9Lw2nOTLcC7l4jsUqzIv6LRLaGct/EDIdwip+jhkT2FetPD2GbqvtDVs/GEuHD6MCO2009Zj7Ugb9aF40ZhrNUirxObqKZSH8jjFQptyuWjSKHV9pzp5JkPwxCmILeqbhWu5FHI6nizLGsvF3jHfOfUEM9hw7Lmiy6X/HjznnbHgjob+WsGxPAtWs8buy0cnOqcsnG97oCYWd34D6i4x/xeAU9Anqw2yXQAAAABJRU5ErkJggg==';
const logo = Buffer.from(logoBase64, 'base64');

admin.initializeApp();

/**
 * Recalculates user scans, based on scans found in its sub-collection.
 */
exports.recalculateScans = functions.firestore.document('users/{userId}/scans/{scanId}').onWrite((change, ctx) => {
    const userItem = admin.firestore().collection('users').doc(ctx.params.userId);
    const userScans = userItem.collection('scans');

    const firstDayTimestamp = 1569276000000;  // Tue Sep 24 2019 00:00:00 GMT+0200 (Central European Summer Time)
    const secondDayTimestamp = 1569362400000; // Wed Sep 25 2019 00:00:00 GMT+0200 (Central European Summer Time)
    const endDayTimestamp = 1569448800000;    // Thu Sep 26 2019 00:00:00 GMT+0200 (Central European Summer Time)

    return userScans.get()

        .then(scansSnapshot => {
            const calculated = { entranceParty: false, entranceFirstDay: false, entranceSecondDay: false };

            scansSnapshot.forEach(scan => {
                const { mode, at } = scan.data();

                if (mode === 'PARTY') {
                    calculated.entranceParty = true;
                }

                if (mode === 'VALIDATE' && at > firstDayTimestamp) {
                    if (at < secondDayTimestamp) {
                        calculated.entranceFirstDay = true;
                    } else if (at < endDayTimestamp) {
                        calculated.entranceSecondDay = true;
                    }
                }
            });

            return calculated;
        })

        .then(calculated => {
            return userItem.set(calculated, { merge: true });
        });
});

/**
 * Takes the users vote and forwards it to a schedule item votes sub-collection.
 */
exports.mapToScheduleVote = functions.firestore.document('users/{userId}/votes/{scheduleId}').onWrite((change, ctx) => {

    const scheduleVoteItem = admin.firestore()
        .collection(`schedule/${ctx.params.scheduleId}/votes`)
        .doc(ctx.params.userId);

    if (!change.after.exists) {
        // user vote doesn't exist after change, so we
        // must also delete the one recorded at schedule
        return scheduleVoteItem.delete();
    }

    return scheduleVoteItem.set({ score: change.after.data().score });
});

/**
 * Recalculates talk score, based on votes found in its sub-collection.
 */
exports.recalculateVotes = functions.firestore.document('schedule/{scheduleId}/votes/{voterId}').onWrite((change, ctx) => {
    const scheduleItem = admin.firestore().collection('schedule').doc(ctx.params.scheduleId);
    const scheduleItemVotes = scheduleItem.collection('votes');

    return scheduleItemVotes.get()

        .then(votesSnapshot => {
            const calculated = { count: 0, sum: 0 };

            votesSnapshot.forEach(vote => {
                const { score } = vote.data();

                calculated.count += 1;
                calculated.sum += score;
            });

            return calculated;
        })

        .then(calculated => {

            return scheduleItem.set({
                votesCount: calculated.count,
                score: calculated.sum / (calculated.count || 1)
            }, { merge: true });
        });
});

/**
 * Validated users ticket
 *
 * @type {HttpsFunction}
 */
exports.validateTicket = functions.https.onCall(async (requestData, context) => {
    const firestore = admin.firestore();
    const { mode = 'VALIDATE', ticketData } = requestData;
    const { uid, name, type } = ticketData;
    const userRecord = await admin.auth().getUser(uid).catch(() => null);

    if (!userRecord) return { isValid: false, text: 'ticket not found' };

    const userProfile = firestore.collection('users').doc(uid);
    const userProfileData = (await userProfile.get()).data();

    const dataMismatch = name !== userProfileData.displayName || type !== userProfileData.type;

    if (dataMismatch) {
        return {
            isValid: false,
            text: [
                'data mismatch:',
                `name: ${userProfileData.displayName}`,
                `type: ${userProfileData.type}`
            ]
        };
    }

    const scansCollection = userProfile.collection('scans');

    // get previous scans
    const previousScans = await scansCollection.get()
        .then(querySnapshot => {
            const scans = [];
            querySnapshot.forEach(doc => scans.push(doc.data()));
            return scans;
        });

    // record current scan
    await scansCollection.add({ mode, at: Date.now() });

    const byDate = (a, b) => b.at - a.at;
    const printDate = timestamp => new Date(timestamp).toLocaleString(['pl-PL', 'en-GB'], { timeZone: 'Europe/Warsaw' });

    if (mode === 'VALIDATE') {
        const todayValidation = previousScans
            .filter(scan => new Date(scan.at).getDate() === new Date().getDate())
            .sort(byDate)
            .find(scan => scan.mode === 'VALIDATE');

        if (todayValidation) return {
            isValid: false,
            text: [
                'ticket was already scanned today!',
                `last: ${printDate(todayValidation.at)}`
            ]
        };

        return { isValid: true, text: 'registration OK' };
    }

    if (mode === 'PARTY') {
        const prev = previousScans.sort(byDate).find(scan => scan.mode === 'PARTY');
        if (prev) return {
            isValid: false,
            text: [
                `ticket was already scanned at the party!`,
                `last: ${printDate(prev.at)}`
            ]
        };

        return { isValid: true, text: 'party registration OK' }
    }

    if (mode === 'TEST') {
        return {
            isValid: true,
            text: [
                'validated',
                `${previousScans.filter(scan => scan.mode === 'VALIDATE').length} at registration;`,
                `${previousScans.filter(scan => scan.mode === 'PARTY').length} at party; `,
                `${previousScans.filter(scan => scan.mode === 'TEST').length} in tests; `
            ]
        }
    }

    return {
        isValid: false,
        text: [
            'invalid scanner mode',
            mode
        ]
    };
});

/**
 * Get tickets hashes
 *
 * @type {HttpsFunction}
 */
exports.getHashes = functions.https.onCall(async () => {
    const firestore = admin.firestore();
    const digestMessage = message => crypto.createHash('sha256').update(message).digest('hex');

    const hashes = await firestore.collection('users').get()
        .then(snapshot => {
            const hashes = [];
            snapshot.forEach(doc => hashes.push(digestMessage(doc.id)));
            return hashes;
        })
        .catch(err => console.log('Error getting documents', err));

    if (hashes) {
        return ({ hashes });
    }
});

/**
 * Updates new users hash, creates user authentication record and sends QR code.
 */
exports.createUser = functions.firestore.document('users/{userId}').onCreate((snapshot, ctx) => {
    snapshot.ref.update({ uuidHash: crypto.createHash('sha256').update(ctx.params.userId).digest('hex') });
    const data = snapshot.data();
    const password = `atm-${crypto.randomBytes(3).toString("hex")}`.toUpperCase();
    const userObject = {
        uid: ctx.params.userId,
        email: data.email,
        emailVerified: true,
        password,
        displayName: data.displayName,
        photoURL: data.photoURL,
        disabled: false
    };
    const ws = new MemoryStream();
    return admin.auth().createUser(userObject)
        .then(() => new Promise(resolve => {
            ws.on('finish', resolve);
            const qrOptions = { errorCorrectionLevel: 'H', scale: 8, color: { dark: '#fff', light: '#A7168F' } };
            const qrData = JSON.stringify({ uid: ctx.params.userId, name: data.displayName, type: data.type });
            QRCode.toFileStream(ws, qrData, qrOptions);
        }))
        .then(() => new mailgun.Attachment({ data: ws.toBuffer(), filename: 'qr.png' }))
        .then(attachment => {
            return mailgun.messages().send({
                from: 'ATM Team <no-reply@allegro.tech>',
                to: data.email,
                subject: 'Twój udział w ATM',
                template: 'atm-registration',
                'h:X-Mailgun-Variables': JSON.stringify({
                    email: data.email,
                    login: encodeURIComponent(data.email),
                    password: encodeURIComponent(password)
                }),
                inline: [attachment, new mailgun.Attachment({
                    data: logo,
                    filename: 'logo.png'
                })]
            }, (error, body) => console.log(body));
        })
        .catch(error => ({ error }));
});

/**
 * Removes user authentication
 */
exports.removeUser = functions.firestore.document('users/{userId}').onDelete((snapshot, ctx) => {
    return admin.auth().deleteUser(ctx.params.userId)
});
