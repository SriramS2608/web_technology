//no function key word
num=(a)=>{
    a%2==0?console.log("even"):console.log("odd");

}
num(38)


//wo p ow r
num1=()=>{
    a=23
    a>=0?console.log('positive number'):console.log('negative number');
}
num1()

//w p wo r
num3=(b)=>{
    let count=0
    for(let r=0 ;r<=b;r++){
        if (count==2)
            console.log('prime');
        else{
            console.log('not'); 
        }
    }
}   
num3(45)



//simplied
num9=_=>{
    console.log(_);
}
num9(23)

//if only one log statement is there
num8=()=> console.log("hello world");
num8()

//if only one return statement 

// no need to use return keyword and {} must not use both of them at once
num7=(k)=>console.log(k)
num7(34)


