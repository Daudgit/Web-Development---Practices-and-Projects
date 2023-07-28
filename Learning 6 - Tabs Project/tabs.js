function openCity(evt, cityName) {
    var i;


    // Get all elements with class="tabcontent" and hide them
    const tabcontent = document.getElementsByClassName("tabcontent")
    for(i = 0 ;i<tabcontent.length ; i++)
    {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");

    for(i=0 ; i<tablinks.length ; i++)
    {
        tablinks[i].classList.remove("active");
    }

    document.getElementById(cityName).style.display = "block";

}

document.getElementById("defaultOpen").click();
