export class Form {
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