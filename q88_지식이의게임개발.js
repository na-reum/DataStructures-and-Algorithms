const row = 4;
const column = 5;
const char = [0,0];
const obj = [[0,1],[1,1],[2,3],[1,3]];

function make_map(rows,columns,char,obj){
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
    return map;
}

console.log(make_map(row,column,char,obj))