var carroussel = function carroussel(id, imgs) {
  "use strict";
  var container, img, createButtons, createImage, gererClicks, position;

  container = byId(id);
  container.className = "carroussel";
  //container.classList.add("carroussel");
  position = 0;
  log(id)
  log(container)

  gererClicks = function gererClicks() {
    if (this.classList.contains("next")) {
      if (position + 1 < imgs.length) {
        position += 1;
      } else {
        position = 0;
      }
    } else if (position - 1 >= 0) {
      position -= 1;
    } else {
      position = imgs.length - 1;
    }
    img.src = imgs[position];
  };

  createImage = function createImage() {
    img = document.createElement("img");
    img.className = "img";
    img.src = imgs[0];
    container.appendChild(img);
  };

  createButtons = function createButtons() {
    var btn1, btn2;
    btn1 = document.createElement("button");
    btn1.className = "btn prev";
    btn1.textContent = "<";
    btn2 = document.createElement("button");
    btn2.className = "btn next";
    btn2.textContent = ">";

    container.appendChild(btn1);
    container.appendChild(btn2);

    btn1.onclick = gererClicks;
    btn2.onclick = gererClicks;
  };

  createImage();
  createButtons();
};
