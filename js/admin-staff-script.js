let users = [];
let userTypeClient = ["Admin", "Staff", "Freelancer", "Customer"];

$(document).ready(function () {
  getUsers()
    .then((gettingUsers) => {
      users = gettingUsers;
      let rows = createRows();
      for (let index = 0; index < rows.length; index++) {
        $("tbody").append(rows[index]);
      }
    })
    .catch();
});

// creating the rows (dynamically)
function createRows() {
  let rowArray = [];
  console.log(users.length);
  for (let i = 0; i < users.length; i++) {
    console.log("AM I HERE???");
    if (
      parseInt(users[i].usertype_id) === 1 ||
      parseInt(users[i].usertype_id) === 2
    ) {
      rowArray[i] = `<tr>
       <td>
         ${userTypeClient[users[i].usertype_id - 1]}
       </td>
       <td>
       ${users[i].firstname}
       </td>
       <td>${users[i].lastname}</td>
       <td class="username">${users[i].username}</td>
       <td>${users[i].gender === 0 ? "male" : "female"}</td>
       <td>${users[i].email}</td>
     </tr>`;
    }
  }
  // console.log(rowArray);
  return rowArray;
}
