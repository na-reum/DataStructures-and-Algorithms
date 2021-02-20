const 퍼즐판 = [[0,0,0,0],[0,1,0,3],[2,5,0,1],[2,4,4,1],[5,1,1,1]];
const 조작 = [1,1,1,1,3,3,3];

function solution(puz,move){
    const stack = [];
    let score = 0;
    for(let i of move){
        let moveFlag = false;
        for(let j in puz){
            const puzScore=puz[j][i-1];
            if(puzScore !== 0 && moveFlag===false){
                if(stack[stack.length-1]===puzScore){
                    stack.pop();
                    score+=(puzScore*2);
                }else{
                    stack.push(puzScore);
                }
                puz[j][i-1] = 0;
                moveFlag = true;
                // console.log(stack)
            }
        }
        if(moveFlag === false){
            score-=1;
        }
        console.log(puz)
        console.log(score)
    }
    return score;
}

console.log(solution(퍼즐판 , 조작));
