import React, { useState } from 'react';
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  format,
  isSameMonth,
  isToday
} from 'date-fns';
import './App.css';

const App: React.FC = () => {

  //State var created to define current month with the new Date function
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());

  // Calculate the start/end of the month using date-fn, made into var's to make it easier to read.
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);

  // Calculate the start/end of the calendar grid. weekStartOn 0 allows for the grid to display prev month days for sake of making grid square.
  const startDate = startOfWeek(monthStart, { weekStartsOn: 0 }); // Sunday = 0
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 0 });

  // Function to move to the previous month
  const prevMonth = (): void => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  // function to move to the next month
  const nextMonth = (): void => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  // Function to return 2d array.
  // learned that TS can define 2d arrays
  const generateDatesForCalendar = (): Date[][] => {
    const dayMatrix: Date[][] = [];
    let day = startDate;
    // using endDate ensures that I see all days of the week on the grid even if they are from prev month.
    while (day <= endDate) {
      // Create a new row for each week
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(day);
        day = addDays(day, 1);
      }
      dayMatrix.push(week);
    }
    return dayMatrix;
  };

  const calendarRows = generateDatesForCalendar();

  return (
    <div className="calendarContainer">
      <div className="navBar">
        <button onClick={prevMonth} className="button">
          &lt; Prev
        </button>
        <h2 className="monthLabel">{format(currentMonth, 'MMMM yyyy')}</h2>
        <button onClick={nextMonth} className="button">
          Next &gt;
        </button>
      </div>

      <div className="weekRow">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((dayName) => (
          <div key={dayName} className="weekDay">
            {dayName}
          </div>
        ))}
      </div>

      {calendarRows.map((week, weekIndex) => (
        <div className="weekRow" key={weekIndex}>
          {week.map((dayItem, dayIndex) => {
            const formattedDay = format(dayItem, 'd');
            const dayIsCurrentMonth = isSameMonth(dayItem, currentMonth);
            const dayIsToday = isToday(dayItem);

            return (
              <div
                key={dayIndex}
                className="dayCell"
                style={{
                  color: dayIsCurrentMonth ? 'black' : '#ccc',
                  backgroundColor: dayIsToday ? '#ffe5b4' : 'transparent'
                }}
              >
                {formattedDay}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default App;
