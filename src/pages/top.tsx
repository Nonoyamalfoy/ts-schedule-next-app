import { useDispatch } from "react-redux";
import { CalendarBoard } from "../components/Calendar/index";
// import ScheduleList from "../components/Schedule/ScheduleList"
import { ScheduleHeader, ScheduleList, AddScheduleDialog } from "../components/Schedule/index";
import { DiaryTextContent, DiaryHeader, AddDiaryDialog } from "../components/Diary/index";
import Auth from "../Auth";
import { makeStyles, createStyles } from "@material-ui/core";
import SelectedScheduleDialog from "../components/Schedule/SelectedScheduleDialog";

const useStyles = makeStyles((theme) => createStyles({
  schedules: {
    [theme.breakpoints.down(600)]: {
      display: "none",
    },
    overflow: "scroll",
    height: "calc(8vh - 40px)",
  },
}));

const top = () => {
  const classes = useStyles();
  return (
    <Auth>
      <div className="home">
        <div className="calendar">
          <div className="calendar__container">
            <CalendarBoard schedulesStyle={classes.schedules} />
          </div>
        </div>
        <div className="schedule">
          <div className="schedule__container">
            <ScheduleHeader />
            <ScheduleList />
            <AddScheduleDialog/>
            <SelectedScheduleDialog/>
          </div>
        </div>
        <div className="diary">
          <div className="diary__container">
            <DiaryHeader />
            <DiaryTextContent />
            <AddDiaryDialog />
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default top;
