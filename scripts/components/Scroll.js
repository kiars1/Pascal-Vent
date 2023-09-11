import {
  main,
} from "../utils/constants.js";

export class Scroll {
  constructor(item) {
    this._item = item;
  }

  scroll() {
    const itemOffset = this._item.offsetTop;
    const itemHeight = this._item.offsetHeight;
    const animPoint = window.innerHeight - itemHeight;

    if (this._item.classList.contains("main__background")) {
      this._item.style = "";
      this._item.classList.add("anim");
    } else if (this._item.classList.contains("main__button")) {
      this._item.style.right = `0px`;
      this._item.classList.add("anim");
    }

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const vision = this._item.classList.contains("anim");
      const mainHeight = main.offsetHeight;

      if (this._item.classList.contains("header")) {
        if (scroll >= mainHeight) {
          this._item.classList.add("header__down");
          this._item.style.transform = "initial";
        } else if (scroll < 200) {
          this._item.classList.remove("header__down");
          this._item.style.transform = `none`;
        } else {
          this._item.style.transform = `translateY(-100%)`;
        }
      } else if (this._item.classList.contains("_top")) {
        if (scroll >= itemOffset - animPoint && !vision) {
          this._item.style.top = `0px`;
          this._item.classList.add("anim");
        }
      } else if (this._item.classList.contains("_left")) {
        if (
          scroll >= itemOffset - animPoint / 1.5 &&
          !vision &&
          this._item.classList.contains("installation__box")
        ) {
          this._item.style.left = `0px`;
          this._item.classList.add("anim");
        } else if (scroll >= itemOffset - animPoint && !vision) {
          this._item.style.left = `0px`;
          this._item.classList.add("anim");
        }
      }
    });
  }
}