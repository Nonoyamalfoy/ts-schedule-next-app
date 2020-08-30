import { GridList, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import CalendarElement from "./calendarElement";
import {createCalendar} from "../../services/calendar";
import dayjs from "dayjs";

const useStyles = makeStyles({
  grid: {
    borderLeft: "1px solid #ccc",
    borderTop: "1px solid #ccc",
  },
  days: {
    borderRight: "1px solid #ccc",
    paddingTop: "5px",
    color: "black",
  },
});

const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

const CalendarBoard = () => {
  const classes = useStyles();
  const currentDate = dayjs()
  const calendar = createCalendar(currentDate);
  
  
  return (
    <div>
      <GridList
        className={classes.grid}
        cols={7}
        spacing={0}
        cellHeight={"auto"}
      >
        {days.map((d) => (
          <li key={d}>
            <Typography
              className={classes.days}
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>
        ))}
        {calendar.map((date) => (
          <li 
            // key={date.toISOString()} 
            // onClick={() => {
            //   dispatch(setDate(date))
            //   {props.onClick && props.onClick(schedules)}
            // }}
          >
            <CalendarElement
              // schedulesStyle={props.schedulesStyle}
              // schedules={schedules}
              date={date}
              // schedules={schedules}
            />
          </li>
        ))}
      </GridList>
    </div>
  );;
};

export default CalendarBoard;
