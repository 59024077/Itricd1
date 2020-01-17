// การ save ข้อมูล
function saveand() {

    var ma_date = $("#ma_date").val();
    var ma_serial_number = $("#ma_serial_number").val();
    var ma_equipment = $("#ma_equipment").val();
    var ma_device_brand = $("#ma_device_brand").val();
    var ma_responsible_department = $("#ma_responsible_department").val();
    var ma_price = $("#ma_price").val();
    var ma_fiscal_year = $("#ma_fiscal_year").val();

   $.ajax({
    async: true,
    url: "php_group/action.php?en=check",
    type: "POST",
    data: {
        ma_serial_number: ma_serial_number
    },
    success: function (data) {
        console.log(data);
        if(data == 0){
            $.ajax({
                async: true,
                url: "php_group/action.php?en=insert1",
                type: "POST",
                data: {
                    ma_date: ma_date,
                    ma_serial_number: ma_serial_number,
                    ma_equipment: ma_equipment,
                    ma_device_brand: ma_device_brand,
                    ma_responsible_department: ma_responsible_department,
                    ma_price: ma_price,
                    ma_fiscal_year: ma_fiscal_year
                
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
                        console.log("บันทึกมูลสำเร็จ");
        
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'บันทึกมูลไม่สำเร็จ',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
        
                }
            });
        }else if(data == 1){
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
                    ma_fiscal_year: ma_fiscal_year
        
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