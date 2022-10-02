// Pause the execution of code for x time in ms.
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Swaps two values of an nodelist and returns the updated nodelist
export function swapNodes(nodes, i, j) {
  nodes[i].after(nodes[j]);
  nodes[j].after(nodes[i]);

  return nodes;
}

// Generates an randomized array
export function getRandomizedArray(size, max, min) {
  return Array.from(Array(size), () =>
    Math.floor(Math.random() * (max + min) + min)
  );
}

// Disables the nav while algorithms runs
export function disableNav() {
  const algoBtns = document.querySelector(".algoBtnContainer").childNodes;
  const generateBtn = document.querySelector("#generateArrayBtn");

  [...algoBtns].forEach((btn) => {
    btn.disabled = true;
  });

  generateBtn.disabled = true;
}

// Enables the nav when alogorith is complete
export function enableNav() {
  const algoBtns = document.querySelector(".algoBtnContainer").childNodes;
  const generateBtn = document.querySelector("#generateArrayBtn");

  [...algoBtns].forEach((btn) => {
    btn.disabled = false;
  });

  generateBtn.disabled = false;
}

export async function markAllBarsSorted(bars) {
  [...bars].forEach((bar) => {
    bar.classList = "bar sorted";
  });
}
export async function markAllBarsUsorted(bars) {
  [...bars].forEach((bar) => {
    bar.classList = "bar";
  });
}
