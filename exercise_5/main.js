  function holiday(x,weekDay,month,yearNumber) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthNum = monthNames.indexOf(month)
    let MonthDaysYear;
    if(yearNumber%4 != 0) {
        MonthDaysYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }else {
        MonthDaysYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
    const daysInMonth = MonthDaysYear[monthNum]
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const targetDay = daysOfWeek.indexOf(weekDay)
    const startDate = new Date(yearNumber, monthNum, 1);
    const startDay = startDate.getDay()
    let holidayDay = (x - 1) * 7 - 1
    if (startDay === 6) holidayDay = x * 7 -1;
    if(startDay < targetDay) {
      holidayDay += (targetDay - startDay)
    } else {
      holidayDay = holidayDay - (startDay - targetDay)
    }
    if(holidayDay > daysInMonth) {
      return -1
    }
    return holidayDay
  }

  console.log(holiday(3,"Thursday","January",2101))


// function holiday(x, weekDay, month, yearNumber) {
//   const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
//   const monthNum = monthNames.indexOf(month)
//   const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//   const date = new Date(yearNumber, monthNum, 1);
//   console.log(date)
//   let day = date.getDay() * x;


// }

// holiday(3, "Wednesday", "November", 2016)
