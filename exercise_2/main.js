function canNest(arr1, arr2) {
  var arr1Min = arr1[0];
  var arr1Max = -Infinity;
  var arr2Min = arr2[0];
  var arr2Max = -Infinity;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1Min > arr1[i]) {
      arr1Min = arr1[i]
    }
    if (arr1Max < arr1[i]) {
      arr1Max = arr1[i]
    }
  }

  for (var arr2index = 0; arr2index < arr2.length; arr2index++) {
    if (arr2Min > arr2[arr2index]) {
      arr2Min = arr2[arr2index]
    }
    if (arr2Max < arr2[arr2index]) {
      arr2Max = arr2[arr2index]
    }
  }
  if (arr2Min < arr1Min && arr2Max > arr1Max) {
    return true;
  } else {
    return false;
  }
}
