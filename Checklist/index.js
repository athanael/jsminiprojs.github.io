let liste = document.querySelectorAll("ul li");
const tag = `<span class='check lp10'><i class='fas fa-check'></i></span></li>`;
for (li of liste) {
  li.addEventListener("click", function (e) {
    this.classList.toggle("active");
    if (this.classList.contains("active")) {
      this.innerHTML = this.innerText + tag;
    } else {
      this.innerHTML = this.innerText;
    }
  });
}
