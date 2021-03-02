// 하나씩 찾는 선형검색
function sqrtIntNaive(number){
    if(number === 0 || number === 1){
        return number;
    }
    let index = 1;
    let square = 1;

    while(square < number){
        if(square === number){
            return square;
        }
        index ++;
        square = index*index;
    }
    return index;
}

console.log(sqrtIntNaive(9));

// 이진검색
// 1부터 1씩 증가하는 대신 1과 주어진 수 사이의 범위를 큰쪽과 작은 쪽 두개로 분할 수 있다. 

function sqrtInt(number){
    if(number === 0 || number === 1){
        return number;
    }

    let start = 1;
    let end = number;
    let ans;

    while(start<=end){
        const mid = parseInt((start+end)/2);
        if(mid*mid === number){
            return mid;
        }
        if(mid*mid < number){
            start = mid+1;
            ans = mid;
        }else{
            end = mid-1;
        }
        
    }
    return ans;
}
console.log(sqrtInt(9));

// 부동소수점의 제곱근일 찾는다/ 
// 배정밀도 수의 제곱근에는 소수부가 있기 때문에, 어느정도 정확도를 가질지 계산하기 위한 임계값을 지닌다.
function sqrtDouble(number){
    let threshold = 0.1;
    let upper = number;
    let lower = 0;
    let middle;
    while(upper-lower>threshold){
        middle = (upper + lower)/2;
        if(middle*middle>number){
            upper = middle;
        }else{
            lower = middle;
        }
    }
    return middle;
}

console.log(sqrtDouble(9));

