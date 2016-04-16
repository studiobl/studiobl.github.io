$( document ).ready(function() {
	$.getJSON( "code-test.json", function( data ) {
		
		for(i=0; i<data.length; i++){
			dataObj = data[i];
			string = "<tr><td>" + dataObj.name + "</td><td>" + dataObj.apy + "%</td><td>$" + dataObj.earnings + "</td></tr>";
			$("#rates_table tbody").append(string);
		};
	});
});
