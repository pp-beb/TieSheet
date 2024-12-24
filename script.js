let TeamA=[];
let TeamB=[];
let p1=[0,0,0];
let p2=[0,0,0];
let gd1=[0,0,0];
let gd2=[0,0,0];
let w1=[0,0,0];
let w2=[0,0,0];
let l1=[0,0,0];
let l2=[0,0,0];
let d1=[0,0,0];
let d2=[0,0,0];
let po1=[0,0,0];
let po2=[0,0,0];
let count=0;
function InputNmae(Element){
    const teamname=prompt("Enter the team name:");
    const Elementid=Element.id;
    document.getElementById(Elementid).innerText=teamname;
   if(count<=2){ 
    TeamA[count]=teamname;}
    else{
        TeamB[count-3]=teamname;
    }
    count++;
}

function LeagueDraw(){
    if ([...document.querySelectorAll("div")].some(div => div.innerText === "" || div.innerText === "Add a team")) {
        alert("Please Enter Valid team names");
    }
    else{
        document.getElementById("inputTerminalOne").style.visibility="hidden";
        document.getElementById("inputTerminalTwo").style.visibility="hidden";
        document.getElementById("generateLeague").style.visibility="hidden";
        document.getElementById("table1").style.visibility="visible";
        document.getElementById("table2").style.visibility="visible";
        document.getElementById("a12").innerText=TeamA[0];
        document.getElementById("a22").innerText=TeamA[1];
        document.getElementById("a32").innerText=TeamA[2];
        document.getElementById("b12").innerText=TeamB[0];
        document.getElementById("b22").innerText=TeamB[1];
        document.getElementById("b32").innerText=TeamB[2];
        document.getElementById("a13").innerText=p1[0];
        document.getElementById("a23").innerText=p1[1];
        document.getElementById("a33").innerText=p1[2];
        document.getElementById("b13").innerText=p2[0];
        document.getElementById("b23").innerText=p2[1];
        document.getElementById("b33").innerText=p2[2];
        document.getElementById("a14").innerText=gd1[0];
        document.getElementById("a24").innerText=gd1[1];
        document.getElementById("a34").innerText=gd1[2];
        document.getElementById("b14").innerText=gd2[0];
        document.getElementById("b24").innerText=gd2[1];
        document.getElementById("b34").innerText=gd2[2];
        document.getElementById("a15").innerText=w1[0];
        document.getElementById("a25").innerText=w1[1];
        document.getElementById("a35").innerText=w1[2];
        document.getElementById("b15").innerText=w2[0];
        document.getElementById("b25").innerText=w2[1];
        document.getElementById("b35").innerText=w2[2];
        document.getElementById("a16").innerText=l1[0];
        document.getElementById("a26").innerText=l1[1];
        document.getElementById("a36").innerText=l1[2];
        document.getElementById("b16").innerText=l2[0];
        document.getElementById("b26").innerText=l2[1];
        document.getElementById("b36").innerText=l2[2];
        document.getElementById("a17").innerText=d1[0];
        document.getElementById("a27").innerText=d1[1];
        document.getElementById("a37").innerText=d1[2];
        document.getElementById("b17").innerText=d2[0];
        document.getElementById("b27").innerText=d2[1];
        document.getElementById("b37").innerText=d2[2];
        document.getElementById("a18").innerText=po1[0];
        document.getElementById("a28").innerText=po1[1];
        document.getElementById("a38").innerText=po1[2];
        document.getElementById("b18").innerText=po2[0];
        document.getElementById("b28").innerText=po2[1];
        document.getElementById("b38").innerText=po2[2];
    }
}


