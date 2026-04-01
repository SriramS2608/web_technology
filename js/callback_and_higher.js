let num=()=>{
    return 100
}
let sum=(a,b)=>{
    let res=a+b
    console.log(res);
    
}
sum(num(),300)

//call in parameter
let sum1=(a,b)=>{
    let res=a()+b
    console.log(res);
}
sum1(num,300)

//also write func in argument
let sum2=(a,b)=>{
    let res=a()+b
    console.log(res);
}
sum2(()=>{
    return 300
},100)