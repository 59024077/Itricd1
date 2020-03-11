// การ เพิ่มข้อมูลชนิดครุภัณฑ์ ข้อมูล
function ma_durable_articless() {

    var ma_durable_articles = $("#ma_durable_articles").val();

    if(ma_durable_articles == ""){
        Swal.fire({
            type: 'error',
            title: 'เพิ่มข้อมูลไม่สำเร็จ',
            showConfirmButton: false,
            timer: 1500
        })
        return false;
    }

   $.ajax({
    async: true,
    url: "php_group/action.php?en=checkss",
    type: "POST",
    data: {
        ma_durable_articles: ma_durable_articles
    },
    success: function (data) {
        console.log(data);
        if(data == 0){
            $.ajax({
                async: true,
                url: "php_group/action.php?en=insertMI",
                type: "POST",
                data: {
                    ma_durable_articles: ma_durable_articles,
                
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

                }
                }
            });
        }
    }
});
}

// if (data == 1) {
//     Swal.fire({
//         type: 'success',
//         title: 'เพิ่มข้อมูลสำเร็จ',
//         showConfirmButton: false,
//         timer: 1500
//     })
//     clearsessionStorage();

// } else {
//     Swal.fire({
//         type: 'error',
//         title: 'เพิ่มข้อมูลไม่สำเร็จ',
//         showConfirmButton: false,
//         timer: 1500
//     })
// }