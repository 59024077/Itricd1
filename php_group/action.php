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



//////////////////////////////////////////////////////////มิก

if( $chk == "insertmix"){
  
  $dogta_ID = $_POST["dogta_ID"];
  $fa_text2 = $_POST["fa_text2"];
  $fa_text3 = $_POST["fa_text3"];
  $fa_text4 = $_POST["fa_text4"];
  $fa_text5 = $_POST["fa_text5"];
  $fa_text6 = $_POST["fa_text6"];
  $fa_text7 = $_POST["fa_text7"];
  $fa_text8 = $_POST["fa_text8"];
  $fa_text9 = $_POST["fa_text9"];
  $fa_text10 = $_POST["fa_text10"];
  $fa_text11 = $_POST["fa_text11"];
  $fa_text12 = $_POST["fa_text12"];
  $fa_text13 = $_POST["fa_text13"];
  $fa_yourself = $_POST["fa_yourself"];
  $fa_yourself1 = $_POST["fa_yourself1"];
  $fa_yourself2 = $_POST["fa_yourself2"];
  $fa_yourself3 = $_POST["fa_yourself3"];
  $fa_yourself4 = $_POST["fa_yourself4"];
  $fa_yourself5 = $_POST["fa_yourself5"];
  $fa_yourself6 = $_POST["fa_yourself6"];
  $fa_hurt_others = $_POST["fa_hurt_others"];
  $fa_hurt_others1 = $_POST["fa_hurt_others1"];
  $fa_hurt_others2 = $_POST["fa_hurt_others2"];
  $fa_hurt_others3 = $_POST["fa_hurt_others3"];
  $fa_hurt_others4 = $_POST["fa_hurt_others4"];
  $fa_hurt_others5 = $_POST["fa_hurt_others5"];
  $fa_hurt_others6 = $_POST["fa_hurt_others6"];
  $fa_destroy_items = $_POST["fa_destroy_items"];
  $fa_destroy_items1 = $_POST["fa_destroy_items1"];
  $fa_destroy_items2 = $_POST["fa_destroy_items2"];
  $fa_destroy_items3 = $_POST["fa_destroy_items3"];
  $fa_destroy_items4 = $_POST["fa_destroy_items4"];
  $fa_destroy_items5 = $_POST["fa_destroy_items5"];
  $fa_destroy_items6 = $_POST["fa_destroy_items6"];
  $fa_hurt = $_POST["fa_hurt"];
  $fa_hurt1 = $_POST["fa_hurt1"];
  $fa_hurt2 = $_POST["fa_hurt2"];
  $fa_hurt3 = $_POST["fa_hurt3"];
  $fa_hurt4 = $_POST["fa_hurt4"];
  $fa_hurt5 = $_POST["fa_hurt5"];
  $fa_hurt6 = $_POST["fa_hurt6"];
  $fa_out_hospita = $_POST["fa_out_hospita"];
  $fa_out_hospita1 = $_POST["fa_out_hospita1"];
  $fa_out_hospita2 = $_POST["fa_out_hospita2"];
  $fa_out_hospita3 = $_POST["fa_out_hospita3"];
  $fa_out_hospita4 = $_POST["fa_out_hospita4"];
  $fa_out_hospita5 = $_POST["fa_out_hospita5"];
  $fa_out_hospita6 = $_POST["fa_out_hospita6"];
  $fa_walk_out = $_POST["fa_walk_out"];
  $fa_walk_out1 = $_POST["fa_walk_out1"];
  $fa_walk_out2 = $_POST["fa_walk_out2"];
  $fa_walk_out3 = $_POST["fa_walk_out3"];
  $fa_walk_out4 = $_POST["fa_walk_out4"];
  $fa_walk_out5 = $_POST["fa_walk_out5"];
  $fa_walk_out6 = $_POST["fa_walk_out6"];
  $fa_balance = $_POST["fa_balance"];
  $fa_balance1 = $_POST["fa_balance1"];
  $fa_balance2 = $_POST["fa_balance2"];
  $fa_balance3 = $_POST["fa_balance3"];
  $fa_balance4 = $_POST["fa_balance4"];
  $fa_balance5 = $_POST["fa_balance5"];
  $fa_balance6 = $_POST["fa_balance6"];
  $equilibrium = $_POST["equilibrium"];
  $equilibrium1 = $_POST["equilibrium1"];
  $equilibrium2 = $_POST["equilibrium2"];
  $equilibrium3 = $_POST["equilibrium3"];
  $equilibrium4 = $_POST["equilibrium4"];
  $equilibrium5 = $_POST["equilibrium5"];
  $equilibrium6 = $_POST["equilibrium6"];
  $fa_heart_disease = $_POST["fa_heart_disease"];
  $fa_heart_disease1 = $_POST["fa_heart_disease1"];
  $fa_heart_disease2 = $_POST["fa_heart_disease2"];
  $fa_heart_disease3 = $_POST["fa_heart_disease3"];
  $fa_heart_disease4 = $_POST["fa_heart_disease4"];
  $fa_heart_disease5 = $_POST["fa_heart_disease5"];
  $fa_heart_disease6 = $_POST["fa_heart_disease6"];
  $fa_tired_easily = $_POST["fa_tired_easily"];
  $fa_tired_easily1 = $_POST["fa_tired_easily1"];
  $fa_tired_easily2 = $_POST["fa_tired_easily2"];
  $fa_tired_easily3 = $_POST["fa_tired_easily3"];
  $fa_tired_easily4 = $_POST["fa_tired_easily4"];
  $fa_tired_easily5 = $_POST["fa_tired_easily5"];
  $fa_tired_easily6 = $_POST["fa_tired_easily6"];
  $fa_fall_flat = $_POST["fa_fall_flat"];
  $fa_fall_flat1 = $_POST["fa_fall_flat1"];
  $fa_fall_flat2 = $_POST["fa_fall_flat2"];
  $fa_fall_flat3 = $_POST["fa_fall_flat3"];
  $fa_fall_flat4 = $_POST["fa_fall_flat4"];
  $fa_fall_flat5 = $_POST["fa_fall_flat5"];
  $fa_fall_flat6 = $_POST["fa_fall_flat6"];
  $fa_well = $_POST["fa_well"];
  $fa_well1 = $_POST["fa_well1"];
  $fa_well2 = $_POST["fa_well2"];
  $fa_well3 = $_POST["fa_well3"];
  $fa_well4 = $_POST["fa_well4"];
  $fa_well5 = $_POST["fa_well5"];
  $fa_well6 = $_POST["fa_well6"];

  insertmixdata($dogta_ID,$fa_text2,$fa_text3,$fa_text4,$fa_text5,$fa_text6,$fa_text7,$fa_text8,$fa_text9,$fa_text10,$fa_text11,$fa_text12,$fa_text13,
  $fa_yourself,$fa_yourself1,$fa_yourself2,$fa_yourself3,$fa_yourself4,$fa_yourself5,$fa_yourself6,
   $fa_hurt_others, $fa_hurt_others1,$fa_hurt_others2,$fa_hurt_others3,$fa_hurt_others4,$fa_hurt_others5,$fa_hurt_others6,
  $fa_destroy_items,$fa_destroy_items1,$fa_destroy_items2,$fa_destroy_items3,$fa_destroy_items4,$fa_destroy_items5,$fa_destroy_items6,
  $fa_hurt,$fa_hurt1,$fa_hurt2,$fa_hurt3,$fa_hurt4,$fa_hurt5,$fa_hurt6,
  $fa_out_hospita,$fa_out_hospita1,$fa_out_hospita2,$fa_out_hospita3,$fa_out_hospita4,$fa_out_hospita5,$fa_out_hospita6,
  $fa_walk_out,$fa_walk_out1,$fa_walk_out2,$fa_walk_out3,$fa_walk_out4,$fa_walk_out5,$fa_walk_out6,
  $fa_balance,$fa_balance1,$fa_balance2,$fa_balance3,$fa_balance4,$fa_balance5,$fa_balance6,
  $equilibrium,$equilibrium1,$equilibrium2,$equilibrium3,$equilibrium4,$equilibrium5,$equilibrium6,
  $fa_heart_disease,$fa_heart_disease1,$fa_heart_disease2,$fa_heart_disease3,$fa_heart_disease4,$fa_heart_disease5,$fa_heart_disease6,
  $fa_tired_easily,$fa_tired_easily1,$fa_tired_easily2,$fa_tired_easily3,$fa_tired_easily4,$fa_tired_easily5,$fa_tired_easily6,
  $fa_fall_flat,$fa_fall_flat1,$fa_fall_flat2,$fa_fall_flat3,$fa_fall_flat4,$fa_fall_flat5,$fa_fall_flat6,
  $fa_well,$fa_well1,$fa_well2,$fa_well3,$fa_well4,$fa_well5,$fa_well6,$conn);

    }else if ($chk == "showdatas") {
      $dogta_ID=$_POST["dogta_ID"];
        showdatas($dogta_ID,$conn);
      }
      else if($chk == "editmix"){
        $dogta_ID = $_POST["dogta_ID"];
        $fa_text2 = $_POST["fa_text2"];
        $fa_text3 = $_POST["fa_text3"];
        $fa_text4 = $_POST["fa_text4"];
        $fa_text5 = $_POST["fa_text5"];
        $fa_text6 = $_POST["fa_text6"];
        $fa_text7 = $_POST["fa_text7"];
        $fa_text8 = $_POST["fa_text8"];
        $fa_text9 = $_POST["fa_text9"];
        $fa_text10 = $_POST["fa_text10"];
        $fa_text11 = $_POST["fa_text11"];
        $fa_text12 = $_POST["fa_text12"];
        $fa_text13 = $_POST["fa_text13"];
        $fa_yourself = $_POST["fa_yourself"];
        $fa_yourself1 = $_POST["fa_yourself1"];
        $fa_yourself2 = $_POST["fa_yourself2"];
        $fa_yourself3 = $_POST["fa_yourself3"];
        $fa_yourself4 = $_POST["fa_yourself4"];
        $fa_yourself5 = $_POST["fa_yourself5"];
        $fa_yourself6 = $_POST["fa_yourself6"];
        $fa_hurt_others = $_POST["fa_hurt_others"];
        $fa_hurt_others1 = $_POST["fa_hurt_others1"];
        $fa_hurt_others2 = $_POST["fa_hurt_others2"];
        $fa_hurt_others3 = $_POST["fa_hurt_others3"];
        $fa_hurt_others4 = $_POST["fa_hurt_others4"];
        $fa_hurt_others5 = $_POST["fa_hurt_others5"];
        $fa_hurt_others6 = $_POST["fa_hurt_others6"];
        $fa_destroy_items = $_POST["fa_destroy_items"];
        $fa_destroy_items1 = $_POST["fa_destroy_items1"];
        $fa_destroy_items2 = $_POST["fa_destroy_items2"];
        $fa_destroy_items3 = $_POST["fa_destroy_items3"];
        $fa_destroy_items4 = $_POST["fa_destroy_items4"];
        $fa_destroy_items5 = $_POST["fa_destroy_items5"];
        $fa_destroy_items6 = $_POST["fa_destroy_items6"];
        $fa_hurt = $_POST["fa_hurt"];
        $fa_hurt1 = $_POST["fa_hurt1"];
        $fa_hurt2 = $_POST["fa_hurt2"];
        $fa_hurt3 = $_POST["fa_hurt3"];
        $fa_hurt4 = $_POST["fa_hurt4"];
        $fa_hurt5 = $_POST["fa_hurt5"];
        $fa_hurt6 = $_POST["fa_hurt6"];
        $fa_out_hospita = $_POST["fa_out_hospita"];
        $fa_out_hospita1 = $_POST["fa_out_hospita1"];
        $fa_out_hospita2 = $_POST["fa_out_hospita2"];
        $fa_out_hospita3 = $_POST["fa_out_hospita3"];
        $fa_out_hospita4 = $_POST["fa_out_hospita4"];
        $fa_out_hospita5 = $_POST["fa_out_hospita5"];
        $fa_out_hospita6 = $_POST["fa_out_hospita6"];
        $fa_walk_out = $_POST["fa_walk_out"];
        $fa_walk_out1 = $_POST["fa_walk_out1"];
        $fa_walk_out2 = $_POST["fa_walk_out2"];
        $fa_walk_out3 = $_POST["fa_walk_out3"];
        $fa_walk_out4 = $_POST["fa_walk_out4"];
        $fa_walk_out5 = $_POST["fa_walk_out5"];
        $fa_walk_out6 = $_POST["fa_walk_out6"];
        $fa_balance = $_POST["fa_balance"];
        $fa_balance1 = $_POST["fa_balance1"];
        $fa_balance2 = $_POST["fa_balance2"];
        $fa_balance3 = $_POST["fa_balance3"];
        $fa_balance4 = $_POST["fa_balance4"];
        $fa_balance5 = $_POST["fa_balance5"];
        $fa_balance6 = $_POST["fa_balance6"];
        $equilibrium = $_POST["equilibrium"];
        $equilibrium1 = $_POST["equilibrium1"];
        $equilibrium2 = $_POST["equilibrium2"];
        $equilibrium3 = $_POST["equilibrium3"];
        $equilibrium4 = $_POST["equilibrium4"];
        $equilibrium5 = $_POST["equilibrium5"];
        $equilibrium6 = $_POST["equilibrium6"];
        $fa_heart_disease = $_POST["fa_heart_disease"];
        $fa_heart_disease1 = $_POST["fa_heart_disease1"];
        $fa_heart_disease2 = $_POST["fa_heart_disease2"];
        $fa_heart_disease3 = $_POST["fa_heart_disease3"];
        $fa_heart_disease4 = $_POST["fa_heart_disease4"];
        $fa_heart_disease5 = $_POST["fa_heart_disease5"];
        $fa_heart_disease6 = $_POST["fa_heart_disease6"];
        $fa_tired_easily = $_POST["fa_tired_easily"];
        $fa_tired_easily1 = $_POST["fa_tired_easily1"];
        $fa_tired_easily2 = $_POST["fa_tired_easily2"];
        $fa_tired_easily3 = $_POST["fa_tired_easily3"];
        $fa_tired_easily4 = $_POST["fa_tired_easily4"];
        $fa_tired_easily5 = $_POST["fa_tired_easily5"];
        $fa_tired_easily6 = $_POST["fa_tired_easily6"];
        $fa_fall_flat = $_POST["fa_fall_flat"];
        $fa_fall_flat1 = $_POST["fa_fall_flat1"];
        $fa_fall_flat2 = $_POST["fa_fall_flat2"];
        $fa_fall_flat3 = $_POST["fa_fall_flat3"];
        $fa_fall_flat4 = $_POST["fa_fall_flat4"];
        $fa_fall_flat5 = $_POST["fa_fall_flat5"];
        $fa_fall_flat6 = $_POST["fa_fall_flat6"];
        $fa_well = $_POST["fa_well"];
        $fa_well1 = $_POST["fa_well1"];
        $fa_well2 = $_POST["fa_well2"];
        $fa_well3 = $_POST["fa_well3"];
        $fa_well4 = $_POST["fa_well4"];
        $fa_well5 = $_POST["fa_well5"];
        $fa_well6 = $_POST["fa_well6"];
        
            editmix($dogta_ID,$fa_text2,$fa_text3,$fa_text4,$fa_text5,$fa_text6,$fa_text7,$fa_text8,$fa_text9,$fa_text10,$fa_text11,$fa_text12,$fa_text13,
            $fa_yourself,$fa_yourself1,$fa_yourself2,$fa_yourself3,$fa_yourself4,$fa_yourself5,$fa_yourself6,
             $fa_hurt_others, $fa_hurt_others1,$fa_hurt_others2,$fa_hurt_others3,$fa_hurt_others4,$fa_hurt_others5,$fa_hurt_others6,
             $fa_destroy_items,$fa_destroy_items1,$fa_destroy_items2,$fa_destroy_items3,$fa_destroy_items4,$fa_destroy_items5,$fa_destroy_items6,
             $fa_hurt,$fa_hurt1,$fa_hurt2,$fa_hurt3,$fa_hurt4,$fa_hurt5,$fa_hurt6,
             $fa_out_hospita,$fa_out_hospita1,$fa_out_hospita2,$fa_out_hospita3,$fa_out_hospita4,$fa_out_hospita5,$fa_out_hospita6,
            $fa_walk_out,$fa_walk_out1,$fa_walk_out2,$fa_walk_out3,$fa_walk_out4,$fa_walk_out5,$fa_walk_out6,
            $fa_balance,$fa_balance1,$fa_balance2,$fa_balance3,$fa_balance4,$fa_balance5,$fa_balance6,
            $equilibrium,$equilibrium1,$equilibrium2,$equilibrium3,$equilibrium4,$equilibrium5,$equilibrium6,
            $fa_heart_disease,$fa_heart_disease1,$fa_heart_disease2,$fa_heart_disease3,$fa_heart_disease4,$fa_heart_disease5,$fa_heart_disease6,
            $fa_tired_easily,$fa_tired_easily1,$fa_tired_easily2,$fa_tired_easily3,$fa_tired_easily4,$fa_tired_easily5,$fa_tired_easily6,
            $fa_fall_flat,$fa_fall_flat1,$fa_fall_flat2,$fa_fall_flat3,$fa_fall_flat4,$fa_fall_flat5,$fa_fall_flat6,
            $fa_well,$fa_well1,$fa_well2,$fa_well3,$fa_well4,$fa_well5,$fa_well6,$conn);
      }else if($chk == "check1"){
        $dogta_ID = $_POST["dogta_ID"];
        checknummix($dogta_ID,$conn);
        
        }else if($chk == "showinfor"){
          $serial_numder = $_POST["dogta_ID"];
        $service_date = $_POST["service_date"];
        showinfor($dogta_ID,$service_date,$conn);
      }
      
      function insertmixdata($dogta_ID,$fa_text2,$fa_text3,$fa_text4,$fa_text5,$fa_text6,$fa_text7,$fa_text8,$fa_text9,$fa_text10,$fa_text11,$fa_text12,$fa_text13,
      $fa_yourself,$fa_yourself1,$fa_yourself2,$fa_yourself3,$fa_yourself4,$fa_yourself5,$fa_yourself6,
       $fa_hurt_others, $fa_hurt_others1,$fa_hurt_others2,$fa_hurt_others3,$fa_hurt_others4,$fa_hurt_others5,$fa_hurt_others6,
       $fa_destroy_items,$fa_destroy_items1,$fa_destroy_items2,$fa_destroy_items3,$fa_destroy_items4,$fa_destroy_items5,$fa_destroy_items6,
       $fa_hurt,$fa_hurt1,$fa_hurt2,$fa_hurt3,$fa_hurt4,$fa_hurt5,$fa_hurt6,
       $fa_out_hospita,$fa_out_hospita1,$fa_out_hospita2,$fa_out_hospita3,$fa_out_hospita4,$fa_out_hospita5,$fa_out_hospita6,
      $fa_walk_out,$fa_walk_out1,$fa_walk_out2,$fa_walk_out3,$fa_walk_out4,$fa_walk_out5,$fa_walk_out6,
      $fa_balance,$fa_balance1,$fa_balance2,$fa_balance3,$fa_balance4,$fa_balance5,$fa_balance6,
      $equilibrium,$equilibrium1,$equilibrium2,$equilibrium3,$equilibrium4,$equilibrium5,$equilibrium6,
      $fa_heart_disease,$fa_heart_disease1,$fa_heart_disease2,$fa_heart_disease3,$fa_heart_disease4,$fa_heart_disease5,$fa_heart_disease6,
      $fa_tired_easily,$fa_tired_easily1,$fa_tired_easily2,$fa_tired_easily3,$fa_tired_easily4,$fa_tired_easily5,$fa_tired_easily6,
      $fa_fall_flat,$fa_fall_flat1,$fa_fall_flat2,$fa_fall_flat3,$fa_fall_flat4,$fa_fall_flat5,$fa_fall_flat6,
      $fa_well,$fa_well1,$fa_well2,$fa_well3,$fa_well4,$fa_well5,$fa_well6,$conn)
       {
        $data = insert("dogta_ID,fa_text2,fa_text3,fa_text4,fa_text5,fa_text6,fa_text7,fa_text8,fa_text9,fa_text10,fa_text11,fa_text12,fa_text13,
        fa_yourself,fa_yourself1,fa_yourself2,fa_yourself3,fa_yourself4,fa_yourself5,fa_yourself6,
        fa_hurt_others,fa_hurt_others1,fa_hurt_others2,fa_hurt_others3,fa_hurt_others4,fa_hurt_others5,fa_hurt_others6,
        fa_destroy_items,fa_destroy_items1,fa_destroy_items2,fa_destroy_items3,fa_destroy_items4,fa_destroy_items5,fa_destroy_items6,
        fa_hurt,fa_hurt1,fa_hurt2,fa_hurt3,fa_hurt4,fa_hurt5,fa_hurt6,
        fa_out_hospita,fa_out_hospita1,fa_out_hospita2,fa_out_hospita3,fa_out_hospita4,fa_out_hospita5,fa_out_hospita6,
        fa_walk_out,fa_walk_out1,fa_walk_out2,fa_walk_out3,fa_walk_out4,fa_walk_out5,fa_walk_out6,
        fa_balance,fa_balance1,fa_balance2,fa_balance3,fa_balance4,fa_balance5,fa_balance6,
        equilibrium,equilibrium1,equilibrium2,equilibrium3,equilibrium4,equilibrium5,equilibrium6,
        fa_heart_disease,fa_heart_disease1,fa_heart_disease2,fa_heart_disease3,fa_heart_disease4,fa_heart_disease5,fa_heart_disease6,
        fa_tired_easily,fa_tired_easily1,fa_tired_easily2,fa_tired_easily3,fa_tired_easily4,fa_tired_easily5,fa_tired_easily6,
        fa_fall_flat,fa_fall_flat1,fa_fall_flat2,fa_fall_flat3,fa_fall_flat4,fa_fall_flat5,fa_fall_flat6,
        fa_well,fa_well1,fa_well2,fa_well3,fa_well4,fa_well5,fa_well6",
        "'$dogta_ID','$fa_text2','$fa_text3','$fa_text4','$fa_text5','$fa_text6','$fa_text7','$fa_text8','$fa_text9','$fa_text10','$fa_text11','$fa_text12','$fa_text13',
        '$fa_yourself','$fa_yourself1','$fa_yourself2','$fa_yourself3','$fa_yourself4','$fa_yourself5','$fa_yourself6',
        '$fa_hurt_others','$fa_hurt_others1','$fa_hurt_others2','$fa_hurt_others3','$fa_hurt_others4','$fa_hurt_others5','$fa_hurt_others6',
        '$fa_destroy_items','$fa_destroy_items1','$fa_destroy_items2','$fa_destroy_items3','$fa_destroy_items4','$fa_destroy_items5','$fa_destroy_items6',
        '$fa_hurt','$fa_hurt1','$fa_hurt2','$fa_hurt3','$fa_hurt4','$fa_hurt5','$fa_hurt6',
        '$fa_out_hospita','$fa_out_hospita1','$fa_out_hospita2','$fa_out_hospita3','$fa_out_hospita4','$fa_out_hospita5','$fa_out_hospita6',
        '$fa_walk_out','$fa_walk_out1','$fa_walk_out2','$fa_walk_out3','$fa_walk_out4','$fa_walk_out5','$fa_walk_out6',
        '$fa_balance','$fa_balance1','$fa_balance2','$fa_balance3','$fa_balance4','$fa_balance5','$fa_balance6',
        '$equilibrium','$equilibrium1','$equilibrium2','$equilibrium3','$equilibrium4','$equilibrium5','$equilibrium6',
        '$fa_heart_disease','$fa_heart_disease1','$fa_heart_disease2','$fa_heart_disease3','$fa_heart_disease4','$fa_heart_disease5','$fa_heart_disease6',
        '$fa_tired_easily','$fa_tired_easily1','$fa_tired_easily2','$fa_tired_easily3','$fa_tired_easily4','$fa_tired_easily5','$fa_tired_easily6',
        '$fa_fall_flat','$fa_fall_flat1','$fa_fall_flat2','$fa_fall_flat3','$fa_fall_flat4','$fa_fall_flat5','$fa_fall_flat6',
        '$fa_well','$fa_well1','$fa_well2','$fa_well3','$fa_well4','$fa_well5','$fa_well6'","maintain_hot",$conn);
        if($data){
         echo 1;
        }else{
         echo 2; 
        }
      }
      
      function editmix($dogta_ID,$fa_text2,$fa_text3,$fa_text4,$fa_text5,$fa_text6,$fa_text7,$fa_text8,$fa_text9,$fa_text10,$fa_text11,$fa_text12,$fa_text13,
      $fa_yourself,$fa_yourself1,$fa_yourself2,$fa_yourself3,$fa_yourself4,$fa_yourself5,$fa_yourself6,
      $fa_hurt_others, $fa_hurt_others1,$fa_hurt_others2,$fa_hurt_others3,$fa_hurt_others4,$fa_hurt_others5,$fa_hurt_others6,
      $fa_destroy_items,$fa_destroy_items1,$fa_destroy_items2,$fa_destroy_items3,$fa_destroy_items4,$fa_destroy_items5,$fa_destroy_items6,
      $fa_hurt,$fa_hurt1,$fa_hurt2,$fa_hurt3,$fa_hurt4,$fa_hurt5,$fa_hurt6,
      $fa_out_hospita,$fa_out_hospita1,$fa_out_hospita2,$fa_out_hospita3,$fa_out_hospita4,$fa_out_hospita5,$fa_out_hospita6,
      $fa_walk_out,$fa_walk_out1,$fa_walk_out2,$fa_walk_out3,$fa_walk_out4,$fa_walk_out5,$fa_walk_out6,
      $fa_balance,$fa_balance1,$fa_balance2,$fa_balance3,$fa_balance4,$fa_balance5,$fa_balance6,
      $equilibrium,$equilibrium1,$equilibrium2,$equilibrium3,$equilibrium4,$equilibrium5,$equilibrium6,
      $fa_heart_disease,$fa_heart_disease1,$fa_heart_disease2,$fa_heart_disease3,$fa_heart_disease4,$fa_heart_disease5,$fa_heart_disease6,
      $fa_tired_easily,$fa_tired_easily1,$fa_tired_easily2,$fa_tired_easily3,$fa_tired_easily4,$fa_tired_easily5,$fa_tired_easily6,
      $fa_fall_flat,$fa_fall_flat1,$fa_fall_flat2,$fa_fall_flat3,$fa_fall_flat4,$fa_fall_flat5,$fa_fall_flat6,
      $fa_well,$fa_well1,$fa_well2,$fa_well3,$fa_well4,$fa_well5,$fa_well6,$conn)
      {
        $data = update("maintain_hot","`fa_text2`='$fa_text2',`fa_text3`='$fa_text3',`fa_text4`='$fa_text4',`fa_text5`='$fa_text5',
  `fa_text6`='$fa_text6',`fa_text7`='$fa_text7',`fa_text8`='$fa_text8',`fa_text9`='$fa_text9',`fa_text10`='$fa_text10',
  `fa_text11`='$fa_text11',`fa_text12`='$fa_text12',`fa_text13`='$fa_text13',
  `fa_yourself`='$fa_yourself',`fa_yourself1`='$fa_yourself1',`fa_yourself2`='$fa_yourself2', `fa_yourself3`='$fa_yourself3',
  `fa_yourself4`='$fa_yourself4', `fa_yourself5`='$fa_yourself5', `fa_yourself6`='$fa_yourself6',
  `fa_hurt_others`='$fa_hurt_others',`fa_hurt_others1`='$fa_hurt_others1',`fa_hurt_others2`='$fa_hurt_others2',
  `fa_hurt_others3`='$fa_hurt_others3',`fa_hurt_others4`='$fa_hurt_others4',`fa_hurt_others5`='$fa_hurt_others5',
  `fa_hurt_others6`='$fa_hurt_others6',
  `fa_destroy_items`='$fa_destroy_items',`fa_destroy_items1`='$fa_destroy_items1',`fa_destroy_items2`='$fa_destroy_items2',
  `fa_destroy_items3`='$fa_destroy_items3',`fa_destroy_items4`='$fa_destroy_items4',`fa_destroy_items5`='$fa_destroy_items5',
  `fa_destroy_items6`='$fa_destroy_items6',
  `fa_hurt`='$fa_hurt',`fa_hurt1`='$fa_hurt1',`fa_hurt2`='$fa_hurt2',`fa_hurt3`='$fa_hurt3',`fa_hurt4`='$fa_hurt4',`fa_hurt5`='$fa_hurt5',
  `fa_hurt6`='$fa_hurt6',
  `fa_out_hospita`='$fa_out_hospita',`fa_out_hospita1`='$fa_out_hospita1',`fa_out_hospita2`='$fa_out_hospita2',
  `fa_out_hospita3`='$fa_out_hospita3', `fa_out_hospita4`='$fa_out_hospita4', `fa_out_hospita5`='$fa_out_hospita5',
  `fa_out_hospita6`='$fa_out_hospita6',
  `fa_walk_out`='$fa_walk_out',`fa_walk_out1`='$fa_walk_out1',`fa_walk_out2`='$fa_walk_out2',`fa_walk_out3`='$fa_walk_out3',
  `fa_walk_out4`='$fa_walk_out4',`fa_walk_out5`='$fa_walk_out5',`fa_walk_out6`='$fa_walk_out6',
  `fa_balance`='$fa_balance',`fa_balance1`='$fa_balance1',`fa_balance2`='$fa_balance2',`fa_balance3`='$fa_balance3',
  `fa_balance4`='$fa_balance4',`fa_balance5`='$fa_balance5',`fa_balance6`='$fa_balance6',
  `equilibrium`='$equilibrium',`equilibrium1`='$equilibrium1',`equilibrium2`='$equilibrium2',`equilibrium3`='$equilibrium3',
  `equilibrium4`='$equilibrium4',`equilibrium5`='$equilibrium5',`equilibrium6`='$equilibrium6',
  `fa_heart_disease`='$fa_heart_disease',`fa_heart_disease1`='$fa_heart_disease1',`fa_heart_disease2`='$fa_heart_disease2',
  `fa_heart_disease3`='$fa_heart_disease3',`fa_heart_disease4`='$fa_heart_disease4',`fa_heart_disease5`='$fa_heart_disease5',
  `fa_heart_disease6`='$fa_heart_disease6',
  `fa_tired_easily`='$fa_tired_easily',`fa_tired_easily1`='$fa_tired_easily1',`fa_tired_easily2`='$fa_tired_easily2',
  `fa_tired_easily3`='$fa_tired_easily3',`fa_tired_easily4`='$fa_tired_easily4',`fa_tired_easily5`='$fa_tired_easily5',
  `fa_tired_easily6`='$fa_tired_easily6',
  `fa_fall_flat`='$fa_fall_flat',`fa_fall_flat1`='$fa_fall_flat1',`fa_fall_flat2`='$fa_fall_flat2',`fa_fall_flat3`='$fa_fall_flat3',
  `fa_fall_flat4`='$fa_fall_flat4',`fa_fall_flat5`='$fa_fall_flat5',`fa_fall_flat6`='$fa_fall_flat6',
  `fa_well`='$fa_well',`fa_well1`='$fa_well1',`fa_well2`='$fa_well2',`fa_well3`='$fa_well3',`fa_well4`='$fa_well4',`fa_well5`='$fa_well5',
  `fa_well6`='$fa_well6'","WHERE `dogta_ID` = '$dogta_ID' ",$conn);
                      
        if ($data) {
          echo 1;
        } else {
          echo 2;
        }
      }
      function checknummix($dogta_ID,$conn){
        $data = num_rows("maintain_hot","WHERE dogta_ID = '$dogta_ID'",$conn);
        echo $data;
      }
function showinformix($dogta_ID,$service_date,$conn){
    $data = select("visitjhos", "WHERE 	visitdate  LIKE '%$service_date%' AND prescriptionno = '$dogta_ID'", $conn);
    //echo $data;
    if($data){
      echo json_encode($data);
    }else{
      echo 0;
    }
  }
  function showdatas($dogta_ID,$conn)
  {
    $data = select("maintain_hot", "WHERE dogta_ID =  '$dogta_ID'", $conn);
    if ($data) {
      echo json_encode($data);
    } else {
      echo 0;
    }
  }
 
?>
