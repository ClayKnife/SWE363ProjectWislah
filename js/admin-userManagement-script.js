/* eslint-disable no-unused-vars */

//  ***** ADD USER CODE HERE *****, this is dummy
// create the users
let users = [];
let userTypeClient = ["Admin", "Staff", "Freelancer", "Customer"];
// testing API here

// Grabbing Clicked Row
function popup(caller, isBanned) {
  console.log(caller);
  // clear the previous ban buttons
  $("#banButton").empty();
  // add new ban button specific to that user
  if (!isBanned) {
    // if banned
    $("#banButton").append(`<button
  type="button"
  class="btn btn-danger"
  onclick="banUserClient(${caller}, true)"
  data-dismiss="modal"
>
  Ban User
</button>
  `);
  } else {
    // if not banned
    $("#banButton").append(`<button
  type="button"
  class="btn btn-danger"
  onclick="banUserClient(${caller}, false)"
  data-dismiss="modal"
>
  UnBan User
</button>
  `);
  }
  $("#exampleModalCenter").modal(focus);
}

// handling ban button
function banUserClient(target, isBanned) {
  // asks user if he is sure he wants to delete the service
  console.log(target);
  if (confirm(`Are you sure you want to block this user?`)) {
    let usernameNodes = $(`#banID${target}`);
    usernameNodes.text(isBanned ? "Banned" : "Active");
    //   if yes
    banUser(target, isBanned)
      .then((e) => {})
      .catch((e) => {
        console.log(e);
      });
    // refresh
  }
}
// Filling information
$(document).ready(function () {
  getUsers()
    .then((gettingUsers) => {
      users = gettingUsers;
      console.log(users);
      console.log(users[1].lastname);
      console.log(users[0].username);

      let rows = createRows();
      for (let index = 0; index < rows.length; index++) {
        $("tbody").append(rows[index]);
      }
    })
    .catch();
});

// AutoComplete Suggestion
$(document).ready(function () {
  $("#username").keyup(function () {
    // word has been searched
    let word = $("#username").val();
    // words matching the search
    let selectedWords = [];
    for (let i = 0; i < users.length; i++) {
      // check if word matches letters
      if (users[i].username.toLowerCase().indexOf(word.toLowerCase()) > -1) {
        console.log(selectedWords);
        // add results to array
        console.log("Accepted" + word);
        selectedWords.push(users[i]);
        console.log(selectedWords);
        showSelect(users[i].username);
      } else {
        console.log(word);
        hideUnselected(users[i].username);
      }
    }
  });
});

//Show selects
function showSelect(val) {
  if ($("#" + val).hasClass("hide")) $("#" + val).removeClass("hide");
}
//hide unselected
function hideUnselected(val) {
  if (!$("#" + val).hasClass("hide")) $("#" + val).addClass("hide");
}

// creating the rows (dynamically)
function createRows() {
  let rowArray = [];
  console.log(users.length);
  for (let i = 0; i < users.length; i++) {
    console.log("AM I HERE???");
    if (
      parseInt(users[i].usertype_id) === 3 ||
      parseInt(users[i].usertype_id) === 4
    ) {
      rowArray[i] = `<tr class="tableRow clickableRow" id="${
        users[i].username
      }" onclick="popup(${parseInt(users[i].id)},${users[i].isBanned})">
     <td>
       ${userTypeClient[users[i].usertype_id - 1]}
     </td>
     <td class="username">${users[i].username}</td>
     <td>
     ${users[i].firstname}
     </td>
     <td>${users[i].lastname}</td>
     <td>${users[i].email}</td>
     <td>${users[i].gender === 0 ? "male" : "female"}</td>
     <td id="banID${parseInt(users[i].id)}">${
        users[i].isBanned ? "Banned" : "Active"
      }</td>
   </tr>`;
    }
  }
  // console.log(rowArray);
  return rowArray;
}
