$(window).load(function() {

  // click add a 閃購 button
  $(".btn.btn-green.btn-lg").click(function() {
    var className = $(this).find( "label:first" ).attr('class');
    var id = $(this).attr('id');
    var path = "/product/unpublish/" + id;
    $.ajax({
      type: "PUT",
      url: path
    });
  });
  // end click add a 閃購 button

});
