import { database } from "./firebase.js";
import { ref, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js";

const userID = new URLSearchParams(window.location.search).get("id");
const profileContainer = document.getElementById("profile-container");

get(ref(database, "users/" + userID)).then((snapshot) => {
  if (snapshot.exists()) {
    const data = snapshot.val();
    profileContainer.innerHTML = `
      <div class="profile">
        <img src="${data.profilePic}" alt="${data.username}" class="profile-pic">
        <h1>${data.username}</h1>
        <div class="links">
          <a href="${data.facebookLink}" target="_blank">Facebook</a>
          <a href="${data.instagramLink}" target="_blank">Instagram</a>
          <a href="${data.twitterLink}" target="_blank">Twitter</a>
          <a href="${data.linkedinLink}" target="_blank">LinkedIn</a>
        </div>
      </div>
    `;
  } else {
    profileContainer.innerHTML = `<h1>User Not Found</h1>`;
  }
}).catch((error) => {
  console.error("Error fetching data:", error);
});