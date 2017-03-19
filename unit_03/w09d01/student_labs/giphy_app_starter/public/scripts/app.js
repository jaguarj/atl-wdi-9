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





$(".git-gif").click(function(){
   $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  .done(function(data){
    console.log(data);
  });



