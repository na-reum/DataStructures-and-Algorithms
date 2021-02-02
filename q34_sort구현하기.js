const input = '2 3 4 5 1';
const reverse = input;
const sort = reverse.split(' ').sort((a,b)=>{
    return a-b
}).join(" ")

if(reverse === sort){
    console.log(reverse)
    console.log('YES')
}else{
    console.log('No')
}