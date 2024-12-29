var year = 2023;

if( year % 4 == 0) {
    if(year % 100 == 0 ) {
        if(year % 400 == 0) {
            console.log( year + "Year is leap year......");
        }
        else {
            console.log(year + "Year is not leap year......");
        }
    }
    else {
        console.log(year + "Year is leap year......");
    }
}
else {
    console.log(year + "Year is leap year......");
}