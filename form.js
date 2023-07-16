import Jar from './Jar.js';
const formId = "BudgetForm"; // form id
const calcButton = document.querySelector("#calc");
let form = document.querySelector(`#${formId}`); // select the form
let formElements = form.elements;
let savedData

const jars = JSON.parse(localStorage.getItem('jars'))
console.log('before update jars')
console.log(jars)

// event delegation
// event listener for input fields to trigger calculation when a change occurs.
const inputFields = form.querySelectorAll("input[type='number']")

inputFields.forEach((input) => {
  input.addEventListener("change", CalcJarAmts)
})

// calculate jar amounts based on budget sheet
function CalcJarAmts() {
  // turn form inputs into numbers from strings
  /* transportation */
  const gasOil = parseFloat(formElements.gasOil.value)
  const carRepairs = parseFloat(formElements.carRepairs.value)
  const publicTranspo = parseFloat(formElements.publicTranspo.value)
  const taxi = parseFloat(formElements.taxi.value)
  const parking = parseFloat(formElements.parking.value)
  /* food */
  const groceries = parseFloat(formElements.groceries.value)
  /* entertainment */
  const restaurant = parseFloat(formElements.restaurant.value)
  const entertainment = parseFloat(formElements.entertainment.value)
  const hobby = parseFloat(formElements.hobby.value)
  const sports = parseFloat(formElements.sports.value)
  const clubUnion = parseFloat(formElements.clubUnion.value)
  /* clothes/gifts */
  const clothes = parseFloat(formElements.clothes.value)
  const familyGifts = parseFloat(formElements.familyGifts.value)
  /* everything else */
  const allowances = parseFloat(formElements.allowances.value)
  const medicalDental = parseFloat(formElements.medicalDental.value)
  const pet = parseFloat(formElements.pet.value)
  const vacation = parseFloat(formElements.vacation.value)
  const charity = parseFloat(formElements.charity.value)
  const bankFees = parseFloat(formElements.bankFees.value)

  // calculate jar amounts
  const transportationAmt = gasOil + carRepairs + publicTranspo + taxi + parking
  const foodAmt = groceries
  const entertainmentAmt = restaurant + entertainment + hobby + sports + clubUnion
  const clothesGiftsAmt = clothes + familyGifts
  const everythingElseAmt = allowances + medicalDental + pet + vacation + charity + bankFees

  // update jar amount input fields with the calculated amounts (to 2 decimal places)
  formElements.transportationAmt.value = transportationAmt.toFixed(2)
  formElements.foodAmt.value = foodAmt.toFixed(2)
  formElements.entertainmentAmt.value = entertainmentAmt.toFixed(2)
  formElements.clothesGiftsAmt.value = clothesGiftsAmt.toFixed(2)
  formElements.everythingElseAmt.value = everythingElseAmt.toFixed(2)

}


// update jars based on the budget sheet
function updateJars() {
  // if (localStorage.key('jars')) {
  //   savedData = JSON.parse(localStorage.getItem('jars'))
  // }
  if (localStorage.key(formId)) {
    // savedData = JSON.parse(localStorage.getItem(formId))
    savedData = JSON.parse(localStorage.getItem('BudgetForm'))

  }

  // if saved data is not undefined, update the starting amount based on the budget sheet 
  if (savedData !== undefined) {
    jars[0].startBal = parseFloat(savedData.transportationAmt)
    jars[1].startBal = parseFloat(savedData.foodAmt)
    jars[2].startBal = parseFloat(savedData.entertainmentAmt)
    jars[3].startBal = parseFloat(savedData.clothesGiftsAmt)
    jars[4].startBal = parseFloat(savedData.everythingElseAmt)
    console.log(parseFloat(savedData.everythingElseAmt))

    // when the jars are initialized, they are all at zero.  When the budget is made, the 
    // start bal will be equal to the current bal. 
    // NOTE:  I will have to write more code to account for when a jar goes back to zero after
    // all the money is spent, because in that case the startBal will not be equal to the current bal

    for (let i = 0; i < jars.length; i++) {
      // if (jars[i].currentBal == 0 || jars[i].currentBal == Null) {
      if (jars[i].currentBal == 0) {
        jars[i].currentBal = jars[i].startBal
        console.log(jars[i].currentBal, jars[i].startBal)
      }
  
    }

    localStorage.setItem('jars', JSON.stringify(jars))

    console.log('jars updated')
    console.log(jars)
  }
}
  

/** 
 * this function gets the values in the form 
 * and returns them as an object
 * It loops through all the elements of the form
 * and saves their names and values as key:value pairs
 * When the user clicks the calculate button, 
 * the data is saved as JSON to localStorage
 * (help from https://www.telerik.com/blogs/save-for-later-feature-in-forms-using-localstorage)
*/

let data = { [formId]: {} }; 


const getBudgetData = () => {
  // let data = { [formId]: {} }; 
  for (const element of formElements) {
    if (element.name.length > 0) {
      data[formId][element.name] = element.value;
      console.log('*************************')
      console.log(element.value)
    }
  }
  return data;
};
// store the form in localStorage
calcButton.onclick = (e) => {
  e.preventDefault()
  data = getBudgetData()
  localStorage.setItem(formId, JSON.stringify(data[formId]))
  updateJars()
  const confirmMessage = "Form was saved."
  console.log(confirmMessage)
}

/**
 * A function to retrieve the form data and put it in the form
 */
const fillFormWithSavedData = () => {
  if (localStorage.key(formId)) {
    const savedData = JSON.parse(localStorage.getItem(formId))
    for (const element of formElements) {
      if (element.name in savedData) {
        // console.log(element.name, savedData[element.name] || 0)
        
        element.value = savedData[element.name] || 0
      }
      // if (element.name in savedData) {
      //   console.log(element.name, savedData[element.name])
        
      //   element.value = savedData[element.name]
      // }
    }
    const confirmMessage = "Form was filled."
    console.log(confirmMessage)
  }
}

fillFormWithSavedData() // repopulate the form data


