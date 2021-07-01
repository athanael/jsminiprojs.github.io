const textOne =
  "<h1>Texte un</h1>" +
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, doloribus.";

const textTwo =
  "<h1>Texte deux</h1>" +
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta vero eum voluptatem ex perferendis voluptate ab praesentium omnis vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta vero eum voluptatem ex perferendis voluptate ab praesentium omnis vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur dicta vero eum voluptatem ex perferendis voluptate ab praesentium omnis vitae?";

const textThree =
  "<h1>Texte trois</h1>" +
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius molestias autem. Ut ipsum tenetur recusandae maxime esse quo mollitia dolorum totam quisquam accusantium, in voluptatem. Ut beatae minus incidunt magnam provident obcaecati at quisquam, aspernatur voluptatum vero illum aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius molestias autem. Ut ipsum tenetur recusandae maxime esse quo mollitia dolorum totam quisquam accusantium, in voluptatem. Ut beatae minus incidunt magnam provident obcaecati at quisquam, aspernatur voluptatum vero illum aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius molestias autem. Ut ipsum tenetur recusandae maxime esse quo mollitia dolorum totam quisquam accusantium, in voluptatem. Ut beatae minus incidunt magnam provident obcaecati at quisquam, aspernatur voluptatum vero illum aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius molestias autem. Ut ipsum tenetur recusandae maxime esse quo mollitia dolorum totam quisquam accusantium, in voluptatem. Ut beatae minus incidunt magnam provident obcaecati at quisquam, aspernatur voluptatum vero illum aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius molestias autem. Ut ipsum tenetur recusandae maxime esse quo mollitia dolorum totam quisquam accusantium, in voluptatem. Ut beatae minus incidunt magnam provident obcaecati at quisquam, aspernatur voluptatum vero illum aut! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius molestias autem. Ut ipsum tenetur recusandae maxime esse quo mollitia dolorum totam quisquam accusantium, in voluptatem. Ut beatae minus incidunt magnam provident obcaecati at quisquam, aspernatur voluptatum vero illum aut!";

let ongletList = document.getElementsByClassName("onglet");

for (onglet of ongletList) {
  onglet.addEventListener("click", function (e) {
    this.classList.toggle("active");
    if (this.classList.contains("1")) {
      this.nextSibling.nextSibling.classList.remove("active");
      this.nextSibling.nextSibling.nextSibling.nextSibling.classList.remove(
        "active"
      );
      document.getElementById("text-content").innerHTML = textOne;
    } else if (this.classList.contains("2")) {
      this.nextSibling.nextSibling.classList.remove("active");
      this.previousSibling.previousSibling.classList.remove("active");
      document.getElementById("text-content").innerHTML = textTwo;
    } else if (this.classList.contains("3")) {
      this.previousSibling.previousSibling.classList.remove("active");
      this.previousSibling.previousSibling.previousSibling.previousSibling.classList.remove(
        "active"
      );
      document.getElementById("text-content").innerHTML = textThree;
    }
  });
}
