export class FormValidator {
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