import { bubbleSort } from "./algorithms/bubbleSort.js";
import { heapSort } from "./algorithms/heapSort.js";
import { insertionSort } from "./algorithms/insertionSort.js";
import { quickSort } from "./algorithms/quickSort.js";
import { selectionSort } from "./algorithms/selectionSort.js";
import { renderBars } from "./bars.js";
import { disableNav, enableNav, markAllBarsUsorted } from "./utilities.js";

window.addEventListener("scroll", () => {
  console.log("scroll");
});

const generateArrayBtn = document.querySelector("#generateArrayBtn");
const bubbleSortBtn = document.querySelector("#bubbleSortBtn");
const selectionSortBtn = document.querySelector("#selectionSortBtn");
const insertionSortBtn = document.querySelector("#insertionSortBtn");
const quickSortBtn = document.querySelector("#quickSortBtn");
const heapSortBtn = document.querySelector("#heapSortBtn");

// Add event listeners
generateArrayBtn.addEventListener("click", renderBars);
bubbleSortBtn.addEventListener("click", bubbleSort);
selectionSortBtn.addEventListener("click", selectionSort);
insertionSortBtn.addEventListener("click", insertionSort);
quickSortBtn.addEventListener("click", async () => {
  let nodes = document.querySelector(".bars-container").childNodes;

  disableNav();
  await quickSort(nodes, 0, nodes.length - 1);
  enableNav();
});

heapSortBtn.addEventListener("click", async () => {
  let nodes = document.querySelector(".bars-container").childNodes;
  markAllBarsUsorted(nodes);
  disableNav();
  await heapSort(nodes);
  enableNav();
});

renderBars();
