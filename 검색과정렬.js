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
// console.log(selectionSort([1,23,3,4,6,5]));

// 삽입정렬
// 배열을 순차적으로 검색하면서 정렬되지 않은 항목들을 배열의 왼쪽의 정렬된 부분으로 이동시킨다. 

const insertionSort = items => {
    const len = items.length;
    let value; // 현재 비교중인 값
    let i; // 정렬되지 않은 부분의 인덱스
    let j; // 정렬된 부분의 인덱스

    for(i=0;i<len;i++){
        // 현재 값이 이후에 이동될 수 있기 때문에 저장한다.
        value = items[i];
        
        // 정렬된 부분의 값이 정렬되지 않은 부분의 값보다 큰 경우
        // 정렬된 부분의 모든 항목을 하나씩 이동시킨다. 
        // 이는 값을 삽입할 공간을 만든다. 

        for(j=i-1; j> -1 && items[j] > value; j--){
            items[j+1] = items[j];
        }
        items[j+1] = value;
    }
    return items;
}
// console.log(insertionSort([1,23,3,4,6,5]));

// 빠른정렬
// 기준점을 획득한 다음 해당 기준점을 기준으로 배열을 나눈다. 
const quickSort = items => {
    return quickSortHelper(items,0,items.length-1);
}
function quickSortHelper(items, left,right){
    let index;
    if(items.length >1){
        index = partition(items,left,right);
        if(left < index -1){
            quickSortHelper(items,left,index -1);
        }

        if(index < right){
            quickSortHelper(items, index, right);
        }
    }
    return items;
}

function partition(array,left,right){
    let pivot = array[Math.floor((right+left)/2)];
    while(left<=right){
        while(pivot>array[left]){
            left++;
        }
        while(pivot<array[right]){
            right--;
        }
        if(left<=right){
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}
// console.log(quickSort([1,23,3,4,6,5]));

// 빠른선택
// 정렬되지 않는 목록에서 k번쨰로 작은 항목을 찾는 선택 알고리즘.
// 빠른 정렬과 같은 알고리즘
// 빠른 정렬처럼 기준점의 양쪽모두를 재귀적으로 수행하지 않고 한쪽만을 재귀적으로 수행
const array = [1,3,3,-2,3,14,7,8,1,1,2];
function quickSelectInPlace(A,l,h,k){
    const p = partition(A,l,h);
    if(p===(k-1)){
        return A[p];
    }else if(p>(k-1)){
        return quickSelectInPlace(A,l,p-1,k);
    }else{
        return quickSelectInPlace(A,p+1,h,k);
    }
}

function medianQuickselect(array){
    return quickSelectInPlace(array,0,array.length-1,Math.floor(array.length/2));
}

// console.log(quickSelectInPlace(array,0,array.length-1,5))

// 병합정렬
// 각 하위 배열에 하나의 항목이 존재할 때까지 배열을 하위 배열로 나눈다. 그러고 나서 하위 배열을 정렬된 순서로 연결한다. 
function merge(leftA,rightA){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftA.length &&rightIndex < rightA.length){
        if(leftA[leftIndex]<rightA[rightIndex]){
            result.push(leftA[leftIndex++]);
        }else{
            result.push(rightA[rightIndex++]);
        }
    }
    let leftRemains = leftA.slice(leftIndex);
    let rightRemains = rightA.slice(rightIndex);

    return result.concat(leftRemains).concat(rightRemains);
}
function mergeSort(array){
    if(array.length<2){
        return array; // 기저조건: 항목이 하나뿐이라서 해당 배열은 이미 정렬된것이다.
    }
    const midpoint = Math.floor((array.length)/2);
    const leftArray = array.slice(0,midpoint);
    const rightArray = array.slice(midpoint);

    return merge(mergeSort(leftArray), mergeSort(rightArray))
}
// console.log(mergeSort([1,23,3,4,6]));

// 계수정렬
// 항목들을 교환하면서 정렬하는 대신에 배열의 각 항목의 등장 횟수를 센다. 

function countSort(array){
    const hash = [];
    const countArr = [];
    for(let i=0; i<array.length;i++){
        if(!hash[array[i]]){
            hash[array[i]]=1;
        }else{
            hash[array[i]]++;
        }
    }
    for(let key in hash){
        // 항목이 몇개가 되든 해당 항목을 배열에 추가한다.
        // console.log(hash)
        for(let i = 0; i<hash[key];i++){
            countArr.push(parseInt(key));
        }
    }
    return countArr;
}

// console.log(countSort([1,1,1,33,3,3,3,3,132,132,123,321,23,3,4,6]));
