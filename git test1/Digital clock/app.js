// console.log("hello world")

setInterval(showTime,1000);
function showTime(){
    const time = new Date();
    let hour = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    // am_pm ='AM';
    // if(hour > 12){
    //     hour =hour - 12;
    //     am_pm ='PM';
    // }
    // if(hour == 0){
    //     hr =12;
    //     am_pm ='AM';
    // };
    // hour =hour <10 ? '0'+ hour : hour;
    // min =min <10 ? '0'+min : min;
    // sec = sec < 10 ? '0' + sec : sec ;
    // let currentTime = hour +':'+ min +':'+ sec +am_pm;

    // document.getElementById('clock').innerHTML = currentTime;
 am_pm ='PM'
    if(hour >12){
        am_pm ='PM'
       hour -=12;
         }else{
            am_pm ="AM"
         }




    if(hour <10){
        hour = "0"+hour;
    }
    
    document.getElementById('clock').innerHTML = hour +':'+min +':'+sec+' ' +am_pm ;
}
showTime();


