function back()
{
    history.back();
}
var a,b,c,d,flag=true;
function change()
{
    if(flag==true){
    document.getElementById("full").style.backgroundColor="#17202A";

    document.getElementById("body").style.color="black";
    document.getElementById("todo").style.color="black";
    flag=false;
}
else if(flag==true){
    document.getElementById("body").style.backgroundColor="#25274D";
    flag=true;
}
else{
    document.getElementById("full").style.backgroundColor="white";
    document.getElementById("body").style.color="RED";
    document.getElementById("full").style.backgroundImage="https://images.pexels.com/photos/4195500/pexels-photo-4195500.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
    flag=true;
}
}
var nodelist=document.getElementsByTagName("LI");
var i;
for(i=0;i<nodelist.length;i++)
{
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    nodelist[i].appendChild(span);

}

var close=document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++){
    close[i].onclick=function(){
        var div=this.parentElement;
        div.style.display="none";
    }
}
var textinput=document.getElementById("val");
textinput.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById("btn").click();
    }
})
function newelement()
{
    var li=document.createElement("LI");
    var txt=document.getElementById("val").value;
    var text=document.createTextNode(txt);
    li.appendChild(text);
    if(txt==="")
    {
       txt= prompt("write something");
       var text=document.createTextNode(txt);
       if(txt==="")
       {
        txt="please add something";
        var text=document.createTextNode(txt);
        li.appendChild(text);
        document.getElementById("myUL").appendChild(li);
        li.className="list-group-item";
       }
       else{
        li.appendChild(text);
        document.getElementById("myUL").appendChild(li);
        li.className="list-group-item";

       }
    }
    else{
      txt="please add something";
      document.getElementById("myUL").appendChild(li);
      li.className="list-group-item";
    }
    document.getElementById("val").value="";
    var span=document.createElement("SPAN");
    var txt=document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    li.appendChild(span);
    var i;
    for(i=0;i<close.length;i++){
        close[i].onclick=function(){
            var div=this.parentElement;
            div.style.display="none";
        }
    }

}
