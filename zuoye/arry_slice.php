<!-- array_slice() 函数在数组中根据条件取出一段值，并返回。
<?php
$a=array(0=>"Dog",1=>"Cat",2=>"Horse",3=>"Bird");
print_r(array_slice($a,-2,1));
?>
Array ( [0] => Cat [1] => Horse ) -->

<!-- <?php
$a=array(0=>"Dog",1=>"Cat",2=>"Horse",3=>"Bird");
print_r(array_slice($a,-2,1));
?>

Array ( [0] => Horse ) -->

<!-- preserve 参数设置为 true：
<?php
$a=array(0=>"Dog",1=>"Cat",2=>"Horse",3=>"Bird");
print_r(array_slice($a,1,2,true));
?>
Array ( [1] => Cat [2] => Horse ) -->


<!-- 带有字符串键： -->

<?php
$a=array("a"=>"Dog","b"=>"Cat","c"=>"Horse","d"=>"Bird");
print_r(array_slice($a,1,2));
?>
<!-- Array ( [b] => Cat [c] => Horse ) -->