// การ save ข้อมูล
function ma_durable_articles() {

    var ai_durable_articles = $("#ai_durable_articles").val();

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
                url: "php_group/action.php?en=insertAI",
                type: "POST",
                data: {
                    ai_durable_articles: ai_durable_articles,
                
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