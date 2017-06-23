visualize({
    auth: {
      name:"jasperadmin",
      password:"jasperadmin"
    }
}, function (v) {

    var report = v.report({
        resource: "/public/Dashboards/Campus_Enrollment_Summary_By_ADA_Table",
        container: "#container",
        defaultJiveUi: { enabled: false }
    });

    $("#previousPage").click(function() {
        var currentPage = report.pages() || 1;

        report
            .pages(--currentPage)
            .run()
                .fail(function(err) { alert(err); });
    });

    $("#nextPage").click(function() {
        var currentPage = report.pages() || 1;

        report
            .pages(++currentPage)
            .run()
                .fail(function(err) { alert(err); });
    });

    $("#pageRange").change(function() {
       report
           .pages($(this).val())
           .run()
               .fail(function(err) { alert(err); });
   });
});
