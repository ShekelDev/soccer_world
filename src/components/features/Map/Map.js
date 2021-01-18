import React, { useState, useEffect, useRef, useCallback } from "react";
import withGoogleApi from "./withGoogleApi";
import { useTeams } from "./Data";
import { GoogleMap } from "@react-google-maps/api";
import { BaseMap, mapStyles } from "./style";

const Map = () => {
    const mapRef = useRef();
    const teams = useTeams();
    const [initialPosition, setInitialPosition] = useState();

    useEffect(() => {
        initializeMapPosition();
    }, []);

    const initializeMapPosition = () => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            setInitialPosition({ lat: coords.latitude, lng: coords.longitude });
        });
    };

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    return (
        <BaseMap>
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={initialPosition}
                zoom={3}
                onLoad={onMapLoad}
                options={{
                    styles: mapStyles,
                    disableDefaultUI: true,
                }}
            />
        </BaseMap>
    );
};

export default withGoogleApi(Map);
