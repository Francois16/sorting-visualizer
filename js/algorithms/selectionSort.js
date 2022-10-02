import { disableNav, enableNav, sleep, swapNodes } from "../utilities.js";

// Bubble sort is a basic algorithm for arranging a string of numbers or other elements in the correct order.
// The method works by examining each set of adjacent elements in the string, from left to right, switching their positions if they are out of order.
// The algorithm then repeats this process until it can run through the entire string and find no two elements that need to be swapped.
export async function selectionSort() {
  disableNav();

  let bars = document.querySelector(".bars-container").childNodes;
  const n = bars.length;

  // TODO: add swapped variable to see if array is already sorted
  // Then quit break out of loop.
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < n; j++) {
      if (
        parseInt(bars[j].style.height) < parseInt(bars[minIdx].style.height)
      ) {
        minIdx = j;

        // Add/Remove styles from bars
        animateSelectionSortBars(bars, minIdx);
        await sleep(25);
      }
    }
    bars = swapNodes(bars, i, minIdx);

    // Add the sorted class after entire pass through
    bars[i].classList = "bar sorted";
  }

  bars[n - 1].classList = "bar sorted";

  enableNav();

  return bars;
}

// Styles the bars as the animation runs
function animateSelectionSortBars(bars, minIdx) {
  const minimum = document.querySelector(".minimum");

  if (minimum) {
    minimum.classList.remove("minimum");
  }

  bars[minIdx].classList.add("minimum");
}
