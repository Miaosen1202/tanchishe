function bind(obj,evtype,evfn){
    if(obj.addEventListener){
        obj.addEventListener(evtype,evfn,false);
    }else if(obj.attachEvent){
        obj.attachEvent('on'+evtype,evfn);
    }else{
        obj['on'+evtype] = evfn;
    }
}
(function(window){
    function Game(map,p){
        this.snake = new Snake();
        this.food = new Food();
        this.map = map;
        this.p = p;
    }
    var timer=null;
    Game.prototype.start = function(){

        this.food.render(this.map);
        this.snake.render(this.map);
        //=============================================
        runSnake(this,200);
        var that = this;
        document.addEventListener('keydown',function(e){
            e = e || event;
            if(e.keyCode == 39){
               setTimeout(function(){

                   that.snake.move(that.food,that.map);
                   var headX = that.snake.body[0].x*that.snake.width;
                   var headY = that.snake.body[0].y*that.snake.height;
                   var maxX = that.map.offsetWidth;
                   var maxY = that.map.offsetHeight;
                   if(headX <0 || headX >= maxX){
                       clearInterval(timer);
                       //alert("Game over");
                       that.p.style.display = "block";
                       //that.map.style.display = "none";
                       return;
                   }
                   if(headY<0||headY>=maxY){
                       clearInterval(timer);
                       //alert("Game over");
                       that.p.style.display = "block";
                       //that.map.style.display = "none";
                       return;
                   }
                   for(var i=1;i < that.snake.body.length;i++){
                       if(that.snake.body[0].x == that.snake.body[i].x && that.snake.body[0].y == that.snake.body[i].y){
                           clearInterval(timer);
                           //alert("Game over");
                           that.p.style.display = "block";
                           //that.map.style.display = "none";
                           return;
                       }
                   }
                   that.snake.render(that.map);
               },100)
            }
        })
        document.addEventListener('keyup',function(e){
            e = e || event;
            if(e.keyCode == 39){
                clearInterval(timer);
                timer=null;
                runSnake(that,200);
            }
        })
        document.addEventListener('keydown',function(e){
            e = e || event;
            if(e.keyCode == 37){
                setTimeout(function(){

                    that.snake.move(that.food,that.map);
                    var headX = that.snake.body[0].x*that.snake.width;
                    var headY = that.snake.body[0].y*that.snake.height;
                    var maxX = that.map.offsetWidth;
                    var maxY = that.map.offsetHeight;
                    if(headX <0 || headX >= maxX){
                        clearInterval(timer);
                        //alert("Game over");
                        that.p.style.display = "block";
                        //that.map.style.display = "none";
                        return;
                    }
                    if(headY<0||headY>=maxY){
                        clearInterval(timer);
                        //alert("Game over");
                        that.p.style.display = "block";
                        //that.map.style.display = "none";
                        return;
                    }
                    for(var i=1;i < that.snake.body.length;i++){
                        if(that.snake.body[0].x == that.snake.body[i].x && that.snake.body[0].y == that.snake.body[i].y){
                            clearInterval(timer);
                            //alert("Game over");
                            that.p.style.display = "block";
                            //that.map.style.display = "none";
                            return;
                        }
                    }
                    that.snake.render(that.map);
                },100)
            }
        })
        document.addEventListener('keyup',function(e){
            e = e || event;
            if(e.keyCode == 37){
                clearInterval(timer);
                timer=null;
                runSnake(that,200);
            }
        })
        document.addEventListener('keydown',function(e){
            e = e || event;
            if(e.keyCode == 38){
                setTimeout(function(){

                    that.snake.move(that.food,that.map);
                    var headX = that.snake.body[0].x*that.snake.width;
                    var headY = that.snake.body[0].y*that.snake.height;
                    var maxX = that.map.offsetWidth;
                    var maxY = that.map.offsetHeight;
                    if(headX <0 || headX >= maxX){
                        clearInterval(timer);
                        //alert("Game over");
                        that.p.style.display = "block";
                        //that.map.style.display = "none";
                        return;
                    }
                    if(headY<0||headY>=maxY){
                        clearInterval(timer);
                        /*alert("Game over");*/
                        that.p.style.display = "block";
                        //that.map.style.display = "none";
                        return;
                    }
                    for(var i=1;i < that.snake.body.length;i++){
                        if(that.snake.body[0].x == that.snake.body[i].x && that.snake.body[0].y == that.snake.body[i].y){
                            clearInterval(timer);
                            //alert("Game over");
                            that.p.style.display = "block";
                            //that.map.style.display = "none";
                            return;
                        }
                    }
                    that.snake.render(that.map);
                },100)
            }
        })
        document.addEventListener('keyup',function(e){
            e = e || event;
            if(e.keyCode == 38){
                clearInterval(timer);
                timer=null;
                runSnake(that,200);
            }
        })
        document.addEventListener('keydown',function(e){
            e = e || event;
            if(e.keyCode == 40){
                setTimeout(function(){

                    that.snake.move(that.food,that.map);
                    var headX = that.snake.body[0].x*that.snake.width;
                    var headY = that.snake.body[0].y*that.snake.height;
                    var maxX = that.map.offsetWidth;
                    var maxY = that.map.offsetHeight;
                    if(headX <0 || headX >= maxX){
                        clearInterval(timer);
                        //alert("Game over");
                        that.p.style.display = "block";
                        //that.map.style.display = "none";
                        return;
                    }
                    if(headY<0||headY>=maxY){
                        clearInterval(timer);
                        //alert("Game over");
                        that.p.style.display = "block";
                        //that.map.style.display = "none";
                        return;
                    }
                    for(var i=1;i < that.snake.body.length;i++){
                        if(that.snake.body[0].x == that.snake.body[i].x && that.snake.body[0].y == that.snake.body[i].y){
                            clearInterval(timer);
                            //alert("Game over");
                            that.p.style.display = "block";
                            //that.map.style.display = "none";
                            return;
                        }
                    }
                    that.snake.render(that.map);
                },100)

            }
        })
        document.addEventListener('keyup',function(e){
            e = e || event;
            if(e.keyCode == 40){
                clearInterval(timer);
                timer=null;
                runSnake(that,200);
            }
        })

        bindKey(this);
    }
    //====================================
    function runSnake(that,t){

        timer = setInterval(function(){
            that.snake.move(that.food,that.map);
            var headX = that.snake.body[0].x*that.snake.width;
            var headY = that.snake.body[0].y*that.snake.height;
            var maxX = that.map.offsetWidth;
            var maxY = that.map.offsetHeight;
            if(headX <0 || headX >= maxX){
                clearInterval(timer);
                //alert("Game over");
                that.p.style.display = "block";
                //that.map.style.display = "none";
                return;
            }
            if(headY<0||headY>=maxY){
                clearInterval(timer);
                //alert("Game over");
                that.p.style.display = "block";
                //that.map.style.display = "none";
                return;
            }
            for(var i=1;i < that.snake.body.length;i++){
                if(that.snake.body[0].x == that.snake.body[i].x && that.snake.body[0].y == that.snake.body[i].y){
                    clearInterval(timer);
                    //alert("Game over");
                    that.p.style.display = "block";
                    //that.map.style.display = "none";
                    return;
                }
            }
            that.snake.render(that.map);
        },t)
    }
    function bindKey(that){
      bind(document,'keydown',function(ev){
          ev = ev || event;
          switch (ev.keyCode){
              case  37:
                  if(that.snake.direction != 'right'){
                      that.snake.direction = 'left';
                  }
                  break;
              case  38:
                  if(that.snake.direction != 'down'){
                      that.snake.direction = 'up';
                  }
                  break;
              case  39:
                  if(that.snake.direction != 'left'){
                      that.snake.direction = 'right';
                  }
                  break;
              case  40:
                  if(that.snake.direction != 'up'){
                      that.snake.direction = 'down';
                  }
              break;
          }
      })
    }
    window.Game = Game;
})(window)