// alert("page load");
// ?testing site


function init() {
    gapi.client.setApiKey("AIzaSyCjMQrELS7hfVjiwsyQVNBrcOdtKN5p0kQ");
    gapi.client.load("youtube", "v3", function(){

    } function getVideos(){
        var artistSearch = document.getElementById("artistSearch").value;
        var trackSearch = document.getElementById("trackSearch").value;
        document.getElementById("videos").textContent = "";
        console.log(videos);
    }
);
}

init();
