var string = "hello!"


var uppercase = string
 
uppercase.toUpperCase() === uppercase // true
 
var lowercase = string
 
lowercase.toLowerCase() === lowercase // true
 
var mixedCase = 'Hi there!'
 
mixedCase.toLowerCase() === mixedCase // false
 
mixedCase.toUpperCase() === mixedCase // false









function shout(string) {
    return string.toUpperCase() 
}
function whisper(string) {
  return string.toLowerCase()
}
function logShout(string) {
  console.log(string.toUpperCase())
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}



function sayHiToGrandma(string) {
  if (string.toLowerCase === lowercase ) {
    string = "I can't hear you!";
  }
  else if (string.toUpperCase === uppercase) {
    string = "YES INDEED!";
  }
  else if (string === "I love you, Grandma") {
     string = "I love you, too." ;
  }
  return string
}