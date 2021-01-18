import { useLoadScript } from "@react-google-maps/api";
import { GOOGLE_API_KEY } from "constant";

const withGoogleApi = (Component) => (props) => {
    const { isLoaded } = useLoadScript({ googleMapsApiKey: GOOGLE_API_KEY, libraries: ["places, geocoding"] });

    return isLoaded && <Component {...props} />;
};

export default withGoogleApi;
