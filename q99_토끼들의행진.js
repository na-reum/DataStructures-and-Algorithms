const stone = [1, 2, 1, 4, 5, 2];
const rabbit = [2, 1, 3, 1];

function solution(stone, rabbit){
    const stone2 = stone;
    const passrabit = [];
    for(let i of rabbit){
        let falseFlag = false;
        for(let j in stone2){
            console.log(stone2);

            if((parseInt(j)+1)%i===0){
                stone2[j] -= 1;
                if(stone2[j]<0){
                    falseFlag = true;
                }
            }
        }
        if(falseFlag){
            passrabit.push('fail')
        }else{
            passrabit.push('pass')

        }
    }
    return passrabit;

}

console.log(solution(stone,rabbit))