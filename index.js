const pictures = document.querySelectorAll(".picture");
const middleSection = document.querySelector(".middle-img")
console.log(pictures)
console.log(middleSection)

for(var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("click", function(e) {
    console.log("I've been clicked on");
    middleSection.src = e.target.src
  });
}
