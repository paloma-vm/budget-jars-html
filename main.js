import Jar from './Jar.js';


const transportationAmt = 200;
// const carRepairs = parseFloat(document.getElementById('rentalIncome').value)
// const foodAmt = parseFloat(document.getElementById('foodAamt').value)
// console.log(carRepairs)



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

const depositButton = document.getElementById('depositButton')
const spendButton = document.getElementById('spendButton')



function makeJar(label, amount) {
  const jar = new Jar(label, amount)
  jars.push(jar)
}

// help from mood-shop assignment
function showJars() {
  let jarsDisplay = ''
  for (let i = 0; i < jars.length; i += 1) {
    const { label, amount } = jars[i]

    jarsDisplay += `<div class='jar' id='jar-${i}'>
    <img src='empty-jar.png'>
    <h3 class=display-label>${label}</h3>
    <h3 class=display-amount>$${amount}</h3>
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

function highlightDiv() {
  const jar0 = document.getElementById('jar-0');
  jar0.classList.toggle('highlight');
}

// create the jars
makeJar('Transportation', transportationAmt)

makeJar('Food', 100)
makeJar('Entertainment', 100)
makeJar('Clothes/gifts', 100)
makeJar('Everything else', 100)


// -----------------------------------------------------
showJars()
// console.log(jars)
jarSelect()
document.getElementById('jar-0').addEventListener('click', highlightDiv);


// console.log(options)
// console.log(options.length)

// console.log(jars[0])
// console.log(jars[0].amount)







