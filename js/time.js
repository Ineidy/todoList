date = new Date ();
year = date.getFullYear();
month = date.getMonth()+1;
day = date.getDate();
document.querySelector("#current_date").innerHTML = month +"/"+ day +("/")+year+ (", ");