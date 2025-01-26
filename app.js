import { database } from "./firebase.js";
import { ref, set } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

document.getElementById("user-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const profilePic = document.getElementById("profile-pic").value;
  const facebookLink = document.getElementById("facebook-link").value;
  const instagramLink = document.getElementById("instagram-link").value || "";
  const twitterLink = document.getElementById("twitter-link").value || "";
  const linkedinLink = document.getElementById("linkedin-link").value || "";

  const userID = Date.now().toString(); // Unique User ID

  set(ref(database, "users/" + userID), {
    username,
    profilePic,
    facebookLink,
    instagramLink,
    twitterLink,
    linkedinLink
  }).then(() => {
    document.getElementById(
      "result"
    ).innerHTML = `Your profile link: <a href="profile.html?id=${userID}" target="_blank">profile.html?id=${userID}</a>`;
  }).catch((error) => {
    console.error("Error saving data:", error);
  });
});