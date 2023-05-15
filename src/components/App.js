import TemplateMessage from "./TemplateMessage";
import ValidateUserCoords from "./ValidateUserCoords";

const inputText = document.querySelector(".input-text");
const enterMessageBtn = document.querySelector(".btn-enter-message");
const popup = document.querySelector(".popup-enter-location");
const popupInputCoords = document.querySelector(".popup-input");
const popupBtnOk = document.querySelector(".btn-popup-input-ok");
const popupBtnCancel = document.querySelector(".btn-popup-input-cancel");
const formatNotification = document.querySelector(".format-notification");

// const addMessage = async function () {
//   if (!inputText.value) return;
//   TemplateMessage(inputText.value, await getLocation());
//   inputText.value = "";
// };
// enterMessageBtn.addEventListener("click", addMessage);

//functions of getting current coordinates
// function getCoords() {
//   return new Promise((resolve) => {
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         ({ coords }) => resolve(coords),
//         () => {
//           popup.classList.remove("invisible");
//           popupBtnOk.addEventListener("click", () => {
//             console.log(popupInputCoords.value);
//             popup.classList.add("invisible");
//             TemplateMessage(inputText.value, popupInputCoords.value);
//           });
//         }
//       );
//     }
//   });
// }

// async function getLocation() {
//   const { latitude, longitude } = await getCoords();
//   return latitude.toFixed(5) + " " + longitude.toFixed(5);
// }

function addMessage() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        TemplateMessage(inputText.value, latitude + " " + longitude);
        inputText.value = "";
      },
      () => {
        popup.classList.remove("invisible");
        formatNotification.textContent = "";

        popupBtnOk.addEventListener("click", () => {
          if (ValidateUserCoords(popupInputCoords.value)) {
            popup.classList.add("invisible");
            TemplateMessage(inputText.value, popupInputCoords.value);
            inputText.value = "";
            popupInputCoords.value = "";
            formatNotification.textContent = "";
          } else {
            formatNotification.textContent = "coordinates is not valid";
            popupInputCoords.addEventListener("focus", () => {
              formatNotification.textContent = "";
            });
          }
        });

        popupBtnCancel.addEventListener("click", () => {
          if (!inputText.value) {
            return;
          }
          TemplateMessage(inputText.value, "unknown");
          popup.classList.add("invisible");
          inputText.value = "";
          popupInputCoords.value = "";
        });
      }
    );
  }
}

enterMessageBtn.addEventListener("click", () => {
  if (inputText.value) {
    addMessage();
  }
});
