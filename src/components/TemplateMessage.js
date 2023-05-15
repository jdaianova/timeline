import GetCurrentTime from "./GetCurrentTime";

const chat = document.querySelector(".chat");

export default function templateMessage(content, coords) {
  const newMessage = document.createElement("div");
  newMessage.classList.add("message");
  newMessage.innerHTML = `
      <div class="message-time">${GetCurrentTime}</div>
      <div class="message-content">${content}</div>
      <div class="message-location">
        <div class="icon-geo"></div>
        <p class="message-location-coords">${coords}</p>
      </div>`;
  chat.appendChild(newMessage);
  chat.scrollTop = -chat.scrollHeight;
}
