
	$(".nav li").on("click", function() {
      $(".nav li").removeClass("active");
      $(this).addClass("active");
    });



    function navbar_movment(event)
	{
        	$(event.data.urvashi1).slideToggle("fast");
        /*	$(event.data.urvashi2).slideUp("fast");
        	$(event.data.urvashi3).slideUp("fast");
        	$(event.data.urvashi4).slideUp("fast"); */
	};