$(".dropdown-item").click(function (e) {
  if ($(e.target).hasClass("wislah-active")) {
    $(e.target).removeClass("wislah-active");
  } else {
    $(e.target).siblings(".wislah-active").removeClass("wislah-active");
    $(e.target).addClass("wislah-active");
  }
});

// this shows the categories due to filter
function show(element) {
  for (let i = 0; i < refinedServices.length; i++) {
    // check if word matches letters
    if (
      refinedServices[i].category_id[1]
        .toLowerCase()
        .indexOf(element.toLowerCase()) > -1
    ) {
      // add results to array
      showSelect(refinedServices[i].id);
    } else {
      hideUnselected(refinedServices[i].id);
    }
  }
}

//Show selects
function showSelect(val) {
  if ($("#" + val).hasClass("d-none")) $("#" + val).removeClass("d-none");
}
//hide unselected
function hideUnselected(val) {
  console.log(val);
  if (!$("#" + val).hasClass("d-none")) {
    $("#" + val).addClass("d-none");
  }
}

// Creating the categories with icons
// constructor
function category(id, icon, name) {
  (this.id = id), (this.icon = icon);
}

// initialize the categories
// REPLACE WITH REAL DATABASE
let categories = [
  new category(1, "code"),
  new category(2, "paint-brush"),
  new category(3, "music"),
  new category(4, "poll"),
  new category(5, "hashtag"),
];

// Creating Services
// service constructor
function service(
  id,
  freelancer_id,
  title,
  views,
  rates,
  starRating,
  description,
  category_id
) {
  (this.id = id),
    (this.freelancer_id = freelancer_id),
    (this.title = title),
    (this.views = views),
    (this.rates = rates);
  this.starRating = starRating;
  (this.description = description), (this.category_id = category_id);
}

//create the services
let services = [
  new service(
    // Service ID
    1,
    // Freelancer ID
    5,
    "constructing robots",
    // View Count
    32,
    // rating
    25,
    // Star rating
    4,
    // description
    "I can cosntruct robots in a speedy time and with quality cheaply!",
    // Category ID
    1
  ),
  new service(
    // Service ID
    2,
    // Freelancer ID
    8,
    "drawing 2d animation",
    // View Count
    20,
    // rating
    77,
    // Star Rating
    3,
    // description
    "I draw very fast and quality stuff for your project",
    // Category ID
    2
  ),
  new service(
    // Service ID
    3,
    // Freelancer ID
    69,
    // title
    "C# project",
    // View Count
    88,
    // rating
    33,
    // Star Rating
    4,
    // description
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
    // Category ID
    1
  ),
];

// freelancer constructor
function user(id, username, firstName, lastName, birthdate, usertype_id) {
  /* usertype:
   *   1 = admin
   *   2 = freelancer
   *   3 = User
   * */
  (this.id = id),
    (this.username = username),
    (this.firstName = firstName),
    (this.lastName = lastName),
    (this.birthdate = birthdate),
    (this.usertype = userType(usertype_id));
}

function userType(id) {
  if (id == 1) {
    return "Admin";
  } else if (id === 2) {
    return "Freelancer";
  } else if (id === 3) {
    return "User";
  }
}
// create the freelancer
// replace this with stuff from the database
let users = [
  new user(5, "asda", "mahmood", "yes", "01/10/1999", "female", 2),
  new user(8, "mm111231", "abdoooo", "asdassas", "01/10/2010", "male", 2),
  new user(
    23,
    "xX_undeadman_Xx",
    "undead",
    "weirdo123",
    "01/10/1001",
    "other",
    3
  ),
  new user(69, "xX_ye`smate", "Khalid", "Shalboota", "01/10/1001", "other", 2),
];

var refinedServices;
// Create Services HTML code
function createServices() {
  refinedServices = refineService();
  console.log(refinedServices);
  let rowArray = [];
  for (let i = 0; i < refinedServices.length; i++) {
    rowArray[i] = ` <div class="service-card" id="${refinedServices[i].id}">
      <div class="service-category">
        <i class="service-category-img fas fa-${refinedServices[i].category_id[0]}"></i>
        <h4 class="service-category-title">${refinedServices[i].category_id[1]}</h4>
      </div>
      <h4 class="service-card-title text-center">${refinedServices[i].title}</h4>
      <p class="service-card-freelancer">${refinedServices[i].freelancer_id}</p>
      <p class="service-card-description">
        ${refinedServices[i].description}
      </p>
      <p class="service-card-rating">
        <i class="fas fa-star"> ${refinedServices[i].starRating}</i>
        <text class="service-review-count">(${refinedServices[i].rates})</text>
      </p>
    </div>
          `;
  }
  return rowArray;
}

function getServiceCard(id, category_id, title, freelancer_id, description, starRating) {
  return ` <div class="service-card" id="${id}">
  <div class="service-category">
    <i class="service-category-img fas fa-${category_id[0]}"></i>
    <h4 class="service-category-title">${category_id[1]}</h4>
  </div>
  <h4 class="service-card-title text-center">${title}</h4>
  <p class="service-card-freelancer">${freelancer_id}</p>
  <p class="service-card-description">
    ${description}
  </p>
  <p class="service-card-rating">
    <i class="fas fa-star"> ${starRating}</i>
  </p>
</div>
      `;
}

function refineService() {
  let refiningServices = [];

  for (let j = 0; j < services.length; j++) {
    refiningServices[j] = new service(
      services[j].id,
      findFreelancer(services[j].freelancer_id),
      services[j].title,
      services[j].views,
      services[j].rates,
      services[j].starRating,
      services[j].description,
      findCategory(services[j].category_id)
    );
  }
  return refiningServices;
}

function findFreelancer(targetID) {
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === targetID)
      return users[i].firstName + " " + users[i].lastName;
  }
}
function findCategory(target) {
  for (let i = 0; i < categories.length; i++) {
    if (categories[i].id === target)
      return [categories[i].icon, categories[i].name];
  }
}
// Add services to html
$(document).ready(function () {
  let rows = createServices();
    $("#serviceContainer").append(rows);

});
