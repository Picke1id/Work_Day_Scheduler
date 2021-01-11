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
    
    //METHOD FOR CHANGING TIME BLOCK COLORS ACCORDING TO CURRENT TIME
    var currentTime = moment().format("HH");
    var currentTimeInt = parseInt(currentTime);

    for (var i = 0; i <= 12; i++){
        var block = $("#" + i + "Block");
        var blockTime = $("#" + i + "Block").attr("data-time");
        var blockTimeInt = parseInt(blockTime);

        //IF BLOCK TIME IS PRESENT
        if(currentTimeInt === blockTimeInt){
            $(block).addClass("present");
        };

        //IF BLOCK TIME HAS PAST
        if(currentTimeInt > blockTimeInt){
            $(block).addClass("past");
        };

        //IF BLOCK TIME IS IN FUTURE
        if(currentTimeInt < blockTimeInt){
            $(block).addClass("future");
        };
    };
    
    //METHOD FOR SAVING EVENT TO LOCAL STORAGE
    $("div[id^='saveBtn']").on("click", function(){
        var time = $(this).attr("data-hour");
        var event = $("#" + time + "Block").val();
        localStorage.setItem(time, event);
    });
    
    //METHOD FOR DISPLAYING SAVED EVENT
    function showEvents(){
        for (var i = 0 ; i <= 12; i++){
            $("#" + i + "Block").val(localStorage.getItem(i));
        };
    };

    //CALLING SAVED EVENTS
    showEvents();
    
});
