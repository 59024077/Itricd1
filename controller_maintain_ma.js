// การ save ข้อมูล
$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();   
});


function savehot() {
    

    var dogta_ID = $("#dogta_ID").val();
    var fa_text2 = $("#fa_text2").val()||"";
    var fa_text3 = $("#fa_text3").val()||"";
    var fa_text4 = $("#fa_text4").val()||"";
    var fa_text5 = $("#fa_text5").val()||"";
    var fa_text6 = $("#fa_text6").val()||"";
    var fa_text7 = $("#fa_text7").val()||"";
    var fa_text8 = $("#fa_text8").val()||"";
    var fa_text9 = $("#fa_text9").val()||"";
    var fa_text10 = $("#fa_text10").val()||"";
    var fa_text11 = $("#fa_text11").val()||"";
    var fa_text12 = $("#fa_text12").val()||"";
    var fa_text13 = $("#fa_text13").val()||"";

    //ให้แสดงข้อมูลของ radio
    var fa_yourself = $("[name='fa_yourself']:checked").val()||0 ;
    var fa_yourself1 = $("[name='fa_yourself1']:checked").val()||0 ;
    var fa_yourself2 = $("[name='fa_yourself2']:checked").val()||0 ;
    var fa_yourself3 = $("[name='fa_yourself3']:checked").val()||0 ;
    var fa_yourself4 = $("[name='fa_yourself4']:checked").val()||0 ;
    var fa_yourself5 = $("[name='fa_yourself5']:checked").val()||0 ;
    var fa_yourself6 = $("[name='fa_yourself6']:checked").val()||0 ;
    var fa_hurt_others = $("[name='fa_hurt_others']:checked").val()||0 ;
    var fa_hurt_others1 = $("[name='fa_hurt_others1']:checked").val()||0 ;
    var fa_hurt_others2 = $("[name='fa_hurt_others2']:checked").val()||0 ;
    var fa_hurt_others3 = $("[name='fa_hurt_others3']:checked").val()||0 ;
    var fa_hurt_others4 = $("[name='fa_hurt_others4']:checked").val()||0 ;
    var fa_hurt_others5 = $("[name='fa_hurt_others5']:checked").val()||0 ;
    var fa_hurt_others6 = $("[name='fa_hurt_others6']:checked").val()||0 ;
    var fa_destroy_items = $("[name='fa_destroy_items']:checked").val()||0 ;
    var fa_destroy_items1 = $("[name='fa_destroy_items1']:checked").val()||0 ;
    var fa_destroy_items2 = $("[name='fa_destroy_items2']:checked").val()||0 ;
    var fa_destroy_items3 = $("[name='fa_destroy_items3']:checked").val()||0 ;
    var fa_destroy_items4 = $("[name='fa_destroy_items4']:checked").val()||0 ;
    var fa_destroy_items5 = $("[name='fa_destroy_items5']:checked").val()||0 ;
    var fa_destroy_items6 = $("[name='fa_destroy_items6']:checked").val()||0 ;
    var fa_hurt = $("[name='fa_hurt']:checked").val()||0 ;
    var fa_hurt1 = $("[name='fa_hurt1']:checked").val()||0 ;
    var fa_hurt2 = $("[name='fa_hurt2']:checked").val()||0 ;
    var fa_hurt3 = $("[name='fa_hurt3']:checked").val()||0 ;
    var fa_hurt4 = $("[name='fa_hurt4']:checked").val()||0 ;
    var fa_hurt5 = $("[name='fa_hurt5']:checked").val()||0 ;
    var fa_hurt6 = $("[name='fa_hurt6']:checked").val()||0 ;
    var fa_out_hospita = $("[name='fa_out_hospita']:checked").val()||0 ;
    var fa_out_hospita1 = $("[name='fa_out_hospita1']:checked").val()||0 ;
    var fa_out_hospita2 = $("[name='fa_out_hospita2']:checked").val()||0 ;
    var fa_out_hospita3 = $("[name='fa_out_hospita3']:checked").val()||0 ;
    var fa_out_hospita4 = $("[name='fa_out_hospita4']:checked").val()||0 ;
    var fa_out_hospita5 = $("[name='fa_out_hospita5']:checked").val()||0 ;
    var fa_out_hospita6 = $("[name='fa_out_hospita6']:checked").val()||0 ;
    var fa_walk_out = $("[name='fa_walk_out']:checked").val()||0 ;
    var fa_walk_out1 = $("[name='fa_walk_out1']:checked").val()||0 ;
    var fa_walk_out2 = $("[name='fa_walk_out2']:checked").val()||0 ;
    var fa_walk_out3 = $("[name='fa_walk_out3']:checked").val()||0 ;
    var fa_walk_out4 = $("[name='fa_walk_out4']:checked").val()||0 ;
    var fa_walk_out5 = $("[name='fa_walk_out5']:checked").val()||0 ;
    var fa_walk_out6 = $("[name='fa_walk_out6']:checked").val()||0 ;
    var fa_balance = $("[name='fa_balance']:checked").val()||0 ;
    var fa_balance1 = $("[name='fa_balance1']:checked").val()||0 ;
    var fa_balance2 = $("[name='fa_balance2']:checked").val()||0 ;
    var fa_balance3 = $("[name='fa_balance3']:checked").val()||0 ;
    var fa_balance4 = $("[name='fa_balance4']:checked").val()||0 ;
    var fa_balance5 = $("[name='fa_balance5']:checked").val()||0 ;
    var fa_balance6 = $("[name='fa_balance6']:checked").val()||0 ;
    var equilibrium = $("[name='equilibrium']:checked").val()||0 ;
    var equilibrium1 = $("[name='equilibrium1']:checked").val()||0 ;
    var equilibrium2 = $("[name='equilibrium2']:checked").val()||0 ;
    var equilibrium3 = $("[name='equilibrium3']:checked").val()||0 ;
    var equilibrium4 = $("[name='equilibrium4']:checked").val()||0 ;
    var equilibrium5 = $("[name='equilibrium5']:checked").val()||0 ;
    var equilibrium6 = $("[name='equilibrium6']:checked").val()||0 ;
    var fa_heart_disease = $("[name='fa_heart_disease']:checked").val()||0 ;
    var fa_heart_disease1 = $("[name='fa_heart_disease1']:checked").val()||0 ;
    var fa_heart_disease2 = $("[name='fa_heart_disease2']:checked").val()||0 ;
    var fa_heart_disease3 = $("[name='fa_heart_disease3']:checked").val()||0 ;
    var fa_heart_disease4 = $("[name='fa_heart_disease4']:checked").val()||0 ;
    var fa_heart_disease5 = $("[name='fa_heart_disease5']:checked").val()||0 ;
    var fa_heart_disease6 = $("[name='fa_heart_disease6']:checked").val()||0 ;
    var fa_tired_easily = $("[name='fa_tired_easily']:checked").val()||0 ;
    var fa_tired_easily1 = $("[name='fa_tired_easily1']:checked").val()||0 ;
    var fa_tired_easily2 = $("[name='fa_tired_easily2']:checked").val()||0 ;
    var fa_tired_easily3 = $("[name='fa_tired_easily3']:checked").val()||0 ;
    var fa_tired_easily4 = $("[name='fa_tired_easily4']:checked").val()||0 ;
    var fa_tired_easily5 = $("[name='fa_tired_easily5']:checked").val()||0 ;
    var fa_tired_easily6 = $("[name='fa_tired_easily6']:checked").val()||0 ;
    var fa_fall_flat = $("[name='fa_fall_flat']:checked").val()||0 ;
    var fa_fall_flat1 = $("[name='fa_fall_flat1']:checked").val()||0 ;
    var fa_fall_flat2 = $("[name='fa_fall_flat2']:checked").val()||0 ;
    var fa_fall_flat3 = $("[name='fa_fall_flat3']:checked").val()||0 ;
    var fa_fall_flat4 = $("[name='fa_fall_flat4']:checked").val()||0 ;
    var fa_fall_flat5 = $("[name='fa_fall_flat5']:checked").val()||0 ;
    var fa_fall_flat6 = $("[name='fa_fall_flat6']:checked").val()||0 ;
    var fa_well = $("[name='fa_well']:checked").val()||0 ;
    var fa_well1 = $("[name='fa_well1']:checked").val()||0 ;
    var fa_well2 = $("[name='fa_well2']:checked").val()||0 ;
    var fa_well3 = $("[name='fa_well3']:checked").val()||0 ;
    var fa_well4 = $("[name='fa_well4']:checked").val()||0 ;
    var fa_well5 = $("[name='fa_well5']:checked").val()||0 ;
    var fa_well6 = $("[name='fa_well6']:checked").val()||0 ;
    

    $.ajax({
        async: true,
        url: "php_group/action.php?en=checkmix",
        type: "POST",
        data: {
            dogta_ID: dogta_ID
        },
        success: function (data) {
            
            console.log(data);
            if (data == 0) {
                $.ajax({
                    async: true,
                    url: "php_group/action.php?en=insertmix",
                    type: "POST",
                    data: {
                        dogta_ID: dogta_ID,
                        fa_text2: fa_text2,
                        fa_text3: fa_text3,
                        fa_text4: fa_text4,
                        fa_text5: fa_text5,
                        fa_text6: fa_text6,
                        fa_text7: fa_text7,
                        fa_text8: fa_text8,
                        fa_text9: fa_text9,
                        fa_text10: fa_text10,
                        fa_text11: fa_text11,
                        fa_text12: fa_text12,
                        fa_text13: fa_text13,
                        fa_yourself: fa_yourself,
                        fa_yourself1: fa_yourself1,
                        fa_yourself2: fa_yourself2,
                        fa_yourself3: fa_yourself3,
                        fa_yourself4: fa_yourself4,
                        fa_yourself5: fa_yourself5,
                        fa_yourself6: fa_yourself6,
                        fa_hurt_others: fa_hurt_others,
                        fa_hurt_others1: fa_hurt_others1,
                        fa_hurt_others2: fa_hurt_others2,
                        fa_hurt_others3: fa_hurt_others3,
                        fa_hurt_others4: fa_hurt_others4,
                        fa_hurt_others5: fa_hurt_others5,
                        fa_hurt_others6: fa_hurt_others6,
                        fa_destroy_items: fa_destroy_items,
                        fa_destroy_items1: fa_destroy_items1,
                        fa_destroy_items2: fa_destroy_items2,
                        fa_destroy_items3: fa_destroy_items3,
                        fa_destroy_items4: fa_destroy_items4,
                        fa_destroy_items5: fa_destroy_items5,
                        fa_destroy_items6: fa_destroy_items6,
                        fa_hurt: fa_hurt,
                        fa_hurt1: fa_hurt1,
                        fa_hurt2: fa_hurt2,
                        fa_hurt3: fa_hurt3,
                        fa_hurt4: fa_hurt4,
                        fa_hurt5: fa_hurt5,
                        fa_hurt6: fa_hurt6,
                        fa_out_hospita: fa_out_hospita,
                        fa_out_hospita1: fa_out_hospita1,
                        fa_out_hospita2: fa_out_hospita2,
                        fa_out_hospita3: fa_out_hospita3,
                        fa_out_hospita4: fa_out_hospita4,
                        fa_out_hospita5: fa_out_hospita5,
                        fa_out_hospita6: fa_out_hospita6,
                        fa_walk_out: fa_walk_out,
                        fa_walk_out1: fa_walk_out1,
                        fa_walk_out2: fa_walk_out2,
                        fa_walk_out3: fa_walk_out3,
                        fa_walk_out4: fa_walk_out4,
                        fa_walk_out5: fa_walk_out5,
                        fa_walk_out6: fa_walk_out6,
                        fa_balance: fa_balance,
                        fa_balance1: fa_balance1,
                        fa_balance2: fa_balance2,
                        fa_balance3: fa_balance3,
                        fa_balance4: fa_balance4,
                        fa_balance5: fa_balance5,
                        fa_balance6: fa_balance6,
                        equilibrium: equilibrium,
                        equilibrium1: equilibrium1,
                        equilibrium2: equilibrium2,
                        equilibrium3: equilibrium3,
                        equilibrium4: equilibrium4,
                        equilibrium5: equilibrium5,
                        equilibrium6: equilibrium6,
                        fa_heart_disease: fa_heart_disease,
                        fa_heart_disease1: fa_heart_disease1,
                        fa_heart_disease2: fa_heart_disease2,
                        fa_heart_disease3: fa_heart_disease3,
                        fa_heart_disease4: fa_heart_disease4,
                        fa_heart_disease5: fa_heart_disease5,
                        fa_heart_disease6: fa_heart_disease6,
                        fa_tired_easily: fa_tired_easily,
                        fa_tired_easily1: fa_tired_easily1,
                        fa_tired_easily2: fa_tired_easily2,
                        fa_tired_easily3: fa_tired_easily3,
                        fa_tired_easily4: fa_tired_easily4,
                        fa_tired_easily5: fa_tired_easily5,
                        fa_tired_easily6: fa_tired_easily6,
                        fa_fall_flat: fa_fall_flat,
                        fa_fall_flat1: fa_fall_flat1,
                        fa_fall_flat2: fa_fall_flat2,
                        fa_fall_flat3: fa_fall_flat3,
                        fa_fall_flat4: fa_fall_flat4,
                        fa_fall_flat5: fa_fall_flat5,
                        fa_fall_flat6: fa_fall_flat6,
                        fa_well: fa_well,
                        fa_well1: fa_well1,
                        fa_well2: fa_well2,
                        fa_well3: fa_well3,
                        fa_well4: fa_well4,
                        fa_well5: fa_well5,
                        fa_well6: fa_well6
                        
                    },
                    success: function (data) {


                        console.log(data);
                        if (data == 1) {
                            Swal.fire({
                                type: 'success',
                                title: 'บันทึกมูลสำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            clearsessionStorage();
                            console.log("เช็ค");
                            console.log("บันทึกมูลสำเร็จ");

                        } else {
                            Swal.fire({
                                type: 'error',
                                title: 'บันทึกมูลไม่สำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }

                    }
                });
            } else if (data == 1) {
                $.ajax({
                    async: true,
                    url: "php_group/action.php?en=editmix",
                    type: "POST",
                    data: {
                        dogta_ID: dogta_ID,
                        fa_text2: fa_text2,
                            fa_text3: fa_text3,
                            fa_text4: fa_text4,
                            fa_text5: fa_text5,
                            fa_text6: fa_text6,
                            fa_text7: fa_text7,
                            fa_text8: fa_text8,
                            fa_text9: fa_text9,
                            fa_text10: fa_text10,
                            fa_text11: fa_text11,
                            fa_text12: fa_text12,
                            fa_text13: fa_text13,
                            fa_yourself: fa_yourself,
                            fa_yourself1: fa_yourself1,
                            fa_yourself2: fa_yourself2,
                            fa_yourself3: fa_yourself3,
                            fa_yourself4: fa_yourself4,
                            fa_yourself5: fa_yourself5,
                            fa_yourself6: fa_yourself6,
                            fa_hurt_others: fa_hurt_others,
                            fa_hurt_others1: fa_hurt_others1,
                            fa_hurt_others2: fa_hurt_others2,
                            fa_hurt_others3: fa_hurt_others3,
                            fa_hurt_others4: fa_hurt_others4,
                            fa_hurt_others5: fa_hurt_others5,
                            fa_hurt_others6: fa_hurt_others6,
                            fa_destroy_items: fa_destroy_items,
                            fa_destroy_items1: fa_destroy_items1,
                            fa_destroy_items2: fa_destroy_items2,
                            fa_destroy_items3: fa_destroy_items3,
                            fa_destroy_items4: fa_destroy_items4,
                            fa_destroy_items5: fa_destroy_items5,
                            fa_destroy_items6: fa_destroy_items6,
                            fa_hurt: fa_hurt,
                            fa_hurt1: fa_hurt1,
                            fa_hurt2: fa_hurt2,
                            fa_hurt3: fa_hurt3,
                            fa_hurt4: fa_hurt4,
                            fa_hurt5: fa_hurt5,
                            fa_hurt6: fa_hurt6,
                            fa_out_hospita: fa_out_hospita,
                            fa_out_hospita1: fa_out_hospita1,
                            fa_out_hospita2: fa_out_hospita2,
                            fa_out_hospita3: fa_out_hospita3,
                            fa_out_hospita4: fa_out_hospita4,
                            fa_out_hospita5: fa_out_hospita5,
                            fa_out_hospita6: fa_out_hospita6,
                            fa_walk_out: fa_walk_out,
                            fa_walk_out1: fa_walk_out1,
                            fa_walk_out2: fa_walk_out2,
                            fa_walk_out3: fa_walk_out3,
                            fa_walk_out4: fa_walk_out4,
                            fa_walk_out5: fa_walk_out5,
                            fa_walk_out6: fa_walk_out6,
                            fa_balance: fa_balance,
                            fa_balance1: fa_balance1,
                            fa_balance2: fa_balance2,
                            fa_balance3: fa_balance3,
                            fa_balance4: fa_balance4,
                            fa_balance5: fa_balance5,
                            fa_balance6: fa_balance6,
                            equilibrium: equilibrium,
                            equilibrium1: equilibrium1,
                            equilibrium2: equilibrium2,
                            equilibrium3: equilibrium3,
                            equilibrium4: equilibrium4,
                            equilibrium5: equilibrium5,
                            equilibrium6: equilibrium6,
                            fa_heart_disease: fa_heart_disease,
                            fa_heart_disease1: fa_heart_disease1,
                            fa_heart_disease2: fa_heart_disease2,
                            fa_heart_disease3: fa_heart_disease3,
                            fa_heart_disease4: fa_heart_disease4,
                            fa_heart_disease5: fa_heart_disease5,
                            fa_heart_disease6: fa_heart_disease6,
                            fa_tired_easily: fa_tired_easily,
                            fa_tired_easily1: fa_tired_easily1,
                            fa_tired_easily2: fa_tired_easily2,
                            fa_tired_easily3: fa_tired_easily3,
                            fa_tired_easily4: fa_tired_easily4,
                            fa_tired_easily5: fa_tired_easily5,
                            fa_tired_easily6: fa_tired_easily6,
                            fa_fall_flat: fa_fall_flat,
                            fa_fall_flat1: fa_fall_flat1,
                            fa_fall_flat2: fa_fall_flat2,
                            fa_fall_flat3: fa_fall_flat3,
                            fa_fall_flat4: fa_fall_flat4,
                            fa_fall_flat5: fa_fall_flat5,
                            fa_fall_flat6: fa_fall_flat6,
                            fa_well: fa_well,
                            fa_well1: fa_well1,
                            fa_well2: fa_well2,
                            fa_well3: fa_well3,
                            fa_well4: fa_well4,
                            fa_well5: fa_well5,
                            fa_well6: fa_well6
                           
                    },
                    success: function (data) {
                        console.log(data);
                        if (data == 1) {
                            Swal.fire({
                                type: 'success',
                                title: 'แก้ไขข้อมูลสำเร็จ',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            clearsessionStorage();
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
        }
    });
}
function showallmix() {
    var dogta_ID = $("#dogta_ID").val();
    $.ajax({
        async: true,
        url: "php_group/action.php?en=showdatas",
        type: "POST",
        data: {
            dogta_ID: dogta_ID

        },
        success: function (data) {
            if (data != 0) {
                var dataJSON = JSON.parse(data);
                console.log(dataJSON);
                $("#dogta_ID").val(dataJSON.dogta_ID);
                $("#fa_text2").val(dataJSON.fa_text2);
                $("#fa_text3").val(dataJSON.fa_text3);
                $("#fa_text4").val(dataJSON.fa_text4);
                $("#fa_text5").val(dataJSON.fa_text5);
                $("#fa_text6").val(dataJSON.fa_text6);
                $("#fa_text7").val(dataJSON.fa_text7);
                $("#fa_text8").val(dataJSON.fa_text8);
                $("#fa_text9").val(dataJSON.fa_text9);
                $("#fa_text10").val(dataJSON.fa_text10);
                $("#fa_text11").val(dataJSON.fa_text11);
                $("#fa_text12").val(dataJSON.fa_text12);
                $("#fa_text13").val(dataJSON.fa_text13);
                $("#fa_yourself").val(dataJSON.fa_yourself);
                $("#fa_yourself1").val(dataJSON.fa_yourself1);
                $("#fa_yourself2").val(dataJSON.fa_yourself2);
                $("#fa_yourself3").val(dataJSON.fa_yourself3);
                $("#fa_yourself4").val(dataJSON.fa_yourself4);
                $("#fa_yourself5").val(dataJSON.fa_yourself5);
                $("#fa_yourself6").val(dataJSON.fa_yourself6);
                $("#fa_hurt_others").val(dataJSON.fa_hurt_others);
                $("#fa_hurt_others1").val(dataJSON.fa_hurt_others1);
                $("#fa_hurt_others2").val(dataJSON.fa_hurt_others2);
                $("#fa_hurt_others3").val(dataJSON.fa_hurt_others3);
                $("#fa_hurt_others4").val(dataJSON.fa_hurt_others4);
                $("#fa_hurt_others5").val(dataJSON.fa_hurt_others5);
                $("#fa_hurt_others6").val(dataJSON.fa_hurt_others6);
                $("#fa_destroy_items").val(dataJSON.fa_destroy_items);
                $("#fa_destroy_items1").val(dataJSON.fa_destroy_items1);
                $("#fa_destroy_items2").val(dataJSON.fa_destroy_items2);
                $("#fa_destroy_items3").val(dataJSON.fa_destroy_items3);
                $("#fa_destroy_items4").val(dataJSON.fa_destroy_items4);
                $("#fa_destroy_items5").val(dataJSON.fa_destroy_items5);
                $("#fa_destroy_items6").val(dataJSON.fa_destroy_items6);
                $("#fa_hurt").val(dataJSON.fa_hurt);
                $("#fa_hurt1").val(dataJSON.fa_hurt1);
                $("#fa_hurt2").val(dataJSON.fa_hurt2);
                $("#fa_hurt3").val(dataJSON.fa_hurt3);
                $("#fa_hurt4").val(dataJSON.fa_hurt4);
                $("#fa_hurt5").val(dataJSON.fa_hurt5);
                $("#fa_hurt6").val(dataJSON.fa_hurt6);
                $("#fa_out_hospita").val(dataJSON.fa_out_hospita);
                $("#fa_out_hospita1").val(dataJSON.fa_out_hospita1);
                $("#fa_out_hospita2").val(dataJSON.fa_out_hospita2);
                $("#fa_out_hospita3").val(dataJSON.fa_out_hospita3);
                $("#fa_out_hospita4").val(dataJSON.fa_out_hospita4);
                $("#fa_out_hospita5").val(dataJSON.fa_out_hospita5);
                $("#fa_out_hospita6").val(dataJSON.fa_out_hospita6);
                $("#fa_walk_out").val(dataJSON.fa_walk_out);
                $("#fa_walk_out1").val(dataJSON.fa_walk_out1);
                $("#fa_walk_out2").val(dataJSON.fa_walk_out2);
                $("#fa_walk_out3").val(dataJSON.fa_walk_out3);
                $("#fa_walk_out4").val(dataJSON.fa_walk_out4);
                $("#fa_walk_out5").val(dataJSON.fa_walk_out5);
                $("#fa_walk_out6").val(dataJSON.fa_walk_out6);
                $("#fa_balance").val(dataJSON.fa_balance);
                $("#fa_balance1").val(dataJSON.fa_balance1);
                $("#fa_balance2").val(dataJSON.fa_balance2);
                $("#fa_balance3").val(dataJSON.fa_balance3);
                $("#fa_balance4").val(dataJSON.fa_balance4);
                $("#fa_balance5").val(dataJSON.fa_balance5);
                $("#fa_balance6").val(dataJSON.fa_balance6);
                $("#equilibrium").val(dataJSON.equilibrium);
                $("#equilibrium1").val(dataJSON.equilibrium1);
                $("#equilibrium2").val(dataJSON.equilibrium2);
                $("#equilibrium3").val(dataJSON.equilibrium3);
                $("#equilibrium4").val(dataJSON.equilibrium4);
                $("#equilibrium5").val(dataJSON.equilibrium5);
                $("#equilibrium6").val(dataJSON.equilibrium6);
                $("#fa_heart_disease").val(dataJSON.fa_heart_disease);
                $("#fa_heart_disease1").val(dataJSON.fa_heart_disease1);
                $("#fa_heart_disease2").val(dataJSON.fa_heart_disease2);
                $("#fa_heart_disease3").val(dataJSON.fa_heart_disease3);
                $("#fa_heart_disease4").val(dataJSON.fa_heart_disease4);
                $("#fa_heart_disease5").val(dataJSON.fa_heart_disease5);
                $("#fa_heart_disease6").val(dataJSON.fa_heart_disease6);
                $("#fa_tired_easily").val(dataJSON.fa_tired_easily);
                $("#fa_tired_easily1").val(dataJSON.fa_tired_easily1);
                $("#fa_tired_easily2").val(dataJSON.fa_tired_easily2);
                $("#fa_tired_easily3").val(dataJSON.fa_tired_easily3);
                $("#fa_tired_easily4").val(dataJSON.fa_tired_easily4);
                $("#fa_tired_easily5").val(dataJSON.fa_tired_easily5);
                $("#fa_tired_easily6").val(dataJSON.fa_tired_easily6);
                $("#fa_fall_flat").val(dataJSON.fa_fall_flat);
                $("#fa_fall_flat1").val(dataJSON.fa_fall_flat1);
                $("#fa_fall_flat2").val(dataJSON.fa_fall_flat2);
                $("#fa_fall_flat3").val(dataJSON.fa_fall_flat3);
                $("#fa_fall_flat4").val(dataJSON.fa_fall_flat4);
                $("#fa_fall_flat5").val(dataJSON.fa_fall_flat5);
                $("#fa_fall_flat6").val(dataJSON.fa_fall_flat6);
                $("#fa_well").val(dataJSON.fa_well);
                $("#fa_well1").val(dataJSON.fa_well1);
                $("#fa_well2").val(dataJSON.fa_well2);
                $("#fa_well3").val(dataJSON.fa_well3);
                $("#fa_well4").val(dataJSON.fa_well4);
                $("#fa_well5").val(dataJSON.fa_well5);
                $("#fa_well6").val(dataJSON.fa_well6);
                //ให้แสดงข้อมูล fa_yourself ของ radio
                 if (dataJSON.fa_yourself == 1) {
                     $('#fa_have1').prop("checked", true);
                } else  {
                     $('#fa_have1').prop("checked", false);
                 }
                 if (dataJSON.fa_yourself1 == 1) {
                    $('#fa_none1').prop("checked", true);
               } else  {
                    $('#fa_none1').prop("checked", false);
                }
                if (dataJSON.fa_yourself2 == 1) {
                    $('#fa_hav1').prop("checked", true);
               } else  {
                    $('#fa_hav1').prop("checked", false);
                }
                if (dataJSON.fa_yourself3 == 1) {
                    $('fa_non1').prop("checked", true);
               } else  {
                    $('fa_non1').prop("checked", false);
                }
                if (dataJSON.fa_yourself4 == 1) {
                    $('#fa_ha1').prop("checked", true);
               } else  {
                    $('#fa_ha1').prop("checked", false);
                }
                if (dataJSON.fa_yourself5 == 1) {
                    $('#fa_no1').prop("checked", true);
               } else  {
                    $('#fa_no1').prop("checked", false);
                }
                if (dataJSON.fa_yourself6 == 1) {
                    $('#fa_h1').prop("checked", true);
               } else  {
                    $('#fa_h1').prop("checked", false);
                }
                if (dataJSON.fa_hurt_others == 1) {
                    $('#fa_have2').prop("checked", true);
               } else  {
                    $('#fa_have2').prop("checked", false);
                }
                if (dataJSON.fa_hurt_others1 == 1) {
                    $('#fa_none2').prop("checked", true);
               } else  {
                    $('#fa_none2').prop("checked", false);
                }
                if (dataJSON.fa_hurt_others2 == 1) {
                    $('#fa_hav2').prop("checked", true);
               } else  {
                    $('#fa_hav2').prop("checked", false);
                }
                if (dataJSON.fa_hurt_others3 == 1) {
                    $('#fa_non2').prop("checked", true);
               } else  {
                    $('#fa_non2').prop("checked", false);
                }
                if (dataJSON.fa_hurt_others4 == 1) {
                    $('#fa_ha2').prop("checked", true);
               } else  {
                    $('#fa_ha2').prop("checked", false);
                }
                if (dataJSON.fa_hurt_others5 == 1) {
                    $('#fa_no2').prop("checked", true);
               } else  {
                    $('#fa_no2').prop("checked", false);
                }
                if (dataJSON.fa_hurt_others6 == 1) {
                    $('#fa_h2').prop("checked", true);
               } else  {
                    $('#fa_h2').prop("checked", false);
                }
                if (dataJSON.fa_destroy_items == 1) {
                    $('#fa_have3').prop("checked", true);
               } else  {
                    $('#fa_have3').prop("checked", false);
                }
                if (dataJSON.fa_destroy_items1 == 1) {
                    $('#fa_none3').prop("checked", true);
               } else  {
                    $('#fa_none3').prop("checked", false);
                }
                if (dataJSON.fa_destroy_items2 == 1) {
                    $('#fa_hav3').prop("checked", true);
               } else  {
                    $('#fa_hav3').prop("checked", false);
                }
                if (dataJSON.fa_destroy_items3 == 1) {
                    $('#fa_non3').prop("checked", true);
               } else  {
                    $('#fa_non3').prop("checked", false);
                }
                if (dataJSON.fa_destroy_items4 == 1) {
                    $('#fa_ha3').prop("checked", true);
               } else  {
                    $('#fa_ha3').prop("checked", false);
                }
                if (dataJSON.fa_destroy_items5 == 1) {
                    $('#fa_no3').prop("checked", true);
               } else  {
                    $('#fa_no3').prop("checked", false);
                }
                if (dataJSON.fa_destroy_items6 == 1) {
                    $('#fa_h3').prop("checked", true);
               } else  {
                    $('#fa_h3').prop("checked", false);
                }
                if (dataJSON.fa_hurt == 1) {
                    $('#fa_have4').prop("checked", true);
               } else  {
                    $('#fa_have4').prop("checked", false);
                }
                if (dataJSON.fa_hurt1 == 1) {
                    $('#fa_none4').prop("checked", true);
               } else  {
                    $('#fa_none4').prop("checked", false);
                }
                if (dataJSON.fa_hurt2 == 1) {
                    $('#fa_hav4').prop("checked", true);
               } else  {
                    $('#fa_hav4').prop("checked", false);
                }
                if (dataJSON.fa_hurt3 == 1) {
                    $('#fa_non4').prop("checked", true);
               } else  {
                    $('#fa_non4').prop("checked", false);
                }
                if (dataJSON.fa_hurt4 == 1) {
                    $('#fa_ha4').prop("checked", true);
               } else  {
                    $('#fa_ha4').prop("checked", false);
                }
                if (dataJSON.fa_hurt5 == 1) {
                    $('#fa_no4').prop("checked", true);
               } else  {
                    $('#fa_no4').prop("checked", false);
                }
                if (dataJSON.fa_hurt6 == 1) {
                    $('#fa_h4').prop("checked", true);
               } else  {
                    $('#fa_h4').prop("checked", false);
                }
                if (dataJSON.fa_out_hospita == 1) {
                    $('#fa_have5').prop("checked", true);
               } else  {
                    $('#fa_have5').prop("checked", false);
                }
                if (dataJSON.fa_out_hospita1 == 1) {
                    $('#fa_none5').prop("checked", true);
               } else  {
                    $('#fa_none5').prop("checked", false);
                }
                if (dataJSON.fa_out_hospita2 == 1) {
                    $('#fa_hav5').prop("checked", true);
               } else  {
                    $('#fa_hav5').prop("checked", false);
                }
                if (dataJSON.fa_out_hospita3 == 1) {
                    $('#fa_non5').prop("checked", true);
               } else  {
                    $('#fa_non5').prop("checked", false);
                }
                if (dataJSON.fa_out_hospita4 == 1) {
                    $('#fa_ha5').prop("checked", true);
               } else  {
                    $('#fa_ha5').prop("checked", false);
                }
                if (dataJSON.fa_out_hospita5 == 1) {
                    $('#fa_no5').prop("checked", true);
               } else  {
                    $('#fa_no5').prop("checked", false);
                }
                if (dataJSON.fa_out_hospita6 == 1) {
                    $('#fa_h5').prop("checked", true);
               } else  {
                    $('#fa_h5').prop("checked", false);
                }
                if (dataJSON.fa_walk_out == 1) {
                    $('#fa_have6').prop("checked", true);
               } else  {
                    $('#fa_have6').prop("checked", false);
                }
                if (dataJSON.fa_walk_out1 == 1) {
                    $('#fa_none6').prop("checked", true);
               } else  {
                    $('#fa_none6').prop("checked", false);
                }
                if (dataJSON.fa_walk_out2 == 1) {
                    $('#fa_hav6').prop("checked", true);
               } else  {
                    $('#fa_hav6').prop("checked", false);
                }
                if (dataJSON.fa_walk_out3 == 1) {
                    $('#fa_non6').prop("checked", true);
               } else  {
                    $('#fa_non6').prop("checked", false);
                }
                if (dataJSON.fa_walk_out4 == 1) {
                    $('#fa_ha6').prop("checked", true);
               } else  {
                    $('#fa_ha6').prop("checked", false);
                }
                if (dataJSON.fa_walk_out5 == 1) {
                    $('#fa_no6').prop("checked", true);
               } else  {
                    $('#fa_no6').prop("checked", false);
                }
                if (dataJSON.fa_walk_out6 == 1) {
                    $('#fa_h6').prop("checked", true);
               } else  {
                    $('#fa_h6').prop("checked", false);
                }
                if (dataJSON.fa_balance == 1) {
                    $('#fa_have7').prop("checked", true);
               } else  {
                    $('#fa_have7').prop("checked", false);
                }
                if (dataJSON.fa_balance1 == 1) {
                    $('#fa_none7').prop("checked", true);
               } else  {
                    $('#fa_none7').prop("checked", false);
                }
                if (dataJSON.fa_balance2 == 1) {
                    $('#fa_hav7').prop("checked", true);
               } else  {
                    $('#fa_hav7').prop("checked", false);
                }
                if (dataJSON.fa_balance3 == 1) {
                    $('#fa_non7').prop("checked", true);
               } else  {
                    $('#fa_non7').prop("checked", false);
                }
                if (dataJSON.fa_balance4 == 1) {
                    $('#fa_ha7').prop("checked", true);
               } else  {
                    $('#fa_ha7').prop("checked", false);
                }
                if (dataJSON.fa_balance5 == 1) {
                    $('#fa_no7').prop("checked", true);
               } else  {
                    $('#fa_no7').prop("checked", false);
                }
                if (dataJSON.fa_balance6 == 1) {
                    $('#fa_h7').prop("checked", true);
               } else  {
                    $('#fa_h7').prop("checked", false);
                }
                if (dataJSON.equilibrium == 1) {
                    $('#fa_have8').prop("checked", true);
               } else  {
                    $('#fa_have8').prop("checked", false);
                }
                if (dataJSON.equilibrium1 == 1) {
                    $('#fa_none8').prop("checked", true);
               } else  {
                    $('#fa_none8').prop("checked", false);
                }
                if (dataJSON.equilibrium2 == 1) {
                    $('#fa_hav8').prop("checked", true);
               } else  {
                    $('#fa_hav8').prop("checked", false);
                }
                if (dataJSON.equilibrium3 == 1) {
                    $('#fa_non8').prop("checked", true);
               } else  {
                    $('#fa_non8').prop("checked", false);
                }
                if (dataJSON.equilibrium4 == 1) {
                    $('#fa_ha8').prop("checked", true);
               } else  {
                    $('#fa_ha8').prop("checked", false);
                }
                if (dataJSON.equilibrium5 == 1) {
                    $('#fa_no8').prop("checked", true);
               } else  {
                    $('#fa_no8').prop("checked", false);
                }
                if (dataJSON.equilibrium6 == 1) {
                    $('#fa_h8').prop("checked", true);
               } else  {
                    $('#fa_h8').prop("checked", false);
                }
                if (dataJSON.fa_heart_disease == 1) {
                    $('#fa_have9').prop("checked", true);
               } else  {
                    $('#fa_have9').prop("checked", false);
                }
                if (dataJSON.fa_heart_disease1 == 1) {
                    $('#fa_none9').prop("checked", true);
               } else  {
                    $('#fa_none9').prop("checked", false);
                }
                if (dataJSON.fa_heart_disease2 == 1) {
                    $('#fa_hav9').prop("checked", true);
               } else  {
                    $('#fa_hav9').prop("checked", false);
                }
                if (dataJSON.fa_heart_disease3 == 1) {
                    $('#fa_non9').prop("checked", true);
               } else  {
                    $('#fa_non9').prop("checked", false);
                }
                if (dataJSON.fa_heart_disease4 == 1) {
                    $('#fa_ha9').prop("checked", true);
               } else  {
                    $('#fa_ha9').prop("checked", false);
                }
                if (dataJSON.fa_heart_disease5 == 1) {
                    $('#fa_no9').prop("checked", true);
               } else  {
                    $('#fa_no9').prop("checked", false);
                }
                if (dataJSON.fa_heart_disease6 == 1) {
                    $('#fa_h9').prop("checked", true);
               } else  {
                    $('#fa_h9').prop("checked", false);
                }
                if (dataJSON.fa_tired_easily == 1) {
                    $('#fa_have10').prop("checked", true);
               } else  {
                    $('#fa_have10').prop("checked", false);
                }
                if (dataJSON.fa_tired_easily1 == 1) {
                    $('#fa_none10').prop("checked", true);
               } else  {
                    $('#fa_none10').prop("checked", false);
                }
                if (dataJSON.fa_tired_easily2 == 1) {
                    $('#fa_hav10').prop("checked", true);
               } else  {
                    $('#fa_hav10').prop("checked", false);
                }
                if (dataJSON.fa_tired_easily3 == 1) {
                    $('#fa_non10').prop("checked", true);
               } else  {
                    $('#fa_non10').prop("checked", false);
                }
                if (dataJSON.fa_tired_easily4 == 1) {
                    $('#fa_ha10').prop("checked", true);
               } else  {
                    $('#fa_ha10').prop("checked", false);
                }
                if (dataJSON.fa_tired_easily5 == 1) {
                    $('#fa_no10').prop("checked", true);
               } else  {
                    $('#fa_no10').prop("checked", false);
                }
                if (dataJSON.fa_tired_easily6 == 1) {
                    $('#fa_h10').prop("checked", true);
               } else  {
                    $('#fa_h10').prop("checked", false);
                }
                if (dataJSON.fa_fall_flat == 1) {
                    $('#fa_have11').prop("checked", true);
               } else  {
                    $('#fa_have11').prop("checked", false);
                }
                if (dataJSON.fa_fall_flat1 == 1) {
                    $('#fa_none11').prop("checked", true);
               } else  {
                    $('#fa_none11').prop("checked", false);
                }
                if (dataJSON.fa_fall_flat2 == 1) {
                    $('#fa_hav11').prop("checked", true);
               } else  {
                    $('#fa_hav11').prop("checked", false);
                }
                if (dataJSON.fa_fall_flat3 == 1) {
                    $('#fa_non11').prop("checked", true);
               } else  {
                    $('#fa_non11').prop("checked", false);
                }
                if (dataJSON.fa_fall_flat4 == 1) {
                    $('#fa_ha11').prop("checked", true);
               } else  {
                    $('#fa_ha11').prop("checked", false);
                }
                if (dataJSON.fa_fall_flat5 == 1) {
                    $('#fa_no11').prop("checked", true);
               } else  {
                    $('#fa_no11').prop("checked", false);
                }
                if (dataJSON.fa_fall_flat6 == 1) {
                    $('#fa_h11').prop("checked", true);
               } else  {
                    $('#fa_h11').prop("checked", false);
                }
                if (dataJSON.fa_well == 1) {
                    $('#fa_have12').prop("checked", true);
               } else  {
                    $('#fa_have12').prop("checked", false);
                }
                if (dataJSON.fa_well1 == 1) {
                    $('#fa_none12').prop("checked", true);
               } else  {
                    $('#fa_none12').prop("checked", false);
                }
                if (dataJSON.fa_well2 == 1) {
                    $('#fa_hav12').prop("checked", true);
               } else  {
                    $('#fa_hav12').prop("checked", false);
                }
                if (dataJSON.fa_well3 == 1) {
                    $('#fa_non12').prop("checked", true);
               } else  {
                    $('#fa_non12').prop("checked", false);
                }
                if (dataJSON.fa_well4 == 1) {
                    $('#fa_ha12').prop("checked", true);
               } else  {
                    $('#fa_ha12').prop("checked", false);
                }
                if (dataJSON.fa_well5 == 1) {
                    $('#fa_no12').prop("checked", true);
               } else  {
                    $('#fa_no12').prop("checked", false);
                }
                if (dataJSON.fa_well6 == 1) {
                    $('#fa_h12').prop("checked", true);
               } else  {
                    $('#fa_h12').prop("checked", false);
                }

            }
        }


    });
}

$('#fa_have1').on("click", function () {
    if ($(this).val() == 1) {
        $('#fa_text2').prop("disabled", false).val();
    }else if($(this).val() == ''){
        $('#fa_text2').prop("disabled", true).val();
}
});
 $('#fa_none1').on("click", function () {
    if ($(this).val() == 1) {
        $('#fa_text2').prop("disabled", false).val();
    }else if($(this).val() == ''){
        $('#fa_text2').prop("disabled", true).val();
}
});

$('#fa_hav1').on("click", function () {
    if ($(this).val() == 1) {
        $('#fa_text2').prop("disabled", false).val();
    }else if($(this).val() == ''){
        $('#fa_text2').prop("disabled", true).val();
}
});
$('#fa_non1').on("click", function () {
    if ($(this).val() == 1) {
        $('#fa_text2').prop("disabled", false).val();
    }else if($(this).val() == ''){
        $('#fa_text2').prop("disabled", true).val();
    }
});
$('#fa_ha1').on("click", function () {
    if ($(this).val() == 1) {
        $('#fa_text2').prop("disabled", false).val();
    }else if($(this).val() == ''){
        $('#fa_text2').prop("disabled", true).val();
}
});
$('#fa_no1').on("click", function () {
    if ($(this).val() == 1) {
        $('#fa_text2').prop("disabled", false).val();
    }else if($(this).val() == ''){
        $('#fa_text2').prop("disabled", true).val();
}
});
$('#fa_h1').on("click", function () {
    if ($(this).val() == 1) {
        $('#fa_text2').prop("disabled", false).val();
    }else if($(this).val() == ''){
        $('#fa_text2').prop("disabled", true).val();
    }
    });

    $('#fa_have2').on("click", function () {
        if ($(this).val() == 1) {
            $('#fa_text3').prop("disabled", false).val();
        }else if($(this).val() == ''){
            $('#fa_text3').prop("disabled", true).val();
    }
    });
     $('#fa_none2').on("click", function () {
        if ($(this).val() == 1) {
            $('#fa_text3').prop("disabled", false).val();
        }else if($(this).val() == ''){
            $('#fa_text3').prop("disabled", true).val();
    }
    });
    
    $('#fa_hav2').on("click", function () {
        if ($(this).val() == 1) {
            $('#fa_text3').prop("disabled", false).val();
        }else if($(this).val() == ''){
            $('#fa_text3').prop("disabled", true).val();
    }
    });
    $('#fa_non2').on("click", function () {
        if ($(this).val() == 1) {
            $('#fa_text3').prop("disabled", false).val();
        }else if($(this).val() == ''){
            $('#fa_text3').prop("disabled", true).val();
        }
    });
    $('#fa_ha2').on("click", function () {
        if ($(this).val() == 1) {
            $('#fa_text3').prop("disabled", false).val();
        }else if($(this).val() == ''){
            $('#fa_text3').prop("disabled", true).val();
    }
    });
    $('#fa_no2').on("click", function () {
        if ($(this).val() == 1) {
            $('#fa_text3').prop("disabled", false).val();
        }else if($(this).val() == ''){
            $('#fa_text3').prop("disabled", true).val();
    }
    });
    $('#fa_h2').on("click", function () {
        if ($(this).val() == 1) {
            $('#fa_text3').prop("disabled", false).val();
        }else if($(this).val() == ''){
            $('#fa_text3').prop("disabled", true).val();
        }
        });

        $('#fa_have3').on("click", function () {
            if ($(this).val() == 1) {
                $('#fa_text4').prop("disabled", false).val();
            }else if($(this).val() == ''){
                $('#fa_text4').prop("disabled", true).val();
        }
        });
         $('#fa_none3').on("click", function () {
            if ($(this).val() == 1) {
                $('#fa_text4').prop("disabled", false).val();
            }else if($(this).val() == ''){
                $('#fa_text4').prop("disabled", true).val();
        }
        });
        
        $('#fa_hav3').on("click", function () {
            if ($(this).val() == 1) {
                $('#fa_text4').prop("disabled", false).val();
            }else if($(this).val() == ''){
                $('#fa_text4').prop("disabled", true).val();
        }
        });
        $('#fa_non3').on("click", function () {
            if ($(this).val() == 1) {
                $('#fa_text4').prop("disabled", false).val();
            }else if($(this).val() == ''){
                $('#fa_text4').prop("disabled", true).val();
            }
        });
        $('#fa_ha3').on("click", function () {
            if ($(this).val() == 1) {
                $('#fa_text4').prop("disabled", false).val();
            }else if($(this).val() == ''){
                $('#fa_text4').prop("disabled", true).val();
        }
        });
        $('#fa_no3').on("click", function () {
            if ($(this).val() == 1) {
                $('#fa_text4').prop("disabled", false).val();
            }else if($(this).val() == ''){
                $('#fa_text4').prop("disabled", true).val();
        }
        });
        $('#fa_h3').on("click", function () {
            if ($(this).val() == 1) {
                $('#fa_text4').prop("disabled", false).val();
            }else if($(this).val() == ''){
                $('#fa_text4').prop("disabled", true).val();
            }
            });
        
            $('#fa_have4').on("click", function () {
                if ($(this).val() == 1) {
                    $('#fa_text5').prop("disabled", false).val();
                }else if($(this).val() == ''){
                    $('#fa_text5').prop("disabled", true).val();
            }
            });
             $('#fa_none4').on("click", function () {
                if ($(this).val() == 1) {
                    $('#fa_text5').prop("disabled", false).val();
                }else if($(this).val() == ''){
                    $('#fa_text5').prop("disabled", true).val();
            }
            });
            
            $('#fa_hav4').on("click", function () {
                if ($(this).val() == 1) {
                    $('#fa_text5').prop("disabled", false).val();
                }else if($(this).val() == ''){
                    $('#fa_text5').prop("disabled", true).val();
            }
            });
            $('#fa_non4').on("click", function () {
                if ($(this).val() == 1) {
                    $('#fa_text5').prop("disabled", false).val();
                }else if($(this).val() == ''){
                    $('#fa_text5').prop("disabled", true).val();
                }
            });
            $('#fa_ha4').on("click", function () {
                if ($(this).val() == 1) {
                    $('#fa_text5').prop("disabled", false).val();
                }else if($(this).val() == ''){
                    $('#fa_text5').prop("disabled", true).val();
            }
            });
            $('#fa_no4').on("click", function () {
                if ($(this).val() == 1) {
                    $('#fa_text5').prop("disabled", false).val();
                }else if($(this).val() == ''){
                    $('#fa_text5').prop("disabled", true).val();
            }
            });
            $('#fa_h4').on("click", function () {
                if ($(this).val() == 1) {
                    $('#fa_text5').prop("disabled", false).val();
                }else if($(this).val() == ''){
                    $('#fa_text5').prop("disabled", true).val();
                }
                });

                $('#fa_have5').on("click", function () {
                    if ($(this).val() == 1) {
                        $('#fa_text6').prop("disabled", false).val();
                    }else if($(this).val() == ''){
                        $('#fa_text6').prop("disabled", true).val();
                }
                });
                 $('#fa_none5').on("click", function () {
                    if ($(this).val() == 1) {
                        $('#fa_text6').prop("disabled", false).val();
                    }else if($(this).val() == ''){
                        $('#fa_text6').prop("disabled", true).val();
                }
                });
                
                $('#fa_hav5').on("click", function () {
                    if ($(this).val() == 1) {
                        $('#fa_text6').prop("disabled", false).val();
                    }else if($(this).val() == ''){
                        $('#fa_text6').prop("disabled", true).val();
                }
                });
                $('#fa_non5').on("click", function () {
                    if ($(this).val() == 1) {
                        $('#fa_text6').prop("disabled", false).val();
                    }else if($(this).val() == ''){
                        $('#fa_text6').prop("disabled", true).val();
                    }
                });
                $('#fa_ha5').on("click", function () {
                    if ($(this).val() == 1) {
                        $('#fa_text6').prop("disabled", false).val();
                    }else if($(this).val() == ''){
                        $('#fa_text6').prop("disabled", true).val();
                }
                });
                $('#fa_no5').on("click", function () {
                    if ($(this).val() == 1) {
                        $('#fa_text6').prop("disabled", false).val();
                    }else if($(this).val() == ''){
                        $('#fa_text6').prop("disabled", true).val();
                }
                });
                $('#fa_h5').on("click", function () {
                    if ($(this).val() == 1) {
                        $('#fa_text6').prop("disabled", false).val();
                    }else if($(this).val() == ''){
                        $('#fa_text6').prop("disabled", true).val();
                    }
                    });
                
                    $('#fa_have6').on("click", function () {
                        if ($(this).val() == 1) {
                            $('#fa_text7').prop("disabled", false).val();
                        }else if($(this).val() == ''){
                            $('#fa_text7').prop("disabled", true).val();
                    }
                    });
                     $('#fa_none6').on("click", function () {
                        if ($(this).val() == 1) {
                            $('#fa_text7').prop("disabled", false).val();
                        }else if($(this).val() == ''){
                            $('#fa_text7').prop("disabled", true).val();
                    }
                    });
                    
                    $('#fa_hav6').on("click", function () {
                        if ($(this).val() == 1) {
                            $('#fa_text7').prop("disabled", false).val();
                        }else if($(this).val() == ''){
                            $('#fa_text7').prop("disabled", true).val();
                    }
                    });
                    $('#fa_non6').on("click", function () {
                        if ($(this).val() == 1) {
                            $('#fa_text7').prop("disabled", false).val();
                        }else if($(this).val() == ''){
                            $('#fa_text7').prop("disabled", true).val();
                        }
                    });
                    $('#fa_ha6').on("click", function () {
                        if ($(this).val() == 1) {
                            $('#fa_text7').prop("disabled", false).val();
                        }else if($(this).val() == ''){
                            $('#fa_text7').prop("disabled", true).val();
                    }
                    });
                    $('#fa_no6').on("click", function () {
                        if ($(this).val() == 1) {
                            $('#fa_text7').prop("disabled", false).val();
                        }else if($(this).val() == ''){
                            $('#fa_text7').prop("disabled", true).val();
                    }
                    });
                    $('#fa_h6').on("click", function () {
                        if ($(this).val() == 1) {
                            $('#fa_text7').prop("disabled", false).val();
                        }else if($(this).val() == ''){
                            $('#fa_text7').prop("disabled", true).val();
                        }
                        });

                        $('#fa_have7').on("click", function () {
                            if ($(this).val() == 1) {
                                $('#fa_text8').prop("disabled", false).val();
                            }else if($(this).val() == ''){
                                $('#fa_text8').prop("disabled", true).val();
                        }
                        });
                         $('#fa_none7').on("click", function () {
                            if ($(this).val() == 1) {
                                $('#fa_text8').prop("disabled", false).val();
                            }else if($(this).val() == ''){
                                $('#fa_text8').prop("disabled", true).val();
                        }
                        });
                        
                        $('#fa_hav7').on("click", function () {
                            if ($(this).val() == 1) {
                                $('#fa_text8').prop("disabled", false).val();
                            }else if($(this).val() == ''){
                                $('#fa_text8').prop("disabled", true).val();
                        }
                        });
                        $('#fa_non7').on("click", function () {
                            if ($(this).val() == 1) {
                                $('#fa_text8').prop("disabled", false).val();
                            }else if($(this).val() == ''){
                                $('#fa_text8').prop("disabled", true).val();
                            }
                        });
                        $('#fa_ha7').on("click", function () {
                            if ($(this).val() == 1) {
                                $('#fa_text8').prop("disabled", false).val();
                            }else if($(this).val() == ''){
                                $('#fa_text8').prop("disabled", true).val();
                        }
                        });
                        $('#fa_no7').on("click", function () {
                            if ($(this).val() == 1) {
                                $('#fa_text8').prop("disabled", false).val();
                            }else if($(this).val() == ''){
                                $('#fa_text8').prop("disabled", true).val();
                        }
                        });
                        $('#fa_h7').on("click", function () {
                            if ($(this).val() == 1) {
                                $('#fa_text8').prop("disabled", false).val();
                            }else if($(this).val() == ''){
                                $('#fa_text8').prop("disabled", true).val();
                            }
                            });
                        
                            $('#fa_have8').on("click", function () {
                                if ($(this).val() == 1) {
                                    $('#fa_text9').prop("disabled", false).val();
                                }else if($(this).val() == ''){
                                    $('#fa_text9').prop("disabled", true).val();
                            }
                            });
                             $('#fa_none8').on("click", function () {
                                if ($(this).val() == 1) {
                                    $('#fa_text9').prop("disabled", false).val();
                                }else if($(this).val() == ''){
                                    $('#fa_text9').prop("disabled", true).val();
                            }
                            });
                            
                            $('#fa_hav8').on("click", function () {
                                if ($(this).val() == 1) {
                                    $('#fa_text9').prop("disabled", false).val();
                                }else if($(this).val() == ''){
                                    $('#fa_text9').prop("disabled", true).val();
                            }
                            });
                            $('#fa_non8').on("click", function () {
                                if ($(this).val() == 1) {
                                    $('#fa_text9').prop("disabled", false).val();
                                }else if($(this).val() == ''){
                                    $('#fa_text9').prop("disabled", true).val();
                                }
                            });
                            $('#fa_ha8').on("click", function () {
                                if ($(this).val() == 1) {
                                    $('#fa_text9').prop("disabled", false).val();
                                }else if($(this).val() == ''){
                                    $('#fa_text9').prop("disabled", true).val();
                            }
                            });
                            $('#fa_no8').on("click", function () {
                                if ($(this).val() == 1) {
                                    $('#fa_text9').prop("disabled", false).val();
                                }else if($(this).val() == ''){
                                    $('#fa_text9').prop("disabled", true).val();
                            }
                            });
                            $('#fa_h8').on("click", function () {
                                if ($(this).val() == 1) {
                                    $('#fa_text9').prop("disabled", false).val();
                                }else if($(this).val() == ''){
                                    $('#fa_text9').prop("disabled", true).val();
                                }
                                });
                                $('#fa_have9').on("click", function () {
                                    if ($(this).val() == 1) {
                                        $('#fa_text10').prop("disabled", false).val();
                                    }else if($(this).val() == ''){
                                        $('#fa_text10').prop("disabled", true).val();
                                }
                                });
                                 $('#fa_none9').on("click", function () {
                                    if ($(this).val() == 1) {
                                        $('#fa_text10').prop("disabled", false).val();
                                    }else if($(this).val() == ''){
                                        $('#fa_text10').prop("disabled", true).val();
                                }
                                });
                                
                                $('#fa_hav9').on("click", function () {
                                    if ($(this).val() == 1) {
                                        $('#fa_text10').prop("disabled", false).val();
                                    }else if($(this).val() == ''){
                                        $('#fa_text10').prop("disabled", true).val();
                                }
                                });
                                $('#fa_non9').on("click", function () {
                                    if ($(this).val() == 1) {
                                        $('#fa_text10').prop("disabled", false).val();
                                    }else if($(this).val() == ''){
                                        $('#fa_text10').prop("disabled", true).val();
                                    }
                                });
                                $('#fa_ha9').on("click", function () {
                                    if ($(this).val() == 1) {
                                        $('#fa_text10').prop("disabled", false).val();
                                    }else if($(this).val() == ''){
                                        $('#fa_text10').prop("disabled", true).val();
                                }
                                });
                                $('#fa_no9').on("click", function () {
                                    if ($(this).val() == 1) {
                                        $('#fa_text10').prop("disabled", false).val();
                                    }else if($(this).val() == ''){
                                        $('#fa_text10').prop("disabled", true).val();
                                }
                                });
                                $('#fa_h9').on("click", function () {
                                    if ($(this).val() == 1) {
                                        $('#fa_text10').prop("disabled", false).val();
                                    }else if($(this).val() == ''){
                                        $('#fa_text10').prop("disabled", true).val();
                                    }
                                    });
                                
                                    $('#fa_have10').on("click", function () {
                                        if ($(this).val() == 1) {
                                            $('#fa_text11').prop("disabled", false).val();
                                        }else if($(this).val() == ''){
                                            $('#fa_text11').prop("disabled", true).val();
                                    }
                                    });
                                     $('#fa_none10').on("click", function () {
                                        if ($(this).val() == 1) {
                                            $('#fa_text11').prop("disabled", false).val();
                                        }else if($(this).val() == ''){
                                            $('#fa_text11').prop("disabled", true).val();
                                    }
                                    });
                                    
                                    $('#fa_hav10').on("click", function () {
                                        if ($(this).val() == 1) {
                                            $('#fa_text11').prop("disabled", false).val();
                                        }else if($(this).val() == ''){
                                            $('#fa_text11').prop("disabled", true).val();
                                    }
                                    });
                                    $('#fa_non10').on("click", function () {
                                        if ($(this).val() == 1) {
                                            $('#fa_text11').prop("disabled", false).val();
                                        }else if($(this).val() == ''){
                                            $('#fa_text11').prop("disabled", true).val();
                                        }
                                    });
                                    $('#fa_ha10').on("click", function () {
                                        if ($(this).val() == 1) {
                                            $('#fa_text11').prop("disabled", false).val();
                                        }else if($(this).val() == ''){
                                            $('#fa_text11').prop("disabled", true).val();
                                    }
                                    });
                                    $('#fa_no10').on("click", function () {
                                        if ($(this).val() == 1) {
                                            $('#fa_text11').prop("disabled", false).val();
                                        }else if($(this).val() == ''){
                                            $('#fa_text11').prop("disabled", true).val();
                                    }
                                    });
                                    $('#fa_h10').on("click", function () {
                                        if ($(this).val() == 1) {
                                            $('#fa_text11').prop("disabled", false).val();
                                        }else if($(this).val() == ''){
                                            $('#fa_text11').prop("disabled", true).val();
                                        }
                                        });
                                        $('#fa_have11').on("click", function () {
                                            if ($(this).val() == 1) {
                                                $('#fa_text12').prop("disabled", false).val();
                                            }else if($(this).val() == ''){
                                                $('#fa_text12').prop("disabled", true).val();
                                        }
                                        });
                                         $('#fa_none11').on("click", function () {
                                            if ($(this).val() == 1) {
                                                $('#fa_text12').prop("disabled", false).val();
                                            }else if($(this).val() == ''){
                                                $('#fa_text12').prop("disabled", true).val();
                                        }
                                        });
                                        
                                        $('#fa_hav11').on("click", function () {
                                            if ($(this).val() == 1) {
                                                $('#fa_text12').prop("disabled", false).val();
                                            }else if($(this).val() == ''){
                                                $('#fa_text12').prop("disabled", true).val();
                                        }
                                        });
                                        $('#fa_non11').on("click", function () {
                                            if ($(this).val() == 1) {
                                                $('#fa_text12').prop("disabled", false).val();
                                            }else if($(this).val() == ''){
                                                $('#fa_text12').prop("disabled", true).val();
                                            }
                                        });
                                        $('#fa_ha11').on("click", function () {
                                            if ($(this).val() == 1) {
                                                $('#fa_text12').prop("disabled", false).val();
                                            }else if($(this).val() == ''){
                                                $('#fa_text12').prop("disabled", true).val();
                                        }
                                        });
                                        $('#fa_no11').on("click", function () {
                                            if ($(this).val() == 1) {
                                                $('#fa_text12').prop("disabled", false).val();
                                            }else if($(this).val() == ''){
                                                $('#fa_text12').prop("disabled", true).val();
                                        }
                                        });
                                        $('#fa_h11').on("click", function () {
                                            if ($(this).val() == 1) {
                                                $('#fa_text12').prop("disabled", false).val();
                                            }else if($(this).val() == ''){
                                                $('#fa_text12').prop("disabled", true).val();
                                            }
                                            });
                                        
                                            $('#fa_have12').on("click", function () {
                                                if ($(this).val() == 1) {
                                                    $('#fa_text13').prop("disabled", false).val();
                                                }else if($(this).val() == ''){
                                                    $('#fa_text13').prop("disabled", true).val();
                                            }
                                            });
                                             $('#fa_none12').on("click", function () {
                                                if ($(this).val() == 1) {
                                                    $('#fa_text13').prop("disabled", false).val();
                                                }else if($(this).val() == ''){
                                                    $('#fa_text13').prop("disabled", true).val();
                                            }
                                            });
                                            
                                            $('#fa_hav12').on("click", function () {
                                                if ($(this).val() == 1) {
                                                    $('#fa_text13').prop("disabled", false).val();
                                                }else if($(this).val() == ''){
                                                    $('#fa_text13').prop("disabled", true).val();
                                            }
                                            });
                                            $('#fa_non12').on("click", function () {
                                                if ($(this).val() == 1) {
                                                    $('#fa_text13').prop("disabled", false).val();
                                                }else if($(this).val() == ''){
                                                    $('#fa_text13').prop("disabled", true).val();
                                                }
                                            });
                                            $('#fa_ha12').on("click", function () {
                                                if ($(this).val() == 1) {
                                                    $('#fa_text13').prop("disabled", false).val();
                                                }else if($(this).val() == ''){
                                                    $('#fa_text13').prop("disabled", true).val();
                                            }
                                            });
                                            $('#fa_no12').on("click", function () {
                                                if ($(this).val() == 1) {
                                                    $('#fa_text13').prop("disabled", false).val();
                                                }else if($(this).val() == ''){
                                                    $('#fa_text13').prop("disabled", true).val();
                                            }
                                            });
                                            $('#fa_h12').on("click", function () {
                                                if ($(this).val() == 1) {
                                                    $('#fa_text13').prop("disabled", false).val();
                                                }else if($(this).val() == ''){
                                                    $('#fa_text13').prop("disabled", true).val();
                                                }
                                                });