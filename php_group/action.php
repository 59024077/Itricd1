<?php
include("connect.php");
include("function.php");
session_start();

$chk  = $_GET["en"];
if( $chk == "insert"){
  $ma_date = $_POST["ma_date"];
  $ma_serial_number = $_POST["ma_serial_number"];
  $ma_equipment = $_POST["ma_equipment"];
  $ma_device_brand = $_POST["ma_device_brand"];
  $ma_responsible_department = $_POST["ma_responsible_department"];
  $ma_price = $_POST["ma_price"];
  $ma_date_year = $_POST["ma_date_year"];
  
  

  insertdata($ma_date,$ma_serial_number,$ma_equipment,$ma_device_brand,$ma_responsible_department,$ma_price,$ma_date_year,$conn);

    }else if ($chk == "showdata") {
        $ma_serial_number=$_POST["ma_serial_number"];
        showdata($ma_serial_number,$conn);
      }else if($chk == "edit"){
        $ma_date = $_POST["ma_date"];
        $ma_serial_number = $_POST["ma_serial_number"];
        $ma_equipment = $_POST["ma_equipment"];
        $ma_device_brand = $_POST["ma_device_brand"];
        $ma_responsible_department = $_POST["ma_responsible_department"];
        $ma_price = $_POST["ma_price"];
        $ma_date_year = $_POST["ma_date_year"];
        
        
            edit($ma_date,$ma_serial_number,$ma_equipment,$ma_device_brand,$ma_responsible_department,$ma_price,$ma_date_year,$conn);
      }else if($chk == "check"){
        $ma_serial_number = $_POST["ma_serial_number"];
        checknum($ma_serial_number,$conn);
        
        }else if($chk == "showinfor"){
        $serial_number = $_POST["ma_serial_number"];
        $service_date = $_POST["service_date"];
        showinfor($ma_serial_number,$service_date,$conn);

        //ดึงข้อมูลมา
      }else if($chk == "ma_equipmentx"){
        getelect_de($conn);
      }else if($chk == "ma_device_brandx"){
        getelect_ma($conn);
      }
      
      //SELECTION 
      function getelect_de($conn){
        $data = selects("device_brand","",$conn);
        if($data){
          echo json_encode($data);
        }else {
          echo 0;
        }
      }
      //SELECTION 
      function getelect_ma($conn){
        $data = selects("equipment","",$conn);
        if($data){
          echo json_encode($data);
        }else {
          echo 0;
        }
      }
      /////////////////////////////////////////////////////////////////////////
      function getelect_des($conn){
        $data = selects("equipment","",$conn);
        if($data){
          echo json_encode($data);
        }else {
          echo 0;
        }
      }
      
      function insertdata($ma_date,$ma_serial_number,$ma_equipment,$ma_device_brand,$ma_responsible_department,$ma_price,$ma_date_year,$conn)
       {
        $data = insert("ma_date,ma_serial_number,ma_equipment,ma_device_brand,ma_responsible_department,ma_price,ma_date_year",
        "'$ma_date','$ma_serial_number','$ma_equipment','$ma_device_brand','$ma_responsible_department','$ma_price','$ma_date_year'",
        "maintain",$conn);
        if($data){
         echo 1;
        }else{
         echo 2; 
        }
      }
      function edit($ma_date,$ma_serial_number,$ma_equipment,$ma_device_brand,$ma_responsible_department,$ma_price,$ma_date_year,$conn)
      {
        $data = update("maintain",
                      "ma_date = '$ma_date',ma_equipment ='$ma_equipment',ma_device_brand = '$ma_device_brand',
                      ma_responsible_department = '$ma_responsible_department',ma_price = '$ma_price',ma_date_year = '$ma_date_year'",
                      "WHERE ma_serial_number = '$ma_serial_number'",$conn);
                      
        if ($data) {
          echo 1;
        } else {
          echo 2;
        }
      }
      function checknum($ma_serial_number,$conn){
        $data = num_rows("maintain","WHERE ma_serial_number = '$ma_serial_number'",$conn);
        echo $data;
      }
function showinfor($ma_serial_number,$service_date,$conn){
    $data = select("visitjhos", "WHERE 	visitdate  LIKE '%$service_date%' AND prescriptionno = '$ma_serial_number'", $conn);
    //echo $data;
    if($data){
      echo json_encode($data);
    }else{
      echo 0;
    }
  }

  function showdata($ma_serial_number, $conn){
    $data = select("maintain", "WHERE ma_serial_number = '$ma_serial_number'", $conn);
    // echo $data;
    if($data){
      echo json_encode($data);
    }else{
      echo 0;
    }
  }
  
  //บันทึกข้อมูล เพิ่มข้อมูลยี่ห้ออุปกรณ์
  $chk  = $_GET["en"];
  if( $chk == "insertMA"){
    $ma_equipment = $_POST["ma_equipment"];
  
    insertMAdata($ma_equipment,$conn);
      }
      function insertMAdata($ma_equipment,$conn)
      {
        $data = insert("ma_equipment", 
       "'$ma_equipment'",
       "equipment",$conn);
       if($data){
        echo 1;
       }else{
        echo 2; 
       }
     }function checksnum($ma_equipment,$conn){
      $data = num_rows("equipment","WHERE ma_equipment = '$ma_equipment'");
      echo $data;
    }

    //บันทึกข้อมูล เพิ่มข้อมูลชนิดครุภัณฑ์
  $chk  = $_GET["en"];
  if( $chk == "insertMI"){
    $ma_durable_articles = $_POST["ma_durable_articles"];
  
    insertMIdata($ma_durable_articles,$conn);
      }
      function insertMIdata($ma_durable_articles,$conn)
      {
        $data = insert("ma_durable_articles", 
       "'$ma_durable_articles'",
       "device_brand",$conn);
       if($data){
        echo 1;
       }else{
        echo 2; 
       }
     }function checkssnum($ma_durable_articles,$conn){
      $data = num_rows("device_brand","WHERE ma_durable_articles = '$ma_durable_articles'");
      echo $data;
    }

    

////////////////////////////////login



$chk  = $_GET["en"];
if($chk == "checklogin"){
  $username = $_POST["username"];
  $password = $_POST["password"];
  $data = checklogin($username,$password, $conn);
  // sessionStorage.checklogin($username,$password, $conn);
  echo $data;
}
else if($chk == "getUserData"){
  $username = $_POST["username"];
  $data = select ("ma_login","WHERE username = '$username'",$conn);
  echo json_encode($data);
}

else if($chk == "edituser"){
  $eid = $_POST["eid"];
  $finger_id = $_POST["finger_id"];
  $prefix = $_POST["prefix"];
  $first_name = $_POST["first_name"];
  $last_names = $_POST["last_names"];
  $nickname = $_POST["nickname"];
  $username = $_POST["username"];
  $department_id = $_POST["department_id"];
  $working_group = $_POST["working_group"];
  $position = $_POST["position"];
  
  
    edituser($username,$eid,$finger_id,$prefix,$first_name,$last_names,$nickname,$department_id,$working_group,$position, $conn);
}

      function checklogin($username,$password,$conn){
        $data = select ("ma_login","WHERE username = '$username' AND password = '$password'",$conn);
        
        // if($data == 1){
        //  $_SESSION["username"] = $username;
        // }

        if($data){
          echo json_encode($data);
        }else{
          echo 0;
        }
      }
      function showlogin($eid,$finger_id,$prefix,$first_name,$last_names,$nickname,$department_id,$working_group,$position, $conn){
        // $data = num_rows("ma_login","WHERE username = '$username' AND password = '$password'",$conn);
        // echo $data;
        $data = num_rows("ma_login", "WHERE username = '$username' AND password = '$password'", $conn);
        echo $data;
      if($data){
          //echo 1;
          echo json_encode($data);
        }else{
          echo 0;
        }
      }
      function edituser($username,$eid,$finger_id,$prefix,$first_name,$last_names,$nickname,$department_id,$working_group,$position, $conn)
      {
        $data = update("ma_login",
                      "eid = '$eid',finger_id ='$finger_id',prefix = '$prefix',
                      first_name = '$first_name',last_names = '$last_names',nickname = '$nickname',
                      department_id = '$department_id',working_group = '$working_group',working_group = '$working_group'",
                      "WHERE username = '$username'",$conn);
                      
        if ($data) {
          echo 1;
        } else {
          echo 2;
        }
      }
      // function logout(){
      //   session_destroy();
      //   echo 1;
      // }
      //infor_user//
      // session_start();
      // include("php_group/connect.php");
      // include("php_group/function.php");
      //     $data = select("ma_login","where username='".$_SESSION['username']."'",$conn);
      


///index//
// session_start();
// include("php_group/connect.php");
// include("php_group/function.php");
//     if(is_null($_SESSION["username"])){
//         header("Location:login.html");
//     }
//     $data = select("ma_login","where username='".$_SESSION['username']."'",$conn);


?>