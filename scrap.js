// what I had tried, I needed e.target, etc
depositButton.addEventListener('click', (e) => {
    if (options.selectedIndex == 'Transportation') {
      // get deposits and add to jar amount
      const mathAmount = document.getElementById('amt')
      console.log(mathAmount.value) 
      jars[0].deposit(mathAmount.value)
      console.log(mathAmount.value)
    }
    
  })

  // const gameFund = new Jar('games', 75)
// jars.push(gameFund)