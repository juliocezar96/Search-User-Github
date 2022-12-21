const gitHub = new GitHub();

//search
const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    gitHub.getUser(userText).then((data) => {
      if (data.profile == "Not Found") {
        //
      } else {
        //
      }
    });
  } else {
    //
  }
});
