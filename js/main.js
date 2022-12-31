function getDateTime(){
    var date = new Date();
    var setTime = document.getElementById("setTime");
    setTime.innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds(); 

    var setDate = document.getElementById("setData");
    setDate.innerHTML = date.getDate() + "-" + parseInt(date.getMonth()+1) + "-" + date.getFullYear();
}

onload = getDateTime();

setInterval(getDateTime, 500);


function getColor(){
    var getColor = document.getElementById("setColor").value;
    localStorage.setItem("Color", getColor);
    document.getElementById("time").style.background = localStorage.getItem("Color");
    document.getElementById("body").style.background = localStorage.getItem("Color");
}

function setColor(){
    document.getElementById("setColor").value = localStorage.getItem("Color");
    document.getElementById("time").style.background = localStorage.getItem("Color");
    document.getElementById("body").style.background = localStorage.getItem("Color");
}

setInterval(setColor, 100);