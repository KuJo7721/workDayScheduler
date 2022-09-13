
$('#currentDay').text(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"))

$(".saveBtn").click(function(){
console.log($(this).siblings("textarea"))
var text = $(this).siblings("textarea").val()
var id =  $(this).siblings("textarea").attr("id")
console.log(text, id)
localStorage.setItem(id, text)
})

$("#9").val(localStorage.getItem("9"))
$("#10").val(localStorage.getItem("10"))
$("#11").val(localStorage.getItem("11"))
$("#12").val(localStorage.getItem("12"))
$("#13").val(localStorage.getItem("13"))
$("#14").val(localStorage.getItem("14"))
$("#15").val(localStorage.getItem("15"))
$("#16").val(localStorage.getItem("16"))
$("#17").val(localStorage.getItem("17"))
function colorChange(){
    $("textarea").each(function(){
        console.log(this)
        var currentTime = moment().hour(); 
        var time = $(this).attr("id");
        console.log(currentTime, time)
        if(time < currentTime){
            $(this).addClass("past");   
        }else if(time == currentTime){
            $(this).addClass("present");  
        }else{
            $(this).addClass("future"); 
        }
    })
}
colorChange()