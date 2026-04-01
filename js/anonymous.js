//f wo p wo r

let lal=function(){
    console.log('hello world');
}
lal()

let lol=function(){
    a=10
    b=20
    console.log(a+b);
}
lol()

let lpl=function(){
    a=9
    b=3
    if(a<b){
        console.log('b greater');
    }
    else{
        console.log('a greater');   
    }   
}
lpl()

let pkp=function(){
    a=49
    b=13
    console.log(a-b);
    
}
pkp()


//arrow func
let yuy=()=>{
    let a=200
    let b=300
    let sum=a+b
    console.log(`${a}+${b}=${sum}`);
}
yuy()

let oto=()=>{
    let num=353
    num>=0 ? console.log('positive'):console.log('negative');
}
oto()

let num=()=>{

}
//f w para wo return
let uiu=(num1,num2)=>{
    let sum=a+b
    console.log(`${num1}+${num2}=${sum}`);
}
uiu(28,19)

//f wo p w ret
let jij=()=>{
    let a=200
    let b=100
    return `${a}+${b}=${a+b}`
}
console.log(jij());


//f w p w r
let nkn=(num1,num2)=>{
    return `${num1}+${num2}=${num1+num2}`
}
console.log(nkn(34,55));



//adding 2 numbers using default value
let addnum= (n1=0,n2=0)=>{
    return `${n1}+${n2}=${n1+n2}`
}
console.log(addnum(10,20));
console.log(addnum(25,75));
console.log(addnum());






/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// pratice


//anonomous function
num=function(){
    let a=10
    a%2==0? console.log('even'):console.log('odd');
}
num()