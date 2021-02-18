const row = 4;
const column = 5;
const char = [0,0];
const obj = [[0,1],[1,1],[2,3],[1,3]];
const move = [2,2,2,4,4,4];


function make_map(rows,columns,char,obj,move){
    const map = [];
    for(let i = 0; i < columns+2; i++){
        const row = [];
        for(let j=0; j < rows+2;j++){
            if(i===0||i===columns+1||j===0||j===rows+1){
                row.push(2)
            }else if(i===char[0]+1&&j===char[1]+1){
                row.push(1)
            }else{
                row.push(0)
            }
        }
        map.push(row);
    }
    for(let i of obj){
        map[i[0]+1][i[1]+1] = 2;
    }
    const moveMap = JSON.parse(JSON.stringify(map))

    moveMap[char[0]+1][char[1]+1] = 0;
    const moveChar = JSON.parse(JSON.stringify(char));
    for(let i of move){
        if(i===1){
            moveChar[0] -=1;
        }else if(i===2){
            moveChar[0] +=1;
        }else if(i===3){
            moveChar[1] -=1;
        }else if(i===4){
            moveChar[1] +=1;
        }
    }
    moveMap[moveChar[0]+1][moveChar[1]+1] = 1;

    console.log('캐릭터 이동 전 지도');
    console.log(map);
    console.log('캐릭터 이동 후 지도')
    console.log(moveMap);  
    console.log(`캐릭터 위치 : ${moveChar}`);
}

make_map(row,column,char,obj,move)