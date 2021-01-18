import { useState, useEffect } from "react";
import usePlacesAutocomplete, { getGeocode } from "use-places-autocomplete";

const useMapBehavior = (mapRef) => {
    const [country, setCountry] = useState("");
    const [initialPosition, setInitialPosition] = useState();
    const {
        value,
        suggestions: { data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete();

    useEffect(() => {
        initializeMapPosition();
    }, []);

    useEffect(() => {
        !value && clearSuggestions();
    }, [value]);

    useEffect(() => {
        data && data[0] && handleNewCountry();
    }, [data]);

    const handleNewCountry = async () => {
        const geocode = await getGeocode({ address: data[0].description });
        const countryName = getCountryName(geocode[0]);
        setCountry(countryName);
        panTo(geocode[0]);
    };

    const getCountryName = (geocode) => {
        return geocode.address_components?.find((component) => component.types.includes("country"))?.long_name.toLowerCase();
    };

    const initializeMapPosition = () => {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            setInitialPosition({ lat: coords.latitude, lng: coords.longitude });
        });
    };

    const panTo = (geocode) => {
        mapRef.current?.panTo(geocode.geometry.location);
        mapRef.current?.setZoom(6);
    };

    const handleSearchChange = (term) => {
        setValue(term);
    };

    return { initialPosition, value, country, setValue, handleSearchChange };
};

export default useMapBehavior;
