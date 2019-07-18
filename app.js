const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const generateCpuChoice = () => {
  const options = ['Rock', 'Paper', 'Scissors']
  const randomNumber = Math.floor(Math.random() * options.length)
  return options[randomNumber]
}

const getWinner = (userChoice, cpuChoice) => {
  if (userChoice.toLowerCase() === cpuChoice.toLowerCase()) {
    console.log(`It's a tie. Let's try again.`)
    return initialPrompt()
  } else if (
    userChoice === 'Rock' && cpuChoice === 'Scissors' ||
    userChoice === 'Scissors' && cpuChoice === 'Paper' ||
    userChoice === 'Paper' && cpuChoice === 'Rock'
  ) {
    return 'You Won!!!'
  } else {
    return 'You Lose.'
  }
}

const newGame = () => {

  rl.question('Choose: Rock, Paper, or Scissors? ', answer => {
    const cpuChoice = generateCpuChoice()

    if (answer.match(/^r(ock)?$/ig)) {
      console.log('You chose Rock')
      console.log(`CPU chose ${ cpuChoice }`)
      const winner = getWinner('rock', cpuChoice)
      if (winner) console.log(winner)
      initialPrompt()
    } else if (answer.match(/^p(aper)?$/i)) {
      console.log('You chose Paper')
      console.log(`CPU chose ${ cpuChoice }`)
      const winner = getWinner('paper', cpuChoice)
      if (winner) console.log(winner)
      initialPrompt()
    } else if (answer.match(/^s(cissors)?$/i)) {
      console.log('You chose Scissors')
      console.log(`CPU chose ${ cpuChoice }`)
      const winner = getWinner('scissors', cpuChoice)
      if (winner) console.log(winner)
      initialPrompt()
    } else {
      console.log(`${ answer } is not a valid option. Goodbye.`)
      rl.close()
    }
  })
}

const initialPrompt = () => rl.question('Would you like to play a game? ', answer => {

  if (answer.match(/^y(es)?$/i)) {
    console.log(`Great, let's get started`)
    newGame()
  } else {
    console.log(`Okay. Goodbye.`)
    rl.close()
  }
})

initialPrompt()
