// /Write a program that takes a number as input and checks if it is positive, negative, or zero. 
// If it is positive, the program should display "The number is positive." 
// If it is negative, the program should display "The number is negative."
//  If it is zero, the program should display "The number is zero."
// 10

function input(numb){
    if (numb === 0){
        console.log(`${numb} The number is Zero`);
    }else if(0 > numb){
        console.log(`${numb} The number is negative`);
    }else{
        console.log("The number is positive")
    }
    
}
let numb = -1
input(numb)

// Write a program that asks the user to enter their age, and then determines whether they are old enough to vote or not. 
// If the user is 18 or older, the program should display "You are old enough to vote." 
// If the user is younger than 18, the program should display "You are not old enough to vote yet."
function user(age){
    if(age > 18){
        console.log(`${age} You are old enough to vote`)
    }else{
        console.log(`${age} You are not old enough to vote yet.`)
    }
}
let age = 10;
user(age)

