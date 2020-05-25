  function holiday(x,weekDay,month,yearNumber) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthNum = monthNames.indexOf(month)
    if(yearNumber%4 != 0) {
      const MonthDaysYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }else {
      const MonthDaysYear = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    }
    let dayNum = MonthDaysYear[monthNum] - (7 * x)
    switch weekDay {
      case Monday:
    }
  }

  holiday(3,"Wednesday","November",2016)
