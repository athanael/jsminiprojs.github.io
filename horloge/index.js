const horloge = function () {
  let date = new Date();

  let seconds = date.getSeconds();
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  if (month == 1) {
    month = "Janvier";
  } else if (month == 2) {
    month = "Février";
  } else if (month == 3) {
    month = "Mars";
  } else if (month == 4) {
    month = "Avril";
  } else if (month == 5) {
    month = "Mai";
  } else if (month == 6) {
    month = "Juin";
  } else if (month == 7) {
    month = "Juillet";
  } else if (month == 8) {
    month = "Août";
  } else if (month == 9) {
    month = "Septembre";
  } else if (month == 10) {
    month = "Octobre";
  } else if (month == 11) {
    month = "Novembre";
  } else if (month == 12) {
    month = "Décembre";
  }

  if (seconds <= 9) {
    seconds = "0" + seconds;
  }

  if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  if (hours <= 9) {
    hours = "0" + hours;
  }

  if (day <= 9) {
    day = "0" + day;
  }
  let dateAffichage = "Nous sommes le " + day + " " + month + " " + year;
  let affichage = "Il est " + hours + ":" + minutes + ":" + seconds;
  document.getElementById("date").innerText = dateAffichage;
  document.getElementById("heure").innerText = affichage;
};

setInterval(horloge, 1000);
