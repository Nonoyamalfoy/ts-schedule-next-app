import {calendarSetDate} from "./actions";
import { getNextMonth, getPreviousMonth } from "../../services/calendar";

export const setNextMonth = () => {
  return async (dispatch, getState) => {
    const nextMonth = getNextMonth(getState().calendar);
    dispatch(calendarSetDate(nextMonth))
  }
};

export const setPreviousMonth = () => {
  return async (dispatch, getState) => {
    const previousMonth = getPreviousMonth(getState().calendar);
    dispatch(calendarSetDate(previousMonth))
  }
};

export const setDate = dayObj => {
  return async (dispatch) => {
    const month = dayObj;
    dispatch(calendarSetDate(month))
  }
}