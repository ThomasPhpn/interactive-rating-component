document.addEventListener("DOMContentLoaded", function () {
  function getUserRate() {
    let defaultRate = 0;
    const firstScreen = document.getElementById("first-screen");
    const secondScreen = document.getElementById("second-screen");
    const thankYouRate = document.getElementById("injectRate");
    const submit = document.getElementById("submit");
    const restart = document.getElementById("restart");
    const rates = document.querySelectorAll(".round-number");

    function init() {
      firstScreen.style.display = "flex";
      secondScreen.style.display = "none";
      defaultRate = 0;

      // Loop through rates and remove/add classes
      rates.forEach((rate) => {
        rate.classList.remove("round-number-focus");
        rate.classList.add("round-number");
      });
    }

    rates.forEach((rate) => {
      rate.addEventListener("click", () => {
        const newRate = parseInt(rate.textContent, 10);
        defaultRate = newRate;

        // Reset the class for all rates
        rates.forEach((rate) => {
          rate.classList.remove("round-number-focus");
          rate.classList.add("round-number");
        });

        // Add focus to the selected rate
        rate.classList.add("round-number-focus");
        rate.classList.remove("round-number");

        // Update the thank you text
        thankYouRate.textContent = defaultRate + " ";
        console.log(defaultRate);
      });
    });

    // Attach the submit event listener outside the loop
    submit.addEventListener("click", () => {
      firstScreen.style.display = "none";
      secondScreen.style.display = "flex";
    });

    // Attach the restart event listener
    restart.addEventListener("click", () => {
      init();
    });

    // Initialize the screens on page load
    init();
  }

  getUserRate();
});
