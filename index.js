function breakOut(arr, changeValue, stopValue){
  for(let i=0;i< arr.length;i++){
    debugger
    if (arr[i]===stopValue) break;
      arr[i]=changeValue;
  }
  return arr;
}

function keepGoing(arr, changeValue, skipValue) {
  for(let i=0;i< arr.length;i++){
    debugger
    if (arr[i]===skipValue) continue;
    debugger
      arr[i]=changeValue;
  }
  return arr;
}

function findBy(arr, findFn){
  for(let i=0;i< arr.length;i++){
    if (findFn(arr[i])) return arr[i];
  }
  return null;
}
