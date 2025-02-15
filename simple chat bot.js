document.addEventListener("DOMContentLoaded", function () {
    const chatbox = document.getElementById("chatbox");
    const inputField = document.getElementById("userInput");
    const sendButton = document.getElementById("sendButton");

    function appendMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.classList.add("message", sender);
        messageElement.innerText = message;
        chatbox.appendChild(messageElement);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function getBotResponse(input) {
        const responses = {
            "hello": "Hi there! How can I help you?",
            "how are you": "I'm just a bot, but I'm doing great! How about you?",
            "bye": "Goodbye! Have a great day!",
            "default": "I'm not sure how to respond to that."
        };
        return responses[input.toLowerCase()] || responses["default"];
    }

    function handleUserInput() {
        const userText = inputField.value.trim();
        if (userText === "") return;
        appendMessage("user", userText);
        inputField.value = "";

        setTimeout(() => {
            const botResponse = getBotResponse(userText);
            appendMessage("bot", botResponse);
        }, 500);
    }

    sendButton.addEventListener("click", handleUserInput);
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            handleUserInput();
        }
    });
});
