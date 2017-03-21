document.addEventListener('DOMContentLoaded', function () {
  console.log('Linked.')

// Dramatis Personae
  var hobbits = [
    'Frodo Baggins',
    'Samwise \'Sam\' Gamgee',
    'Meriadoc \'Merry\' Brandybuck',
    'Peregrin \'Pippin\' Took'
  ]

  var buddies = [
    'Gandalf the Grey',
    'Legolas',
    'Gimli',
    'Strider',
    'Boromir'
  ]

  var lands = ['The Shire', 'Rivendell', 'Mordor']
  var body = document.querySelector('body')

// Part 1

  function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
    var middleEarth = document.createElement('section')
    middleEarth.id = 'middle-earth'

    lands.forEach(function (land) {
      var landArticle = document.createElement('article')
      var landTitle = document.createElement('h1')
      landTitle.textContent = land
      landArticle.appendChild(landTitle)
      middleEarth.appendChild(landArticle)
    })

    body.appendChild(middleEarth)
  }

  makeMiddleEarth()

// Part 2

  function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the second article tag on the page)
  // give each hobbit a class of hobbit

    var hobbitsList = document.createElement('ul')

    hobbits.forEach(function (hobbit) {
      var hobbitNames = document.createElement('li')
      hobbitNames.textContent = hobbit
      hobbitsList.appendChild(hobbitNames)
    })
    var shire = document.querySelectorAll('article')
    var shireList = shire[0]

    shireList.appendChild(hobbitsList)
  }
  makeHobbits()
// Part 3

  function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
    var theRing = document.createElement('div')
    theRing.setAttribute('id', 'the-ring')
    theRing.setAttribute('class', 'magic-imbued-jewelry')

    theRing.addEventListener('click', nazgulScreech)

    var getFrodo = document.querySelectorAll('li')
    var frodo = getFrodo[0]
    frodo.appendChild(theRing)
  }
  keepItSecretKeepItSafe()

// Part 4

  function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
    var aside = document.createElement('aside')
    var buddyList = document.createElement('ul')
    for (var i = 0, len = buddies.length; i < len; i++) {
      var buddy = document.createElement('li')
      buddy.textContent = buddies[i]
      buddyList.appendChild(buddy)
    }
    var rivendell = document.querySelectorAll('article')[1]

    aside.appendChild(buddyList)
    rivendell.appendChild(aside)
  }
  makeBuddies()
// Part 5
  var rivendell = document.querySelectorAll('article')[1]
  var strider = rivendell.querySelectorAll('li')[3]
  function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
    strider.textContent = 'Aragon'
  }
  beautifulStranger()
// Part 6
  var theShire = document.querySelectorAll('article')[0]
  var hobbits = theShire.querySelector('ul')
  function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
    rivendell.appendChild(hobbits)
  }
  leaveTheShire()
// Part 7

  var fellowshipList = rivendell.querySelectorAll('li')

  function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
    var theFellowship = document.createElement('div')
    theFellowship.setAttribute('id', 'the-fellowship')
    for (var i = 0, length = fellowshipList.length; i < length; i++) {
      theFellowship.appendChild(fellowshipList[i])
    }
    rivendell.appendChild(theFellowship)
  }

  forgeTheFellowShip()

// Part 8
  var gandalf = fellowshipList[0]

  function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
    gandalf.textContent = 'Gandalf the White'
    gandalf.style.border = '10px solid gray'
    gandalf.style.backgroundColor = 'white'
  }

  theBalrog()

// Part 9
  var boromir = fellowshipList[4]

  function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
    alert('the horn of gondor has blown')
    boromir.style.textDecoration = 'line-through'
    boromir.parentNode.removeChild(boromir)
  }
  hornOfGondor()

// Part 10
  var sam = fellowshipList[6]
  var frodo = fellowshipList[5]
  var mordor = document.querySelectorAll('article')[2]
  function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
    mordor.appendChild(frodo)
    mordor.appendChild(sam)
    var mountDoom = document.createElement('div')
    mountDoom.setAttribute('id', 'mount-doom')
    mordor.appendChild(mountDoom)
  }
  itsDangerousToGoAlone()

// Part 11
  var gollum, theRing

  function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom

    gollum = document.createElement('div')
    gollum.setAttribute('id', 'gollum')
    theRing = frodo.querySelector('#the-ring')
    gollum.appendChild(theRing)

    mountDoom = mordor.querySelector('#mount-doom')
    mountDoom.appendChild(gollum)
  }

  weWantsIt()

// Part 12

// remove Gollum and the Ring from the document
// remove all the baddies from the document
// Move all the hobbits back to the shire
  var theShire = document.querySelectorAll('article')[0]

  function thereAndBackAgain () {
    gollum.document.removeChild(gollum)
    var hobbitFinalList = document.createElement('ul')
    var moveHobbits = body.querySelectorAll('hobbitsList')
    for (var i = 0, length = hobbits.length; i < length; i++) {
      hobbitFinalList.appendChild(hobbitsList[i])
    }
    theShire.appendChild(hobbitFinalList)
  }

  thereAndBackAgain()
})
