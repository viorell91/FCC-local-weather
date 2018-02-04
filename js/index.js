//get icons and images used
background = ["https://tqp4xg-bn1305.files.1drv.com/y3mZ7U9heK1irRKac9mQXkP_o6Q5-SwyvDenHZIRhm_xDGIuAlyI0tZ-5C5lgUpffVCubTDj_uD2PfskVVzA13ON1tZWrolaWaPG5glyD3XICiGjR4SbwOJ_b72torMeqHm3ivZr3PENbnvzv3jZ6xVOF0S0JY09k635gxiG5Kybws?width=1688&height=1126&cropmode=none","https://ufp4xg-bn1305.files.1drv.com/y3m6WA40GNGfLB6sUzLvijirQrQ_biksQHvnkVAf-vpiSX5wOV-T5xl2I7Xwqlh4TajDqv5h5uJ3anE_bnY7e6EozVM899Yr2s8EQOVphNO1t4rLEI3_O9_ftYZtqXLsXJ7zoh1_yHnxj8NfU5sQ6g_IG60uk6iO9C27BabsGjj9Nk?width=1920&height=1200&cropmode=none","https://tvp4xg-bn1305.files.1drv.com/y3mZjjdq3AYBzyRDHCOXKW5I-_hVUbeMwXpXqBKM3-mxPAtCGIlPMqnw8YJQtlpY92ZbvlJV7lpoqNUrZfJCGBwBbJrjO4KE9pFBPIHHsXjdSZP84LHj80F8gamWMj7AH9Yf6_iIiheVZWy6IWmOfX9oYfaDO3l643qX6PEvxhIGuA?width=1920&height=1080&cropmode=none","https://upp4xg-bn1305.files.1drv.com/y3mgqrarMDgQrkeOtI-01wsR_LQmbNUBINCL7mWYsIEkhj8hypLSnGEb9e0MNYhPXMPMp3zrsLOUMm9_wa_6EJTXJU1WkxPObE0dcJzt9AW9NKK03ZSSB8n8b1yiw2NHuHAC8CtZjcv4vAUYLO6Ij1WZ1l_WohxW4CoI9KdUMRdho8?width=1944&height=1296&cropmode=none","https://svp4xg-bn1305.files.1drv.com/y3m22WLi35i945XaMNH1SE_p84BuzBLGwpLCTviGbiu7Bh335EXbWkKekU1vYVeHx0ZJQP8RU-UuXyOx3sa_hQcmUmLMKjYUUbti_SVr98i8JSvY4pUHzqVyy_jHcjOMkw-nxXY_XC7K2ujt_yDNI_aLf7MSu2NLqnKIyvfWRQMYHk?width=1920&height=1080&cropmode=none","https://tpp4xg-bn1305.files.1drv.com/y3mw7eJ-7syEje9EG5imK5AYORjvODcBOtNlj0vw1uTz9qh7YXybquJZ-exVEuBkig99FCRoSi7ItlNIzCVzBeJsuszDRPidrGOE3q8keKLTj3DZaao6umrZeV5BHCI5XsPZnfq2rBuAasOko7-yA-TvSh6MiD73vP-xusxLE6OW6I?width=1280&height=720&cropmode=none","https://tfp4xg-bn1305.files.1drv.com/y3mZOfgRpy_KHcp3ScJnmdHX229E_mzNMuC9NpF3sNW0CcQUlWCUIMBHGcCcqiaLpX1ZRc31t6sW7A03YSYwbhNSpdk0MTq1JQAp7Qc36f4imwt8e45hDFjryTgdrSxTFwdiqM0Y97jpbkW6P9L9f15JaVsXMhlyHE7Km-I6Z7qSIk?width=1024&height=679&cropmode=none"];

weather_icons = ["http://findicons.com/icon/download/548241/weezle_cloud_thunder_rain/256/png","http://findicons.com/icon/download/548238/weezle_sun_and_rain/256/png","http://findicons.com/icon/download/548250/weezle_rain/256/png","http://findicons.com/icon/download/548267/weezle_snow/256/png","http://findicons.com/icon/download/548239/weezle_fog/256/png","http://findicons.com/icon/download/548243/weezle_sun/256/png","http://findicons.com/icon/download/548246/weezle_sun_most_cloudy/256/png","https://cdn3.iconfinder.com/data/icons/tango-icon-library/48/weather-severe-alert-128.png"];

$(document).ready(function(){
  
  //get user geo location
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      
      myLat = position.coords.latitude;
      myLong = position.coords.longitude;
      //request weather data as json from openweathermap
      $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat="+myLat+"&lon="+myLong+"&units=metric&appid=d007d564e29656a16d97e75130d7dec3", function(json){ 
        var temp = json.main.temp;
        var pressure = json.main.pressure;
        var humidity = json.main.humidity;
        var windSpeed = json.wind.speed;
        var weatherCond = json.weather[0].main;
        //Reverse Geocoding
       $.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng="+myLat+","+myLong+"&sensor=true", function(json){
          var country = json.results[0].address_components[5].long_name;
          var province = json.results[0].address_components[4].long_name;
          var postal_code = json.results[0].address_components[6].long_name;
          var city = json.results[0].address_components[3].long_name; 
          //extract temp in degress Celsius and Fahrenheit
          var temp_c = Math.round(temp).toFixed(1);
          var temp_f = Math.round(temp*(9/5)+32).toFixed(1);
          //display temp
          $("#temp").html(temp_c+"&deg;");
          //implement switcher to change the temperature showing system
          $('#tempSwitch').click(function () {
              var $this = $(this);
              // $this will contain a reference to the checkbox   
              if ($this.is(':checked')) {
                // the checkbox was checked 
                $("#temp").html(temp_c+"&deg;");
              } else {
                // the checkbox was unchecked
                $("#temp").html(temp_f+"&deg;");
              }
            });
          //print results
          $("#location").html(city+", "+province+", "+country);
          document.getElementById("location").style.marginLeft = "35%";
          $("#pressure").html("Pressure: "+pressure+" hPa");
          document.getElementById("pressure").style.marginTop = "-110px";
          $("#humidity").html("Humidity: "+humidity+" %");
          document.getElementById("humidity").style.marginTop = "-80px";
          $("#windSpeed").html("Wind Speed: "+windSpeed+" m/s");
          document.getElementById("windSpeed").style.marginTop = "-50px";
          //change icons and background image based on weather
          switch(weatherCond){
            case "Thunderstorm": 
              document.getElementById("wall").src =  background[0];
              document.getElementById("weather_icon").src =  weather_icons[0];
              break;
            case "Drizzle":
              document.getElementById("wall").src =  background[1];
              document.getElementById("wall").style.filter = "blur(0px)";
              document.getElementById("weather_icon").src =  weather_icons[1];
              break;
            case "Rain":
              document.getElementById("wall").src =  background[1];
              document.getElementById("wall").style.filter = "blur(0px)";
              document.getElementById("weather_icon").src =  weather_icons[2];
              break;
            case "Snow":
              document.getElementById("wall").src =  background[2];
              document.getElementById("weather_icon").src =  weather_icons[3];
              break;
            case "Atmosphere":
              document.getElementById("wall").src =  background[3];
              document.getElementById("weather_icon").src =  weather_icons[4];
              break;
            case "Clear":
              document.getElementById("wall").src =  background[4];
              document.getElementById("weather_icon").src =  weather_icons[5];
              break;
            case "Clouds":
              document.getElementById("wall").src =  background[5];
              document.getElementById("weather_icon").src =  weather_icons[6];
              break;
            case "Extreme":
              document.getElementById("wall").src =  background[6];
              document.getElementById("weather_icon").src =  weather_icons[7];
              break;
            default:
              document.getElementById("wall").src =  background[4];
              document.getElementById("weather_icon").src =  weather_icons[5];
          }
        });
      });
    });
  }
  //default background
  document.getElementById("wall").src =  background[4];
});