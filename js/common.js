window.onload = function(){
    let li = document.querySelectorAll(".cars li");
    let car = document.querySelector(".cars");
    var showcars = document.querySelector(".showcars");
    showcars.onmouseover = function(){
        li.forEach(function(item){
            item.style.display="inline-block";
        })
    };
    showcars.onmouseout = function(){
        li.forEach(function(item){
            item.style.display="none";
        })
    };
    car.onmouseover = function(){
        li.forEach(function(item){
            item.style.display="inline-block";
        })
    };
    car.onmouseout = function(){
        li.forEach(function(item){
            item.style.display="none";
        })
    };
}