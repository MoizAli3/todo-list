plusIcon = document.querySelector(`h2 i`);
editIcon = document.querySelectorAll(`span .fa-pencil`);
deleteIcon = document.querySelectorAll(`span .fa-trash-can`);
inputField = document.querySelectorAll("input");
list = document.querySelectorAll(`ul li`);

inputField.forEach((Element) => {
  Element.addEventListener("dblclick", (e) => {
    let attValue = (e.target.readOnly = false);
    if (!attValue) {
      e.target.style.cursor = `text`;
    }

    console.log(`i am double click : ${e.target}`);
  });

  Element.addEventListener("blur", (e) => {
    let attValue = (e.target.readOnly = true);
    if (attValue) {
      e.target.style.cursor = `pointer`;
    }
  });

  Element.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.target.readOnly = true;
      e.target.style.cursor = `pointer`;
    }
  });
});

editIcon.forEach((element) => {
  element.addEventListener("click", (e) => {
    let targetElement =
      e.target.parentElement.previousElementSibling.querySelector("input");
    if (targetElement) {
      targetElement.removeAttribute("readonly");
    }
  });
});

deleteIcon.forEach((Element) => {
  Element.addEventListener("click", (e) => {
    console.log(e);
    let targetElement = e.target.parentElement.parentElement;
    console.log(targetElement.remove());
  });
});

plusIcon.addEventListener("click", () => {
  console.log("Plus Icon");
});
