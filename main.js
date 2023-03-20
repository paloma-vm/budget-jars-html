import Jar from './Jar.js';

const transportationAmount = 200;



const jars = []
// const jarsContainer = document.querySelector('#jars')
const jarList = document.getElementById('jars')

const options = document.getElementById('options')



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
  options.innerHTML = jarChoices
  // console.log(jarChoices)
}

function highlightDiv() {
  // document.getElementById('jar-0').style.backgroundColor = 'cyan';
  const jar0 = document.getElementById('jar-0');
  jar0.classList.toggle('highlight');
}


	

// const transpoJar = makeJar('Transportation', 100)
makeJar('Transportation', transportationAmount)

makeJar('Food', 100)
makeJar('Entertainment', 100)
makeJar('Clothes/gifts', 100)
makeJar('Everything else', 100)
const gameFund = new Jar('games', 75)
jars.push(gameFund)

// ------------------------------------------------
// manage the money in the jars
// const manage = document.getElementById('manage')
// manage.innerHTML = 'hello'
// const selectedJar = document.createElement('p')
// select.className = 'selectedJar'

// -----------------------------------------------------
// displayJars()
showJars()
jars[0].deposit(10) // transpojar.deposit(10) does not work.  
console.log(jars)
// transpoJar.deposit(30)
showJars()
console.log(jars[5].amount) //75
console.log(transportationAmount)
gameFund.deposit(30)
console.log(jars[5].amount) //105
// have to showJars to see updated amounts, will add a listener
//so that it updates automatically

// const jar0 = document.querySelector('#jar-0')
document.getElementById('jar-0').addEventListener('click', highlightDiv);

jarSelect()







