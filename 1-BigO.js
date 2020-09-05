function a(n){
    let count = 0;
    for (let i = 0; i < 5*n; i++){
        count+=1;
    }
    return console.log(count);
}

a(10);