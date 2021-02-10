

const solution = (a,b) =>{
    const answer = [];
    const aLen = a[0].length;

    if(aLen === b.length){
        for(let i = 0; i < aLen; i++){
            const row = [];
            for(let j = 0;j < aLen; j++){
                let x = 0;
                for(let k = 0; k < aLen; k++){
                    x += a[i][k]*b[k][j];
            }
            row.push(x);
        }
        answer.push(row);
        }
        return answer;
    }else{
        return -1;
    }
}


const a = [[1, 2], 
           [2, 4]]

const b = [[1, 0], 
           [0, 3]]

console.log(solution(a,b))