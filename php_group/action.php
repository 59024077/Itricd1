  <?php 
  include("connection.php");
  include("function.php");

  $chk  = $_GET["en"];
if( $chk == "insert_ma"){
  $ma_date = $_POST["ma_date"];
  $serial_number = $_POST["serial_number"];
  $ma_equipment = $_POST["ma_equipment"];
  $ma_device_brand = $_POST["ma_device_brand"];
  $ma_responsible_department = $_POST["ma_responsible_department"];
  $ma_price = $_POST["ma_price"];
  $ma_fiscal_year = $_POST["ma_fiscal_year"];

      insertdata($ma_date,$serial_number,$ma_equipment,$ma_device_brand,$ma_responsible_department,$ma_price,$ma_fiscal_year,$conn);  

  }

  function insertdata($ma_date,$serial_number,$ma_equipment,$ma_device_brand,$ma_responsible_department,$ma_price,$ma_fiscal_year,$conn){
      $data = insert("ma_date,serial_number,ma_equipment,ma_device_brand,ma_responsible_department,ma_price,ma_fiscal_year",
    "'$ma_date','$serial_number','$ma_equipment','$ma_device_brand','$ma_responsible_department','$ma_price','$ma_fiscal_year'",
    "maintain",$conn);
    if($data){
     echo 1;
    }else{
     echo 2; 
    }
  }
else if($chk=="edit"){
  $ma_date = $_POST["ma_date"];
  $serial_number = $_POST["serial_number"];
  $ma_equipment = $_POST["ma_equipment"];
  $ma_device_brand = $_POST["ma_device_brand"];
  $ma_responsible_department = $_POST["ma_responsible_department"];
  $ma_price = $_POST["ma_price"];
  $ma_fiscal_year = $_POST["ma_fiscal_year"];
  
      edit($ma_date,$serial_number,$ma_equipment,$ma_device_brand,$ma_responsible_department,$ma_price,$ma_fiscal_year,$conn);
}

function edit($ma_date,$serial_number,$ma_equipment,$ma_device_brand,$ma_responsible_department,$ma_price,$ma_fiscal_year,$conn);

{

  $data = update("maintain",
                "ma_date = '$ma_date',ma_equipment ='$ma_equipment',ma_device_brand = '$ma_device_brand',
                ma_responsible_department = '$ma_responsible_department',ma_price = '$ma_price',ma_fiscal_year = '$ma_fiscal_year'",
                "WHERE serial_number = '$serial_number'",$conn);
                
  if ($data) {
    echo 1;
  } else {
    echo 2;
  }
}
  function checknum($serial_number,$conn){
    $data = num_rows("maintain","WHERE serial_number = '$serial_number'",$conn);
    echo $data;
  } 

  else if($chk=="check"){
    $serial_number = $_POST["serial_number"];
    checknum($serial_number,$conn);
   }

   function showinforp($serial_number,$conn){
    $data = select("maintain", "WHERE serial_number =  '$serial_number'", $conn);
    if ($data) {
      echo json_encode($data);
    } else {
      echo 0;
    }
  }

  function showinfor($serial_number,$service_date,$conn){
    $data = select("visitjhos", "WHERE 	visitdate  LIKE '%$service_date%' AND prescriptionno = '$serial_number'", $conn);
    // echo $data;
    if($data){
      echo json_encode($data);
    }else{
      echo 0;
    }
  }
  }else if($chk == "showinfor"){
    $serial_number = $_POST["serial_number"];
    $service_date = $_POST["service_date"];
    showinfor($serial_number,$service_date,$conn);

  }else if($chk == "showdata1"){
  $serial_number = $_POST["serial_number"];
  showinforp($serial_number,$conn);
  }


?>
