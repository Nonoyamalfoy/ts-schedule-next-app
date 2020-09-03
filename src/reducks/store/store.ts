import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware
} from "redux";
// import {connectRouter, routerMiddleware} from "connected-react-router";
import {CalendarReducer} from "../calendar/reducer";
import { AddScheduleReducer } from "../addSchedule/reducer";
import ReduxThunk from "redux-thunk";
import {selectedScheduleReducer} from "../selectedSchedule/reducer";
import {UsersReducer} from "../users/reducers";
import { AddDiaryReducer } from "../addDiary/reducer";
import {AddToDoReducer} from "../addToDo/reducer";
import { selectedDiaryReducer } from "../selectedDiary/reducer";
import {LoadingReducer} from '../loading/reducers';
import {selectedDateSchedulesReducer} from "../selectedDateSchedules/reducer";
import initialState from "./initialState";

// type createStore = typeof initialState

const createStore: any = () => {
  return reduxCreateStore(
    combineReducers({
      loading: LoadingReducer,
      // router: connectRouter(history),
      users: UsersReducer,
      calendar: CalendarReducer,
      addSchedule: AddScheduleReducer,
      addDiary: AddDiaryReducer,
      addToDo: AddToDoReducer,
      selectedSchedule: selectedScheduleReducer,
      selectedDiary: selectedDiaryReducer,
      selectedDateSchedules: selectedDateSchedulesReducer
    }),
    applyMiddleware(
      // routerMiddleware(history),
      ReduxThunk
    )
  )
}

export default createStore