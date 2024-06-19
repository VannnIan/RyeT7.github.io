
async function fetchOutput() {
    var userInput = document.getElementById("user-input").value;

    var chatMessages = document.getElementById("chat-messages");
    var sellerMessage = document.createElement("div");
    sellerMessage.className = "message -message";
    sellerMessage.innerHTML = "<span class='user'>User: <br></span> <span class='text'>" + userInput + "</span>";
    chatMessages.appendChild(sellerMessage);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    var chatMessages = document.getElementById("chat-messages");
    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerHTML = "<span class='text'>" + userInput + "</span>";
    chatMessages.appendChild(userMessage);

    fetchOutput();

    document.getElementById("user-input").value = "";
}