<?php
include("connect.php");
include("function.php");

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

/////login
$chk  = $_GET["en"];
if($chk == "checklogin"){
  $username = $_POST["username"];
  $password = $_POST["password"];
  showlogindata($username,$password, $conn);
}
    function showlogindata($username,$password, $conn){
      // $data = num_rows("ma_login","WHERE username = '$username' AND password = '$password'",$conn);
      // echo $data;
      $data = num_rows("ma_login", "WHERE username = '$username'"AND"WHERE password = '$password'", $conn);
      echo $data;
      if($data){
        echo 1;
        //echo json_encode($data);
      }else{
        echo 0;
      }
      // else if($chk == "checklogin"){
      //   $username = $_POST["username"];
      //   $password = $_POST["password"];
      //   checknum($username,$password,$conn);
      // }
    }

    function checkloginnum($username,$password,$conn){
      $data = num_rows("ma_login", "WHERE username = '$username'","WHERE password = '$password'", $conn);
      echo $data;
    }



    // if( $chk == "getdata"){
    
    //   getdatadata();
    //     }
    //     function getdatadata()
    //     {
    //       $data = selects("device_brand", 
    //       "",
    //       $conn);
    //      if($data){
    //       echo json_encode($data);
    //      }else{
    //       echo 2; 
    //      }
    //    }
  
?>