const API_KEY="8577aaa4e9f3c81080e62e2e30d14f6d";

function onGeoOk(position){ // position: user의 위치
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    //fetch 는 promise. 바로 응답하지 않고 시간이 걸리는 함수.
    //그러므로 then 으로 받아준다. url 을 띄우고 나서 할 일
    //then 에서 받는 data 는 그 결과값이다.
    fetch(url).then(response => response.json()).then(data=>{
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:nth-child(2)");
        city.innerText = data.name; 
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); 
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);