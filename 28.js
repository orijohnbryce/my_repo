async function jerWeather1() {
    
    city = "jerusalem"
    key = "0d9bec0bd1d69fb400865295745b14c8"
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    res = await fetch(url)
    resJ = await res.json()
    temperature = resJ.main.temp-273.15

    elem = document.getElementById("pid_jer")
    elem.innerHTML = temperature
}

function jerWeather() {
    
    city = "jerusalem"
    key = "0d9bec0bd1d69fb400865295745b14c8"
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
    
    fetch(url)
    .then((res)=>{
        res.json()
        .then( (resJson)=>{ 
            document.getElementById("pid_jer").innerHTML = resJson.main.temp - 273.15
        }
    )})    
}

function changeBG(){
    if (document.body.style.backgroundColor == "white"){
        document.body.style.backgroundColor = "red"
        document.cookie = "color=red"
    }else {
        document.body.style.backgroundColor = "white"
        document.cookie = "color=white"
    }
}

function useCookieForBG() {
    color = getCookie("color")
    if (! color){
        color = "white"
    }
    document.body.style.backgroundColor = color;
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }