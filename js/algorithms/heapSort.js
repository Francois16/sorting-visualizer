import { sleep, swapNodes } from "../utilities.js";

export async function heapSort(nodes) {
  let n = nodes.length;

  for (let i = Math.floor(n / 2); i >= 0; i--) {
    await heapify(nodes, n, i);
  }

  for (let i = n - 1; i > 0; i--) {
    await sleep(20);
    nodes[0].classList.add("sorted");
    swapNodes(nodes, 0, i);
    await heapify(nodes, i, 0);
  }

  nodes[0].classList.add("sorted");
}

async function heapify(nodes, n, i) {
  let largest = i;
  const l = 2 * i + 1;
  const r = 2 * i + 2;

  if (l < n && nodes[i].offsetHeight < nodes[l].offsetHeight) {
    nodes[i].classList.add("largest");
    nodes[l].classList.add("selected");
    await sleep(20);
    nodes[i].classList.remove("largest");
    nodes[l].classList.remove("selected");

    largest = l;
  }

  if (r < n && nodes[largest].offsetHeight < nodes[r].offsetHeight) {
    nodes[largest].classList.add("largest");
    nodes[r].classList.add("selected");
    await sleep(20);
    nodes[largest].classList.remove("largest");
    nodes[r].classList.remove("selected");

    largest = r;
  }

  if (largest != i) {
    swapNodes(nodes, i, largest);
    await heapify(nodes, n, largest);
  }
}
