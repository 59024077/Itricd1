function lo_log() {
    var username = $('#username').val();
    var password = $('#password').val();
    
    console.log(username);
    console.log(password);

    $.ajax({
        async: true,
        url: "php_group/action.php?en=checklogin",
        data: {
            username: username, 
            password: password
        },
        success: function (data) {
            console.log(data);
            if (data == 1) {
                Swal.fire({
                    type: 'success',
                    title: 'OK',
                    showConfirmButton: false,
                    timer: 1500
                })

            } else {

                Swal.fire({
                    type: 'error',
                    title: 'error',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

        }
    });

    

    // if (username != ""||password !="") {
    //     console.log(username);
    //     console.log(password);


    //     $.ajax({
    //         url: "infor_user.html",
    //         success: function (data) {
    //             $("#hidden_record").html(data);
    //            showlogin();

    //         }    
    //     });
    // }else if(username == ""||password == ""){
    //     swal.fire({
    //         type: "error",
    //         title: 'ผิดพลาด',
    //         text: "กุณากรอกเลขครุภัณฑ์"
    //     });
    // }
}


function showlogin() {
    var username = $("#username").val();
    var password = $("#password").val();
    $.ajax({
        async: true,
        url: "php_group/action.php?en=showlogindata",
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


// function lo_log() {
//     var username = $('#username').val();
//     var password = $('#password').val();
//     console.log(username,password);
//     if (username != "" || password !="") {
//         console.log(username);
//         console.log(password);
        
//         $.ajax({
//             url: "infor_user.html",
//             success: function (data) {
//                 $("#hidden_record").html(data);
 
//             }    
//         });
//     }else if(username == "" || password == ""){
//         swal.fire({
//             type: "error",
//             title: 'ผิดพลาด',
//             text: "กุณากรอกเลขครุภัณฑ์"
//         });
//     }
// }
    
