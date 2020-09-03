import { 
  selectedDateSchedulesOpenDialog, 
  selectedDateSchedulesCloseDialog, 
} from "./actions";

export const closeDialog = () => {
  return async (dispatch) => {
    dispatch(selectedDateSchedulesCloseDialog())
  }
}

export const openSelectedDateSchedulesDialog = () => {
  return async (dispatch) => {
    dispatch(selectedDateSchedulesOpenDialog());
  }
}