import { combineReducers } from "redux";
import health, { healthSaga } from "./health";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([healthSaga()]);
}

export default combineReducers({
  health,
});
