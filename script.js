/*
	WEB 303 Assignment 1 - jQuery
	{Name:Robiat Abdulazeez
	 Student ID:0812675}
*/
$(document).ready(function () {           // This is the function that checks the document is ready 
	$("input").keyup(function () {         // the keydown function that fires when the document is ready

		var $salary = $('#yearly-salary').val(); //declearing the "salary" variable

		var $Percent = $('#percent').val();      //declearing the "Percentage" variable 

		var $amount = (($salary * $Percent) / 100).toFixed(2);    //calculating the amount and rounding up the value

		$('#amount').text('$' + $amount);            //displaying the amount that can be spent on tech
	});

});
