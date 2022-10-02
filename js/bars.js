import { getRandomizedArray } from "./utilities.js";

export function renderBars() {
  const container = document.querySelector(".bars-container");
  const arr = getRandomizedArray(100, 800, 5);

  container.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    let div = document.createElement("div");

    div.classList = "bar";
    div.style.height = `${arr[i]}px`;

    container.appendChild(div);
  }
}
