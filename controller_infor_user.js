

function personal() {
    
    if(sessionStorage.username == null){
        window.location="index.html";
    }
    var eid = $("#eid").val();
    var finger_id = $("#finger_id").val();
    var prefix = $("#prefix").val();
    var first_name = $("#first_name").val();
    var last_names = $("#last_names").val();
    var nickname = $("#nickname").val();
    var department_id = $("#department_id").val();
    var working_group = $("#working_group").val();
    var position = $("#position").val();

        $.ajax({
            async: true,
            url: "php_group/action.php?en=edituser",
            type: "POST",
            data: {
                eid: eid,
                finger_id: finger_id,
                prefix: prefix,
                first_name: first_name,
                last_names: last_names,
                nickname: nickname,
                department_id: department_id,
                working_group: working_group,
                position: position,
                username:sessionStorage.username

            },
            success: function (data) {
               
                if (data == 1) {
                    Swal.fire({
                        type: 'success',
                        title: 'แก้ไขข้อมูลสำเร็จ',
                        showConfirmButton: false,
                        timer: 1500
                    })
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
