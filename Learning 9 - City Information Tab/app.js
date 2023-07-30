function openCity(cityName , evt , color){
    const tabcontent = document.getElementsByClassName("tabcontent");
    for(let i = 0 ; i<tabcontent.length ; i++)
    {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablink");
    for(let i = 0 ; i<tablinks.length ; i++)
    {
        tablinks[i].style.backgroundColor = "";
    }

    document.getElementById(cityName).style.display = "block";
    evt.style.backgroundColor = color;

}

document.getElementById("defaultOpen").click();
