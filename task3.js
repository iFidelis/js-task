let divide = (num) => {

    let arr = [];

    for(let i = 1; i <= num; i++){
        if(i % 2 === 0) {
            if (i % 3 == 0) {
                arr.push("yu-gi");
            }
            else if (i % 5 === 0) {
                arr.push("yu-oh");
            }
            else if (i % 3 === 0 && i % 5 === 0){
                arr.push("yu-gi-oh");
            }
            else {
                arr.push("yu");
            }
        }
    }
    return arr;
    }
console.log(divide(100));