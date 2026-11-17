document.addEventListener("DOMContentLoaded", () => {

  const form = document.querySelector(".lock-form");
  const input = document.getElementById("password");
  const error = document.getElementById("error");
  const card = document.querySelector(".lock-card");
  const lockIcon = document.querySelector(".lock-icon i");

  // 🔐 رمز = آیدی تلگرام
  const CORRECT_PASSWORD = "777";

  form.addEventListener("submit", e => {
    e.preventDefault();

    error.style.display = "none";

    const value = input.value.trim(); // فاصله اضافی حذف

    if (value === CORRECT_PASSWORD) {

      // 🔓 ذخیره فقط تا رفرش
      sessionStorage.setItem("unlocked", "true");

      // ✨ افکت باز شدن قفل
      lockIcon.classList.remove("fa-lock");
      lockIcon.classList.add("fa-lock-open");

      card.classList.add("unlock-success");

      // 🌊 Fade کل صفحه
      document.body.classList.add("page-unlock");

      // ⏳ تأخیر سینمایی
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1200);

    } else {

      // ❌ رمز غلط → لرزش
      card.classList.remove("shake");
      void card.offsetWidth;
      card.classList.add("shake");

      error.style.display = "block";
      input.value = "";
    }
  });

});
