let arr = [1,2,6,21,44,23,12,3,17];
let arrOdd = [1,3,9,21,41,23,11,3,17];
function sumEven(arr){
    let sum=0;
    for(const item of arr){
        if(!isNaN(item)){
            if(item%2==0){
                sum+=item*item;
            }
        }
    }
    console.log(sum);
}
sumEven(arr);
sumEven(arrOdd);