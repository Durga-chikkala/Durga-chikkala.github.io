function currentTime()
{
    var date=new Date();
    var hour=date.getHours();
    var min=date.getMinutes();
    var sec=date.getSeconds();
    var day=date.getDay();
    var month=date.getMonth();
    var year=date.getFullYear();
    var curr_Date=date.getDate();
    var months=["January","February","March","April","May","June","July","Augest","September","October","November","December"];
    var showDay=document.querySelector(".day_wrapper span");
    var midday="AM";
    midday=hour>12 ? "PM":"AM";
    hour=hour==0 ? 12:hour>12 ? hour-12 :hour;
    hour=update(hour);
    min=update(min);
    sec=update(sec);
    curr_Date=update(curr_Date);
    var k=document.querySelector("#times");
    k.innerHTML=`${hour}:${min}`;
    document.querySelector("#mid").innerHTML=`${midday}`;
    document.querySelector("#sec").innerHTML=`${sec}`;
    document.querySelector("#full_date").innerHTML=`${months[month]} ${curr_Date} ${year}`;
    showDay.style.opacity="1";
}
function update(k)
{
    if(k<10)
    {
        return "0"+k;
    }
    else{
        return k;
    }
}
setInterval(currentTime,1000);