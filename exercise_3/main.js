function phName(pH){
  if(pH < 7 && pH > 0){
    return "acidic"
  }else if (pH <14 && pH > 7){
    return "alkaline"
  }else if (pH === 7){
    return "neutral"
  }else {
    return "invalid"
  }
}
