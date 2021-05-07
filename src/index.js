console.log(data);
// We create individual components here
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - re should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// data.name = dog names
// data.image = dogs image

function createDogs(doggo) {
  const dogListEl = document.querySelector(".dogs-list");

  const dogEl = document.createElement("li");

  dogEl.setAttribute("class", "dogs-list__button");

  dogEl.innerText = `${doggo.name}`;

  // link to diffrent go pages

  dogListEl.append(dogEl);

  dogEl.addEventListener("click", function () {
    const mainDogSection = document.querySelector(".main__dog-section");
    mainDogSection.innerHTML = "";

    const dog = document.createElement("div");

    dog.setAttribute("id", `dog${doggo.id}`);

    const h2El = document.createElement("h2");
    h2El.innerText = `${doggo.name}`;

    const img = document.createElement("img");

    img.setAttribute("src", `${doggo.image}`);

    img.setAttribute("alt", "");

    const divEl = document.createElement("div");

    divEl.setAttribute("class", "main__dog-section__desc");

    const h3El = document.createElement("h3");

    h3El.innerText = "Bio";

    const pEl = document.createElement("p");

    pEl.innerText = `${doggo.bio}`;

    const divEl2 = document.createElement("div");

    divEl2.setAttribute("class", "main__dog-section__btn");

    const pEL2 = document.createElement("p");

    const emEl = document.createElement("em");

    emEl.innerText = "Is Naughty";

    pEL2.innerText = "yes!";

    const button = document.createElement("button");

    button.innerText = "Good dog!";

    divEl2.append(pEL2, button);

    pEL2.append(emEl);

    divEl.append(h3El, pEl, divEl2);

    dog.append(h2El, img, divEl);

    mainDogSection.append(dog);
  });
}
function createDog(dogs) {
  for (const dog of dogs) {
    createDogs(dog);
  }
}
createDog(data);
