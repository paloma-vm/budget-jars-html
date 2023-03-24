import Jar from './Jar.js';

const formId = "BudgetForm"; // form id
const transportationAmt = 200;

// event delegation
document.body.addEventListener('click', (e) => {
  console.log('%%%%%%%%%%%')
  if (e.target.matches('#depositButton')) {
    console.log('You deposited money')
    const amt = parseFloat(document.getElementById('amt').value)
    const category = document.getElementById('category').value
    for (let i = 0; i < jars.length; i += 1) {
      if (jars[i].label === category) {
        jars[i].deposit(amt)
        localStorage.setItem('jars', JSON.stringify(jars))
        console.log(jars)
      }
    }
    showJars()
    
  } else if (e.target.matches('#spendButton')) {
      console.log('You spent money')
      const amt = parseFloat(document.getElementById('amt').value)
      const category = document.getElementById('category').value

      for (let i = 0; i < jars.length; i += 1) {
        if (jars[i].label === category) {
          jars[i].spend(amt)
          localStorage.setItem('jars', JSON.stringify(jars))
          console.log(jars)
        }
      }
      showJars()
  }
})
document.body.addEventListener('submit', (e) => { // to prevent the whole page refreshing
  e.preventDefault()
})
document.body.addEventListener('change', (e) => {
  if (e.target.matches('.jar')) { // unfinished, may use later

  } else if (e.target.matches('#category')) {
    const category = document.getElementById('category').value
    for (let i = 0; i < jars.length; i += 1) {
      if (jars[i].label === category) {
        document.getElementById(`jar-${i}`).classList.add('active')
      } else {
        document.getElementById(`jar-${i}`).classList.remove('active')
      }
    }
  }
})

const jars = []

const jarList = document.getElementById('jars')
const options = document.getElementById('category')


function makeJar(label, startBal, currentBal) {
  const jar = new Jar(label, startBal, currentBal)
  jars.push(jar)
}




// help from mood-shop assignment
function showJars() {
  // if (localStorage.key('savedJars')) {
  //   savedData = JSON.parse(localStorage.getItem(formId))
  // }
  let jarsDisplay = ''
  for (let i = 0; i < jars.length; i += 1) {
    const { label, startBal, currentBal } = jars[i]
    const startLevel = (1 - ((startBal - currentBal) / startBal)) * 100

    jarsDisplay += `<div class='jar' id='jar-${i}'>
    <img src='empty-jar.png'>
      <div class='startLevel-wrapper'>
        <div class='startLevel' style='height: ${startLevel}%'></div>
      </div>
    <p class=display-original>original balance:</p>
    <p class=display-startBal>$${startBal}</p>
    <h3 class=display-label>${label}</h3>
    <h2 class=display-currentBal>$${currentBal}</h2>
    </div>`
  }
  jarList.innerHTML = jarsDisplay
  
  
}

function jarSelect() {
  let jarChoices = ''
  for (let i = 0; i < jars.length; i += 1) {
    const { label } = jars[i]

    jarChoices += `<option value='${label}'>${label}</option>`
    console.log(label)
   
  }
  console.log(options, jarChoices)
  options.innerHTML = jarChoices
}

// -----------------------------------------------------
// I can use event delegation with this line below to add as a feature in the future
// document.getElementById('jar-0').addEventListener('click', highlightDiv);
function highlightDiv() {
  const jar0 = document.getElementById('jar-0');
  jar0.classList.toggle('highlight');
}

let savedData
let savedJarsData
// function initializeJars() {
//   if (localStorage.key(formId)) {
//     savedData = JSON.parse(localStorage.getItem(formId))
  
//     makeJar('Transportation', parseFloat(savedData.transportationAmt))
//     makeJar('Food', parseFloat(savedData.foodAmt))
//     makeJar('Entertainment', parseFloat(savedData.entertainmentAmt))
//     makeJar('Clothes/gifts', parseFloat(savedData.clothesGiftsAmt))
//     makeJar('Everything else', parseFloat(savedData.everythingElseAmt))
//   }
// }

function initializeJars() {
  /** I am sure there is a more DRY way to do this, but it works and I am short on time 
   * I need to do some more trials and show empty jars if it is a new user/reset
  */
  if (localStorage.key('jars')) {
    savedJarsData = JSON.parse(localStorage.getItem('jars'))
    if (savedJarsData === null) {
      console.log('it is null')
    } else {
        makeJar('Transportation', parseFloat(savedJarsData[0].startBal), parseFloat(savedJarsData[0].currentBal))
        makeJar('Food', parseFloat(savedJarsData[1].startBal), parseFloat(savedJarsData[1].currentBal))
        makeJar('Entertainment', parseFloat(savedJarsData[2].startBal), parseFloat(savedJarsData[2].currentBal))
        makeJar('Clothes/gifts', parseFloat(savedJarsData[3].startBal), parseFloat(savedJarsData[3].currentBal))
        makeJar('Everything else', parseFloat(savedJarsData[4].startBal), parseFloat(savedJarsData[4].currentBal))
    }
  }
}


  // } else  if (localStorage.key(formId)) {
  //     savedData = JSON.parse(localStorage.getItem(formId))
    
  //     makeJar('Transportation', parseFloat(savedData.transportationAmt))
  //     makeJar('Food', parseFloat(savedData.foodAmt))
  //     makeJar('Entertainment', parseFloat(savedData.entertainmentAmt))
  //     makeJar('Clothes/gifts', parseFloat(savedData.clothesGiftsAmt))
  //     makeJar('Everything else', parseFloat(savedData.everythingElseAmt))
  //   }
 // else get started


/**
 * A function to retrieve the form data and
 * use it to create the jar starting balance
 */
// let savedData
// let savedJarsData

const displayPage = () => {
  // if (localStorage.key(formId)) {
  //   savedData = JSON.parse(localStorage.getItem(formId))

    // console.log(savedData)
    // console.log(savedData.netIncome1)
    // console.log(savedData.netIncome2)
    // create the jars
    // -----------------------------------
  
    // -----------------------------------

    // makeJar('Transportation', parseFloat(savedData.transportationAmt))

    // makeJar('Food', parseFloat(savedData.foodAmt))
    // makeJar('Entertainment', parseFloat(savedData.entertainmentAmt))
    // makeJar('Clothes/gifts', parseFloat(savedData.clothesGiftsAmt))
    // makeJar('Everything else', parseFloat(savedData.everythingElseAmt))
    initializeJars()
    showJars()
    jarSelect()
  // } else if (localStorage.key('savedJars')) {
  //   jars = JSON.parse(localStorage.getItem(jars))
    

  //   showJars()
  //   jarSelect()
  // }
}

displayPage() // create jars and show deposit/spend input 
console.log(jars)

/** Below I was wondering how to style the money levels
 * I did it differently abve, but keeping this for reference
 */
// const startLevel = document.getElementsByClassName('startLevel')
// startLevel.style.height = currentBal%






