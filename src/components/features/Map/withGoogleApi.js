import { useLoadScript } from "@react-google-maps/api";

const withGoogleApi = (Component) => (props) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY, libraries: ["places, geocoding"] });

    return isLoaded && <Component {...props} />;
};

export default withGoogleApi;
