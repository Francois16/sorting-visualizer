import { disableNav, enableNav, sleep, swapNodes } from "../utilities.js";

// Bubble sort is a basic algorithm for arranging a string of numbers or other elements in the correct order.
// The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order.
// The algorithm then repeats this process until it can run through the entire string and find no two elements that need to be swapped.
export async function bubbleSort() {
  disableNav();

  let bars = document.querySelector(".bars-container").childNodes;

  const n = bars.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (bars[j].offsetHeight > bars[j + 1].offsetHeight) {
        bars = swapNodes(bars, j, j + 1);

        // Add/Remove styles from bars
        animateBubbleSortBars(bars, j);
        await sleep(0);
      }
    }

    // Add the sorted class after entire pass through
    bars[n - 1 - i].classList = "bar sorted";
  }

  bars[0].classList = "bar sorted";

  enableNav();

  return bars;
}

// Styles the bars as the animation runs
function animateBubbleSortBars(bars, j) {
  const largest = document.querySelector(".largest");
  const selected = document.querySelector(".selected");

  if (largest) {
    largest.classList.remove("largest");
  }

  if (selected) {
    selected.classList.remove("selected");
  }

  bars[j].classList.add("largest");
  bars[j + 1].classList.add("selected");
}
