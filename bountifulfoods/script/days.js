var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function CheckDay(day){
    if(day + d.getDay() > 6){
        return day + d.getDay() - 7;
    }
    else{
        return day + d.getDay();
    }
}

    for(i = 0; i<5; i++){
        document.getElementById("day" + (i+1)).innerHTML = weekday[CheckDay(i)];
    }

    document.getElementById("day1").innerHTML = weekday[CheckDay(0)];
    document.getElementById("day2").innerHTML = weekday[CheckDay(1)];
    document.getElementById("day3").innerHTML = weekday[CheckDay(2)];
    document.getElementById("day4").innerHTML = weekday[CheckDay(3)];
    document.getElementById("day5").innerHTML = weekday[CheckDay(4)];