let TeamA=[];
let TeamB=[];
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
    }
}


