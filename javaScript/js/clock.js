const clock =document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    //date.getHours() 의 반환값은 number 이므로 String 함수인 padStart 를 쓸 수 없으나,
    //String(내용) 으로 감싸주면 String 으로 변환된다.
    const hours = String (date.getHours()).padStart(2,"0");
    const minutes = String (date.getMinutes());
    const seconds = String (date.getSeconds()).padStart(2,"0");

    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}

//call this immediately.
getClock();
//Every second "Hello" in the console.
setInterval(getClock, 1000);