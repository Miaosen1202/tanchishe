<!-- array_keys() 函数返回包含数组中所有键名的一个新数组。
如果提供了第二个参数，则只返回键值为该值的键名。
如果 strict 参数指定为 true，则 PHP 会使用全等比较 (===) 来严格检查键值的数据类型。 -->

<!-- <?php
$a=array("a"=>"Horse","b"=>"Cat","c"=>"Dog");
print_r(array_keys($a));
?>

Array ( [0] => a [1] => b [2] => c ) -->

<!-- 使用 value 参数： -->

<!-- <?php
$a=array("a"=>"Horse","b"=>"Cat","c"=>"Dog");
print_r(array_keys($a,"Dog"));
?>
Array ( [0] => c ) -->

<!-- 使用 strict 参数 (false)： -->

<!-- <?php
$a=array(10,20,30,"10");
print_r(array_keys($a,"10",false));
?>
Array ( [0] => 0 [1] => 3 ) -->

<!-- 使用 strict 参数 (true)： -->
<?php
$a=array(10,20,30,"10");
print_r(array_keys($a,"10",true));
?>

Array ( [0] => 3 )