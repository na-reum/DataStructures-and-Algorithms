const a = [1,2,3,4];
const b = ['a','b','c','d'];

const array = a.map((e,i)=>{
    if(e%2!==0){
        return [e,b[i]]
    }else{
        return [b[i],e]
    }
}
)

console.log(array)