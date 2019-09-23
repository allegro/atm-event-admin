import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { useCollection, useCollectionData } from "react-firebase-hooks/firestore";
import CircularProgress from "@material-ui/core/CircularProgress";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from "@material-ui/core/Paper";
import SpeakerChip from "../components/SpeakerChip";

import Grid from "@material-ui/core/Grid";

const gold = 'rgba(214, 175, 54, 0.3)';
const silver = 'rgba(215, 215, 215, 0.3)';
const bronze = 'rgba(167, 112, 68, 0.1)';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        flexGrow: 1,
        marginBottom: theme.spacing(10)
    },
    bio: {
        height: '175px',
        overflow: 'auto'
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
    avatar: {
        width: 128,
        height: 128
    },
    tableRegular: {
        '& tbody tr:nth-child(-n+3)': {
            backgroundColor: bronze
        },
        '& tbody tr:nth-child(-n+2)': {
            backgroundColor: silver
        },
        '& tbody tr:nth-child(-n+1)': {
            backgroundColor: gold
        }
    },
    tableLightning: {
        '& tbody tr:nth-child(-n+1)': {
            backgroundColor: gold
        }
    }
}));

export default function Schedule({ slots, speakers }) {
    const classes = useStyles();

    const [slotsData, slotLoading, slotsError] = useCollectionData(slots.orderBy('start'));
    const [speakersSnapshot, speakersLoading, speakersError] = useCollection(speakers);

    if (slotLoading || speakersLoading) {
        return <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }}/>;
    }

    if (slotsError || speakersError) {
        return <p>ERROR: {slotsError.toString() + speakersError.toString()}</p>;
    }

    const regularTalks = slotsData
        .filter(item => item.type === 'TALK')
        .sort(({ score: scoreA = 0}, { score: scoreB = 0}) => scoreB - scoreA);


    const lightningTalks = slotsData
        .filter(item => item.type === 'LIGHTNING')
        .sort(({ score: scoreA = 0}, { score: scoreB = 0}) => scoreB - scoreA);

    function renderSpeakers(slotSpeakers) {
        return slotSpeakers
            .map(({ id }) => speakersSnapshot.docs.find(speaker => speaker.id === id))
            .map(speaker => <SpeakerChip key={speaker.id} speaker={speaker.data()} style={{ marginRight: 10 }}/>);
    }

    return (
        <Fragment>



            <Typography key="title" variant="h5">Voting results</Typography>

            <Grid container spacing={10}>
                <Grid item xs={6}>
                    <h4 className={classes.cardTitleWhite}>Regular Talks</h4>
                    <Paper className={classes.root}>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell>Score (Votes Count)</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Speakers</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    regularTalks.map((talk, i) => (
                                        <TableRow key={talk.title}>
                                            <TableCell>{i + 1}</TableCell>
                                            <TableCell>{`${talk.score || 0} (${talk.votesCount || 0})`}</TableCell>
                                            <TableCell>{talk.title}</TableCell>
                                            <TableCell>{renderSpeakers(talk.speakers || [])}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>

                <Grid item xs={6}>
                    <h4 className={classes.cardTitleWhite}>Lightning Talks</h4>
                    <Paper className={classes.root}>
                        <Table className={classes.table} size="small">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Rank</TableCell>
                                    <TableCell>Score (Votes Count)</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Speakers</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    lightningTalks.map((talk, i) => (
                                        <TableRow key={talk.title}>
                                            <TableCell>{i + 1}</TableCell>
                                            <TableCell>{`${talk.score || 0} (${talk.votesCount || 0})`}</TableCell>
                                            <TableCell>{talk.title}</TableCell>
                                            <TableCell>{renderSpeakers(talk.speakers || [])}</TableCell>
                                        </TableRow>
                                    ))
                                }
                            </TableBody>
                        </Table>
                    </Paper>
                </Grid>

            </Grid>
        </Fragment>
    );
}