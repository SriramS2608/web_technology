//function
//functon without parameter without return
/*
function demo(){
    console.log("hello");
}
demo()
console.log(typeof demo);


//func with parameter without return
function myname(fname,lname){
    console.log(`hello ${fname} ${lname}`);
    
}
myname("dinga","raja")
myname("dingu","raju")

//wap to add 2 numbers
function add(num1,num2){
    res=num1+num2
    console.log(`${num1}+${num2}=${res}`);
}
add(23,35)
add(45,436)


//wap to find even numbers from start to end
function evennum(start,end){
    for(let i=start;i<=end;i++){
        if(i%2==0)
            console.log(i);
        }
}
evennum(40,50)
evennum(100,110)
*/
//wap to print only odd numbers in reverse order from start to end using general function with parameters
function odd(start,end){
    for(let i=end;i>=start;i--){
        if(i%2==1)
            console.log(i)
        }
}
odd(20,30)