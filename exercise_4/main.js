function minuteToHourConverter(minute) {
  let hour = null;
  if(minute < 60){
    hour = "00";
  }else{
    if(minute/60 >= 10){
      hour = minute/60
    } else {
      hour = "0" + minute/60
    }
  }
  let min = null;
  if(minute < 60) {
    if(minute >= 10){
      min = minute
    }else {
      min = "0" + minute
    }
  }else{
    if(minute% 60 >= 10){
    min = minute % 60;
    }else{
      min = "0" + minute%60;
    }
  }
  const time = hour + ":" + min;
}
