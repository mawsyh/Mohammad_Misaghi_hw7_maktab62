const menuBtn = document.querySelector(".menu");
const learnBtn = document.querySelector(".learn-w3");
const modalEl = document.querySelector(".modal-container");

menuBtn.addEventListener("click", () => {
  const menuBar = document.querySelector(".drop-menu-list");
  menuBar.classList.toggle("active");
});

learnBtn.addEventListener("click", () => {
  let modalSpan = document.createElement("span");
  modalSpan.classList.add("modal-box");
  modalSpan.innerHTML = `
          <div class="modal-header">
              <h3>Oh snap! We just showed you a modal..<i class="fas fa-times"></i></h3>
              <h4>Because we can <i class="far fa-smile"></i></h4>
          </div>
           <div class="p-message">
              <p>Cool huh? Ok, enough teasing around..</p>
              <p>Go to our <a href="">W3.CSS Tutorial</a> to learn more!</p>
          </div>
          <p>Modal footer</p>
        `;
  let darkerEl = document.createElement("div");
  darkerEl.classList.add("dark");
  modalEl.appendChild(modalSpan);
  modalEl.appendChild(darkerEl);
  modalEl.classList.add("active");
  const closeBtn = modalEl.querySelector(".fa-times");
  closeBtn.addEventListener("click", () => {
    modalEl.classList.remove("active");
    modalEl.innerHTML = ``;
  });
});

{
  /* <span class="modal-box">
  <div class="modal-header">
    <h3>
      Oh snap! We just showed you a modal..<i class="fas fa-times"></i>
    </h3>
    <h4>
      Because we can <i class="far fa-smile"></i>
    </h4>
  </div>
  <div class="p-message">
    <p>Cool huh? Ok, enough teasing around..</p>
    <p>
      Go to our <a href="">W3.CSS Tutorial</a> to learn more!
    </p>
  </div>
  <p>Modal footer</p>
</span>; */
}
