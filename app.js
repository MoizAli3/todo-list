// Initial Element Selection
const plusIcon = document.querySelector(`.input-container i`);
const taskField = document.querySelector(`.input-container input`);
const list = document.querySelector(`ul`);
const h2 = document.querySelector(`h2`);

// Setting the Date
const d = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const dayName = days[d.getDay()];
const date = d.getDate();
const monthName = months[d.getMonth()];
h2.innerText = `${dayName}, ${date} ${monthName}`;

// Function to add a new task to the list
const addListFunction = () => {
  const taskValue = taskField.value.trim();
  if (taskValue) {
    const listItemHTML = `
      <li>
        <span><input type="text" value="${taskValue}" readonly></span>
        <span><i class="fa-solid fa-pencil"></i><i class="fa-solid fa-trash-can"></i></span>
      </li>`;
    list.insertAdjacentHTML("beforeend", listItemHTML);
    taskField.value = ""; // Clear the input field
  } else {
    alert("Enter your task");
  }
};

// Event delegation to handle clicks on edit and delete icons
list.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest("li").remove();
  } else if (e.target.classList.contains("fa-pencil")) {
    const input = e.target.closest("li").querySelector("input");
    input.removeAttribute("readonly");
    input.focus();
    e.target.closest("li").style.borderColor = "#03e137";
  }
});

// Event delegation for input double-click, blur, and enter key events
list.addEventListener("dblclick", (e) => {
  if (e.target.tagName === "INPUT") {
    e.target.removeAttribute("readonly");
    e.target.style.cursor = "text";
    e.target.closest("li").style.borderColor = "#03e137";
  }
});

list.addEventListener(
  "blur",
  (e) => {
    if (e.target.tagName === "INPUT") {
      e.target.setAttribute("readonly", true);
      e.target.style.cursor = "pointer";
      e.target.closest("li").style.borderColor = "gray";
    }
  },
  true
);

plusIcon.addEventListener("click", addListFunction);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addListFunction();
  }
});
