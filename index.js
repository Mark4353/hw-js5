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
    console.log("gggggg")

  };
  function showSuccessMessage(text){
    PNotify.success({ text });
    messageDisplay.textContent = text;
    messageDisplay.style.color = "green";
} ;

  document.addEventListener("keydown", (event)=> {
    
    if (event.key === keys[currentKeyIndex]) {
      showSuccessMessage("Правильно");
      currentKeyIndex = Math.floor(Math.random() * keys.length);
      updateKeyDisplay();
    } else {
      showErrorMessage("Неправильна клавіша");
    }
  });

  document.addEventListener("keypress", (event) => {
    event.preventDefault();
  });

  newGameButton.addEventListener("click", () => {
    currentKeyIndex = Math.floor(Math.random() * keys.length);
    updateKeyDisplay();
    messageDisplay.textContent = "";
    PNotify.info({ text: "Нова гра" });
    });

  updateKeyDisplay();
}) ;
