// const
const openEditButton = document.querySelector(".profile__edit-button");
const closeEditButton = document.querySelector(".popup__exit-button");
const popup = document.querySelector(".popup");

const openAddButton = document.querySelector(".profile__add-button");
const closeAddButton = document.querySelector(".popup_add__exit-button ");
const popupAdd = document.querySelector(".popup_add");

const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input-name");
const jobInput = document.querySelector(".popup__input-job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const initialCards = [
  {
    name: "Сочи",
    link: "images/sochi.jpg",
  },
  {
    name: "Горный Алтай",
    link: "images/gorniy-altai.jpg",
  },
  {
    name: "Санкт Петербург",
    link: "images/st-petersburg.jpg",
  },
  {
    name: "Домбай",
    link: "images/dombay.jpg",
  },
  {
    name: "Гора Эльбрус",
    link: "images/elbrus.jpg",
  },
  {
    name: "Карачаевск",
    link: "images/karachaevsk.jpg",
  },
];

// открывание/закрывание попапов

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

openEditButton.addEventListener("click", function () {
  openPopup(popup);
});

closeEditButton.addEventListener("click", function () {
  closePopup(popup);
});

openAddButton.addEventListener("click", function () {
  openPopup(popupAdd);
});

closeAddButton.addEventListener("click", function () {
  closePopup(popupAdd);
});

// редактирование информации профиля

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popup);
}

formElement.addEventListener("submit", formSubmitHandler);

//template
const ul = document.querySelector(".elements__list");
const template = document.querySelector(".elements-template").content;

function addElement(element, elementHolder) {
  elementHolder.prepend(element);
}

function createElement(elementName, elementUrl) {
  const element = template.cloneNode(true);

  element.querySelector(".elements__img").src = elementUrl;
  element.querySelector(".elements__img").alt = elementName;
  element.querySelector(".elements__title").textContent = elementName;

  const likeButton = element.querySelector(".elements__button");
  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("elements__button_active");
  });

  const deleteButton = element.querySelector(".elements__button-delete");
  deleteButton.addEventListener("click", function () {
    deleteButton.closest(".elements__item").remove();
  });

  const image = element.querySelector(".elements__img");
  image.addEventListener("click", function () {
    openPopup(fullFoto);
    fullFoto.querySelector(".popup__img").src = image.src;
    fullFoto.querySelector(".popup__img").alt = image.alt;
    fullFoto.querySelector(".popup__heading").textContent = image.alt;
  });

  return element;
}

initialCards.forEach((item) => {
  const card = createElement(item.name, item.link);
  addElement(card, ul);
});

// photo popup
const fullFoto = document.querySelector(".popup__full-foto");
const fullFotoExit = document.querySelector(".popup__full-foto__exit-button");

fullFotoExit.addEventListener("click", function () {
  closePopup(fullFoto);
});

// add new picture
const pictureEl = document.querySelector(".popup__container_add");
const namePictureImput = document.querySelector(".popup__name");
const linkInput = document.querySelector(".popup__link");

function addPicture(evt) {
  evt.preventDefault();

  const createEl = createElement(namePictureImput.value, linkInput.value);
  addElement(createEl, ul);

  closePopup(popupAdd);

  namePictureImput.value = "";
  linkInput.value = "";
}

pictureEl.addEventListener("submit", addPicture);
