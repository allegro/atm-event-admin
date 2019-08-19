import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import { useCollection } from "react-firebase-hooks/firestore";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import SpeakerChip from "../components/SpeakerChip";
import ComfirmableButton from "../components/ComfirmableButton";
import TextField from "@material-ui/core/TextField";
import Input from "@material-ui/core/Input";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

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

export default function Schedule({ slots, speakers }) {
    const classes = useStyles();
    const [state, setState] = useState({ open: false, slot: {} });
    const [slotsSnapshot, slotLoading, slotsError] = useCollection(slots.orderBy('start'));
    const [speakersSnapshot, speakersLoading, speakersError] = useCollection(speakers);
    if (slotLoading || speakersLoading) return <CircularProgress
        style={{ position: 'absolute', top: '50%', left: '50%' }}/>;
    if (slotsError || speakersError) return <p>ERROR: {slotsError.toString() + speakersError.toString()}</p>;
    return [
        <Typography key="title" variant="h5">Edit schedule</Typography>,
        <SlotsTable key="table" rows={slotsSnapshot.docs} speakers={speakersSnapshot.docs} onEdit={handleEdit}
                    onRemove={handleRemove}/>,
        <EditSlotDialog key="edit-slot" slot={state.slot} open={state.open} onClose={handleClose}
                        onUpdate={handleUpdate}/>,
        <Fab key="action" onClick={() => setState((old) => ({ open: true, slot: {} }))} className={classes.fab}
             color="secondary"><AddIcon/></Fab>
    ];

    function handleEdit(slot) {
        setState({ open: true, slot });
    }

    function handleClose() {
        setState((old) => ({ ...old, open: false }));
    }

    function handleUpdate(slot) {
        slot.start = Date.parse(slot.start);
        slot.end = Date.parse(slot.end);
        if (slot.id) {
            slots.doc(slot.id).set(slot);
        } else {
            slots.add(slot);
        }
        setState((old) => ({ ...old, open: false }));
    }

    function handleRemove(slot) {
        slots.doc(slot.id).delete();
    }
}

function SlotsTable({ rows, speakers, onEdit, onRemove }) {
    const classes = useStyles();
    const orderedRows = rows.sort((a, b) => {
        const timeComparison = a.start - b.start;
        return timeComparison || ((a.order || 0) - (b.order || 0));
    });
    return (
        <Paper className={classes.root}>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell component="th">Day</TableCell>
                        <TableCell component="th">Start</TableCell>
                        <TableCell component="th">End</TableCell>
                        <TableCell component="th">Type</TableCell>
                        <TableCell component="th">Order</TableCell>
                        <TableCell component="th">Title</TableCell>
                        <TableCell component="th" style={{ minWidth: 400 }}>Speakers</TableCell>
                        <TableCell style={{ minWidth: 145 }} component="th">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orderedRows.map(row => {
                        const slot = { id: row.id, ...row.data() };
                        return (
                            <TableRow key={slot.id}>
                                <TableCell
                                    scope="row">{format(new Date(slot.start), 'EEEE', { locale: pl })}</TableCell>
                                <TableCell
                                    scope="row">{format(new Date(slot.start), 'H:mm:ss', { locale: pl })}</TableCell>
                                <TableCell
                                    scope="row">{format(new Date(slot.end), 'H:mm:ss', { locale: pl })}</TableCell>
                                <TableCell scope="row">{slot.type}</TableCell>
                                <TableCell scope="row">{slot.order}</TableCell>
                                <TableCell scope="row">{slot.title}</TableCell>
                                <TableCell
                                    scope="row">{renderSpeakers(slot.speakers)}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => onEdit(slot)}><EditIcon/></IconButton>
                                    <ComfirmableButton onSubmit={() => onRemove(slot)}
                                                       message={`Do you really want to remove ${slot.title}?`}>
                                        <DeleteIcon/>
                                    </ComfirmableButton>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );

    function renderSpeakers(slotSpeakers) {
        return slotSpeakers
            .map(slotSpeaker => slotSpeaker.id)
            .map(speakerId => speakers.find(it => it.id === speakerId))
            .map(speaker => <SpeakerChip key={speaker.id} speaker={speaker.data()} style={{ marginRight: 10 }}/>);
    }
}

function EditSlotDialog({ slot, open, onClose, onUpdate }) {
    const start = slot.start ? new Date(slot.start) : new Date();
    const end = slot.end ? new Date(slot.end) : new Date();
    return <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>{slot.title ? "Edit Slot" : "Add Slot"}</DialogTitle>
        <DialogContent>
            <TextField margin="dense" label="title" type="text" fullWidth defaultValue={slot.title}
                       onChange={handleChange('title')}/>
            <TextField margin="dense" label="start" type="datetime-local" fullWidth
                       defaultValue={format(start, 'yyyy-MM-dd\'T\'HH:mm', { locale: pl })}
                       onChange={handleChange('start')}/>
            <TextField margin="dense" label="end" type="datetime-local" fullWidth
                       defaultValue={format(end, 'yyyy-MM-dd\'T\'HH:mm', { locale: pl })}
                       onChange={handleChange('end')}/>
            <FormControl margin="dense" fullWidth>
                <InputLabel shrink>type</InputLabel>
                <NativeSelect defaultValue={slot.type} input={<Input onChange={handleChange('type')}/>}>
                    <option value="TALK">TALK</option>
                    <option value="TECHNICAL">TECHNICAL</option>
                    <option value="LIGHTNING">LIGHTNING</option>
                </NativeSelect>
            </FormControl>
            <TextField margin="dense" label="order" type="number" fullWidth defaultValue={slot.order}
                       onChange={handleChange('order')} inputProps={{ min: 0 }}/>
            <TextField margin="dense" label="speakers" type="text" fullWidth defaultValue={slot.speakers}
                       onChange={handleChange('speakers')}/>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">Cancel</Button>
            <Button onClick={() => onUpdate(slot)} color="primary">Save</Button>
        </DialogActions>
    </Dialog>;

    function handleChange(name) {
        return (event) => slot[name] = event.target.value
    }
}
