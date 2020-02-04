// การ save ข้อมูล
function saveand() {

    var ma_date = $("#ma_date").val();
    var ma_serial_number = $("#ma_serial_number").val();
    var ma_equipment = $("#ma_equipment").val();
    var ma_device_brand = $("#ma_device_brand").val();
    var ma_responsible_department = $("#ma_responsible_department").val();
    var ma_price = $("#ma_price").val();
    var ma_date_year = $("#ma_date_year").val();

    $.ajax({
        async: true,
        url: "php_group/action.php?en=check",
        type: "POST",
        data: {
            ma_serial_number: ma_serial_number
        },
        success: function (data) {
            console.log(data);
            if (data == 0) {
                $.ajax({
                    async: true,
                    url: "php_group/action.php?en=insert",
                    type: "POST",
                    data: {
                        ma_date: ma_date,
                        ma_serial_number: ma_serial_number,
                        ma_equipment: ma_equipment,
                        ma_device_brand: ma_device_brand,
                        ma_responsible_department: ma_responsible_department,
                        ma_price: ma_price,
                        ma_date_year: ma_date_year

                    },
                    success: function (data) {


                        console.log(data);
                        if (data == 1) {
                            Swal.fire({
                                type: 'success',
                                title: 'บันทึกมูลสำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            clearsessionStorage();
                            console.log("เช็ค");
                            console.log("บันทึกมูลสำเร็จ");

                        } else {
                            Swal.fire({
                                type: 'error',
                                title: 'บันทึกมูลไม่สำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }

                    }
                });
            } else if (data == 1) {
                $.ajax({
                    async: true,
                    url: "php_group/action.php?en=edit",
                    type: "POST",
                    data: {
                        ma_date: ma_date,
                        ma_serial_number: ma_serial_number,
                        ma_equipment: ma_equipment,
                        ma_device_brand: ma_device_brand,
                        ma_responsible_department: ma_responsible_department,
                        ma_price: ma_price,
                        ma_date_year: ma_date_year

                    },
                    success: function (data) {
                        console.log(data);
                        if (data == 1) {
                            Swal.fire({
                                type: 'success',
                                title: 'แก้ไขข้อมูลสำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            clearsessionStorage();
                            console.log("แก้ไขข้อมูลสำเร็จ");

                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'แก้ไขข้อมูลไม่สำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }

                    }
                });
            }
        }
    });
}
function showall() {
    var ma_serial_number = $("#ma_serial_number").val();
    $.ajax({
        async: true,
        url: "php_group/action.php?en=showdata",
        type: "POST",
        data: {
            ma_serial_number: ma_serial_number

        },
        success: function (data) {
            if (data != 0) {
                var dataJSON = JSON.parse(data);
                console.log(dataJSON);
                $("#ma_date").val(dataJSON.ma_date);
                $("#ma_serial_number").val(dataJSON.ma_serial_number);
                $("#ma_equipment").val(dataJSON.ma_equipment);
                $("#ma_device_brand").val(dataJSON.ma_device_brand);
                $("#ma_responsible_department").val(dataJSON.ma_responsible_department);
                $("#ma_price").val(dataJSON.ma_price);
                $("#ma_date_year").val(dataJSON.ma_date_year);

                // //ให้แสดงข้อมูล fa_yourself ของ radio
                // if (dataJSON.fa_yourself == 1) {
                //     $('#fa_have1').prop("checked", true);

                // } else if (dataJSON.fa_yourself == 2) {
                //     $('#fa_none1').prop("checked", true);
                // }

            }
        }


    });
}




// $('#ma_equipmentx').select2({
//     ajax: {
//       url: 'php_group/action.php?en=getdata',
//       processResults: function (data) {
//         var dataJSON = JSON.parse(data);
//         // Transforms the top-level key of the response object from 'items' to 'results'
//         return {
//           results: dataJSON.ma_durable_articles
//         };
//       }
//     }
//   });


  