function validateContact() {
	// GEt references to the form elements
	var name = document.getElementById('fName'); 
	//var name has the value of the HTML element fName
	var mess = document.getElementById('message');
	//var mess has the value of the HTML element message
	
	var nError = 0;
	//var nError has the value of 0
	var mError = 0;
	//var mError has the value of 0
	
	var nMessage;
	//creating var nMessage
	var mMessage;
	//creating var mMessage
	
	//if block
	//validate the first name
	if (name.value.length == 0){//start if 
	//if name value has a length is 0 do this 
	
		nMessage = 'Please enter your name.';
		//giving the var nMessage a value of this text error message
		
		nError = 1;
		//var nError has the value of 1
	}//end if 

	else{//start else if 
		nMessage = 'Name entered.';
		//giving the var nMessage a value of this text error message
		
		nError = 0;
		//var nError has the value of 0
	}//end else 
	
	//if block
	//validate the message
	if (mess.value.length == 0){//start if 
	//if address value has a length is 0 do this 
	
		mMessage = 'Please enter your message.';
		//giving the var aMessage a value of this text error message
		
		mError = 1;
		//var aerror has the value of 1
	}//end if 
	
	else{//start else if 
		mMessage = 'Message entered.';
		//giving the var aMessage a value of this text error message
		
		mError = 0;
		//var aerror has the value of 0
	}//end else 
		
		//error validation
	if ((nError == 1) || (mError == 1)){
		//is there an error in the nError and/or mError? if so do this
		alert('Submission Error: ' + '\n' + nMessage + '\n' + mMessage);
		//create an alert to the user with new lines
		
		return false;
		//if the button was clicked; do not create the alert.
	}
	else{//start else
	//if there is no errors do this 
		
		alert('Thank you, your message has been sent.');
		//creates alert to show the current values of global vars 
		return true;
		//if there is no errors let the submit button work an go to next page
		
	}//end else
}

//creating init function to run my function when a html element is left mouse clicked. 
function init() {
//creating init function to initialise/create my events/event handlers 
	document.getElementById('button').onclick = validateContact;
	//when the element with the id of button is single LMB clicked, run the function validateContact

} // End of init function

// Assign an event handler to the window's load event.
window.onload = init; 
//on browser load run init