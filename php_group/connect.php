<?PHP

$conn = new mysqli('localhost','root','','itricd');
 //ตั้งค่าภาษาไทย
 $conn->set_charset("utf8");
 //ตรวจสอบว่า Database เชื่อมต่อสำเร็จหรือไม่
 if( $conn->connect_errno ){
     die("Connection failed" .$conn->connect_error);
 }
 
?>