import { 
  headerButton,
  headerButtonAnimation,
} from "../utils/constants.js"

export class Popup {
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
      this._popupElement.querySelectorAll(".input-error").forEach(element => {
        element.style.opacity = '0';
      });
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
    this._popupElement.addEventListener("mousedown", (evt) => {
      if (
        evt.target.classList.contains("popup__close") ||
        evt.target.classList.contains("popup")
      ) {
        this.close();
      }
    });
  }
}
