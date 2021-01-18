import React, { useEffect, useRef, useCallback } from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { getLeagues } from "store/actions";
import withGoogleApi from "./withGoogleApi";
import { GoogleMap } from "@react-google-maps/api";
import useMapBehavior from "./useMapBehavior";
import SearchInput from "components/common/SearchInput";
import { BaseMap, SearchInputWrapper, mapStyles } from "./style";
import { URL } from "constant";

const Map = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const mapRef = useRef();
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
            ></GoogleMap>
        </BaseMap>
    );
};

export default withGoogleApi(Map);
