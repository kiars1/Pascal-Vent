export class List {
  constructor(list, listHide, photo, photoHide, button, buttonHide) {
    this._list = list;
    this._photo = photo;
    this._button = button;
    this._listHide = listHide;
    this._photoHide = photoHide;
    this._buttonHide = buttonHide;
  }
  open() {
    this._list.classList.remove("services__list_hide");
    this._listHide.classList.add("services__list_hide");
    this._photo.classList.remove("services__image_hide");
    this._photoHide.classList.add("services__image_hide");
    this._button.disabled = true;
    this._buttonHide.disabled = false;
  }
}