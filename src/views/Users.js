import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from "@material-ui/core";
import { useCollection } from "react-firebase-hooks/firestore";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Switch from "@material-ui/core/Switch";
import ComfirmableButton from "../components/ComfirmableButton";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        marginBottom: theme.spacing(10)
    },
    fab: {
        position: 'fixed',
        bottom: theme.spacing(3),
        right: theme.spacing(3),
    },
}));

export default function Users({ users }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [usersSnapshot, loading, error] = useCollection(users);
    if (loading) return <CircularProgress style={{ position: 'absolute', top: '50%', left: '50%' }}/>;
    if (error) return <p>ERROR: {error.toString()}</p>;
    return [
        <Typography key="title" variant="h5">Edit users</Typography>,
        <UsersTable key="table" rows={usersSnapshot.docs} onRemove={handleRemove} onActivate={handleActivation}/>,
        <AddUserDialog key="add-user" open={open} onClose={handleClose} onSubmit={handleSubmit}/>,
        <Fab key="action" onClick={() => setOpen(true)} className={classes.fab} color="secondary"><AddIcon/></Fab>,
    ];

    function handleClose() {
        setOpen(false);
    }

    function handleSubmit(user) {
        users.add({ ...user, isActive: true });
        setOpen(false);
    }

    function handleRemove(user) {
        if (!user.admin) users.doc(user.id).delete();
    }

    function handleActivation(user, isActive) {
        users.doc(user.id).update({ isActive })
    }
}

function UsersTable({ rows, onRemove, onActivate }) {
    const classes = useStyles();
    return (
        <Paper className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell component="th">Name</TableCell>
                        <TableCell component="th">Email</TableCell>
                        <TableCell component="th">Actions</TableCell>
                        <TableCell component="th" align="right">Active</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        const user = { id: row.id, ...row.data() };
                        return (
                            <TableRow key={user.id}>
                                <TableCell scope="row">{user.displayName}</TableCell>
                                <TableCell scope="row">{user.email}</TableCell>
                                <TableCell scope="row">
                                    <ComfirmableButton disabled={user.admin} onSubmit={() => onRemove(user)}
                                                       message={`Do you really want to remove ${user.displayName}?`}>
                                        <DeleteIcon/>
                                    </ComfirmableButton>
                                </TableCell>
                                <TableCell align="right">
                                    <Switch checked={user.isActive}
                                            onChange={(event) => onActivate(user, event.target.checked)}/>
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

function AddUserDialog({ open, onClose, onSubmit }) {
    const user = {
        type: 'REGULAR'
    };
    return <Dialog open={open} onClose={onClose} fullWidth>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
            <Grid container justify="center" alignItems="center">
                <TextField margin="dense" label="name" type="text" fullWidth onChange={handleChange('displayName')}/>
                <TextField margin="dense" label="email" type="email" fullWidth onChange={handleChange('email')}/>
                <FormControl fullWidth>
                    <InputLabel htmlFor="user-type">type</InputLabel>
                    <Select native inputProps={{ name: 'type', id: 'user-type' }} onChange={handleChange('type')} defaultValue={user.type}>
                        <option value={'REGULAR'}>Regular</option>
                        <option value={'STAFF'}>Staff</option>
                        <option value={'SPEAKER'}>Speaker</option>
                    </Select>
                </FormControl>
            </Grid>
        </DialogContent>
        <DialogActions>
            <Button onClick={onClose} color="primary">Cancel</Button>
            <Button onClick={() => onSubmit(user)} color="primary">Save</Button>
        </DialogActions>
    </Dialog>;

    function handleChange(name) {
        return (event) => user[name] = event.target.value
    }
}
