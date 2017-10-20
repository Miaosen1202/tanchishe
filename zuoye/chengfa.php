<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .row{
            width:863px;
            background:rgba(255,0,0,0.3);
            
        }
        .two{
            float:left;
            width:85px;
            margin-top:10px;
            border:1px dashed red;
            text-align:center;
            margin-left:5px;
            background:rgba(0,0,0,0.3);
        }
        .clear {
            clear:both;
        }
    </style>
</head>
<body>
    <div id="one">
    <?php for ($j=1;$j<10;$j++){ ?>
        <div class="row">
        <?php for($i=1;$i<=$j;$i++){ ?>
            <div class="two"><?php printf( "%d*%d=%d",$i,$j,$j*$i); ?></div>
        <?php } ?>
            <div class="clear"></div>
        </div>
   <?php } ?>
    
    </div>
</body>
</html>