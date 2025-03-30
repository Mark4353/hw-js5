document.addEventListener("DOMContentLoaded", () => {
  const keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
  let currentKeyIndex = Math.floor(Math.random() * keys.length);

  const keyDisplay = document.getElementById("key");
  const messageDisplay = document.getElementById("message");
  const newGameButton = document.getElementById("newGame");

  function updateKeyDisplay() {
    keyDisplay.textContent = keys[currentKeyIndex];
  };
  function showErrorMessage(text) {
    PNotify.error({ text });
    messageDisplay.textContent = text;
    messageDisplay.style.color = "red";
    console.log("lose");
  };
  function showSuccessMessage(text) {
    PNotify.success({ text });
    messageDisplay.textContent = text;
    messageDisplay.style.color = "green";
    console.log("win");
  };

  document.addEventListener("keydown", (event)=> {
    if (event.key === keys[currentKeyIndex]) {
      showSuccessMessage("Правильно");
      currentKeyIndex = Math.floor(Math.random() * keys.length);
      updateKeyDisplay();
    } else {
      showErrorMessage("Неправильна клавіша");
    }
  });

  document.addEventListener("keypress", (event)=> {
    event.preventDefault();
  });

  newGameButton.addEventListener("click", ()=> {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    updateKeyDisplay();
    messageDisplay.textContent = "";
    PNotify.info({ text: "Нова гра" });
  });

  updateKeyDisplay();
});

document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("sales-chart").getContext("2d");

  const chartData = {
    labels: Array.from({ length: 30 }, (_, i) => (i + 1).toString()),
    datasets: [
      {
        label: "Продажі за останній місяць",
        data: [
          150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
          600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
          1250, 1300, 1350,
        ],
        backgroundColor: "#2196f3",
        borderColor: "#2196f3",
        borderWidth: 1,
      },
    ],
  } ;

  new Chart(ctx, {
    type: "line",
    data: chartData,
  });
});
