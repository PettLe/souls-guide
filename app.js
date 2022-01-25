// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD1PpdQU9hIPHKI9o_XTMtGlmOBwf2OnOI",

  authDomain: "souls-guide.firebaseapp.com",

  projectId: "souls-guide",

  storageBucket: "souls-guide.appspot.com",

  messagingSenderId: "281601100771",

  appId: "1:281601100771:web:c153eee79923a96586eed6",

  measurementId: "G-WZSQRF27QC",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

const feedback = document.getElementById("feedback");

feedback.addEventListener("click", function () {
  alert("Nothing here yet, sorry!");
});

var countDownDate = new Date("Feb 25, 2022 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  const timer = document.getElementById("timer");
  timer.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "EXPIRED";
  }
}, 1000);
