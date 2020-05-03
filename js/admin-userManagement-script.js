/* eslint-disable no-unused-vars */
// user constructor
function user(title, username, firstName, lastName, birthdate, category_id) {
  (this.title = title),
    (this.username = username),
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.birthdate = birthdate),
    (this.category_id = category_id);
}

// create the users
let users = [
  new user("freelancer", "asda", "mahmood", "yes", "01/10/1999", "female"),
  new user("user", "mm111231", "abdoooo", "asdassas", "01/10/2010", "male"),
];

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
  let rows = createRows();
  for (let index = 0; index < rows.length; index++) {
    $("tbody").append(rows[index]);
  }
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
  console.log(users);
  console.log(Object.keys(users).length);
  console.log(users[1]);
  for (let i = 0; i < users.length; i++) {
    console.log("test");
    rowArray[
      i
    ] = `<tr class="tableRow clickableRow" id="${users[i].username}" onclick="popup('${users[i].username}')">
     <td>
       ${users[i].title}
     </td>
     <td class="username">${users[i].username}</td>
     <td>
     ${users[i].firstName}
     </td>
     <td>${users[i].lastName}</td>
     <td>${users[i].birthdate}</td>
     <td>${users[i].gender}</td>
   </tr>`;
  }
  console.log(rowArray);
  return rowArray;
}
