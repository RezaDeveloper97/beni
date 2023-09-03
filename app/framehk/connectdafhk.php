<?php
///namespace App\framehk;
try
{ $connect_db_fhk="";
$dbname_get_fhk=env('DB_DATABASE', 'appbkdb');
$db_user_get_fhk=env('DB_USERNAME', 'root');
$db_pass_get_fhk=env('DB_PASSWORD', '');
////$connect_db_fhk=new pdo("mysql:host=localhost;dbname=".$dbname_get_fhk,$db_user_get_fhk,$db_pass_get_fhk);
/////$connect_db_fhk->exec("SET NAMES utf8");
///
return $connect_db_fhk=DB::connection()->getPdo();
}catch (PDOException $error1){
///echo "eroor db connect:".$error1->__toString();
echo "eroor db connect 546123158";
exit();
}
?>
