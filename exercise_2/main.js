function canNest(arr1, arr2) {
  var arr1Min = null;
  var arr1Max = null;
  var arr2Min = null;
  var arr2Max = null;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1Min > arr1[i] && i < arr1.length) {
      arr1Min = arr1[i]
    }
    if (arrMax < arr1[i]) {
      arr1Max = arr1[i]
    }
  }

  for (var i = 0; i < arr2.length; i++) {
    if (arr2Min > arr2[i] && i < arr2.length) {
      arr2Min = arr2[i]
    }
    if (arr2Max < arr2[i]) {
      arr2Max = arr2[i]
    }
  }
  if (arr1Min < arr2Min && arr1Max > arr2Max) {
    return true;
  } else {
    return false;
  }
}
