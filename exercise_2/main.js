function canNest(arr1, arr2) {
  var arr1Min = null;
  var arr1Max = null;
  var arr2Min = null;
  var arr2Max = null;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] < arr[i + 1] && i < arr1.length) {
      arr1Min = arr1[i]
    } else {
      arr1Max = arr1[i + 1]
    }
  }

  for (var i = 0; i < arr2.length; i++) {
    if (arr1[i] < arr[i + 1] && i < arr1.length) {
      arr2Min = arr2[i]
    } else {
      arr2Max = arr2[i + 1]
    }
  }
  if (arr1Min < arr2Min && arr1Max > arr2Max) {
    return true;
  } else {
    return false;
  }
}
