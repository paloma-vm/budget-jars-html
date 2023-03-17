import Jar from './Jar.js';




	const jars = []
    const jarsContainer = document.querySelector('#jars')
    const jarList = document.getElementById('jars')


	function makeJar(label, amount) {
		const jar = new Jar(label, amount)
		jars.push(jar)
	}

	// function displayJars() {
	// 	jars.forEach(({ label, amount }) => {
	// 		console.log(label, amount)
    //         const newDiv = document.createElement('div')
    //         newDiv.className = 'jar'
    //         const labelDisplay = document.createElement('p')
    //         labelDisplay.innerText = label
    //         newDiv.appendChild(labelDisplay)
    //         document.getElementById('jars').innerHTML = label
		
	// 	})
	// }
    // let jarDisplay = 'fdfsfds'
    // jars.forEach(displayJars);
    // document.getElementById('jars').innerHTML = jarDisplay

    // function displayJars(label, amount) {
    //     const newDiv = document.createElement('div')
    //     newDiv.className = 'jar'
    //     const labelDisplay = document.createElement('p')
    //     labelDisplay.innerText = label
    //     newDiv.appendChild(labelDisplay)
    //     const amountDisplay = document.createElement('p')
    //     amountDisplay.innerText = amount
    //     newDiv.appendChild(amountDisplay)
		
	// }

    function showJars() {
        let itemStr = ''
        for (let i = 0; i < jars.length; i += 1) {
            const { label, amount } = jars[i]

            itemStr += `<li>
            Jar label: ${label}
            Jar amount: ${amount}
            </li>`
        }
        jarList.innerHTML = itemStr

    }
	

	makeJar('Transportation', 100)
	makeJar('Food', 100)
	makeJar('Entertainment', 100)
	makeJar('Clothes/gifts', 100)
	makeJar('Everything else', 100)

	// displayJars()
    showJars()






