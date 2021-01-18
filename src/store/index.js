import { combineReducers } from "redux";
import { leagues, standings } from "store/reducers";

export default combineReducers({
    leagues,
    standings,
});
