$("li").click(function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
	$(this).parent().fadeout( 500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});