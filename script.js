function InputNmae(Element){
    const teamname=prompt("Enter the team name:");
    const Elementid=Element.id;
    document.getElementById(Elementid).innerText=teamname;
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
        
    }
}