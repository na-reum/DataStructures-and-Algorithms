function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i=1; i<arr.length; i++){
      if(pivot>arr[i]){
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return quickSort(left).concat(pivot,quickSort(right))
  }
  
  const array = [5,10,66,77,54,32,11,15];
  
  console.log(quickSort(array));