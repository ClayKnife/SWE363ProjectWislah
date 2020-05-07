// Get report from API
let reports;
getReport().then((e) => {
  reports = e;
  console.log(reports);
  $("#numberUsers").text(reports.num_users);
  $("#numberServices").text(reports.num_services);
  $("#numberOrders").text(reports.num_orders);
});
