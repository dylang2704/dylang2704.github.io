//3 different song lyrics
//having .innerHTML in all lines 
//Attempt One
//function song(){
	//for (i=99;i>=0;i--) {
                //if (i>1) {
                    //document.getElementById("beer").innerHTML+=i+ " bottles of beer on the wall, " +i+ " bottles of beer."+"<br/>"+
					//"Take one down and pass it around, " + (i-1) + " bottles of beer on the wall."+"<br/>";
                //} else if (i==1) {
                    //document.getElementById("beer").innerHTML+=i + " bottle of beer on the wall, " + i + " bottle of beer."+"<br/>"+
                    //"Take one down and pass it around, no more bottles of beer on the wall."+"<br/>";
                //} else if (i==0) {
                    //document.getElementById("beer").innerHTML+="No more bottles of beer on the wall, no more bottles of beer."+"<br/>"+
                    //"Go to the store and buy some more, 99 bottles of beer on the wall.";
                //}
            //}	
        //}
//Attempt Two
//Set up a string variable to store song and function ran as expected
function song(){
    var beerBottleSong = "";
    for (i = 99; i >= 0; i--) {
        if (i > 1) {
            beerBottleSong += i + " bottles of beer on the wall, " + i + " bottles of beer." + "<br/>" +
                "Take one down and pass it around, " + (i - 1) + " bottles of beer on the wall." + "<br/>";
        } else if (i === 1) {
            beerBottleSong += i + " bottle of beer on the wall, " + i + " bottle of beer." + "<br/>" +
                "Take one down and pass it around, no more bottles of beer on the wall." + "<br/>";
        } else if (i === 0) {
            beerBottleSong += "No more bottles of beer on the wall, no more bottles of beer." + "<br/>" +
                "Go to the store and buy some more, 99 bottles of beer on the wall.";
        }
    }
    document.getElementById("beer").innerHTML = beerBottleSong;
}
      