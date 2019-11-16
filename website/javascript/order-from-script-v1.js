/* this JavaScript will be used to do four operations.
	1: generate totals based on the price of the item and quantity.
	2: create a validation form to ensure data is in the full name and address box.
	3: create an alert to show what the user is buying. 
		this one should be change in the future for creating a recite or something along those lines
	4: generate a total from the items totals
*/

/*	
	the functions below from here to the next 
	(//) will be used to total the price of items by quantities
	as well as creating an alert to display the price of the total items
*/

	//global variables to be used for total calculation
	
	var cartotal1 = "0"; 
	//global var cartotal1 has the value of 0
	
	var cartotal2 = "0"; 
	//global var cartotal2 has the value of 0
	
	var cartotal3 = "0"; 
	//global var cartotal3 has the value of 0
	
	var cartotaloverall = "0"; 
	//global var cartotaloverall has the value of 0

function car1Total(){
//creating function to times the price of the item by the quantity for the first set of tables

	var price = eval(document.myform.price1.value);
	//new var price has the value of myform price1 in the html. 

	var quant = eval(document.myform.quantity1.value);
	//new var quant has the value of myform quantity1 in the html. 
	
	var total1 = price * quant;
	//var total1 has the value of price times quant
	
	document.myform.total1.value = total1;
	//give name 'total1' the value of var total1
	
	cartotal1 = total1;
	//global var cartotal1 has the value of total1
	
	////////////////////
	
	//creating function to times the price of the item by the quantity for the second set of tables

	var price2 = eval(document.myform.price2.value);
	//new var price2 has the value of myform price2 in the html. 

	var quant2 = eval(document.myform.quantity2.value);
	//new var quant2 has the value of myform quantity2 in the html. 
	
	var total2 = price2 * quant2;
	//var total2 has the value of price2 times quant2
	
	document.myform.total2.value = total2;
	//give name 'total2' the value of var total2
	
	cartotal2 = total2;
	//global var cartotal2 has the value of total2
	
	//////////////////
	
	//creating function to times the price of the item by the quantity for the third set of tables

	var price3 = eval(document.myform.price3.value);
	//new var price3 has the value of myform price3 in the html.

	var quant3 = eval(document.myform.quantity3.value);
	//new var quant3 has the value of myform quantity3 in the html. 
	
	var total3 = price3 * quant3;
	//var total3 has the value of price3 times quant3
	
	document.myform.total3.value = total3;
	//give name 'total3' the value of var total3
	
	cartotal3 = total3;
	//global var cartotal3 has the value of total3
	
	////////////////////////
	
	//creating function to add up the 3 current totals to have and display the total value of those totals

	var totalCar1 = eval(document.myform.total1.value);
	//new var totalCar1 has the value of the myform total1 in the html. 

	var totalCar2 = eval(document.myform.total2.value);
	//new var totalCar2 has the value of the myform total2 in the html. 

	var totalCar3 = eval(document.myform.total3.value);
	//new var totalCar3 has the value of the myform total3 in the html. 	
	
	var total = totalCar1 + totalCar2 + totalCar3;
	//var total has the value of the added 3 current totals 
	
	document.myform.total4.value = total;
	//give name 'total4' the value of var total
	
	cartotaloverall = total;
	//global var cartotaloverall has the value of total
	
}//end of car1Total function.

/*	
	the functions below from here to the next 
	(//) will be used to validate the data in the name and address list boxes
*/

function submit(){
/*
	creating function to validate what has been entered into the text boxes 
	for full-name and address. form there if the data is "relevant" then alert
	will be created detailing what the user "would" have purchased
*/
	// GEt references to the form elements
	var fname = document.getElementById('fname'); 
	//var fname has the value of fname
	
	var address = document.getElementById('address');
	//var address has the value of address
	
	var ferror = 0;
	//var ferror has the value of 0
	
	var aerror = 0;
	//var aerror has the value of 0
	
	var fnameMessage;
	//creating var fnameMessage
	
	var aMessage;
	//creating var aMessage
	
	//if block
	
	//validate the first name
	if (fname.value.length == 0){//start if 
	//if fname value has a length is 0 do this 
	
		fnameMessage = 'Please enter your name.';
		//giving the var fnameMessage a value of this text error message
		
		ferror = 1;
		//var ferror has the value of 1
	}//end if 

	else{//start else if 
		fnameMessage = 'Name entered.';
		//giving the var fnameMessage a value of this text error message
		
		ferror = 0;
		//var error has the value of 0
	}//end else 
	
	//if block

	//validate the second name
	if (address.value.length == 0){//start if 
	//if address value has a length is 0 do this 
	
		aMessage = 'Please enter your address.';
		//giving the var aMessage a value of this text error message
		
		aerror = 1;
		//var aerror has the value of 1
	}//end if 
	
	else{//start else if 
		aMessage = 'Address entered.';
		//giving the var aMessage a value of this text error message
		
		aerror = 0;
		//var aerror has the value of 0
	}//end else 
	
	//error checking for both aerror and fname 
	
	if ((ferror == 1) || (aerror == 1)){
		//is there an error in the aerror or fname. if so do this
		alert('Submission Error: ' + '\n' + fnameMessage + '\n' + aMessage);
		//create an alert to the user with new lines
		
		return false;
		//if the button was clicked; do not create the alert.
	}
	else{//start else
	//if there is no errors do this 
		//return true;
		//if there is no errors let the submit button work an go to next page
		
		alert('Thank you for purchasing: ' + '\nFord: ' + cartotal1 + '\nAudi: ' 
		+ cartotal2 + '\nVW: ' + cartotal3 + '\nTotal: ' + cartotaloverall + '\nPlease come again soon.');
		//creates alert to show the current values of global vars 
	}//end else
	
}//end of submit function.

//creating init function to run my function when a html element is left mouse clicked. 
function init() {
//creating init function to initialise/create my events/event handlers 
	document.getElementById('btnEnter1').onclick = car1Total;
	//when the element with the id of btnEnter1 is single LMB clicked, run the function car1Total
	
	document.getElementById('btnSubmit').onclick = submit; 
	//when the element with the id of btnSubmit is single LMB clicked, run the function submit
} // End of init function

// Assign an event handler to the window's load event.
window.onload = init; 
//on browser load run init