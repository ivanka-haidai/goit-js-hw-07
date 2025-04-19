const ulElem = document.querySelector("ul#categories");
const liElems = ulElem.childElementCount;
console.log(`Numbers of categories: ${liElems}`);

const liElemsAll = document.querySelectorAll(".item")
liElemsAll.forEach((elem) => {
  console.log("Category: ", elem.firstElementChild.textContent);
  console.log("Elements: ", elem.lastElementChild.children.length);
})


