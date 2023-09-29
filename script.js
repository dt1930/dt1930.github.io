function changeContent(htmlContent, event) {
  const menuBtns = document.querySelectorAll(".menu-btn");
  const contentText = document.getElementById("content");
  const paragraph = document.createElement("p");
  paragraph.innerHTML = htmlContent;

  menuBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  event.currentTarget.classList.add("active"); 

  contentText.innerHTML = "";

  contentText.appendChild(paragraph);
}
