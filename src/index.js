console.log(data);
// We create individual components here
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - re should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// data.name = dog names
// data.image = dogs image

// function createDogs(doggo) {
//   const dogListEl = document.querySelector(".dogs-list");

//   const dogEl = document.createElement("li");

//   dogEl.setAttribute("class", "dogs-list__button");

//   dogEl.innerText = `${doggo.name}`;

//   // link to diffrent go pages

//   dogListEl.append(dogEl);

//   dogEl.addEventListener("click", function () {
//     const mainDogSection = document.querySelector(".main__dog-section");
//     mainDogSection.innerHTML = "";

//     const dog = document.createElement("div");

//     dog.setAttribute("id", `dog${doggo.id}`);

//     const h2El = document.createElement("h2");
//     h2El.innerText = `${doggo.name}`;

//     const img = document.createElement("img");

//     img.setAttribute("src", `${doggo.image}`);

//     img.setAttribute("alt", "");

//     const divEl = document.createElement("div");

//     divEl.setAttribute("class", "main__dog-section__desc");

//     const h3El = document.createElement("h3");

//     h3El.innerText = "Bio";

//     const pEl = document.createElement("p");

//     pEl.innerText = `${doggo.bio}`;

//     const divEl2 = document.createElement("div");

//     divEl2.setAttribute("class", "main__dog-section__btn");

//     const pEL2 = document.createElement("p");

//     const emEl = document.createElement("em");

//     emEl.innerText = "Is Naughty";

//     pEL2.innerText = "yes!";

//     const button = document.createElement("button");

//     button.innerText = "Good dog!";

//     divEl2.append(pEL2, button);

//     pEL2.append(emEl);

//     divEl.append(h3El, pEl, divEl2);

//     dog.append(h2El, img, divEl);

//     mainDogSection.append(dog);
//   });
// }
// function createDog(dogs) {
//   for (const dog of dogs) {
//     createDogs(dog);
//   }
// }
// createDog(data);

const dogNavList = document.querySelector(".dogs-list");
const mainDogSection = document.querySelector(".main__dog-section");

// -- create a list of dog

function createListDogItem(dog) {
  const dogLi = document.createElement("li");
  dogLi.setAttribute("class", "dogs-list__button");
  dogLi.innerText = dog.name;
  dogNavList.append(dogLi);
  dogLi.addEventListener("click", function () {
    mainDogSection.innerHTML = "";
    dogInner(dog);
  });
}
function plusDogg() {
  const dogAdd = document.createElement("li");
  dogAdd.addEventListener("click", () => addDog());
  dogAdd.setAttribute("class", "dogs-list__button dogs-list__button--add");
  dogAdd.innerText = "+";
  dogNavList.append(dogAdd);
}

plusDogg();

function createListDogs(dogs) {
  for (const dog of dogs) {
    createListDogItem(dog);
  }
}

function dogInner(dog) {
  const h2El = document.createElement("h2");
  h2El.innerText = dog.name;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", dog.image);
  imgEl.setAttribute("alt", dog.name);
  const divEl = document.createElement("div");
  divEl.setAttribute("class", "main__dog-section__desc");
  const h3El = document.createElement("h3");
  h3El.innerText = "Bio";
  const pEl = document.createElement("p");
  pEl.innerText = dog.bio;
  const divEl2 = document.createElement("div");
  divEl2.setAttribute("class", "main__dog-section__btn");
  const pEl2 = document.createElement("p");
  pEl2.innerText = dog.isGoodDog ? "No" : "Yes";
  const emEl = document.createElement("em");
  emEl.innerText = "Is naughty ";
  const buttonEl = document.createElement("button");
  buttonEl.innerText = "Good dog!";
  pEl2.prepend(emEl);
  divEl2.append(pEl2, buttonEl);
  divEl.append(h3El, pEl, divEl2);
  mainDogSection.append(h2El, imgEl, divEl);
}

// -- Create function to add dog
function addDog() {
  mainDogSection.innerHTML = "";
  const form = document.createElement("form");
  const dogName = document.createElement("input");
  dogName.setAttribute(
    "style",
    "display: block; width: 100%; height: 30px; margin-bottom: 10px"
  );
  dogName.setAttribute("placeholder", "Name");
  const dogBio = document.createElement("input");
  dogBio.setAttribute(
    "style",
    "display: block; width: 100%; height: 30px; margin-bottom: 10px"
  );
  dogBio.setAttribute("placeholder", "Bio");
  const dogImage = document.createElement("input");
  dogImage.setAttribute("placeholder", "Src");
  dogImage.setAttribute(
    "style",
    "display: block; width: 100%; height: 30px; margin-bottom: 10px"
  );
  const formSubmitButton = document.createElement("button");
  formSubmitButton.setAttribute("type", "submit");
  formSubmitButton.innerText = "Submit Form";
  formSubmitButton.addEventListener("click", function () {
    const newDog = {
      name: `${dogName.value}`,
      bio: `${dogBio.value}`,
      image: `${dogImage.value}`,
    };
    data.push(newDog);
    dogNavList.innerHTML = "";
    plusDogg();
    createListDogs(data);
  });

  form.append(dogName, dogBio, dogImage, formSubmitButton);
  mainDogSection.append(form);
}

// -- Create object
// -- Prompt user to give name of dog
// -- Store prompt in object name:
// -- Prompt user to give a bio
// -- Store prompt in object bio
// -- Prompt user to give and image src
// -- Store prompt in object image
// Push object to data

createListDogs(data);
