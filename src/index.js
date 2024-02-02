alert ("Hello!");

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format('MMMM Do YYYY');
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>AM</small>]");