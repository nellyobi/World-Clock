alert ("Hello!");
 

        function updateTime () {
            let losAngelesElement = document.querySelector("#los-angeles");
            let losAngelesDateElement = losAngelesElement.querySelector(".date");
            let losAngelesTimeElement = losAngelesElement.querySelector(".time");
            let losAngelesTime = moment().tz("America/Los_Angeles");
            
            losAngelesDateElement.innerHTML = losAngelesTime.format('MMMM Do YYYY');
            losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>AM</small>]");

//sydney
            let sydneyElement = document.querySelector("#sydney");
            let sydneyDateElement = sydneyElement.querySelector(".date");
            let sydneyTimeElement = sydneyElement.querySelector(".time");
            let sydneyTime = moment().tz("America/Los_Angeles");
            
            sydneyDateElement.innerHTML = sydneyTime.format('MMMM Do YYYY');
            sydneyTimeElement.innerHTML = sydneyTime.format("h:mm:ss [<small>AM</small>]");
    
//paris
            let parisElement = document.querySelector("#paris");
            let parisDateElement = parisElement.querySelector(".date");
            let parisTimeElement = parisElement.querySelector(".time");
            let parisTime = moment().tz("America/Los_Angeles");
    
            parisDateElement.innerHTML = parisTime.format('MMMM Do YYYY');
            parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>AM</small>]");
    
//tokyo
            let tokyoElement = document.querySelector("#tokyo");
            let tokyoDateElement = tokyoElement.querySelector(".date");
            let tokyoTimeElement = tokyoElement.querySelector(".time");
            let tokyoTime = moment().tz("America/Los_Angeles");
            
            tokyoDateElement.innerHTML = tokyoTime.format('MMMM Do YYYY');
            tokyoTimeElement.innerHTML = tokyoTime.format("h:mm:ss [<small>AM</small>]");
            
        }

        updateTime ();
        setInterval(updateTime, 1000);
