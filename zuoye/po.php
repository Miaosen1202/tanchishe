<?php
    if(isset($_POST["one"]) && strlen(trim($_POST["one"]))!=0
    && isset($_POST["two"])&& strlen(trim($_POST["two"]))!=0 ){
        $one=$_POST["one"];
        $two=$_POST["two"];
    }else{
        exit("<h3>你无权访问该页面</h3>");
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
    <h2>你输入的参数为:</h2>
    <h3>one: <?php echo $one ?></h3>
    <h3>two: <?php echo $two ?></h3>


</body>
</html>