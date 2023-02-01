"use strict";

const overlay = document.querySelector(".overlay");

// eurofins first modal (left side)
const modalHidden = document.getElementById("modal");
const btnOpenModal = document.querySelector(".btnOpenModal");
const btnCloseModal = document.querySelector(".btnCloseModal");

const openModal = function () {
  overlay.classList.remove("hidden");
  modalHidden.classList.remove("hidden");
};

const closeModal = function () {
  overlay.classList.add("hidden");
  modalHidden.classList.add("hidden");
};

btnOpenModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);

// Modal 2, rith side

const modalHidden2 = document.getElementById("modal2");
const btnOpenModal2 = document.querySelector(".btnOpenModal2");
const btnCloseModal2 = document.querySelector(".btnCloseModal2");

const openModal2 = function () {
  overlay.classList.remove("hidden");
  modalHidden2.classList.remove("hidden");
};

const closeModal2 = function () {
  overlay.classList.add("hidden");
  modalHidden2.classList.add("hidden");
};

btnOpenModal2.addEventListener("click", openModal2);
btnCloseModal2.addEventListener("click", closeModal2);

// Close modal when clicking overlay
overlay.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !overlay.classList.contains("hidden")) {
    closeModal();
    closeModal2();
  }
});
