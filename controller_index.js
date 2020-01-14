var vals;
var txtVal;
$(document).ready(function () {
    var statusLogin = 1; //sessionStorage.getItem("login"); // login
    if (statusLogin == 1) {
        sessionStorage.setItem("login", 1);
        $('.showname').html(sessionStorage.getItem("showname"));
        $('.fullname').html(sessionStorage.getItem("fullname"));
    } else {
        //var urlLogin = getFileConfig+'/login/login.html';
        // var urlLogin = '/Screenning/login.html';
        // window.location = urlLogin;
    }

    $('#hidden').hide();

    //---------- ดึงหน้า infor_user.html มาแสดง -------------------//
    $("#infor_user").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "infor_user.html",
            success: function (data) {
                $("#content").html(data);
                vals = 1;
                txtVal = 'infor_user';
            }
        });

    });

    //---------- ดึงหน้า ma_records.html มาแสดง -------------------//
    $("#ma_records").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "ma_records.html",
            success: function (data) {
                $("#content").html(data);
                vals = 2;
                txtVal = 'ma_records';

            }
        });

    });

    //---------- ดึงหน้า ma_history.html มาแสดง -------------------//
    $("#ma_history").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "ma_history.html",
            success: function (data) {
                $("#content").html(data);
                vals = 4;
                txtVal = 'ma_history';
                show_hisleave();

            }
        });

    });

});

//go page index
function fn_index(){
    $("#content").html('');
}

// fn title record leave
$(document).on('change', '#type_leave', function() {
    add_leave();
});


function add_leave() {
    var type_leave = $('#type_leave option:selected').val();
    
    if (type_leave != "5" && type_leave != "") {
        console.log(type_leave);
        $.ajax({
            url: "record_ma.html",
            success: function (data) {
                $("#hidden_record").html(data);

                $('#tital_rec').html('แบบฟอร์มบันทึกการบำรุงรักษาเครื่องคอมพิวเตอร์'+ text);
            }
        });
    }else if(type_leave == "5"){
        $.ajax({
            url: "record_helpcivil.html",
            success: function (data) {
                $("#hidden_record").html(data);
                text = 'ลาไปราชการ'
                $('#tital_rec').html('แบบฟอร์มบันทึกการบำรุงรักษาเครื่องคอมพิวเตอร์'+ text);
            }
        });
    }else{
        swal.fire({
            type: "error",
            title: 'ผิดพลาด',
            text: "กุณาเลือกประเภทการลา"
        });
    }
}
function scr_vitis(){
    var service_date = $('#service_date').val()
            var dateAr1 = service_date.split('/');
            var date = dateAr1[1] + '/' + dateAr1[0] + '/' + dateAr1[2];
            var SearchDate = formatDate(date);
    var ma_serial_number = $("#ma_serial_number").val();

    $.ajax({
        async: true,
        url: "PHP_GROUP/action.php?en=showinfor",
        type: "POST",
        data: { service_date: SearchDate, 
            ma_serial_number: ma_serial_number
        },
        success: function (data) {
            if (data != 0) {
                var dataJSON = JSON.parse(data);
                console.log(dataJSON);
                // $("#Showcid").val(dataJSON.cid);
                // $("#Showhn").val(dataJSON.hn);
                // $("#Showid").val(dataJSON.prescriptionno);
                // $("#Showname").val(dataJSON.prename+''+dataJSON.fname+' '+dataJSON.lname);
                // $("#Showrighthos").val(dataJSON.rightname);
                // $("#Showaddr").val(dataJSON.address);
                // $("#Showdr").val(dataJSON.doctorprename+''+dataJSON.doctorfname+''+dataJSON.doctorlname);
                //
                $("#hiddenvisitid").val(dataJSON.visitid);
                console.log(dataJSON.visitid);
                $('#Showhn').html(dataJSON.hn);
                $('#Showid').html(dataJSON.visitid+ '/' +dataJSON.prescriptionno);
                $('#Showcid').html(dataJSON.cid);
                $('#Showdob').html(dataJSON.dob);
                $('#Showaddr').html(dataJSON.address);
                $('#Showrighthos').html(dataJSON.rightname);
                $('#Showrightid').html(dataJSON.insid);
                $('#Showname').html(dataJSON.prename+'  '+dataJSON.prenamelong+''+dataJSON.fname+' '+dataJSON.lname);
                $('#Showage').html(age(new Date(dataJSON.dob.replace(new RegExp('/', 'g'), '-'))).years+" ปี "+" "
                        +age(new Date(dataJSON.dob.replace(new RegExp('/', 'g'), '-'))).months+" เดือน "+" "
                        +age(new Date(dataJSON.dob.replace(new RegExp('/', 'g'), '-'))).days+" วัน");

                if (dataJSON.disease == "null"){
                    $("#Showdiag").html("N/A");
                }else{
                    $("#Showdiag").html(dataJSON.disease);
                }
                // drug allergic
                if (dataJSON.drug == "null"){
                    $("#Showdrug").html("N/A");
                }else{
                    $("#Showdrug").html(dataJSON.drug);
                }
                $("#Showstay").html("N/A");
                $("#Showdr").html(dataJSON.doctorprename+''+dataJSON.doctorfname+'   '+dataJSON.doctorlname);
            }
        }
    });
}

function add_leave() {
    scr_vitis()
    console.log(vals);

    if (vals == 1) { //// Rehab ////
        console.log("Rehab");
        if ($("#nurse_first").is(":checked")) {

            round_nurse = 1;

            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {

                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#select-Workgroup').text().trim() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณาใส่กลุ่มงาน "
                });
            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_rehab.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        //console.log(data2); 
                        user_search();
                        SearchHn();
                        //Showfirst();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_rehab.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        //console.log(data2);     
                        user_search();
                        SearchId();
                        //show_rehab();
                        //Showfirst();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }

        }

        else if ($("#nurse_second").is(":checked")) {
            round_nurse = 2;
            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_rehab.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        //console.log(data2);    
                        user_search();
                        SearchHn();
                        //Showsec();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_rehab.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        // console.log(data2);                        
                        user_search();
                        SearchId();
                        //Showsec();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }
        } else {
            swal.fire({
                type: "error",
                title: 'ผิดพลาด',
                text: "กรุณาเลือก ครั้งเเรก หรือ ครั้งรอง "
            });
        }

        //// rehab end//////

    } else if (vals == 2) { ///// Nurse ///////////
        console.log("nurse");
        if ($("#nurse_first").is(":checked")) {

            round_nurse = 1;

            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {

                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_nurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showfirst();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_nurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showfirst();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }

        }

        else if ($("#nurse_second").is(":checked")) {
            round_nurse = 2;
            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_nurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showsec();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_nurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showsec();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }
        } else {
            swal.fire({
                type: "error",
                title: 'ผิดพลาด',
                text: "กรุณาเลือก ครั้งเเรก หรือ ครั้งรอง "
            });
        }
        //// end nures //////
    } else if (vals == 3) { ///// doctor ///////////
        console.log("doctor");
        if ($("#nurse_first").is(":checked")) {

            round_nurse = 1;

            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {

                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_nurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showfirst();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_doctor.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showfirst();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }

        }

        else if ($("#nurse_second").is(":checked")) {
            round_nurse = 2;
            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_doctor.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showsec();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_doctor.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showsec();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }
        } else {
            swal.fire({
                type: "error",
                title: 'ผิดพลาด',
                text: "กรุณาเลือก ครั้งเเรก หรือ ครั้งรอง "
            });
        }
        //// end doctor //////
    } else if (vals == 4) { ///// doctor ///////////
        console.log("doctor");
        if ($("#nurse_first").is(":checked")) {

            round_nurse = 1;

            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {

                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_patients_treatment.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showfirst();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_patients_treatment.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showfirst();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }

        }

        else if ($("#nurse_second").is(":checked")) {
            round_nurse = 2;
            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_patients_treatment.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showsec();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_patients_treatment.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showsec();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }
        } else {
            swal.fire({
                type: "error",
                title: 'ผิดพลาด',
                text: "กรุณาเลือก ครั้งเเรก หรือ ครั้งรอง "
            });
        }

    } else if (vals == 5) { ///// doctor ///////////
        console.log("doctor");
        if ($("#nurse_first").is(":checked")) {

            round_nurse = 1;

            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {

                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_in_physician.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showfirst();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_in_physician.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showfirst();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }

        }

        else if ($("#nurse_second").is(":checked")) {
            round_nurse = 2;
            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_in_physician.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showsec();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_in_physician.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showsec();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }
        } else {
            swal.fire({
                type: "error",
                title: 'ผิดพลาด',
                text: "กรุณาเลือก ครั้งเเรก หรือ ครั้งรอง "
            });
        }
        //// end in //////
    } else if (vals == 6) {
        ///// rcrecord_Inpatientnurse ///////////
        console.log("doctor");
        if ($("#nurse_first").is(":checked")) {

            round_nurse = 1;

            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {

                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_Inpatientnurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showfirst();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_Inpatientnurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showfirst();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }

        }

        else if ($("#nurse_second").is(":checked")) {
            round_nurse = 2;
            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_Inpatientnurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showsec();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_Inpatientnurse.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showsec();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }
        } else {
            swal.fire({
                type: "error",
                title: 'ผิดพลาด',
                text: "กรุณาเลือก ครั้งเเรก หรือ ครั้งรอง "
            });
        }

    } else if (vals == 7) { ///// ma ///////////
        console.log("maintain");
        if ($("#nurse_first").is(":checked")) {

            round_nurse = 1;

            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {

                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_ma.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showfirst();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_ma.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showfirst();
                        showall();
                        scr_vitis();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }

        }

        else if ($("#nurse_second").is(":checked")) {
            round_nurse = 2;
            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_ma.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showsec();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_ma.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showsec();
                        showall();
                        scr_vitis();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }
        } else {
            swal.fire({
                type: "error",
                title: 'ผิดพลาด',
                text: "กรุณาเลือก ครั้งเเรก หรือ ครั้งรอง "
            });
        }

        //// end in //////
    } else if (vals == 8) { ///// hospital ///////////
        console.log("maintain");
        if ($("#nurse_first").is(":checked")) {

            round_nurse = 1;

            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {

                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else if ($('#ma_serial_number').val() == "") {

                $.ajax({
                    url: "record_HOSPITAL.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchHn();
                        Showfirst();
                    }
                });
            }
            else if ($('#hn').val() == "") {

                //console.log("ไม่ว่าง");
                $.ajax({
                    url: "record_HOSPITAL.html",
                    success: function (data2) {
                        $("#hidden_record").html(data2);
                        user_search()
                        SearchId();
                        Showfirst();
                    }
                });
            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }

        }

        else if ($("#nurse_second").is(":checked")) {
            round_nurse = 2;
            if ($('#hn').val() == "" && $('#ma_serial_number').val() == "") {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });

            }
            else {
                swal.fire({
                    type: "error",
                    title: 'ผิดพลาด',
                    text: "กรุณากรอก HN หรือ เลขที่ใบสั่งยา อย่างใดอย่างนึง "
                });
            }
        } else {
            swal.fire({
                type: "error",
                title: 'ผิดพลาด',
                text: "กรุณาเลือก ครั้งเเรก หรือ ครั้งรอง "
            });
        }

        //// end in //////
    } else {
        console.log("else");
    }

}


    //Date picker
    $('#ma_date').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: {
            format: 'DD/MM/YYYY'
        }
    });

// fn show record_usecar.html
function add_usecar() {
        $.ajax({
            url: "record_usecar.html",
            success: function (data) {
                $("#hidden_record").html(data);
            }
        });
}

// fn show table record_usecar.html
function show_hisleave() {
    $.ajax({
        url: "table_ma.html",
        success: function (data) {
            $("#hidden_record").html(data);
        }
    });
}

// fn show table record_usecar.html
function show_hisusecar() {
    $.ajax({
        url: "table_usecar.html",
        success: function (data) {
            $("#hidden_record").html(data);
        }
    });
}

function re_managep() {
    $.ajax({
        url: "record_managep.html",
        success: function (data){
            $("#hidden_record").html(data);

        }
    });
}

