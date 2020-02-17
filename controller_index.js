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
                ma_history();

            }
        });
    });
    //---------- ดึงหน้า ma_ai_durable_articles.html มาแสดง -------------------//
    $("#ma_ai_durable_articles").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "ma_ai_durable_articles.html",
            success: function (data) {
                $("#content").html(data);
                vals = 5;
                txtVal = 'ma_ai_durable_articles';
                

            }
        });
    });
    //---------- ดึงหน้า ma_ai_equipment.html มาแสดง -------------------//
    $("#ma_ai_equipment").on("click", function (e) {
        e.stopImmediatePropagation();

        $('.contentServiceArea').html('');

        $.ajax({
            url: "ma_ai_equipment.html",
            success: function (data) {
                $("#content").html(data);
                vals = 7;
                txtVal = 'ma_ai_equipment';
                

            }
        });
    });

});

//go page index
function fn_index(){
    $("#content").html('');
}

function scr_vitis(){
    var service_date = $('#service_date').val()
            var dateAr1 = service_date.split('/');
            var date = dateAr1[1] + '/' + dateAr1[0] + '/' + dateAr1[2];
            
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

//////////////////////////////////////////////////////////////////

// fn title record leave
// $(document).on('change', '#ma_serial_number', function() {
//     add_ma();
// });


function add_ma() {
    var ma_serial_number = $('#ma_serial_number').val();
    console.log(ma_serial_number);
    if (ma_serial_number != "") {
        console.log(ma_serial_number);
        $.ajax({
            url: "record_ma.html",
            success: function (data) {
                $("#hidden_record").html(data);
               showall();
               ma_equipmentx();
               ma_device_brandx();
            }    
        });
    }else if(ma_serial_number == ""){
        swal.fire({
            type: "error",
            title: 'ผิดพลาด',
            text: "กุณากรอกเลขครุภัณฑ์"
        });
    }
}
    

//////////////////////////////////////////////////////////////////
    //Date picker


// fn show record_usecar.html
function saveand() {
        $.ajax({
            url: "record_ma.html",
            success: function (data) {
                $("#ma_record").html(data);
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

