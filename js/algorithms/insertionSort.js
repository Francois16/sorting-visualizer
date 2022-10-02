import {
  disableNav,
  enableNav,
  sleep,
  swapNodes,
  markAllBarsSorted,
} from "../utilities.js";

export async function insertionSort() {
  disableNav();

  let bars = document.querySelector(".bars-container").childNodes;
  const n = bars.length;

  for (let i = 0; i < n - 1; i++) {
    let loops = 0;

    while (i - loops >= 0) {
      let height1 = bars[i - loops].offsetHeight;
      let height2 = bars[i + 1 - loops].offsetHeight;
      if (height1 > height2) {
        bars = swapNodes(bars, i - loops, i + 1 - loops);
        animateSelectionSortBars(bars, i - loops);
        await sleep(10);
      } else {
        break;
      }
      loops++;
    }
  }
  markAllBarsSorted(bars);
  enableNav();
  return bars;
}

// Styles the bars as the animation runs
function animateSelectionSortBars(bars, i) {
  const selected = document.querySelector(".selected");

  if (selected) {
    selected.classList.remove("selected");
  }

  bars[i].classList.add("selected");
}
