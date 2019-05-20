$(document).ready(function(){
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        fullscreen: true
    });
});

setTimeout(()=>{
    document.getElementById("heart_1").className = document.getElementById("heart_1").className + " play1";
    document.getElementById("heart_3").className = document.getElementById("heart_3").className + " play3";
    document.getElementById("heart_2").className = document.getElementById("heart_2").className + " play2";
    document.getElementById("heart_4").className = document.getElementById("heart_4").className + " play4";
},2000);
setTimeout(()=>{
    document.getElementById('c0').style.display = "block";
    document.getElementById('c1').style.display = "none";
},5000);