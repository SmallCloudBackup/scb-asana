$(document).ready(function () {
  $.ajax({
		url: "/api/source/",
		method: "GET",
		dataType: "JSON"
	}).done(function (data) {
    if (data && data.ok) {
			var templ = Handlebars.compile($("#sourceTemplate").html());
      $("#sourceContainer").html(templ(data));
    }
  });
});
