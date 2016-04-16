$( document ).ready(function() {
	$.getJSON( "https://studiobl.github.io/assets/js/code-test.json", function( data ) {
		
		for(i=0; i<data.length; i++){
			dataObj = data[i];
			string = "<tr><td class=\"bank_name\">" + dataObj.name + "</td><td>" + dataObj.apy + "%</td><td>$" + dataObj.earnings.toFixed(2) + "</td></tr>";
			$("#rates_table tbody").append(string);
		};
	});
	
	
	$(".tab_pane").css("display", "none");
	var active_id = $(".tab_wrapper ul.clearfix li.active").attr("id");
	var active_pane = "#" + active_id + "_pane";
	$(active_pane).css("display", "block");
	$(".tab_wrapper ul.clearfix li").click(function(){
		$(".tab_wrapper ul.clearfix li").toggleClass("active");
		$(".tab_pane").css("display", "none");
		var pane_id = "#" + $(this).attr("id") + "_pane";
		$(pane_id).css("display", "block");
		
	});
	
	$(".overlay").click(function(){
		$(".overlay").css("display", "none");
	})
});
