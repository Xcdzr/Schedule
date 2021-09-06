const day = new Date().getDay();
switch(day){
    case 0:
        days="sunday";
        dayss=6;
        break;
    case 1:
        days="monday";
        dayss=0;
        break;
    case 2:
        days="tuesday";
        dayss=1;
        break;
    case 3:
        days="wednesday";
        dayss=2;
        break;
    case 4:
        days="thursday";
        dayss=3;
        break;
    case 5:
        days="friday";
        dayss=4;
        break;
    case 6:
        days="saturday";
        dayss=5;
        break;
}
const hour = new Date().getHours();
switch(hour){
    case 22:
    case 23:
    case 24:
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        hours="sleep";
        document.getElementById(hours).style.display ="block";
        break;
    default:
        hours="timeis"+hour;
        document.getElementById(days).style.display = "block";
        document.getElementsByClassName(hours)[dayss].style.backgroundColor = "rgba(101,51,115,255)" ;
        break;
}