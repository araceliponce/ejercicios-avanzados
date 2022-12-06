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
  let allInputs = document.querySelectorAll("section input");
  let allButtons = document.querySelectorAll("section button,[type=button]");
  let allSections = document.querySelectorAll('article section[id]');

  allInputs.forEach(input => {
    input.className = 'form-control'
  })
  allButtons.forEach(button => {
    button.className = 'btn btn-dark'
  })

  console.log(allSections)

  allSections.forEach(section => {
    let anchor = document.createElement('a');
    let sectionId = section.getAttribute('id');

    //console.log(sectionId)

    anchor.setAttribute('href', `#${sectionId}`);
    anchor.textContent = sectionId;
    anchor.className = 'btn corn px-4 me-2 mb-2';

    let h2 = document.querySelector('h2'); //el primer h2

    h2.parentElement.insertBefore(anchor, h2)
    //https://developer.mozilla.org/en-US/docs/Web/API/Element/after
  })
})
