// การ เพิ่มข้อมูลชนิดครุภัณฑ์ ข้อมูล
function ma_durable_articless() {

    var ma_durable_articles = $("#ma_durable_articles").val();
    var ai_durable_articles = $("#ai_durable_articles").val();

   $.ajax({
    async: true,
    url: "php_group/action.php?en=check",
    type: "POST",
    data: {
        ai_durable_articles: ai_durable_articles
    },
    success: function (data) {
        console.log(data);
        if(data == 0){
            $.ajax({
                async: true,
                url: "php_group/action.php?en=insertAI",
                type: "POST",
                data: {
                    ma_durable_articles: ma_durable_articles,
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
function ma_durable_articless() {
    var ma_durable_articles = $('#ma_durable_articles').val();
    console.log(ma_durable_articles);
    if (ma_durable_articles != "") {
        console.log(ma_durable_articles);
        Swal.fire({
            type: 'success',
            title: 'บันทึกมูลสำเร็จ',
            text: "ทำการเพิ่มข้อมูลยี่ห้ออุปกรณ์สำเร็จ"
        })
        
        
    }else if(ma_durable_articles == ""){
        swal.fire({
            type: "error",
            title: 'ผิดพลาด',
            text: "กุณากรอกข้อมูลชนิดครุภัณฑ์"
        });
    }
}