visualize({
    auth: {
      name:"jasperadmin",
      password:"jasperadmin"
    }
}, function (v) {

    var resources = [
      "/public/Dashboards/campus_incidents_by_offense",
      "/public/Dashboards/campus_incidents_by_offense",
      "/public/Dashboards/campus_incidents_by_offense",
      "/public/Dashboards/campus_incidents_by_offense",
      "/public/Dashboards/campus_incidents_by_offense",
      "/public/Dashboards/campus_incidents_by_offense",
      "/public/Dashboards/campus_incidents_by_offense",
      "/public/Dashboards/campus_incidents_by_offense",
      "/public/Dashboards/campus_incidents_by_offense"
    ];

    var report = resources.forEach((uri, index) =>  v.report({
        resource: uri,
        container: "#container" + index,
        scale: "container",
        error: (err) => console.log(err),
        success: (msg) => console.log(msg),
        defaultJiveUi: { enabled: false }
    })
  );

});
