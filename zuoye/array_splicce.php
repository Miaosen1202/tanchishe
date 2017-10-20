<!-- array_splice() 函数与 array_slice() 函数类似，选择数组中的一系列元素，但不返回，而是删除它们并用其它值代替。

如果提供了第四个参数，则之前选中的那些元素将被第四个参数指定的数组取代。

最后生成的数组将会返 -->

<!-- <?php
$a1=array(0=>"Dog",1=>"Cat",2=>"Horse",3=>"Bird");
$a2=array(0=>"Tiger",1=>"Lion");
array_splice($a1,0,2,$a2);
print_r($a1);
?>

输出:Array ( [0] => Tiger [1] => Lion [2] => Horse [3] => Bird ) -->

<!-- 与例子 1 相同，但是输出返回的数组： -->
<!-- <?php
$a1=array(0=>"Dog",1=>"Cat",2=>"Horse",3=>"Bird");
$a2=array(0=>"Tiger",1=>"Lion");
print_r(array_splice($a1,0,2,$a2));
?>

Array ( [0] => Dog [1] => Cat ) -->

<!-- 
 length 参数设置为 0
<?php
$a1=array(0=>"Dog",1=>"Cat");
$a2=array(0=>"Tiger",1=>"Lion");
array_splice($a1,1,0,$a2);
print_r($a1);
?>

Array ( [0] => Dog [1] => Tiger [2] => Lion [3] => Cat ) -->