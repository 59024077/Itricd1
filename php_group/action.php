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
      }
      else if($chk == "edit"){
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
  
    insertMAdata($ma_equipment);
  
      }function insertMAdata($ma_equipment)
     
      {
        $data = insertMA("ma_equipment",
       "'$ma_equipment'",
       "device_brand");
       if($data){
        echo 1;
       }else{
        echo 2; 
       }
     }function checksnum($ma_equipment){
      $data = num_rows("device_brand","WHERE ma_equipment = '$ma_equipment'");
      echo $data;
    }

?>