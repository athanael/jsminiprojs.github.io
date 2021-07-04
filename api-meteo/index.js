import config from "./config.js";
const APIKEY = prompt("Merci de vous authentifier");
document.querySelector("#button").addEventListener("click", function (e) {
  e.preventDefault();
  console.log(config);
  let ville = document.querySelector("#ville").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${APIKEY}&units=metric&lang=fr`;
  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        if (data.cod == 400 || data.cod == 404) {
          alert("Cette ville n'existe pas");
        } else {
          document.getElementById("city").innerText = ville;
          document.getElementById("temperature").innerText =
            parseInt(data.main.temp) + "°C";
          document.getElementById("weather").innerText =
            data.weather[0].description;
          document.getElementById("humidity").innerText =
            data.main.humidity + "%";
          let icons = document.getElementsByTagName("i");
          for (let icon of icons) {
            icon.classList.remove("hidden");
          }
        }
      })
    )
    .catch((err) => console.log("erreur : " + err));
});
