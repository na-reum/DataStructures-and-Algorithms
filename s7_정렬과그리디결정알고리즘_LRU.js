const input = '123262357';
const pageFrame = 5;

function FIFO(pageFrame,input){
    const pageArray = input.split('');
    // console.log(pageArray);
    const temp = [];

    
    for(let i of pageArray){
        if(temp.includes(i)){
            temp.splice(temp.indexOf(i), 1);
            temp.push(i);
        }else{
            if(temp.length !== pageFrame){
                temp.push(i);
                count+=6;
            }else{
                temp.shift();
                temp.push(i);
            }
        }
    }
    temp.reverse();
    return temp;
}

console.log(FIFO(pageFrame, input))