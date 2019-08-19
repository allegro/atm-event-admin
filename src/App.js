import React, { useState } from 'react';
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Users from "./views/Users";
import Speakers from "./views/Speakers";
import Schedule from "./views/Schedule";

function App({ db, storage }) {
    const [value, setValue] = useState(0);
    return [
        <AppBar position="static" key="appbar">
            <Tabs component="div" value={value} centered variant="fullWidth" onChange={(e, index) => setValue(index)}>
                <Tab label="Users"/>
                <Tab label="Speakers"/>
                <Tab label="Schedule"/>
            </Tabs>
        </AppBar>,
        <TabPanel value={value} index={0} key="usersTab">
            <Users users={db.collection('users')}/>
        </TabPanel>,
        <TabPanel value={value} index={1} key="speakersTab">
            <Speakers speakers={db.collection('speakers')} storage={storage.ref()}/>
        </TabPanel>,
        <TabPanel value={value} index={2} key="scheduleTab">
            <Schedule slots={db.collection('schedule')} speakers={db.collection('speakers')}/>
        </TabPanel>
    ];
}

function TabPanel({ children, value, index }) {
    return (
        <Typography component="section" role="tabpanel" hidden={value !== index}>
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

export default App;
