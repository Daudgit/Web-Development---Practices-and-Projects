function openCity(evt, cityName){
    

    // Get all the elements with tabcontent and hide them
    const tabcontent = document.getElementsByClassName("tabcontent");
    for(let i=0 ; i<tabcontent.length ; i++)
    {
        tabcontent[i].style.display = "none";
    }
    const tablinks = document.getElementsByClassName("tablinks");
    for(let i=0 ; i<tabcontent.length ; i++)
    {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}


const tabcontent = document.getElementsByClassName("tabcontent");
    for(let i=0 ; i<tabcontent.length ; i++)
    {
        tabcontent[i].style.display = "none";
    }

