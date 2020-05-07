/* eslint-disable no-unused-vars */

//  ***** ADD USER CODE HERE *****, this is dummy
// create the users
let users = [];
let userType = ["Admin", "Staff", "Freelancer", "Customer"];
// testing API here

// Grabbing Clicked Row
function popup(caller) {
  // clear the previous ban buttons
  $("#banButton").empty();
  // add new ban button specific to that user
  $("#banButton").append(`<button
  type="button"
  class="btn btn-danger"
  onclick="banUser('${caller}')"
  data-dismiss="modal"
>
  Ban User
</button>
  `);
  $("#banButton").append(`<button
  type="button"
  class="btn btn-danger"
  onclick="unbanUser('${caller}')"
  data-dismiss="modal"
>
  UnBan User
</button>
  `);
  $("#exampleModalCenter").modal(focus);
}

// handling ban button
function banUser(target) {
  console.log(target);
  // asks user if he is sure he wants to delete the service
  if (confirm(`Are you sure you want to block this user?`)) {
    //   if yes
    // get row
    let usernameNodes = $(".username");
    for (let index = 0; index < usernameNodes.length; index++) {
      if (usernameNodes[index].textContent.toLowerCase == target.toLowerCase) {
        var node = usernameNodes[index];
        break;
      }
    }
    console.log(node);
    let targetedRow = node.parentNode;
    // get table
    let table = targetedRow.parentNode;
    // remove row from table
    table.removeChild(targetedRow);
    // remove from database
    console.log(node.parentNode.parentNode);
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
      parseInt(users[i].usertype_id) === 2 ||
      parseInt(users[i].usertype_id) === 3
    ) {
      rowArray[i] = `<tr class="tableRow clickableRow" id="${
        users[i].username
      }" onclick="popup('${users[i].id}')">
     <td>
       ${userType[users[i].usertype_id - 1]}
     </td>
     <td class="username">${users[i].username}</td>
     <td>
     ${users[i].firstname}
     </td>
     <td>${users[i].lastname}</td>
     <td>${users[i].email}</td>
     <td>${users[i].gender === 0 ? "male" : "female"}</td>
     <td>${users[i].isBanned ? "Banned" : "Active"}</td>
   </tr>`;
    }
  }
  // console.log(rowArray);
  return rowArray;
}
