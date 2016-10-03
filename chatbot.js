function speak() {
  var objDiv = document.getElementById("chat-area");
  var randoms = Math.floor(Math.random() * 6) + 0;
  var greets = ["Greetings educated individual", "Greetings", "My welcomings sir/mam", "Salutations", "I am greeting you","こんにちは"]

  var response = {
"hi": greets[randoms],
"hey": greets[randoms],
"hoi": greets[randoms],
"hello": greets[randoms],
"heyo": greets[randoms],
"Greetings": greets[randoms],
"salutations": greets[randoms],
"hey": greets[randoms],
 "why": "Why not",
"milk": "Tastes good",




}
  var randomResponse = "Its time to stop"
  var random = Math.floor(Math.random() * 13) + 0;


  if(document.getElementById('input').value != "") {
  var message = document.getElementById('input').value;
  message = message.toLowerCase();
  $("#chat-area").append(document.getElementById('input').value += "</br>");
  if (response[message] === undefined || response[message] === null) {
     $("#chat-area").append("<div class='grey'>" + randomResponse[random] + "</div></br>");
     document.getElementById('input').value = "";
     objDiv.scrollTop = objDiv.scrollHeight;
}

}
}
