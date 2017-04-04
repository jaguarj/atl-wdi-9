// $(function() {

// })


// $.ajax({
//     type: 'POST',
//     url: 'http://upload.giphy.com/v1/gifs',
//     data: {
//         username: YOUR_USERNAME,
//         api_key: YOUR_KEY,
//         file: YOUR_FILE,
//         source_image_url: YOUR_SOURCE_URL,
//         tags: YOUR_TAGS
//     },
//     success: YOUR_SUCCESS_HANDLER,
//     error: YOUR_ERROR_HANDLER
// });


$(function() {

//$.get is a jQuery and Ajax operation.
$('.get-gif').on('click', function() {
   $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  		.done(function (data) { //Done is a callback that says run the data below it when done with the GET request.
    		console.log(data.data.image_url);
    		$('.image-jumbotron').attr('src', data.data.image_url);
  		});
    })
})



