function centuryFromYear(num) {
    num=num+'';
    //console.log(num.length);
    let divader=(num.length)-2
    //console.log(divader);
    let numin=10 ** divader;
    //console.log(numin);
    let century=num/numin
    //console.log(century);
    if(century%1>0){
        century=Math.floor(century+1)
    }
    return century;
}

console.log(centuryFromYear(1700));