//Declare a global variable to hold the total counter
var total = 0;
//Get the references to Javascript HTML DOM elements
//Get the div reference
var divref = document.getElementById("counter");
//Set the innerHTML of the div to total counter
divref.innerHTML = "Counter: "+total;

//Pure function to increment or decrement the counter based on actionType 'INC'or 'DEC' 
function counterReducer(actionType, counter){
    if(actionType == 'INC')
        total = total + counter; //Increment the total counter
        
    if(actionType == 'DEC')
        total = total - counter;//Decrement the total counter
    
    //Set the innerHTML of the div to total counter 
    divref.innerHTML = "Counter: "+total;
}