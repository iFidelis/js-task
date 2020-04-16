let divide = (num) => {

    let arr = [];

    for(let i = 1; i <= num; i++){
            if (i % 3 === 0) {
                arr.push("yu-gi");
            }
            else if (i % 5 === 0) {
                arr.push("yu-oh");
            }
            else if (i % 3 === 0 && i % 5 === 0){
                arr.push("yu-gi-oh");
            }
            else if (i % 2 === 0){
                arr.push("yu");
            }
            else {
                arr.push(i);
            }
    }
    return arr;
    }
console.log(divide(100));