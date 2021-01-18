import React from "react";
import Map from "components/features/Map";
import Details from "components/features/Details";
import { Content, MapWrapper, DetailsWrapper } from "./style";

const App = () => {
    return (
        <Content>
            <MapWrapper>
                <Map />
            </MapWrapper>
            <DetailsWrapper>
                <Details />
            </DetailsWrapper>
        </Content>
    );
};

export default App;
