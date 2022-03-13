var a,b,c,d,flag=true;
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
var textinput=document.getElementById("val3");
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
    var txt1=document.getElementById("val1").value;
    var text=document.createTextNode(txt+":"+txt1);
    var text1=document.createTextNode(txt1);
    li.appendChild(text);

    document.getElementById("myUL").appendChild(li);
    li.className="list-group-item";
    document.getElementById("val").value="";
    document.getElementById("val1").value="";
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
