$( document ).ready(function() {
	$.getJSON( "https://studiobl.github.io/assets/js/code-test.json", function( data ) {
		
		for(i=0; i<data.length; i++){
			dataObj = data[i];
			string = "<tr><td class=\"bank_name\">" + dataObj.name + "</td><td>" + dataObj.apy + "%</td><td>$" + dataObj.earnings.toFixed(2) + "</td></tr>";
			$("#rates_table tbody").append(string);
		};
	});
	$("footer").css("bottom", 0);
});
