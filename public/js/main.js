const socket = io();
const sendMessage = document.getElementById("chat-form");
const messages = document.querySelector(".chat-messages");

socket.on("message", message => {
    messages.scrollTop = messages.scrollHeight;
});

sendMessage.addEventListener("submit", e => {
    e.preventDefault();

    let msg = e.target.elements.msg.value;

    socket.emit('sendMessage', msg);

    e.target.elements.msg.value ="";
    e.target.elements.msg.focus();
  });

  function displayMessage(message){
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.name} <span>${message.time}</span></p>
    <p class="text">
      ${message.text}
    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
  }