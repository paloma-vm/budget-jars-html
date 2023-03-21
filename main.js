import Jar from './Jar.js';

const transportationAmount = 200;
const carRepairs = 100;


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
document.body.addEventListener('submit', (e) => {
  e.preventDefault()
})
document.body.addEventListener('change', (e) => {
  if (e.target.matches('.jar')) {

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
// const jarsContainer = document.querySelector('#jars')
const jarList = document.getElementById('jars')

// get all jars in jarList
// const allJars = jarList.getElementsByClassName('jar')
const allJars = jarList.getElementsByClassName('btn')



const options = document.getElementById('category')

const depositButton = document.getElementById('depositButton')
const spendButton = document.getElementById('spendButton')



function makeJar(label, amount) {
  const jar = new Jar(label, amount)
  jars.push(jar)
}

// function highlightDiv() {
//   // document.getElementById('jar-0').style.backgroundColor = 'cyan';
//   const elejar = document.getElementById(`'jar-${i}'`);
//   elejar.classList.toggle('highlight');
// }


// help from mood-shop assignment
function showJars() {
  let jarsDisplay = ''
  for (let i = 0; i < jars.length; i += 1) {
    const { label, amount } = jars[i]

  // NOT as buttons
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
  // console.log(jarChoices)
}

function defineJars() {
  let logJars = ''
  for (let i = 0; i < jars.length; i += 1) {
    const { label, amount } = jars[i]
    // const jar`${i}` = jars[i]
  }
}

function highlightDiv() {
  const jar0 = document.getElementById('jar-0');
  jar0.classList.toggle('highlight');
}

// function makeActive() {
//   const element = document.getElementById(`'jar-${i}'`);
//   // element.classList.add('active');
//   element.classList.toggle('active');

// }

function findSelected() {
  
}

// function doMath() {
  // let jarChoices = ''
  // for (let i = 0; i < jars.length; i += 1) {
    // const { label, amount } = jars[i]

    // options.getElementsByTagName("option");
    // for (let i = 0; i < options.length; i += 1) {
      // const val = options[i].getAttribute('value'); // could maybe use class here
      // if (val == label) {
        // do math here
        // console.log(jars[i])
        // console.log(jars[i].amount)

        
      
    // }





	

// const transpoJar = makeJar('Transportation', 100)
makeJar('Transportation', transportationAmount)

makeJar('Food', 100)
makeJar('Entertainment', 100)
makeJar('Clothes/gifts', 100)
makeJar('Everything else', 100)
const gameFund = new Jar('games', 75)
jars.push(gameFund)

// tried this: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_active_element2
// loop through the jar div and add the active class to the currently selected div
for (let i = 0; i < allJars.length; i += 1) {
  allJars[i].addEventListener('click', function() {
    const current = document.getElementsByClassName('active');

    // if there is no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(' active', '');
      // current[0].className = current[0].classList.toggle('highlight')
      // current[0].className = current[0].classList.toggle(' active')

    }

    // add the active class to the currently selected div, if you are switching which div is active
    this.className += ' active';
    // this.classList.toggle('highlight');

  });
}


// -----------------------------------------------------
// displayJars()
showJars()
jars[0].deposit(10) // transpojar.deposit(10) does not work.  
console.log(jars)
// transpoJar.deposit(30)
showJars()
console.log(jars[5].amount) //75
console.log(transportationAmount)
console.log(jars[5].amount) //105
// have to showJars to see updated amounts, will add a listener
//so that it updates automatically

// const jar0 = document.querySelector('#jar-0')
document.getElementById('jar-0').addEventListener('click', highlightDiv);

jarSelect()
console.log(options)
console.log(options.length)
// doMath()
depositButton.addEventListener('click', (e) => {
  if (options.selectedIndex == 'Transportation') {
    // get deposits and add to jar amount
    const mathAmount = document.getElementById('amt')
    console.log(mathAmount.value) 
    jars[0].deposit(mathAmount.value)
    console.log(mathAmount.value)
  }
  
})

console.log(jars[0])
console.log(jars[0].amount)







