$(document).ready(() => {

    $(".accordion1").click(function(){
        $(".panel1").toggle();
        $(".panel2").hide();
        $(".panel3").hide();
    });

     $(".accordion2").click(function(){
        $(".panel1").hide();
        $(".panel2").toggle();
        $(".panel3").hide();
    });

     $(".accordion3").click(function(){
        $(".panel1").hide();
        $(".panel2").hide();
        $(".panel3").toggle();
    });

});