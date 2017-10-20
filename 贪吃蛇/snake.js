(function(window){
    var snakeEles = [];
    function Snake(width,height,direction){
        this.width = width || 20;
        this.height = height || 20;
        this.body = [
            {x:3,y:2,color:"#d05f27"},
            {x:2,y:2,color:"#bbb6a9"},
            {x:1,y:2,color:"#bbb6a9"}
        ];
        this.direction =direction || 'right';
    }
    Snake.prototype.render = function(map){
        remove();
        for(var i =0;i<this.body.length;i++){
            var oDiv = document.createElement("div");
            oDiv.style.width = this.width + "px";
            oDiv.style.height = this.height + "px";
            oDiv.style.position = "absolute";
            oDiv.style.left = this.body[i].x * this.width + "px";
            oDiv.style.top = this.body[i].y * this.height + "px";
            oDiv.style.backgroundColor = this.body[i].color;
            //oDiv.style.background = "url(1.jpg)  no-repeat";
            //oDiv.style.backgroundSize = "cover";
            map.appendChild(oDiv);
            snakeEles.push(oDiv);
        }
    }
    Snake.prototype.move = function(food,map) {
        for (var i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case 'up':
                this.body[0].y -= 1;
                break;
            case 'down':
                this.body[0].y += 1;
                break;
        }
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        //��ȡһ��ʳ�������
        var foodX = food.x;
        var foodY = food.y;

        if(headX == foodX && headY == foodY){
            //ֻҪ������˵���Ե���
            //��������������һ���ñ���������
            var last = this.body[this.body.length-1];

            var newJie={
                x:last.x,
                y:last.y,
                //color: "rgb("+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+","+Math.round(Math.random()*255)+')'
                color:'#bbb6a9'
            }
            this.body.push(newJie);

            food.render(map);
    }
        //=====================================

            //=======================================
    }
    function remove(){
          for(var i=0;i<snakeEles.length;i++){
              snakeEles[i].parentNode.removeChild(snakeEles[i]);
          }
        snakeEles = [];
    }
    window.Snake = Snake;
})(window)

