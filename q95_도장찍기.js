const stamp = [
    [1,1,1,2],
    [2,0,0,0],
    [1,1,1,1],
    [0,0,0,0]];
    
const rotate = 1;

function rotateFunc(stamp){
    const rotateStamp = [];
    for(let i = 0; i < stamp.length; i++){
        const row = stamp[i];
        const rotaterow = [];
        for(let j = 0; j < row.length; j++){
            rotaterow.push(stamp[j][i])
        }
        rotaterow.reverse()
        rotateStamp.push(rotaterow)
    }
    return rotateStamp;
}

function solution(stamp,rotate){
    let rotateStamp = JSON.parse(JSON.stringify(stamp));
    const stampCount = [];
    for(let i = 0; i<rotate; i++){
        rotateStamp = rotateFunc(rotateStamp)
    }
    for(let i = 0; i < stamp.length; i++){
        const row = stamp[i]
        const addrow = [];
        for(let j = 0; j < row.length; j++){
            addrow.push(stamp[i][j]+rotateStamp[i][j])
        }
        stampCount.push(addrow);
    }
    return stampCount;
}

console.log(solution(stamp,rotate))