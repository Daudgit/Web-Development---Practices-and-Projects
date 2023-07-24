let icon = document.getElementsByClassName("icon");

for(let i = 0; i< icon.length ; i++)
{
    
    icon[i].addEventListener('click' , function(){
        for(let j = 0; j< icon.length ; j++)
        {
            icon[j].classList.remove("active");
        }

        this.classList.add('active');
    })
}

