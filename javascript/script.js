"use strict";

/* Chức năng ẩn thông tin cá nhân */
const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const btnSubmit = document.querySelector("#btn-submit");
const formEmail = document.querySelector(".form-email");
const myInfo = document.querySelector(".my-info");
const fillEmailNotify = document.querySelector(".notify1");
const invalidEmailNotify = document.querySelector(".notify2");

btnSubmit.addEventListener("click", function () {
  const emailInput = document.querySelector("#email").value;
  const validator = emailRegex.test(emailInput);

  if (validator) {
    formEmail.classList.add("hidden");
    myInfo.classList.remove("hidden");
  } else if (emailInput === "") {
    fillEmailNotify.classList.remove("hidden");
    invalidEmailNotify.classList.add("hidden");
  } else {
    fillEmailNotify.classList.add("hidden");
    invalidEmailNotify.classList.remove("hidden");
  }
});

/* Chức năng ẩn thông tin nghề nghiệp */
const jobInfoItem = document.querySelectorAll(".job-info-item");
const jobInfoItemContent = document.querySelectorAll(".ji-item3");
const btnView = document.querySelectorAll(".btn-view");

for (let i = 0; i < jobInfoItem.length; i++) {
  btnView[i].innerHTML = "VIEW MORE";

  jobInfoItem[i].addEventListener("mouseenter", function () {
    btnView[i].classList.remove("hidden");
  });

  btnView[i].addEventListener("click", function () {
    if (btnView[i].innerHTML === "VIEW MORE") {
      jobInfoItemContent[i].classList.remove("hidden");
      btnView[i].innerHTML = "VIEW LESS";
    } else {
      jobInfoItemContent[i].classList.add("hidden");
      btnView[i].innerHTML = "VIEW MORE";
    }
  });

  jobInfoItem[i].addEventListener("mouseleave", function () {
    btnView[i].classList.add("hidden");
  });
}
