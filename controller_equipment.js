// การ เพิ่มข้อมูล ข้อมูล
function ma_equipment() {

    var ai_equipment = $("#ai_equipment").val();
    console.log(เช็ค);
    

   $.ajax({
    async: true,
    url: "php_group/action.php?en=check",
    type: "POST",
    data: {
        id_equipment: id_equipment
    },
    success: function (data) {
        console.log(data);
        if(data == 0){
            $.ajax({
                async: true,
                url: "php_group/action.php?en=insertMA",
                type: "POST",
                data: {
                    ai_equipment: ai_equipment,
                
                },
                success: function (data) {
                    
                    console.log(data);
                    if (data == 1) {
                        Swal.fire({
                            type: 'success',
                            title: 'เพิ่มข้อมูลสำเร็จ',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        clearsessionStorage();
        
                    } else {
                        Swal.fire({
                            type: 'error',
                            title: 'เพิ่มข้อมูลไม่สำเร็จ',
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