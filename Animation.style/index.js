function animator(classValue){
    var h1 = document.getElementById('heading');
    
    h1.className = classValue;
}

function darkMode(){
    var section = document.getElementById('section');
    var sidenav = document.getElementById('sidenav');
    var heading = document.getElementById('heading');
    var subHeading = document.getElementById('subHead');
    var btn = document.getElementsByTagName('button');

    if(section.style.background == 'rgb(17, 17, 17)')
    {
        section.style.background = '#fce5cd';
        sidenav.style.background = '#f7d7b5';
        heading.style.color = '#351c75';
        subHeading.style.color = '#e69138';
        sidenav.style.color = 'black';
        for(var i=0; i<btn.length; i++)
        {
            btn[i].style.color = 'black';
        }
    }
    else
    {
        section.style.background = '#111111';
        sidenav.style.background = '#15151d';
        heading.style.color = '#4672fe';
        subHeading.style.color = '#e0e0e0';
        sidenav.style.color = '#e0e0e0';
        for(var i=0; i<btn.length; i++)
        {
            btn[i].style.color = 'white';
        }
    }
}