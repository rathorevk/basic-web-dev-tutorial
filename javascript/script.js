console.log('Javascript is awesome!')

// Initialize variables
var number = 10;
var string = 'Hello Javascript World!';
var isRead = true;

// Print variables
document.getElementById('box').innerHTML = string;
// document.getElementById('box').innerHTML = number + 5;

// Conditions
if(number > 10){
    console.log('Number is greater than 10.')
} else{
    console.log('Number is less than 10.')
}

// Loop
for(var i=0; i<5; i++){
    console.log(i);
}

// Array
var groceries = ['Milk', 'Egg', 'Cheese'];

// define function
function listgroceries(){
    for(var i=0; i < groceries.length; i++){
        console.log(groceries[i]);
    } 
}

// Call function
listgroceries();

// Events
document.getElementById('box').addEventListener('click', function(){
    alert("Box got clicked!");
});