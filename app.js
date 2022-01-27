// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.6.3/firebase-firestore.js";

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

const db = getFirestore(app);

// FEEDBACK
const handleDocs = async function (text) {
  const docRef = await addDoc(collection(db, "feedback"), {
    feedback: text.value,
  });
};

const feedback = document.getElementById("feedback");
feedback.addEventListener("show.bs.modal", function (event) {
  const button = event.relatedTarget;
  const modalTitle = feedback.querySelector(".modal-title");
  modalTitle.textContent = "Feedback / suggestions:";

  // Hiding elements on submit etc.
  const submit = document.getElementById("submitFeedback");
  submit.style.display = "block";
  const text = document.getElementById("message-text");
  text.style.display = "block";

  submit.addEventListener("click", function () {
    handleDocs(text);
    text.value = "";
    modalTitle.textContent = "Thank You!";
    text.style.display = "none";
    submit.style.display = "none";
  });
});

// Clearing the Feedback field when closing the modal
const clearField = function () {
  const text = document.getElementById("message-text");
  text.value = "";
};
const closeBtn = document.querySelectorAll(".closeFeedback");

for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function (e) {
    clearField();
  });
}

// ELDEN RING TIMER
var countDownDate = new Date("Feb 25, 2022 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const timer = document.getElementById("timer");
  timer.innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML =
      "The game has finally been released!";
  }
}, 1000);
