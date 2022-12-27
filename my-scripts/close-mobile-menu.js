var button = document.getElementById("mobile-menu"), 
span = button.getElementsByTagName("span")[0];

button.onclick = function() {
    span.classList.toggle("navbar.collapse");
};

$("#mobile-menu").on("click", toggleOnClass);

function toggleOnClass(event) {
    var toggleElementId = '#' + $(this).data('toggle'),
  element = $(toggleElementId);
  element.toggleClass('on');
};

// Fecha o menu móvel após o click
$( '.navbar-nav li a' ).on("click", function(){
  $('#mobile-menu').click();
});