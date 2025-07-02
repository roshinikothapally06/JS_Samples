// traditional code
function findOddOrEven(no){
    if(no%2==0){
        console.log("even");
    }else{
        console.log("odd");
    }
}
//using arrow function
const oddOrEven=(no)=>{
    if(no%2==0){
        console.log("even");
    }else{
        console.log("Odd");
    }
}
findOddOrEven(17);
oddOrEven(20);