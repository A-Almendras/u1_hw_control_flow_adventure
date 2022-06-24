// Prompt and store name of user in a variable
let userName = prompt('What is your name?')

// Welcome message, ask user whether or not they want to take a vacation (Y/N), invokes playGame function
const startGame = () => {
  // Prompts user to determine if they want to play the game/go on a vacation ans stores it in variable
  let userVacation = confirm(
    `Welcome ${userName} to TravelWithUs! Would you want to go on a long awaited vacation?`
  )
  //console.log(userVacation)
  // Invokes playGame function which prompts the outcome based on the selection the user chose
  planTravel(userVacation)
}

// Asks the user for the budget for travel OR a message if they cancel
const planTravel = (selection) => {
  if (selection === null) {
    return // This keyword breaks out of the function
  } else if (selection === true) {
    let amount = prompt(
      `${userName}, how much are you willing to pay? Please enter amount in $`
    )
    console.log(amount)
    userBudget(amount)
  } else {
    alert(`That is too bad, I hope you are able to take a brake soon!`)
  }
}

// Offers different kinds of travel arrangements based on the user budget entered
const userBudget = (budget) => {
  if (budget === null) {
    return // This keyword breaks out of the function
  } else if (budget > 1500) {
    alert(
      `Wonderful ${userName}, with that budget we can offer some great travel arrangements.`
    )
    console.log(budget)
    highOptions(budget)
  } else {
    alert(
      `Yikes ${userName} that is a low budget, let's see what we can work with.`
    )
    console.log(budget)
    lowOptions(budget)
  }
}
// The multiple options available for users with what userBudget considered high
const highOptions = () => {
  let highBudget = prompt(
    `These are your options for travel: drive, fly, cruise, train. Which do you prefer?`
  )

  if (highBudget === null) {
    return // This keyword breaks out of the function
  }

  switch (highBudget) {
    case `drive`:
      console.log(`drive`)
      let driveChoice = prompt(`Do you own a vehicle? yes or no`)
      if (driveChoice === `yes`) {
        alert(`You better have gas money, and lots of it.`)
      } else {
        alert(`No worries, head to Walmart! they have cars as low as $1!`)
      }
      restartGame()
      break
    case `fly`:
      console.log(`fly`)
      let flyChoice = prompt(`Do you have a valid passport? yes or no`)
      if (flyChoice === `yes`) {
        alert(`Great! Make sure to be at airport 3 days earlier for TSA.`)
      } else {
        alert(`Shhh! We won't tell.`)
      }
      restartGame()
      break
    case `cruise`:
      console.log(`cruise`)
      let cruiseChoice = prompt(`Do you know how to swim? yes or no`)
      if (cruiseChoice === `yes`) {
        alert(
          `Oh that's great news! Since the cruise you will be boarding does not utilize life jackets.`
        )
      } else {
        alert(`GOOD LUCK!`)
      }
      restartGame()
      break
    case 'train':
      console.log(`train`)
      let trainChoice = prompt(`Have you seen Harry Potter? yes or no`)
      if (trainChoice === `yes`) {
        alert(
          `Your train will be absolutely, positively nothing like the one in the movie.`
        )
      } else {
        alert(
          `No worries, you won't be missing out on anything magical during your train ride`
        )
      }
      restartGame()
      break
    default:
      alert(`Unfortunately we do not offer that travel option...Sorry!`)
      highOptions()
  }
}

// The multiple options available for users with what userBudget considered low
const lowOptions = () => {
  let lowBudget = prompt(
    `These are your options for travel: bike, run, bus. Which do you prefer?`
  )

  if (lowBudget === null) {
    return // This keyword breaks out of the function
  }

  switch (lowBudget) {
    case `bike`:
      console.log(`bike`)
      let bikeChoice = prompt(`Do you have a reliable bike? yes or no`)
      if (bikeChoice === `yes`) {
        alert(`Use it to pedal your way out!`)
      } else {
        alert(
          `That's unfortunate, make sure to call AAA if you get a flat tire...not us...we will not be answering.`
        )
      }
      restartGame()
      break
    case `run`:
      console.log(`run`)
      let runChoice = prompt(
        `Do you have a durable pair of tennis shoes? yes or no`
      )
      if (runChoice === `yes`) {
        alert(`Perfect, you're all set for your 100 mile run!`)
      } else {
        alert(`We are not responsible for any twisted ankles!`)
      }
      restartGame()
      break
    case `bus`:
      console.log(`bus`)
      let busChoice = prompt(`Do you have a bus stop near you? yes or no`)
      if (busChoice === `yes`) {
        alert(`Wonderful, make sure not to miss it.`)
      } else {
        alert(`You better get walking to the nearest one.`)
      }
      restartGame()
      break
    default:
      alert(`Unfortunately we do not offer that travel option...Sorry!`)
      lowOptions()
  }
}

// Function to ask user if they want to restart the adventure game
const restartGame = () => {
  let restart = confirm(`Want to restart?`)
  if (restart) {
    startGame()
  } else {
    alert(
      `Thank you for choosing your travel arrangments with us ${userName}! We hope to see back soon!`
    )
  }
}

// Invoking to begin the game
startGame()
