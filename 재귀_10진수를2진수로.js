const base10ToString = (n) => {
    let binaryString = "";
    const base10ToStringHelper = (n) => {
        if(n<2){
            binaryString += n;
        }else{
            base10ToStringHelper(Math.floor(n/2));
            base10ToStringHelper(n % 2);
        }
    }
    base10ToStringHelper(n);
    return binaryString;
}

console.log(base10ToString(232));