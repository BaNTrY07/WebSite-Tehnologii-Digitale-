function trimiteMesaj(){
    let nume=document.getElementById("nume").value;

    if (nume== "")
    {
        alert("Introdu numele!");
    }
    else 
    {
        alert("Multumim "+nume+" pentru mesaj!");
    }
}