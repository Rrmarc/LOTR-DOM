console.log("fellowship.js linked.");

// Our heroes
var hobbits = [
    "Frodo Baggins",
    "Samwise 'Sam' Gamgee",
    "Meriadoc 'Merry' Brandybuck",
    "Peregrin 'Pippin' Took"
];

// Their compatriots
var buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

// Their journey
var lands = ["The Shire", "Rivendell", "Mordor"];

// An example of using query selector
var body = document.querySelector("body");

// Part 1
function makeMiddleEarth() {
    var $main = document.createElement("main");

    // create a section tag with an id of middle-earth
    var $section = document.createElement("section");
    $section.setAttribute("id", "Middle-Earth");

    var $article = document.createElement("article");
    // var $shire = document.querySelectorAll("article")[0];

    $main.appendChild($section);

    // add each land as an article tag (add them one by one in a loop)
    for (var i = 0; i < lands.length; i++) {
        var $article = document.createElement("article");
        // inside each article tag include an h1 with the name of the land
        var $h1 = document.createElement("h1");
        //added idividual ids on land
        $h1.setAttribute("id", `lands${i}`);

        $h1.textContent = lands[i];
        var nameinArray = lands[i].toLowerCase().split(" ");
        var nameNoSpace = nameinArray.join("-");

        // each article should also have a class equal to it's name ('Mordor' element should have a class of 'mordor', 'The Shire' should have a class of 'the-shire' - HINT: look up .split() and .join() for strings )
        $article.setAttribute("class", nameNoSpace);
        $article.appendChild($h1);
        $section.appendChild($article);
    }

    // append middle-earth to your document body
    body.appendChild($main);
}

makeMiddleEarth();

// Part 2
function makeHobbits() {
    // display an unordered list of hobbits in the shire (which is the first article tag on the page)

    var $shire = document.querySelectorAll("article")[0];
    let list = document.createElement("ul");

    $shire.appendChild(list);

    // each hobbit should be a list item, with text showing their name
    for (let i = 0; i < hobbits.length; i++) {
        let li = document.createElement("li");
        // give each hobbit a class of hobbit
        li.className = "hobbit";
        li.innerHTML = hobbits[i];
        list.appendChild(li);
    }
}
makeHobbits();

// Part 3
function keepItSecretKeepItSafe() {
    // create a div with an id of 'the-ring'
    let divElement = document.createElement("div");
    divElement.setAttribute("id", "the-ring");
    // give the div a class of 'magic-imbued-jewelry'
    divElement.className = "magic-imbued-jewelry";
    // add the ring as a child of Frodo
    let frobo = document.querySelectorAll(".hobbit");
    frobo[0].appendChild(divElement);
}
keepItSecretKeepItSafe();

// Part 4
function makeBuddies() {
    // create an aside tag
    let asideTag = document.createElement("aside");

    // attach an unordered list of each 'buddy' in the aside
    let ul = document.createElement("ul");
    asideTag.appendChild(ul);
    for (let i = 0; i < buddies.length; i++) {
        let li = document.createElement("li");
        li.className = "aside-list";
        li.innerHTML = buddies[i];
        ul.appendChild(li);
    }
    // insert your aside as a child element of rivendell
    let rivendellLand = document.getElementById("lands1");
    // console.log(rivendellLand);
    rivendellLand.appendChild(asideTag);
}
makeBuddies();

// Part 5
function beautifulStranger() {
    // change the 'Strider' textnode to 'Aragorn'
    let pointer = document.getElementsByClassName("aside-list");
    pointer[3].innerHTML = "Aragorn";
}
beautifulStranger();

// Part 6
function leaveTheShire() {
    // assemble the hobbits and move them to Rivendell
    // how does appendChild work on an element that already exists on the page?
    let parentEl = document.getElementsByClassName("aside-list");
    for (let i = 0; i < parentEl.length; i++) {
        let hobb = document.createElement("p")
        hobb.className = "hobbs-in-aside-tag";

        let addingEl = parentEl[i];
        addingEl.appendChild(hobb);

        hobb.innerHTML = `-->${hobbits[i]}`

        console.log(hobb)
    }
    console.log(parentEl[0].innerHTML)
}
leaveTheShire();

// Part 7
function forgeTheFellowShip() {
    // create a new div with an id of 'the-fellowship'
    // add each hobbit and buddy one at a time to 'the-fellowship'
    // after each character is added make an <a href="http://www.w3schools.com/jsref/met_win_alert.asp">alert</a> that they have joined your party
    // append the fellowship div to rivendell
}
// forgeTheFellowShip();

// Part 8
function theBalrog() {
    // change the 'Gandalf' textNode to 'Gandalf the White'
    // apply style to the element
    // add a gray 3px border
    // use documentation if you're unsure how to add style with javascript!
}
// theBalrog();

// Part 9
function hornOfGondor() {
    // pop up an alert that the horn of gondor has been blown
    // Boromir's been killed by the Uruk-hai!
    // Remove Boromir from the Fellowship
}
// hornOfGondor();

// Part 10
function itsDangerousToGoAlone() {
    // take Frodo and Sam out of the fellowship and move them to Mordor
    // add a div with an id of 'mount-doom' to Mordor
}
// itsDangerousToGoAlone();

// Part 11
function weWantsIt() {
    // Create a div with an id of 'gollum' and add it to Mordor
    // Remove the ring from Frodo and give it to Gollum
    // Move Gollum into Mount Doom
}
// weWantsIt();

// Part 12
function thereAndBackAgain() {
    // remove Gollum and the Ring from the document
    // Move all the hobbits back to the shire
}
// thereAndBackAgain();