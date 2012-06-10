function feedback (url, comment, from) {

	$.getJSON('/currentyacypeer/interaction/Feedback.json?url='+url+'&comment='+comment+'&from='+from, function(data) {
			
	});
	
}

function suggest (url) {

	$.getJSON('/currentyacypeer/interaction/Suggest.json?url='+url, function(data) {
			
	
	});
	
}

function contribution (url, comment, username) {

	$.getJSON('/currentyacypeer/interaction/Contribution.json?url='+url+'&comment='+comment+'&from='+username, function(data) {
			
	
	});
	
}

function triple (url, s, p, o, username) {

	$.getJSON('/currentyacypeer/interaction/Triple.json?url='+url+'&s='+s+'&p='+p+'&o='+o+'&from='+username, function(data) {
			
	
	});
	
}

function storevalue (s, p, o) {

	$.getJSON('/currentyacypeer/interaction/Triple.json?url='+document.location.href+'&s='+s+'&p='+p+'&o='+o, function(data) {
			
	
	});
	
}

function storevalueglobal (s, p, o) {

	$.getJSON('/currentyacypeer/interaction/Triple.json?global=true&url='+document.location.href+'&s='+s+'&p='+p+'&o='+o, function(data) {
			
	
	});
	
}

function loadvalue (s, p) {

	var res = {result: ""};
	
	$.ajaxSetup({async: false});

	$.getJSON('/currentyacypeer/interaction/Triple.json?s='+s+'&p='+p+'&load=true', function (data) {
	
		res = data;
	
	});
	
		
	return res.result;
	
}

function loadvalueglobal (s, p) {

	var res = {result: ""};
	
	$.ajaxSetup({async: false});

	$.getJSON('/currentyacypeer/interaction/Triple.json?global=true&s='+s+'&p='+p+'&load=true', function (data) {
	
		res = data;
	
	});
	
		
	return res.result;
	
}