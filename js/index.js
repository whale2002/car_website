window.onload = function(){
    let imglist = document.querySelectorAll(".img-list img");
    let lrclick = document.querySelectorAll(".upanddown i");
    let bclick = document.querySelectorAll(".dot li");
    let li = document.querySelectorAll(".cars li");
    let car = document.querySelector(".cars");
    var showcars = document.querySelector(".showcars");
    show();
    var timer;
    let index = 0;
    lrclick[0].onselectstart=function(){
        return false;
    };
    lrclick[1].onselectstart=function(){
        return false;
    };
    lrclick[0].onclick = function(){
        clearInterval(timer);
        index--;
        if(index<0){
            index=imglist.length-1;
        };
        swap(index);
        show();
    };
    lrclick[1].onclick = function(){
        clearInterval(timer);
        index++;
        if(index==imglist.length){
            index=0;
        };
        swap(index);
        show();
    };
    bclick.forEach(function(item,i){
        item.onmouseover=function(){
            clearInterval(timer);
            swap(i);
            show();
        };
    });
    function show(){
        timer = setInterval(function(){
            index++;
            if(index == imglist.length){
                index=0;
            }
            swap(index);
        },3000);
    }
    function swap(index){
        imglist.forEach(function(item,i){
            item.style.zIndex="0";
            bclick[i].style.background="none";
            //为什么这里是bgc就不行？
        });
        imglist[index].style.zIndex="1";
        bclick[index].style.background="#fff";
    };
    
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

};