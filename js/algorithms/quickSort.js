import { sleep, swapNodes } from "../utilities.js";

export async function quickSort(nodes, low, high) {
  if (low < high) {
    let pivotIdx = await partition(nodes, low, high);

    await quickSort(nodes, low, pivotIdx - 1);
    await quickSort(nodes, pivotIdx + 1, high);

    // Set sorted coolor after each iteration has finished
    for (let i = 0; i < high + 1; i++) {
      nodes[i].classList.add("sorted");
    }
  }

  // Returns sorted nodes
  return nodes;
}

async function partition(nodes, low, high) {
  let pivot = nodes[high].offsetHeight;
  let i = low - 1;

  nodes[high].classList.add("pivot");

  for (let j = low; j < high; j++) {
    nodes[i + 1].style.backgroundColor = "purple";
    nodes[j].style.backgroundColor = "green";
    if (nodes[j].offsetHeight <= pivot) {
      await sleep(20);
      nodes[i + 1].style.backgroundColor = "";
      nodes[j].style.backgroundColor = "";
      i++;
      swapNodes(nodes, i, j);
    }
    nodes[j].style.backgroundColor = "";
    nodes[i + 1].style.backgroundColor = "";
  }

  await sleep(20);
  nodes[high].classList.remove("pivot");
  //   nodes[i + 1].style.backgroundColor = "";
  nodes[high].classList.add("sorted");
  swapNodes(nodes, i + 1, high);

  return i + 1;
}
