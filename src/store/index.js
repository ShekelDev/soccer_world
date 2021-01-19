import { combineReducers } from "redux";
import { leagues, standings, teams } from "store/reducers";

export default combineReducers({
    leagues,
    standings,
    teams,
});
