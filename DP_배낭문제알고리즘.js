// 무게와 가치를 지니는 n개의 항목이 주어졌을 때, 최대 w의 무게를 담을 수 있는 배낭에
// 해당 항목들을 집어넣어 배낭에 담긴 항목들의 가치 합이 최대가 되도록 한다. 

// 최적 부분 구조
// 배열의 각 항목에는 다음 두 가지 중 하나에 해당한다. 
//   항목이 최적 부분집합에 포함된다. 
//   항목이 최적 부분집합에 포함되지 않는다.
// 따라서 n개의 항목으로부터 얻을 수 있는 최대 가치는 다음 중 하나다. 
//   n-1개의 항목에서 얻는 최대 가치 
//   n-1개의 항목에서 얻는 최대 가치 + n번째 항목의 가치 (n번째 항목의 무개가 w보다 작은 경우에만 가능하다)

//  단순한 접근법
// 최적 부분 구조를 단순하게 구현하면 위에서 기술한 최적 부분 구조를 다음과 같이 재귀적으로 구현하면 된다. 
function knapsackNaive(index,weights, values, target){
    let result = 0; 

    if(index <= -1 || target <=0){
        result = 0;
    }else if(weights[index] > target){
        result = knapsackNaive(index-1,weights,values,target);
    }else{
        // 첫번쨰 경우
        const current = knapsackNaive(index-1, weights, values, target);
        
        // 두번째 경우
        const currentPlusOther = values[index] + knapsackNaive(index-1, weights, values, target);

        result = Math.max(current,currentPlusOther);
    }
    return result;
}

const weight = [1,2,4,2,5];
const values = [5,3,5,3,2];
const target = 10;

console.log(knapsackNaive(4,weight,values,target));

function knapsackDP(index,weights,values,target,matrixDP){
    let result = 0;

    // DP part
    if(matrixDP[index+'-'+target]){
        return matrixDP[index+'-'+target]
    }
    if(index <= -1 || target <=0){
        result = 0;
    }else if(weights[index] > target){
        result = knapsackNaive(index-1,weights,values,target,matrixDP);
    }else{
        // 첫번쨰 경우
        const current = knapsackNaive(index-1, weights, values, target,matrixDP);
        
        // 두번째 경우
        const currentPlusOther = values[index] + knapsackNaive(index-1, weights, values, target,matrixDP);

        result = Math.max(current,currentPlusOther);
    }
    matrixDP[index+'-'+target]= result;
    return result;
}

console.log(knapsackDP(4,weight,values,target,{}))