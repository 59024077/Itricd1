function lo_log() {
    var username = $('#username').val();
    var password = $('#password').val();
    
    console.log(username);
    console.log(password);

    $.ajax({
        async: true,
        url: "php_group/action.php?en=checklogin",
        method: "post", 
        data: {
            username: username, 
            password: password
        },
        success: function (data) {

            if (data != 0) {
                var dataJSON = JSON.parse(data); //เปลี่ยน string json ให้เป็น Object
                sessionStorage.username = dataJSON.username;  //เก็บ username ใว้ใน sessionStorage
                sessionStorage.first_name = dataJSON.first_name; //ทำการเรียก first_name แล้วเก็บใว้ในsessionStorage
                sessionStorage.last_names = dataJSON.last_names; //ทำการเรียก first_name แล้วเก็บใว้ในsessionStorage
                
                console.log("data is"+sessionStorage.username);
                Swal.fire({
                    
                    type: 'success',
                    title: 'เข้าสู่ระบบสำเร็จ',
                    showConfirmButton: false,
                    timer: 1500
                }).then((result)=>{
                    location.href="index.html";
                })
            } else {
                
                Swal.fire({
                    type: 'error',
                    title: 'กรุณากรอกรหัสใหม่',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        }
    });
}


function showlogin() {
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
        async: true,
        url: "php_group/action.php?en=showlogin",
        type: "POST",
        data: {
            username: username,
            password: password

        },
        success: function (data) {
            if (data != 0) {
                var dataJSON = JSON.parse(data);
                console.log(dataJSON);
                $("#eid").val(dataJSON.eid);
                $("#finger_id").val(dataJSON.finger_id);
                $("#prefix").val(dataJSON.prefix);
                $("#first_name").val(dataJSON.first_name);
                $("#last_names").val(dataJSON.last_names);
                $("#nickname").val(dataJSON.nickname);
                $("#department_id").val(dataJSON.department_id);
                $("#working_group").val(dataJSON.working_group);
                $("#position").val(dataJSON.position);

            }
        }
    });
}
