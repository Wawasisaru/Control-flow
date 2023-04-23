// ite a function that accepts an 
// array of strings and console.logs each element using a for loop.
function names(array){
    for(let i=0; i<array.length;i++){
        console.log(array[i]);
    }
}
let array = ["saru","ann","mariam","akinyi"]
names(array)

// write a function that takes in a an array of strings and use a continue statement
//  when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi'
function fruits(arry){
    for(let i=0;i<arry.length;i++){
        if(i === 2){
            continue;
        }
        console.log(arry[i]);
    }   
}
let arry = ["apple","kiwi","oranges","mango","watermelon"]
fruits(arry)

// Write a function that takes in the following array and use a while loop to iterat
// e and break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
function numbers(ary){
    let i = 0;
    while(i<ary.length){
        if(i === 4){
            break;
        }
        console.log(ary[i])
        i++;
    }
}
let ary = [1,2,3,4,5,6,7,8,9];
numbers(ary)