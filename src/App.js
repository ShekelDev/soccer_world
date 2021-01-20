import React from "react";
import { URL } from "constant";
import Map from "components/features/Map";
import Watermark from "components/common/Watermark";
import Leagues from "components/features/Leagues";
import Standings from "components/features/Standings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BaseApp, MapWrapper, DetailsWrapper, Content } from "./style";

const App = () => {
    return (
        <BaseApp>
            <Router>
                <DetailsWrapper>
                    <Watermark label="SHEKELDEV" />
                    <Content>
                        <Switch>
                            <Route path={`/${URL.leagues}/:country`} component={Leagues} />
                            <Route path={`/${URL.standings}/:leagueId`} component={Standings} />
                        </Switch>
                    </Content>
                </DetailsWrapper>
                <MapWrapper>
                    <Map />
                </MapWrapper>
            </Router>
        </BaseApp>
    );
};

export default App;
