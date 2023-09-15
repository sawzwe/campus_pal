// "use client"
// import React, { useState } from 'react';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
// import dayjs from 'dayjs';

// export default function ClassCalendar({ classDate }) {
//     const [dummyData, setDummyData] = useState(classDate);

//     // Extract the session dates from the dummy data
//     const sessionDates = dummyData.flatMap((classItem) => classItem.sessionDates);

//     // Create a state variable to store selected dates
//     const [selectedDates, setSelectedDates] = useState([]);

//     // Function to customize the rendering of day cells
//     const renderDay = (day, _value, _dayState, dayModifiers) => {
//         const isHighlighted = sessionDates.includes(dayjs(day).format('YYYY-MM-DD'));
//         const isSelected = selectedDates.includes(dayjs(day).format('YYYY-MM-DD'));

//         return (
//             <div
//                 className={`custom-day ${isSelected ? 'selected' : ''} ${isHighlighted ? 'highlighted' : ''}`}
//                 onClick={() => handleDateSelect(dayjs(day).format('YYYY-MM-DD'))}
//             >
//                 {dayjs(day).format('D')}
//             </div>
//         );
//     };

//     // Function to handle date selection
//     const handleDateSelect = (selectedDate) => {
//         setSelectedDates((prevSelectedDates) =>
//             prevSelectedDates.includes(selectedDate)
//                 ? prevSelectedDates.filter((date) => date !== selectedDate)
//                 : [...prevSelectedDates, selectedDate]
//         );
//     };

//     return (
//         <Card variant="outlined" sx={{ marginBottom: "10px" }}>
//             <CardContent>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DateCalendar
//                         renderDay={renderDay} // Use renderDay with the correct case
//                     />
//                 </LocalizationProvider>
//             </CardContent>
//         </Card>
//     );
// }

"use client"
import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function DateCalendarValue() {
  const [value, setValue] = React.useState(dayjs('2022-04-17'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
    </LocalizationProvider>
  );
}