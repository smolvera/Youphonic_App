
// function to get lyrics from Musixmatch api
function getLyrics(){
    // prevents the page from eloading on click
    event.preventDefault();

    // grabbing the data from search area
    var artistSearch = document.getElementById("artistSearch").value;
    var trackSearch = document.getElementById("trackSearch").value;
    document.getElementById("lyrics").textContent = "";
    // ajax call
      $.ajax({
        type: "GET",
        data: {
            apikey:"32aebbe7388e91bf330ba15b45c9c70e",
            q_artist: artistSearch,
            q_track: trackSearch,
            format:"jsonp",
            callback:"jsonp_callback"
        },
        url: "http://api.musixmatch.com/ws/1.1/matcher.lyrics.get",
        dataType: "jsonp",
        jsonpCallback: 'jsonp_callback',
        contentType: 'application/json',
        success: function(data) {
            // logging the response data
            console.log(data); 
            // logging the response lyrics
            console.log(data.message.body.lyrics.lyrics_body);
            // a line to seperate the lyrics from the lyrics variable
            console.log("____________________________________");
            // adding the lyrics data to a variable and consoling it
            var lyrics = data.message.body.lyrics.lyrics_body;
            console.log(lyrics);
            // placing the lyrics on the page in the lyrics id on the html
            $('#lyrics').text(lyrics);

        }})}

    //    function getVideos(){
    //         var artistSearch = document.getElementById("artistSearch").value;
    //         var trackSearch = document.getElementById("trackSearch").value;
    //         document.getElementById("videos").textContent = "";
    //     } 
        

        // function start() {
        //     // 2. Initialize the JavaScript client library.
          
        //           var artistSearch = document.getElementById("artistSearch").value;
        //           var trackSearch = document.getElementById("trackSearch").value;
        //           document.getElementById("videos").textContent = "";
        //     gapi.client.init({
        //       'apiKey': 'AIzaSyCjMQrELS7hfVjiwsyQVNBrcOdtKN5p0kQ',
        //       // Your API key will be automatically added to the Discovery Document URLs.
        //       'discoveryDocs': ['https://people.googleapis.com/$discovery/rest'],
        //       // clientId and scope are optional if auth is not required.
        //       'clientId': 'karaoke-app-199214.apps.googleusercontent.com',
        //       'scope': 'profile',
        //     }).then(function() {
        //       // 3. Initialize and make the API request.
        //       return gapi.client.people.people.get({
        //         'resourceName': 'people/me',
        //         'requestMask.includeField': 'person.names'
        //       });
        //     }).then(function(response) {
        //       console.log(response.result);
        //     }, function(reason) {
        //       // console.log('Error: ' + reason.result.error.message);
        //     });
        //   //   var videos =
        //   };
        //   // 1. Load the JavaScript client library.
        //   gapi.load('client', start);
    