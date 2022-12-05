(function (document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function (e) {
    var target = e.target;

    if (!checkbox.checked ||
      sidebar.contains(target) ||
      (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);



document.addEventListener('DOMContentLoaded', () => {
  let allInputs = document.querySelectorAll("setion input");
  let allButtons = document.querySelectorAll("section button,[type=button]");

  allInputs.forEach(input => {
    input.className = 'form-control'
  })
  allButtons.forEach(button => {
    button.className = 'btn btn-dark'
  })
})
