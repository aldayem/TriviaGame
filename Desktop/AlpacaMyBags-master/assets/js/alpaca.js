
 
    var APIKey = "73058647f62585a4c9ae855f96d07dc5";

    var geocoder;
    var map;

     function initMap(){
       map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: -34.397, lng: 150.644}
        });
        geocoder = new google.maps.Geocoder();
     }



      
      $("#submit").on('click',function(){

       var city =  $("#address").val();
       if(city !=''){


        /**code for map**/

        var address = city;


        geocoder.geocode({'address': address}, function(results, status) {
          if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });



        /**code for weather**/

          $("#weather").html("");
          $("#cityName").html("Welcome To "+city);


           // Here we are building the URL we need to query the database
    var WeatherQueryURL = "http://api.openweathermap.org/data/2.5/weather?" +
      "q="+city+",usa&units=imperial&appid=" + APIKey;

    var weatherForecastURL = "http://api.openweathermap.org/data/2.5/forecast?" +
      "q="+city+",usa&units=imperial&appid=" + APIKey;

      // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: WeatherQueryURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {

        // Log the queryURL
       // console.log(queryURL);

        // Log the resulting object
        //console.log(response);

        // Transfer content to HTML
        $("#weather").append("<h1>" + response.name + " Weather Details</h1>");
        $("#weather").append("Wind Speed: " + response.wind.speed);
        $("#weather").append("Humidity: " + response.main.humidity);
        $("#weather").append("Temperature (F) " + response.main.temp);

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + response.main.temp);
      });


        // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
        url: weatherForecastURL,
        method: "GET"
      })
      // We store all of the retrieved data inside of an object called "response"
      .done(function(response) {

        // Log the queryURL
       
        // Log the resulting object
        //console.log(response);

        


        for (i = 0; i < 5; i++) {

           $("#weather").append("<h1>" + response.list[i].main.temp + " Fehrenhite </h1> <span>"+ response.list[i].weather[0].description+"</span> <br>");   
            
        }
       
      });

//           /***images code**/

//          var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags="+city+" history";
//         var src;
//       $.getJSON(url + "&format=json&jsoncallback=?", function(data){
//         console.log(data);
//         $.each(data.items, function(i,item){
//             src =item.media.m;
//             console.log(src);
//         $("<img/>").attr("src", src).appendTo("#images");
//         if ( i == 9 ) return false;
//     });
// });






       }

      });

      
    // </script>
    //         <!-- code for the images -->

    //       <script>

        
    //   // $("#submit").on('click',function(){

    //   //  var city =  $("#address").val();
    //   //  if(city !=''){
    //   //   var imagesurl = "http://farm2.static.flickr.com/1104/1434841504_edc671e65c.jpg%3Fv%3D0"

    //   //   $.ajax({
    //   //   url: queryURL,
    //   //   method: "GET"
    //   // })
    //   //   .done(function(response){

    //   //     var imagesurl = respnse.dtat.image_original_url;
    //   //     var cityimage = ("<img>");

    //   //     cityimage.attr("src",imagesurl);



      


      

