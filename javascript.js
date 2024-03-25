const apiKey="a120a11331a5b30d796c943557a0342c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
const box= document.querySelector(".search input");
const btn= document.querySelector(".search button");
const icon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const responce = await fetch(apiUrl  + city +`&appid=${apiKey}`);
    

    if(responce.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        var data=await responce.json();


        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML= Math.round(data.main.humidity) +"%";
        document.querySelector(".wind").innerHTML= Math.round(data.wind.speed) +"km/h";
    
        if(data.weather[0].main=="Clouds"){
            icon.src="cloud.png";
        }
        else if(data.weather[0].main=="Clear"){
            icon.src="clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            icon.src="rain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            icon.src="drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            icon.src="mist.png";
        }
        else if(data.weather[0].main=="Smoke"){
            icon.src="smoke.png";
        }
    
        document.querySelector(".weather").style .display="block"
        document.querySelector(".error").style.display="none"
    }

    
}
btn.addEventListener("click",()=>{
    checkWeather(box.value)
});
checkWeather()