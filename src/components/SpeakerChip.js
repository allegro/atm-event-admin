import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/core/SvgIcon/SvgIcon";
import React from "react";

export default function SpeakerChip({ speaker, ...props }) {
    return <Chip
        avatar={speaker.photo ? <Avatar src={speaker.photo}/> : <Avatar><FaceIcon/></Avatar>}
        label={speaker.name}
        {...props}
    />
}
