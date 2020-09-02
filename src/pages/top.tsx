import {CalendarBoard} from "../components/Calendar/index";
// import ScheduleList from "../components/Schedule/ScheduleList"
import {ScheduleHeader, ScheduleList} from "../components/Schedule/index";
import {DiaryTextContent, DiaryHeader} from "../components/Diary/index";

const top = () => {
  return (
    <div className="home">
      <div className="calendar">
        <div className="calendar__container">
          <CalendarBoard />
        </div>
      </div>
      <div className="schedule">
        <div className="schedule__container">
          <ScheduleHeader />
          <ScheduleList />
        </div>
      </div>
      <div className="diary">
        <div className="diary__container">
          <DiaryHeader />
          <DiaryTextContent />
          {/* <AddDiaryDialog /> */}
        </div>
      </div>
    </div>
  );
};

export default top;
