import React, { Fragment, useEffect, useState } from 'react';
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Users from "./views/Users";
import Speakers from "./views/Speakers";
import Schedule from "./views/Schedule";
import Results from "./views/Results";

function App({ auth, db, storage }) {
    const [isAdmin, setAdmin] = useState(false);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) return setAdmin(false);

            db.collection('users').doc(user.uid).get().then(profile => {
                if (profile.exists) {
                    const { admin } = profile.data();
                    setAdmin(!!admin);
                } else {
                    setAdmin(false);
                }
            })
        });
    }, []);

    if (!isAdmin) {
        return null;
    }

    return (
        <BrowserRouter basename="/atm-event-admin">
            <Route
                path="/"
                render={({ location }) => (
                    <Fragment>
                        <AppBar position="static" key="appbar">
                            <Tabs value={location.pathname} component="div" centered variant="fullWidth">
                                <Tab label="Home" value="/" component={Link} to="/" />
                                <Tab label="Users" value="/users" component={Link} to="/users" />
                                <Tab label="Speakers" value="/speakers" component={Link} to="/speakers" />
                                <Tab label="Schedule" value="/schedule" component={Link} to="/schedule" />
                                <Tab label="Results" value="/results" component={Link} to="/results" />
                            </Tabs>
                        </AppBar>
                        <Switch>
                            <Route path="/users" render={() => <TabPanel><Users users={db.collection('users')}/></TabPanel>} />
                            <Route path="/speakers" render={() => <TabPanel><Speakers speakers={db.collection('speakers')} storage={storage.ref()}/></TabPanel>} />
                            <Route path="/schedule" render={() => <TabPanel><Schedule slots={db.collection('schedule')} speakers={db.collection('speakers')}/></TabPanel>} />
                            <Route path="/results" render={() => <TabPanel><Results slots={db.collection('schedule')} speakers={db.collection('speakers')}/></TabPanel>} />
                        </Switch>
                    </Fragment>
                )}
            />
        </BrowserRouter>
    );
}

function TabPanel({ children }) {
    return (
        <Typography component="section" role="tabpanel">
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

export default App;
