console.log("Client side JavaScript is loaded.");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.getElementById("message-1");
const messageTwo = document.getElementById("message-2");
const messageThree = document.getElementById("message-3");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  console.log(location);

  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";
  messageThree.textContent = "";

  fetch("/weather?address=" + location).then(
    (response) => {
      response.json().then((data) => {
        if (data.error) {
          messageOne.textContent = data.error;
        } else {
          messageOne.textContent = "Location: " + data.location;
          messageTwo.textContent = "Forecast: " + data.forecast;
          messageThree.textContent = "Humidity: " + data.humidity;
        }
      });
    }
  );
});
