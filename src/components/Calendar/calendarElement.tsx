import {Typography, ListItem} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
// import {ScheduleBar} from "./index";
import { isSameMonth, isFirstDay, isSameDay } from "../../services/calendar";
import {ScheduleBar} from "./index";
import { getCurrentDate } from "../../reducks/calendar/selectors";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const useStyles = makeStyles({
  element: {
    display: "inline-block",
    borderRight: "1px solid #ccc",
    borderBottom: "1px solid #ccc",
    padding: 0,
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.04)"
    }
  },
  date: {
    padding: "3.5px 0",
    fontSize: "13px"
  },
  today: {
    display: "inline-block",
    lignHeight: "28px",
    width: "28px",
    backgroundColor: "#ccc",
    borderRadius: "50%"
  },
  currentDate: {
    display: "inline-block",
    lignHeight: "28px",
    width: "28px",
    backgroundColor: "#000088",
    color: "#fff",
    borderRadius: "50%"
  },
})

type Props = {
  date: dayjs.Dayjs;
  schedulesStyle: string;
  schedules: any;
}


const CalendarElement = (props: Props) => {
  const classes = useStyles();
  const selector = useSelector((state) => state);
  const format = isFirstDay(props.date) ? "M/D" : "D";
  const currentDate = getCurrentDate(selector);
  const today = dayjs();
  const isCurrentMonth = isSameMonth(props.date, currentDate) ? "textPrimary" : "textSecondary";

  let date = "";
  if(isSameDay(props.date, currentDate)) {
    date = classes.currentDate
  } else if(isSameDay(props.date, today)) {
    date = classes.today
  }

  return(
    <ListItem button className={classes.element} >
      <Typography 
        className={classes.date}
        color={isCurrentMonth}
        align="center"
        variant="caption"
        component="div"
      >
        <span className={date}>
          {props.date.format(format)}
        </span>
      </Typography>
      <div className={props.schedulesStyle}>
        {props.schedules.map((schedule) => (
          <ScheduleBar key={schedule.scheduleId} schedule={schedule} />
        ))}
      </div>
    </ListItem >
  )
}

export default CalendarElement;