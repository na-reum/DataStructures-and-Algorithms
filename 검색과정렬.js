// 검색
// 자료를 얻기 위해 자료 구조의 항목들을 반복적으로 접근하는 것

// 선형검색
const linearSearch = (array,n) => {
    for(let i = 0; i<array.length; i++){
        if(array[i]===n){
            return true;
        }
    }
    return false;
}

// console.log(linearSearch([1,2,3,4,5,6,7,8,9],6));
// console.log(linearSearch([1,2,3,4,5,6,7,8,9],10));

// 이진검색
const binarySearch = (array,n) => {
    let lowIndex = 0;
    let highIndex = array.length -1;

    while(lowIndex<=highIndex){
        const midIndex = Math.floor((highIndex+lowIndex)/2);
        if(array[midIndex]===n){
            return midIndex;
        }else if(n>array[midIndex]){
            lowIndex = midIndex +1;
        }else{
            highIndex = midIndex +1;
        }
    }
    return -1;
}

// console.log(binarySearch([1,2,3,4],4));
// console.log(binarySearch([1,2,3,4],5));

// 정렬
// 거품정렬(버블정렬)
// 전체배열을 순회하면서 항목이 다른 항목보다 큰 경우 두 항목을 교환한다. 
// 최악의 종류의 정렬
const swap = (array,index1,index2)=>{
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}

const bubbleSort = (array) => {
    for(let i=0,arrayLength=array.length;i<arrayLength;i++){
        for(let j=0;j<=i;j++){
            if(array[j] > array[j+1]){
                swap(array,i,j);
            }
        }
    }
    return array;
}

// console.log(bubbleSort([1,2,3,4,6,5]));

// 선택정렬
// 가장 작은 항목을 찾아서 해당 항목을 배열의 현 위치에 삽입하는 방식으로 동작

const selectionSort = items => {
    let len = items.length;
    let min;
    for(let i=0;i<len;i++){
        // 최소 항목을 현재 위치로 설정한다. 
        min = i;
        // 더 작은 항목이 있는ㄴ지 배열의 나머지를 확인한다.
        for(let j=i+1; j<len; j++){
            if(items[j] < items[min]){
                min = j;
            }
        }
        // 현재 위치가 최소 항목 위치가 아니라면 항목들을 교환한다. 
        if( i != min ){
            swap(items,i,min);
        }
    }
    return items;
}
console.log(selectionSort([1,23,3,4,6,5]));
