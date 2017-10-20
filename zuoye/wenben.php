<?php 
if(isset($_GET["one"])&& strlen(trim($_GET["one"]))!=0
&& isset($_GET["two"]) && strlen( trim($_GET["two"]))!=0){
    $one=$_GET["one"];
    $two=$_GET["two"];
}else {
    exit("<h3>你没有权限访问请输入内容</h3>");
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        h2{
            color:#ccc;
        }
        h3 {
            color:blue;
        }
        h4 {
            color:red;
        }
    </style>
</head>
<body>
    <h2>你输入的参数为:</h2>
    <h3>one:<?php echo $one ?></h3>
    <h4>two:<?php echo $two ?></h4>
</body>
</html>