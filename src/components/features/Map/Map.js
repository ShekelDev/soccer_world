import React, { useEffect, useRef, useCallback } from "react";
import { URL } from "constant";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { getLeagues } from "store/actions";
import withGoogleApi from "./withGoogleApi";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useTeamMarkers } from "./Data";
import useMapBehavior from "./useMapBehavior";
import SearchInput from "components/common/SearchInput";
import { BaseMap, SearchInputWrapper, mapStyles } from "./style";

const Map = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const mapRef = useRef();
    const teamMarkers = useTeamMarkers();
    const { initialPosition, value, country, handleSearchChange } = useMapBehavior(mapRef);

    useEffect(() => {
        if (country) {
            dispatch(getLeagues(country));
            history.push(`/${URL.leagues}/${country}`);
        }
    }, [country]);

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);

    return (
        <BaseMap>
            <SearchInputWrapper>
                <SearchInput value={value} onChange={handleSearchChange} />
            </SearchInputWrapper>
            <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={initialPosition}
                zoom={3}
                onLoad={onMapLoad}
                options={{
                    styles: mapStyles,
                    disableDefaultUI: true,
                }}
            >
                {teamMarkers?.map((team) => (
                    <Marker key={team.team_id} position={team.position} icon={{ url: team.logo, scaledSize: { width: 80, height: 80 } }} />
                ))}
            </GoogleMap>
        </BaseMap>
    );
};

export default withGoogleApi(Map);
