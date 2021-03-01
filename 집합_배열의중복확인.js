const checkDuplicate = (arr) => {
    const mySet = new Set(arr);
    return mySet.size < arr.length;
}

console.log(checkDuplicate([1,2,3,4,5]));
console.log(checkDuplicate([1,1,2,3,4,5]));