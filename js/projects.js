// to filter projects from portfolio.html

/* 
  default selection all projects 
  show all projects
*/
filterSelection("all");

/* funtion to remove or add "show" class to projects__item */
function filterSelection(element) {
  var projects, index;
  projects = document.getElementsByClassName("projects__item");
  if (element == "all") element = "";
  for (index = 0; index < projects.length; index++) {
    removeClass(projects[index], "show");
    if (projects[index].className.indexOf(element) > -1)
      addClass(projects[index], "show");
  }
}

/* remove class [name] from "projects__item"  */
function removeClass(element, name) {
  var index, first__array, second__array;
  first__array = element.className.split(" ");
  second__array = name.split(" ");
  for (index = 0; index < second__array.length; index++) {
    while (first__array.indexOf(second__array[index]) > -1) {
      first__array.splice(first__array.indexOf(second__array[index]), 1);
    }
  }
  element.className = first__array.join(" ");
}
/* added class [name] from "projects__item" */
function addClass(element, name) {
  var index, first__array, second__array;
  first__array = element.className.split(" ");
  second__array = name.split(" ");
  for (index = 0; index < second__array.length; index++) {
    if (first__array.indexOf(second__array[index]) == -1) {
      element.className += " " + second__array[index];
      console.log(second__array[index]);
    }
  }
}