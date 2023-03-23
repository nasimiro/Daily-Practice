// function factorialValue(j){
// var fTempSum=1;
// for(i=1;i<=j;i++){
//     fTempSum=fTempSum*i;
// }
// return fTempSum;
// }
// console.log(factorialValue(10))

// // recursive way

function factorialValue(k){
    var fTempSum=1;
    for(i=k;i>=1;i--){
        console.log(fTempSum+'*'+i)
        fTempSum=fTempSum*i;     
    }
    return fTempSum;
    }
console.log(factorialValue(15))