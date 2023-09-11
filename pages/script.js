import { List } from "../scripts/components/List.js";
import { Scroll } from "../scripts/components/Scroll.js";
import { Form } from "../scripts/components/Form.js";
import { Popup } from "../scripts/components/Popup.js";
import { FormValidator } from "../scripts/components/FormValidator.js";
import {
  allButtonPhone,
  allFormButton,
  popupContact,
  popupForm,
  buttonVent,
  buttonCond,
  listVent,
  listCond,
  imageVent,
  imageCond,
  headerButton,
  popupSlider,
  navPopup,
  header,
  mainBG,
  mainButton,
  client,
  portfolio,
  contactus,
  installation,
  allForm,
  keyClose,
  validationConfig,
  anchors,
} from "../scripts/utils/constants.js";

//Скрол страницы на JS
for (let anchor of anchors) {
  anchor.addEventListener("click", (evt) => {
    evt.preventDefault();
    const blockID = anchor.getAttribute("href");

    document.querySelector("" + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

const headerScroll = new Scroll(header);
const contactUsScroll = new Scroll(contactus);
const clientScroll = new Scroll(client);
const portfolioScroll = new Scroll(portfolio);
const mainBGScroll = new Scroll(mainBG);
const mainButtonScroll = new Scroll(mainButton);

installation.forEach((box) => {
  let installationScroll = new Scroll(box);
  installationScroll.scroll();
});

headerScroll.scroll();
contactUsScroll.scroll();
clientScroll.scroll();
portfolioScroll.scroll();
mainBGScroll.scroll();
mainButtonScroll.scroll();

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

headerButton.addEventListener("mousedown", () => {
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

navPopup.addEventListener("mousedown", () => {
  popupCall.close();
  popupPhone.close();
  popupHeader.close();
});

function checkButtonForm(button) {
  button.addEventListener("mousedown", () => {
    popupCall.open();
  });
}

function checkButtonPhone(button) {
  button.addEventListener("mousedown", () => {
    popupHeader.close();
    popupPhone.open();
  });
}

buttonVent.addEventListener("mousedown", () => {
  changeListVent.open();
});

buttonCond.addEventListener("mousedown", () => {
  changeListCond.open();
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
