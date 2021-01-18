import React from "react";
import { URL } from "constant";
import Map from "components/features/Map";
import Leagues from "components/features/Leagues";
import Standings from "components/features/Standings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Content, MapWrapper, DetailsWrapper } from "./style";

const App = () => {
    return (
        <Content>
            <Router>
                <MapWrapper>
                    <Map />
                </MapWrapper>
                <DetailsWrapper>
                    <Switch>
                        <Route path={`/${URL.leagues}/:country`} component={Leagues} />
                        <Route path={`/${URL.standings}/:leagueId`} component={Standings} />
                    </Switch>
                </DetailsWrapper>
            </Router>
        </Content>
    );
};

export default App;
