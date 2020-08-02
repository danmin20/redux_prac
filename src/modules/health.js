import { put, call, takeEvery } from "redux-saga/effects";
import { handleActions, createAction } from "redux-actions";
import axios from "axios";

function healthAPI() {
  return axios.get(
    "http://warmingup-185433511.ap-northeast-2.elb.amazonaws.com/health"
  );
}

const GET_HEALTH = "GET_HEALTH";
const CHECK = "CHECK";

export const getHealth = createAction(GET_HEALTH);

function* getHealthSaga() {
  try {
    const res = yield call(healthAPI);
    yield put({ type: CHECK, payload: res });
  } catch (error) {
    console.log(error);
  }
}

const initialState = {
  content: "",
};

export function* healthSaga() {
  yield takeEvery("GET_HEALTH", getHealthSaga);
}

export default handleActions(
  {
    [CHECK]: (state, action) => {
      const content = action.payload.content;
      return {
        content,
      };
    },
  },
  initialState
);
