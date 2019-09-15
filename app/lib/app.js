function persist(){
    var isPersist = $.cookie("mcinf");
    if(isPersist==1){
        LaunchMC();
    }
    else {
    }
}
function mc(uname){
    if(localStorage.getItem("FFLMC")===null){
        localStorage.setItem('FFLMC',""+uname+"");
    }
    else{
        var existing=localStorage.getItem('FFLMC');
        existing=existing?existing.split(','):[];
        existing.push(''+uname+'');
        localStorage.setItem('FFLMC',existing.toString());
    }
}
function LaunchMC(){
    if(localStorage.getItem("FFLMC")===null) {
        console.log("No user selected, defaulting to twitchpresents as backup");
        localStorage.setItem('FFLMC',"twitchpresents");
    }
    else{
        var FullWatchList=localStorage.getItem("FFLMC");
        var SplitWatchList=FullWatchList.split(",");
        var TotalWatchListLength=SplitWatchList.length;
        var MultiscreenList="";
        if(TotalWatchListLength>8) {
            console.log("Multicam can only support 9 screens at max. Other screens will be dropped from your selection.");
	            MultiscreenList=SplitWatchList.slice(0,9);
	            localStorage.setItem('FFLMC',MultiscreenList);
        }
        else{
            console.log('Proceeding to launch Multicam');
        }
    }
    $('body').empty();
    $("body").load( "multi.html",function(response,status,xhr){if(status=="error"){var msg="Sorry but there was an error: ";
    $("body").html(msg+xhr.status+" "+xhr.statusText);}});
    
    // Set cookie for interface persistance (avoids refresh issue)
    // Terminates on session close
    $.cookie('mcinf', '1', { secure: 'true' });
}