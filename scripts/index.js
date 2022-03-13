// const
const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonEditCloseProfile = document.querySelector(".popup__exit-button");
const popupUserInfo = document.querySelector(".popup__type_userinfo");

const buttonAddProfile = document.querySelector(".profile__add-button");
const buttonAddCloseProfile = document.querySelector(
  ".popup__type_add-place_exit-button"
);
const popupAdd = document.querySelector(".popup__type_add-place");

const formElement = document.querySelector(".popup__container");
const nameInput = document.querySelector(".popup__input_name");
const jobInput = document.querySelector(".popup__input_job");
const profileTitle = document.querySelector(".profile__title");
const profileSubtitle = document.querySelector(".profile__subtitle");

const ul = document.querySelector(".elements__list");
const template = document.querySelector(".elements-template").content;

const fullFoto = document.querySelector(".popup__type_full-foto");
const fullFotoExit = document.querySelector(
  ".popup__type_full-foto__exit-button"
);

const pictureEl = document.querySelector(".popup__type_add-place__container");
const namePictureImput = document.querySelector(".popup__input_place-name");
const linkInput = document.querySelector(".popup__input_link");

// открывание/закрывание попапов

function openPopup(popupElement) {
  popupElement.classList.add("popup_opened");
}

function closePopup(popupElement) {
  popupElement.classList.remove("popup_opened");
}

buttonEditProfile.addEventListener("click", function () {
  openPopup(popupUserInfo);
});

buttonEditCloseProfile.addEventListener("click", function () {
  closePopup(popupUserInfo);
});

buttonAddProfile.addEventListener("click", function () {
  openPopup(popupAdd);
});

buttonAddCloseProfile.addEventListener("click", function () {
  closePopup(popupAdd);
});

fullFotoExit.addEventListener("click", function () {
  closePopup(fullFoto);
});

// редактирование информации профиля

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(popupUserInfo);
}

formElement.addEventListener("submit", formSubmitHandler);

//template
function addElement(element, elementHolder) {
  elementHolder.prepend(element);
}

function createElement(elementName, elementUrl) {
  const element = template.cloneNode(true);

  element.querySelector(".elements__img").src = elementUrl;
  element.querySelector(".elements__img").alt = elementName;
  element.querySelector(".elements__title").textContent = elementName;

  const likeButton = element.querySelector(".elements__button");
  const deleteButton = element.querySelector(".elements__button-delete");
  const image = element.querySelector(".elements__img");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("elements__button_active");
  });

  deleteButton.addEventListener("click", function () {
    deleteButton.closest(".elements__item").remove();
  });

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

// add new picture

function addPicture(evt) {
  evt.preventDefault();

  const createEl = createElement(namePictureImput.value, linkInput.value);
  addElement(createEl, ul);

  closePopup(popupAdd);

  namePictureImput.value = "";
  linkInput.value = "";
}

pictureEl.addEventListener("submit", addPicture);
