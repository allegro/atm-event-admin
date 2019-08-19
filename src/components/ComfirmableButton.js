import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

export default function ComfirmableButton({ message, children, onSubmit, ...other }) {
    const [open, setOpen] = useState(false);
    return [
        <IconButton key="button" onClick={() => setOpen(true)} {...other}>{children}</IconButton>,
        <Dialog fullWidth key="confirmation" disableBackdropClick disableEscapeKeyDown open={open}>
            <DialogTitle id="confirmation-dialog-title">Confirmation</DialogTitle>
            <DialogContent dividers>
                <p>{message}</p>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false)} color="primary">
                    Cancel
                </Button>
                <Button onClick={() => {
                    onSubmit();
                    setOpen(false);
                }} color="primary">
                    Ok
                </Button>
            </DialogActions>
        </Dialog>]
}
