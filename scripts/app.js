let date = new Date();
console.log(date.getDay());

let day = date.getDay();
switch(day){
    case 0:
        console.log("კვირა") ;
        break;
    case 1:
      console.log("ორშაბათი")
        break;
    case 2:
      console.log("სამშაბათი");
        break;
    case 3:
        console.log("ოთხშაბათი");
        break;
    case 4:
        console.log("ხუთშაბათი");
        break;
    case 5:
    console.log("პარასკევი");
        break;
    case 6:
        console.log( "შაბათი");
        break;
    default:
        console.log("მითითებული დღე არ მოიძებნა");
}
document.getElementById("day").innerHTML = "დღეს " + "კვირა" + " არის.";
document.getElementById("day1").innerHTML = "დღეს " + "ორშაბათი" + " არის.";
document.getElementById("day2").innerHTML = "დღეს " + "სამშაბათი" + " არის.";
document.getElementById("day3").innerHTML = "დღეს " + "ოთხშაბათი" + " არის.";
document.getElementById("day4").innerHTML = "დღეს " + "ხუთხაბათი" + " არის.";
document.getElementById("day5").innerHTML = "დღეს " + "პარასკევი" + " არის.";
document.getElementById("day6").innerHTML = "დღეს " + "შაბათი" + " არის.";
