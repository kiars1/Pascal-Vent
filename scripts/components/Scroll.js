import { main } from "../utils/constants.js";

export class Scroll {
  constructor(item) {
    this._item = item;
  }

  scroll() {
    const itemOffset = this._item.offsetTop;
    const itemHeight = this._item.offsetHeight;
    const scroll = window.scrollY;
    const vision = this._item.classList.contains("anim");
    const mainHeight = main.offsetHeight;

    console.log(itemOffset, itemHeight);

    function animationScroll(thisitem, scroll, vision, mainHeight) {

      if (thisitem.classList.contains("main__button")) {
        thisitem.style.right = `0px`;
        thisitem.classList.add("anim");
      };

      if (thisitem.classList.contains("header")) {
        if (scroll >= mainHeight) {
          thisitem.classList.add("header__down");
          thisitem.style.transform = "initial";
        } else if (scroll < 200) {
          thisitem.classList.remove("header__down");
          thisitem.style.transform = `none`;
        } else {
          thisitem.style.transform = `translateY(-100%)`;
        }
      } else if (thisitem.classList.contains("_top")) {
        if (scroll >= itemOffset - itemHeight * 6 && !vision) {
          thisitem.style.top = `0px`;
          thisitem.classList.add("anim");
        }
      } else if (thisitem.classList.contains("_left")) {
        if (
          scroll >= itemOffset - itemHeight &&
          !vision &&
          thisitem.classList.contains("main__background")
        ) {
          thisitem.style.left = null;
          thisitem.classList.add("anim");
        } else if (
          scroll >= itemOffset - itemHeight * 6 &&
          !vision &&
          thisitem.classList.contains("installation__box")
        ) {
          thisitem.style.left = `0px`;
          thisitem.classList.add("anim");
        } else if (scroll >= itemOffset - itemHeight * 3 && !vision) {
          thisitem.style.left = `0px`;
          thisitem.classList.add("anim");
        }
      }
    }

    animationScroll(this._item, scroll, vision, mainHeight);

    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const vision = this._item.classList.contains("anim");
      const mainHeight = main.offsetHeight;
      animationScroll(this._item, scroll, vision, mainHeight);
    });
  }
}
