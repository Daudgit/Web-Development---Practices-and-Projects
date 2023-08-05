function myFunction(){
    const input = document.getElementById("mySearch");
    const filter = input.value.toUpperCase();
    const ul = document.getElementById("myMenu");
    const li = ul.getElementsByTagName("li");

    for(var i = 0; i<li.length ; i++)
    {
        const a = li[i].getElementsByTagName("a")[0];
        if(a.innerHTML.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        }else{
            li[i].style.display = "none";
        }
    }

}