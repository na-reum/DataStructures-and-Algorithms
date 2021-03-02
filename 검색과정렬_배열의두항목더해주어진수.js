// 나머지 항목을 모두 더하는것

function findTwoSum(array, sum){

    for(let i = 0, arrayLength = array.length; i<arrayLength; i++){
        for(let j = i+1; j < arrayLength; j++){
            if(array[j]+array[i]===sum){
                return true;
            }
        }
    }
    return false;
}

// 합에서 이미 방문한 숫자를 기업했다가 다른 숫자 방문시 확인하는 방법
function findTwoSumTwo(array, sum){
    let store = {};

    for(let i = 0, arrayLength = array.length; i<arrayLength; i++){
        if(store[array[i]]){
            return true;
        }else{
            store[sum-array[i]] = array[i];
        }
    }
    return false;
}
