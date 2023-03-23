const formId = "BudgetForm"; // form id
const url = location.href; // href of the page
const formIdentifier = `${url} ${formId}`; // identifies the form
const calcButton = document.querySelector("#calc");
let form = document.querySelector(`#${formId}`); // select the form
let formElements = form.elements;

/** 
 * this function gets the values in the form 
 * and returns them as an object
 * It loops through all the elements of the form
 * and saves their names and values as key:value pairs
 * When the user clicks the calculate button, the data is saved
 * as JSON to localStorage
 * (help from https://www.telerik.com/blogs/save-for-later-feature-in-forms-using-localstorage)
*/
const getBudgetData = () => {
  let data = { [formIdentifier]: {} }; 
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formIdentifier][element.name] = element.value;
    }
  }
  return data;
};

calcButton.onclick = (e) => {
  e.preventDefault()
  data = getBudgetData()
  localStorage.setItem(formIdentifier, JSON.stringify(data[formIdentifier]))
  const confirmMessage = "Form was saved."
  console.log(confirmMessage)
}

/**
 * A function to retrieve the form data and put it in the form
 */
const retrieveData = () => {
  if (localStorage.key(formIdentifier)) {
    const savedData = JSON.parse(localStorage.getItem(formIdentifier))
    for (const element of formElements) {
      if (element.name in savedData) {
        element.value = savedData[element.name]
      }
    }
    const confirmMessage = "Form was filled."
    console.log(confirmMessage)
  }
}
document.onload = retrieveData() // refill the form data when the document is loaded