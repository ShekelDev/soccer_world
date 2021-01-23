import { useSelector } from "react-redux";

const useTeams = () => {
    const teams = useSelector((state) => state.teams);

    return { teams };
};

export default useTeams;
