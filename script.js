const allButtonPhone = document.querySelectorAll("#phoneButton");
const allFormButton = document.querySelectorAll("#phonePhone");
const popupContact = document.querySelector("._popupcontact");
const popupForm = document.querySelector("._popupform");
const buttonVent = document.querySelector("#buttonVent");
const buttonCond = document.querySelector("#buttonCond");
const listVent = document.querySelector("._vent");
const listCond = document.querySelector("._cond");
const imageVent = document.querySelector("._vent-image");
const imageCond = document.querySelector("._cond-image");
const headerButton = document.querySelector(".header__button-popup");
const headerButtonAnimation = document.querySelector(".header__button-content");
const popupSlider = document.querySelector(".popup__header");
const navPopup = document.querySelector(".popup__header-list");
const header = document.querySelector(".header");
const main = document.querySelector(".main");
const client = document.querySelector(".client__company");
const contactus = document.querySelector(".contactus__form");
const allForm = document.querySelectorAll(".form");
const keyClose = "Escape";
const validationConfig = {
  formSelector: ".form",
  inputSelector: ".input",
  submitButtonSelector: ".button",
  inputErrorClass: "input-error",
};

class List {
  constructor(list, listHide, photo, photoHide, button, buttonHide) {
    this.list = list;
    this.photo = photo;
    this.button = button;
    this.listHide = listHide;
    this.photoHide = photoHide;
    this.buttonHide = buttonHide;
  }
  open() {
    this.list.classList.remove("services__list_hide");
    this.listHide.classList.add("services__list_hide");
    this.photo.classList.remove("services__image_hide");
    this.photoHide.classList.add("services__image_hide");
    this.button.disabled = true;
    this.buttonHide.disabled = false;
  }
}

class Popup {
  constructor(popupElement, keyClose) {
    this._popupElement = popupElement;
    this._handleEscClose = this._handleEscClose.bind(this);
    this._keyClose = keyClose;
  }

  //открытие popup
  open() {
    const clientWidthAfter = document.body.clientWidth; //Фикс чтобы окно не сьезжало
    this._popupElement.classList.add("popup_active");
    if (this._popupElement.classList[1] === "popup__header") {
      headerButtonAnimation.classList.add("header__button-content_close");
    }
    document.addEventListener("keydown", this._handleEscClose);
    document.body.style.overflowY = "hidden"; //Фикс чтобы окно не сьезжало
    const clientWidthBefore = document.body.clientWidth; //Фикс чтобы окно не сьезжало
    document.body.style.paddingRight = `${
      clientWidthBefore - clientWidthAfter
    }px`; //Фикс чтобы окно не сьезжало
  }

  //Зыкрытие popup
  close() {
    headerButton.classList.remove("_active");
    this._popupElement.classList.remove("popup_active");
    document.removeEventListener("keydown", this._handleEscClose);
    document.body.style.overflowY = "visible"; //Фикс чтобы окно не сьезжало
    if (this._popupElement.classList[1] === "popup__header") {
      headerButtonAnimation.classList.remove("header__button-content_close");
    }

    if (this._popupElement.querySelector(".form") !== null) {
      this._popupElement.querySelector(".form").reset();
    }

    document.body.style.paddingRight = "0px"; //Фикс чтобы окно не сьезжало
  }

  //Закрытие popup на Esc
  _handleEscClose(evt) {
    if (evt.key == this._keyClose) {
      this.close();
    }
  }

  //Закрытие popup кликом на пустую область/крестик
  setEventListeners() {
    this._popupElement.addEventListener('mousedown', (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
  }
}

class Form {
  constructor(form) {
    this._form = form;
    this._formNInput = form.querySelectorAll(".input");
    this._formButton = form.querySelector(".button");
  }

  submitGoogleForm() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      try {
        var data = [].slice
          .call(this._form)
          .map(function (control) {
            return "value" in control && control.name
              ? control.name +
                  "=" +
                  (control.value === undefined ? "" : encodeURI(control.value))
              : "";
          })
          .join("&");
        var xhr = new XMLHttpRequest();
        xhr.open(
          "POST",
          "https://docs.google.com/forms/d/1WNw-U16zn_hZln6U-ZusbbYnQYbbqjEDyKdeQcxUFwE" +
            "/formResponse",
          true
        );
        xhr.setRequestHeader(
          "Accept",
          "application/xml, text/xml, */*; q=0.01"
        );
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded; charset=UTF-8"
        );
        xhr.send(data);
      } catch (e) {
      } finally {
        evt.target.reset();
        popupCall.close();
      }
    });
  }
}

class FormValidator {
  constructor(validationConfig, formElement) {
    this._formElement = formElement;
    this._formSelector = validationConfig.formSelector;
    this._inputSelector = validationConfig.inputSelector;
    this._submitButtonSelector = validationConfig.submitButtonSelector;
    this._inputErrorClass = validationConfig.inputErrorClass;
    this._inputList = Array.from(
      formElement.querySelectorAll(validationConfig.inputSelector)
    );
    this._buttonElement = formElement.querySelector(
      validationConfig.submitButtonSelector
    );
  }

  //Активирует Алярм!
  _addInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    errorElement.style.opacity = 1;
  }

  //Деактивирует Алярм!
  _removeInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.id}-error`
    );
    errorElement.style.opacity = 0;
  }

  //Говорим пользователю чтобы он убрар кота от клавиатуры и написал нормально
  _checkinputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._addInputError(inputElement);
    } else {
      this._removeInputError(inputElement);
    }
  }

  //Засылаем шпьёнов и получаем информацию от кротов.
  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkinputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //Тут мы берем под потранаж кнопку "Сохранить"
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._buttonElement.setAttribute("disabled", "disabled");
    } else {
      this._buttonElement.removeAttribute("disabled");
    }
  }

  //Сбрасываем Валидацию
  refreshInputValidity() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._removeInputError(inputElement);
    });
  }

  //Включаем карательную машину валидации
  enableValidation() {
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

const changeListCond = new List(
  listCond,
  listVent,
  imageCond,
  imageVent,
  buttonCond,
  buttonVent
);

const changeListVent = new List(
  listVent,
  listCond,
  imageVent,
  imageCond,
  buttonVent,
  buttonCond
);

const popupPhone = new Popup(popupContact, keyClose);
const popupCall = new Popup(popupForm, keyClose);
const popupHeader = new Popup(popupSlider, keyClose);

// Короче я устал придумывать названия.
// Прикол ЭТОГОКОДА. Чтобы не делать на каждую форму свою
// Константу и новую Form я перебрал через forEach и
// Отправил по одному. А т.к  openForm - функция, мне
// нужен был объект. Поэтому я сделал const formOCHKA
const openForm = (forma) => {
  const formOCHKA = new Form(forma);
  formOCHKA.submitGoogleForm();
};

const validForm = (forma) => {
  const FormValidationActivated = new FormValidator(validationConfig, forma);
  FormValidationActivated.enableValidation();
};

allForm.forEach((forma) => {
  openForm(forma);
  validForm(forma);
});

allFormButton.forEach((button) => checkButtonForm(button));
allButtonPhone.forEach((button) => checkButtonPhone(button));

popupPhone.setEventListeners();
popupCall.setEventListeners();
popupHeader.setEventListeners();

headerButton.addEventListener('mousedown', () => {
  if (headerButton.classList.length === 1) {
    popupCall.close();
    popupPhone.close();
    popupHeader.open();
    headerButton.classList.add("_active");
  } else {
    popupHeader.close();
    headerButton.classList.remove("_active");
  }
});

navPopup.addEventListener('mousedown', () => {
  popupCall.close();
  popupPhone.close();
  popupHeader.close();
});

function checkButtonForm(button) {
  button.addEventListener('mousedown', () => {
    popupCall.open();
  });
}

function checkButtonPhone(button) {
  button.addEventListener('mousedown', () => {
    popupHeader.close();
    popupPhone.open();
  });
}

buttonVent.addEventListener('mousedown', () => {
  changeListVent.open();
});

buttonCond.addEventListener('mousedown', () => {
  changeListCond.open();
});

//Появляющийся хедер и пару элементов
window.addEventListener("scroll", () => {
  let clientOffset = client.offsetTop;
  let clientHeight = client.offsetHeight;
  let clientAnimPoint = window.innerHeight - clientHeight;
  let contactusOffset = contactus.offsetTop;
  let contactusHeight = contactus.offsetHeight;
  let contactusAnimPoint = window.innerHeight - contactusHeight;
  let mainHeight = main.offsetHeight;
  let scrollTop = window.scrollY;

  if (scrollTop >= (contactusOffset - contactusAnimPoint)) {
    contactus.style.top = `0px`;
    contactus.classList.add("anim");
  } 

    if (scrollTop >= (clientOffset - clientAnimPoint)) {
    client.style.left = `0px`;
    client.classList.add("anim");
  }

  if (scrollTop >= mainHeight) {
    header.classList.add("header__down");
    header.style.transform = "initial";
  } else if (scrollTop < 200) {
    header.classList.remove("header__down");
    header.style.transform = `none`;
  } else {
    header.style.transform = `translateY(-100%)`;
  }
});

//Маска телефона. Заимствовано, у Диджитализируй! Но немного поправленный
document.addEventListener("DOMContentLoaded", function () {
  var phoneInputs = document.querySelectorAll(`._phone`);

  var getInputNumbersValue = function (input) {
    return input.value.replace(/\D/g, "");
  };

  var onPhonePaste = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input);
    var pasted = e.clipboardData || window.clipboardData;
    if (pasted) {
      var pastedText = pasted.getData("Text");
      if (/\D/g.test(pastedText)) {
        input.value = inputNumbersValue;
        return;
      }
    }
  };

  var onPhoneInput = function (e) {
    var input = e.target,
      inputNumbersValue = getInputNumbersValue(input),
      selectionStart = input.selectionStart,
      formattedInputValue = "";

    if (!inputNumbersValue) {
      return (input.value = "");
    }

    if (input.value.length != selectionStart) {
      if (e.data && /\D/g.test(e.data)) {
        input.value = inputNumbersValue;
      }
      return;
    }

    if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
      if (inputNumbersValue[0] == "9")
        inputNumbersValue = "7" + inputNumbersValue;
      var firstSymbols = inputNumbersValue[0] == "8" ? "8" : "+7";
      formattedInputValue = input.value = firstSymbols + " ";
      if (inputNumbersValue.length > 1) {
        formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
      }
      if (inputNumbersValue.length >= 5) {
        formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
      }
      if (inputNumbersValue.length >= 8) {
        formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
      }
      if (inputNumbersValue.length >= 10) {
        formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
      }
    } else {
      formattedInputValue = "+ 7 (9" + inputNumbersValue.substring(0, 16);
    }

    input.value = formattedInputValue;
  };
  var onPhoneKeyDown = function (e) {
    var inputValue = e.target.value.replace(/\D/g, "");
    if (e.keyCode == 8 && inputValue.length == 1) {
      e.target.value = "";
    }
  };
  for (var phoneInput of phoneInputs) {
    phoneInput.addEventListener("keydown", onPhoneKeyDown);
    phoneInput.addEventListener("input", onPhoneInput, false);
    phoneInput.addEventListener("paste", onPhonePaste, false);
  }
});

///Slider
const swiper1 = new Swiper(".swiper1", {
  direction: "horizontal",
  loop: false,
  speed: 1000,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: ".swiper-button-next-ID_FIRST",
    prevEl: ".swiper-button-prev-ID_FIRST",
  },

  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

const swiper2 = new Swiper(".swiper2", {
  direction: "horizontal",
  loop: false,

  navigation: {
    nextEl: ".swiper-button-next-ID_SECOND",
    prevEl: ".swiper-button-prev-ID_SECOND",
  },

  breakpoints: {
    258: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});