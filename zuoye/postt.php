<?php
    if(isset($_POST["t1"]) && strlen(trim($_POST["t1"]))!=0
    && isset($_POST["t2"])&& strlen(trim($_POST["t2"]))!=0){
        $t1=$_POST["t1"];
        $t2=$_POST["t2"];
    }else{
        exit("<h2>该页面你没有权限访问</h2>");
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h2>您输入的参数为:</h2>
    <h3>t1: <?php echo $t1 ?></h3>
    <h4>t2: <?php echo $t2 ?></h4>
</body>
</html>