const input = 'BCBAEBCE';
const pageFrame = 3;

function FIFO(input,pageFrame){
    const pageArray = input.split('');
    // console.log(pageArray);
    const temp = [];
    let count = 0;

    if (pageFrame === 0){
        count = pageArray.length * 6;
        return count;
      }
    
    for(let i of pageArray){
        if(temp.includes(i)){
            temp.splice(temp.indexOf(i), 1);
            temp.push(i);
            count+=1;
        }else{
            if(temp.length !== pageFrame){
                temp.push(i);
                count+=6;
            }else{
                temp.shift();
                temp.push(i);
                count+=6;
            }
        }
    }
    console.log(temp)
    return count;
}

console.log(FIFO(input, pageFrame))