<!-- array_chunk() 函数把一个数组分割为新的数组块。 -->

<!-- <?php
$a=array("a"=>"Cat","b"=>"Dog","c"=>"Horse","d"=>"Cow");
print_r(array_chunk($a,2));
?>

输出：Array ( [0] => Array ( [0] => Cat [1] => Dog ) 
        [1] => Array ( [0] => Horse [1] => Cow ) ) -->

<!-- <?php
$a=array("a"=>"Cat","b"=>"Dog","c"=>"Horse","d"=>"Cow");
print_r(array_chunk($a,2,true));
?>

输出:Array ( [0] => Array ( [a] => Cat [b] => Dog ) 
 [1] => Array ( [c] => Horse [d] => Cow ) ) -->