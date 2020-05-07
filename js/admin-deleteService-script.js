let allServices;

// prettier-ignore
searchServices(" ")
  .then(e => {
    allServices = e;
    console.log(allServices);
  })
  .catch();

// service constructor
function service(id, freelancer_id, title, views, description, category_id) {
  (this.id = id),
    (this.freelancer_id = freelancer_id),
    (this.title = title),
    (this.views = views),
    (this.description = description),
    (this.category_id = category_id);
}
// category constructor

// create the services
let services = [
  new service(
    // Service ID
    1,
    // Freelancer ID
    23,
    "constructing robots",
    // View Count
    0,
    "i can cosntruct robots in a speedy time and with quality cheaply!",
    // Category ID
    1
  ),
  new service(
    // Service ID
    2,
    // Freelancer ID
    33,
    "drawing 2d animation",
    // View Count
    0,
    "i draw very fast and quality stuff for your project",
    // Category ID
    3
  ),
];

function deleteService(target, sName) {
  // asks user if he is sure he wants to delete the service
  if (confirm(`Are you sure you want to delete ${sName}?`)) {
    //   if yes
    // get row
    let targetedRow = target.parentNode.parentNode;
    // get table
    let table = targetedRow.parentNode;
    // remove row from table
    table.removeChild(targetedRow);
    // remove from database
    // <insert code here>
  }
}

// AutoComplete Suggestion
$(document).ready(function () {
  $("#serviceName").keyup(function () {
    // word has been searched
    let word = $("#serviceName").val();
    // words matching the search
    for (let i = 0; i < services.length; i++) {
      // check if word matches letters
      if (services[i].title.toLowerCase().indexOf(word.toLowerCase()) > -1) {
        // add results to array
        showSelect(services[i].id);
      } else {
        hideUnselected(services[i].id);
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

// Filling information
$(document).ready(function () {
  let rows = createRows();
  for (let index = 0; index < rows.length; index++) {
    $("tbody").append(rows[index]);
  }
});

// creating the rows (dynamically)
function createRows() {
  let rowArray = [];
  for (let i = 0; i < services.length; i++) {
    rowArray[i] = `<tr >
    <td>
    ${services[i].category_id}
    </td>
    <td class="service">
    ${services[i].title}
    </td>
    <td>${services[i].freelancer_id}</td>
    <td>${services[i].description}</td>
    <td>
      <button
        class="btn btn-danger"
        onclick="deleteService(this,'${services[i].title}')"
      >
        Delete
      </button>
    </td>
  </tr>`;
  }
  console.log(rowArray);
  return rowArray;
}
