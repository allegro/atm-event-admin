import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { useCollection } from "react-firebase-hooks/firestore";
import CircularProgress from "@material-ui/core/CircularProgress";
import Avatar from "@material-ui/core/Avatar";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Edit';
import FaceIcon from '@material-ui/icons/Face';
import AddIcon from '@material-ui/icons/Add';
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from "@material-ui/core/Fab";
import ComfirmableButton from "../components/ComfirmableButton";

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
    }
}));

export default function Speakers({ speakers, storage }) {
    const classes = useStyles();
    const [state, setState] = useState({ open: false, speaker: {} });
    const [speakersSnapshot, loading, error] = useCollection(speakers);
    if (loading) return <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }}/>;
    if (error) return <p>ERROR: {error.toString()}</p>;
    return [
        <Typography key="title" variant="h5">Edit speakers</Typography>,
        <SpeakersGrid key="grid" rows={speakersSnapshot.docs} onEdit={handleEdit} onRemove={handleRemove}/>,
        <EditSpeakerDialog key="edit-speaker" speaker={state.speaker} open={state.open} onClose={handleClose}
                           onUpdate={handleUpdate} storage={storage}/>,
        <Fab key="action" onClick={() => setState({ open: true, speaker: {} })} className={classes.fab}
             color="secondary"><AddIcon/></Fab>
    ];

    function handleEdit(speaker) {
        setState({ open: true, speaker });
    }

    function handleClose() {
        setState((old) => ({ ...old, open: false }));
    }

    function handleUpdate(speaker) {
        if (speaker.id) {
            speakers.doc(speaker.id).set(speaker);
        } else {
            speakers.add(speaker);
        }
        setState((old) => ({ ...old, open: false }));
    }

    function handleRemove(speaker) {
        speakers.doc(speaker.id).delete();
    }
}

function SpeakersGrid({ rows, onEdit, onRemove }) {
    const classes = useStyles();
    return <div className={classes.root}>
        <Grid container spacing={3}>
            {rows.map(row => {
                const speaker = { id: row.id, ...row.data() };
                return <Grid item xs={12} md={4} key={speaker.id}>
                    <Card>
                        <CardHeader avatar={<Avatar alt={speaker.name} src={speaker.photo}/>} title={speaker.name}/>
                        <CardContent className={classes.bio}>
                            <Typography variant="caption" color="textSecondary" component="p">{speaker.bio}</Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton style={{ marginLeft: 'auto' }} onClick={() => onEdit(speaker)}>
                                <EditIcon/>
                            </IconButton>
                            <ComfirmableButton onSubmit={() => onRemove(speaker)}
                                               message={`Do you really want to remove ${speaker.name}?`}>
                                <DeleteIcon/>
                            </ComfirmableButton>
                        </CardActions>
                    </Card>
                </Grid>
            })}
        </Grid>
    </div>;
}

function EditSpeakerDialog({ speaker, open, onClose, onUpdate, storage }) {
    return <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>{speaker.name ? "Edit Speaker" : "Add Speaker"}</DialogTitle>
        <DialogContent>
            <Grid container justify="center" alignItems="center">
                <Photo speaker={speaker} storage={storage} onUpdate={(url) => speaker.photo = url}/>
                <TextField margin="dense" label="name" type="text" fullWidth defaultValue={speaker.name}
                           onChange={handleChange('name')}/>
                <TextField multiline margin="dense" label="bio" type="text" fullWidth defaultValue={speaker.bio}
                           onChange={handleChange('bio')}/>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">Cancel</Button>
            <Button onClick={() => onUpdate(speaker)} color="primary">Save</Button>
        </DialogActions>
    </Dialog>;

    function handleChange(name) {
        return (event) => speaker[name] = event.target.value
    }
}

function Photo({ speaker, storage, onUpdate }) {
    const classes = useStyles();
    const [photo, setPhoto] = useState(speaker.photo);
    let uploadRef;
    const input = <input key="file" type="file" ref={(ref) => uploadRef = ref} style={{ display: 'none' }}
                         onChange={handleUpload}/>;
    const avatar = photo ?
        <Avatar key="avatar" onClick={handleClick} alt={speaker.name} src={speaker.photo} className={classes.avatar}/> :
        <Avatar key="avatar" onClick={handleClick} alt={speaker.name} className={classes.avatar}>
            <FaceIcon className={classes.avatar}/>
        </Avatar>;
    return [input, avatar];

    function handleClick() {
        uploadRef.click();
    }

    function handleUpload(e) {
        const file = e.target.files[0];
        storage.child(file.name).put(file)
            .then(snapshot => snapshot.ref.getDownloadURL())
            .then(url => {
                onUpdate(url);
                setPhoto(url);
            });
    }
}
