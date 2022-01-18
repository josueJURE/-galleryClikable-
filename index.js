const pictures = document.querySelectorAll(".picture");
const middleSection = document.querySelector(".middle-img")
console.log(pictures)
console.log(middleSection)

for(var i = 0; i < pictures.length; i++) {
  pictures[i].addEventListener("click", function(e) {
    middleSection.src = e.target.src;

    middleSection.classList.add("animate-imgs")
    setTimeout(function () {
      middleSection.classList.remove("animate-imgs")
    }, 1000)
  });
};
