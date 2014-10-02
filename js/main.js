// JavaScript Document
var salesLeft = $('.sales-left');
var salesDetailsLeft = $('.details-left');

var buttonClickHandler = function () {
	var currentState = salesDetailsLeft.attr('data-state');
	
	if (currentState == 'active') {
		salesDetailsLeft.attr('data-state', 'inactive');
	} else {
		salesDetailsLeft.attr('data-state', 'active');
	}
};

salesLeft.on('click', buttonClickHandler);

var salesRight = $('.sales-right');
var salesDetailsRight = $('.details-right');

var buttonClickHandler = function () {
	var currentState = salesDetailsRight.attr('data-state');
	
	if (currentState == 'active') {
		salesDetailsRight.attr('data-state', 'inactive');
	} else {
		salesDetailsRight.attr('data-state', 'active');
	}
};

salesRight.on('click', buttonClickHandler);