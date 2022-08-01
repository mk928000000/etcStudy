const clock =document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}


getClock();
//Every second "Hello" in the console.
setInterval(getClock, 1000);