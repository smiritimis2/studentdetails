import { data } from "./MOCK_DATA.js";





let details = data;
details = details.map(show);

const tbody = document.querySelector("tbody");
details.forEach(add);

const searchInput = document.querySelector("#got");

function Search(item) {
  
  item.preventDefault();
  let value = searchInput.value.trim().toLowerCase();
 
  
  if (value.length) {
    
    let filtered = details.filter(
      (student) =>
        student.email.toLowerCase().includes(value) ||
        student.name.toLowerCase().includes(value)
    );
    if (filtered.length) {
      filtered.forEach(add);
    } 
    else {
      tbody.innerText = "";
    }
  } 
  
  else {
    
    details.forEach(add);
  }
}


searchInput.addEventListener("input", Search);

const sortButtons = document.querySelectorAll(".sort-container > *");
for (let button of sortButtons) {
  button.addEventListener("click", sortData);
}
function sortData(item) {
    item.target.classList.toggle("active");
  let id = item.target.id;
  let previouslyClicked = document.querySelector(".active");
  if (previouslyClicked) {
    previouslyClicked.classList.toggle("active");
  }
 
 
  if (id == "descending") {
    details.sort((a, b) => b.name.localeCompare(a.name));
    details.forEach(add);
  } 
  if (id == "marks") {
    details.sort((a, b) => a.marks - b.marks);
    details.forEach(add);
  } 
  if (id == "ascending") {
    details.sort((a, b) => a.name.localeCompare(b.name));
    details.forEach(add);
  } 
  
  
  if (id == "classNo") {
    details.sort((a, b) => a.classNo - b.classNo);
    details.forEach(add);
  } 
  
  if (id == "passing") {
    let passingStudents = details.filter(
      (student) => student.passing == "Passing"
    );
    passingStudents.forEach(add);
  } if (id == "gender") {
    details.sort((a, b) => a.gender.localeCompare(b.gender));
    details.forEach(add);
  }

  if (id == "descending") {
    details.sort((a, b) => b.name.localeCompare(a.name));
    details.forEach(add);
  } 
  
  if (id == "gender") {
    details.sort((a, b) => a.gender.localeCompare(b.gender));
    details.forEach(add);
  }
}
function show(student) {
  const {
    id,
    first_name,
    last_name,
    email,
    gender,
    marks,
    img_src,
    class: classNo,
    passing,
  } = student;

  return {
    id,
    imgSrc: img_src,
    name: first_name + " " + last_name,
    gender,
    classNo,
    marks,
    passing: passing ? "Passing" : "Failed",
    email,
  };
}
const form = document.querySelector("form");

form.addEventListener("submit",Search);


function add(student, k) {
   
 
    const data = Object.values(student);
    const tr = document.createElement("tr");
  
   
  
    for (let k = 0; k < data.length; k++) {
      if (k == 2) continue;
      if (k == 1) {
       
        const nameTd = document.createElement("td");
        nameTd.innerHTML = `<img src=${student.imgSrc} alt="photo"/> <span>${student.name}</span>`;
        tr.append(nameTd);
      } else {
        const newTd = document.createElement("td");
        newTd.textContent = data[k];
        tr.append(newTd);
      }
    }
    if (k== 0) {
        tbody.innerText = "";
      }
  
    tbody.append(tr);
  }
