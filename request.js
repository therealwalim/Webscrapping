var url = 'http://geekpress.fr/wp-json/wp/v2/users';

var getJSON2 = function(url) {
	return new Promise(function(data, err) {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
	xhr.responseType = 'json';
	console.log(xhr);
	xhr.onload = function() {
	var status = xhr.status;
	if (status === 200) {
	data(xhr.response);
	} else {
	err(status, xhr.response);
	}
	}
	xhr.send();
	});
};

var rep = getJSON2('http://geekpress.fr/wp-json/wp/v2/users', function(err, data) {
	if (err !== null) {
	alert('Something went wrong: ' + err);
	} else {
	console.log(data);
	for (var i = 0; i < data.length; i++) {
	console.log(data[i].name);
	}
	return data;
	}
});

const auteurId = function(data){
		for (var i = 0; i < data.length ; i++)
		{  
		document.getElementById("auteur"+i).innerHTML=data[i].name;    
		document.getElementById("avatar"+i).src=data[i].avatar_urls[96];    
		document.getElementById("nb"+i).src=data[i].id;    
		}
	};
	getJSON2('http://geekpress.fr/wp-json/wp/v2/users')
	.then(auteurId);
