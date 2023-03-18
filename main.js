import Jar from './Jar.js';

const transportationAmount = 200;



const jars = []
// const jarsContainer = document.querySelector('#jars')
const jarList = document.getElementById('jars')


function makeJar(label, amount) {
  const jar = new Jar(label, amount)
  jars.push(jar)
}


// help from mood-shop assignment
function showJars() {
  let jarsDisplay = ''
  for (let i = 0; i < jars.length; i += 1) {
    const { label, amount } = jars[i]

    jarsDisplay += `<div class='jar-list'>
    <img src='empty-jar.png'>
    <h3 class=display-label>${label}</h3>
    <h3 class=display-amount>$${amount}</h3>
    </div>`
  }
  jarList.innerHTML = jarsDisplay

}
	

// const transpoJar = makeJar('Transportation', 100)
makeJar('Transportation', transportationAmount)

makeJar('Food', 100)
makeJar('Entertainment', 100)
makeJar('Clothes/gifts', 100)
makeJar('Everything else', 100)
const gameFund = new Jar('games', 75)
jars.push(gameFund)

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








