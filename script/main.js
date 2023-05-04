const typing = document.getElementById("typing");

function typingEffect(element, writeTime, breakTime) {
  let text = element.innerHTML;
  element.innerHTML = "";
  let x = -1;
  function typeText() {
    x != text.length - 1 ? x++ : (x = 0);
    element.innerHTML += text[x];
    if (x === 26) {
      clearInterval(textLoop);
      setTimeout(() => {
        element.innerHTML = "";
        textLoop = setInterval(typeText, writeTime);
      }, breakTime);
    }
  }

  let textLoop = setInterval(typeText, writeTime);
}

typingEffect(typing, 200, 5000)

/* ============================================================================ */

const btnsToShowVideo = document.querySelectorAll("button.showV")
const video = document.getElementById("video")
const closeVideo = document.getElementById("close")

btnsToShowVideo.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let path = `./assets/video/${e.target.getAttribute("data-type")}.mp4`
    video.setAttribute("src", path)
    video.parentElement.style.display = "flex"
    video.play()
  })
})
closeVideo.addEventListener("click", () => {
  closeVideo.parentElement.style.display = "none"
  video.pause()
})
