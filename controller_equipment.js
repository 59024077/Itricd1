// การ เพิ่มข้อมูล ข้อมูล
function ma_equipments() {

    var ma_equipment = $("#ma_equipment").val();
    var ai_equipment = $("#ai_equipment").val();
    

   $.ajax({
    async: true,
    url: "php_group/action.php?en=checks",
    type: "POST",
    data: {
        ai_equipment: ai_equipment
    },
    success: function (data) {
        console.log(data);
        if(data == 0){
            $.ajax({
                async: true,
                url: "php_group/action.php?en=insertMA",
                type: "POST",
                data: {
                    ma_equipment: ma_equipment,
                    ai_equipment: ai_equipment,
                
                },
                success: function (data) {
                    
                    console.log(data);
                    if (data == 1) {
                        Swal.fire({
                            type: 'success',
                            title: 'ทำการเพิ่มข้อมูลยี่ห้ออุปกรณ์สำเร็จ',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        clearsessionStorage();
        
                    } else {
                        Swal.fire({
                            type: 'error',
                            title: 'กุณากรอกข้อมูลยี่ห้ออุปกรณ์',
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
