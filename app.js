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
//const handleDocs = function () {
//  const docRef = await addDoc(collection(db, "feedback"), {
//    feedback: text,
//  });
//  console.log(docRef.feedback);
//};

const feedback = document.getElementById("feedback");
feedback.addEventListener("show.bs.modal", function (event) {
  // Button that triggered the modal
  const button = event.relatedTarget;
  // Extract info from data-bs-* attributes

  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  const modalTitle = feedback.querySelector(".modal-title");

  modalTitle.textContent = "Feedback / suggestions:";

  const submit = document.getElementById("submitFeedback");

  submit.addEventListener("click", function () {
    const text = document.getElementById("message-text");
    console.log(text.value);
    text.value = "";
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
//console.log("Document written with ID: ", docRef.id);

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
