let data = [
    {Principal: 2500, time: 1.8},
    {Principal: 1000, time: 5},
    {Principal: 3000, time: 1},
    {Principal: 2000, time: 3}
];

function iCalculator(arr) {
    let iData= [];
    let rate, interest;
    for(val of arr) {
        if (val.Principal >= 2500 && (val.time > 1 && val.time < 3)){
            rate = 3
        }
        else if (val.principal >= 2500 && val.time > 3){
            rate = 4
        }
        else if (val.principal < 2500 || val.time <= 1){
            rate = 2
        }
        else {
            rate = 1
        }

        interest = (val.principal * rate * val.time) / 100;
        iData.push({principal: val.principal, time: val.time, rate: rate, interest: interest})
    }
    console.log(iData);
    console.log(data)

    return iData
}

iCalculator(data)