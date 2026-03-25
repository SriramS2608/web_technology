//control statements

//if else
if(10 !== 10){
    console.log('kantha');
}
else{
    console.log('laxmi');
    
}

let rcb ="win";
if(rcb === 'win'){
    console.log('e sala cup namde 🏆');
}
else{
    console.log('next sala cup namde 🏆');   
}

/*
// even odd 
let num=prompt("enter the number:");
if(num%2==0){
    console.log(`${num} is even number`);
}
else{
    console.log(`${num} is odd number`);
    }
*/
/*
//else if ladder
//+ve or negative
let num=prompt("enter number here:");
if(num>0){
    console.log('positive');  
}
else if(num < 0) {
    console.log('negative');
}
else{
    console.log('its zero');
    
}

*/


//nested if
let email="kantha@gmail.com";
let password="laxmi";
if(email === 'kantha@gmail.com'){
    if(password==='laxmi'){
        console.log('welcome');
    }
    else{
        console.error('wrong password');        
    }
}
else{
    console.error('worng');
    
}

//switched case
let signal='yellow';
switch(signal){
    case'red' : console.log('stop')
    break;
    case'yellow' : console.log('ready')
    break;
    case'green' : console.log('goo')
    break;
}


let dir='straight';
switch(dir){
    case 'right' : console.log('turn right')
    break;
    case 'left' : console.log('turn left')
    break;
    case 'straight' : console.log('go straight');
}
