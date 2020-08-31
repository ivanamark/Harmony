var array = [110, 1059, 180, 260, 40, 310, 535, 695]

function stockBuySell(array) {
    let maximum = Math.max(...array);
    let minimum = Math.min(...array);
    let answer = `buy on day ${array.indexOf(minimum)+1}, 
sell on day ${array.indexOf(maximum)+1}`

    return answer;

}
console.log(stockBuySell(array));