$(document).ready(function(){

    // METHOD FOR RETURNING TODAY'S DATE
    $("#date").html(moment().format('dddd, MMMM Do, YYYY'));
    
    // SETTING DATA ATTRIBUTES FOR EACH TIME BLOCK
    $("#9Block").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
    $("#10Block").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
    $("#11Block").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
    $("#12Block").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
    $("#1Block").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
    $("#2Block").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
    $("#3Block").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
    $("#4Block").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
    $("#5Block").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));
    
});
