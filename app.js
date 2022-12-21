// Instance Github
const github = new GitHub();
// Instance UI
const ui = new UI();

// Search input
const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        // Show alert
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile
  }
});
