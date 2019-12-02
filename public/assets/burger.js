$(document).ready(function() {

	console.log('page loaded! jssss!')

			$(document).on('click', '.change-devour', function() {
        console.log('u got clicked!', $(this).attr('data-id'))
        $.ajax({
          url: '/api/burgers/' + $(this).attr('data-id'),
          type: 'PUT'
        }).then(function(responseFromBackEnd){
          console.log('responseFromBackEnd', responseFromBackEnd);
          location.reload();
        })
			})

		

      //addBurger
      

      $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
    
        var newBurger = {
          name: $("#new").val().trim(),
        };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });


});


