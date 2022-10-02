# Sorting Visualizer

#### Video Demo:  [demo](https://www.youtube.com/watch?v=iU6eZS_MQC4)
#### Description: Sorting visualizer implementing Bubblesort, Selectionsort, Insertionsort, Quicksort, and Heapsort.

# File exaplanations
## <ins>index.html</ins>

This is the main/only html file in this project that contains the links to the css/javascript files as well as the markdown for the web page.

## <ins>styles.css</ins>

This is the css file for the entire project. Different classes are defined here to represent different states the bars are in.

## <ins>main.js</ins>

Main.js is the entry point to the entire project. This is where I fetch all the sorting buttons and add the event listeners to them so that the correct algorithm runs when the buttons are clicked on. After all the event listeners have been added I run the `renderBars()` function to render out 100 bars of random length to the `bars-container`.

## <ins>bars.js</ins>

bars.js file only contains the `renderBars()` function. This function creates an array of divs with random heights and the outputs displays those bars in the `bard-container`.

## <ins>utilities.js</ins>

    utilities.js contains various functions that do not belong to a single file and is used throughout the project and serves as helper functions to the sorting algorithms.

The `sleep(ms)` function aids in slowing down the algorithm execution so that the visualizations does not happen instantaneously and can be visualized at a slower speed to see what is happing in the algorithm. I did not write the piece of code myself and was obtained from [StackOverflow](https://stackoverflow.com/questions/951021/what-is-the-javascript-version-of-sleep) 


The `swapNodes(nodes, i, j)` function aids in swapping two nodes at positions `i` and `j` with each other. This is very common throughout the project. I ran into an issue with the swapping process initially where the nodelist did not update the DOM when the nodes where swapped. This was because I was reassigning the values and not using the `.before` or `.after` methods to reposition the elements in the nodelist.

The `getRandomizedArray(size, max, min)` function is used to generate the random values for the heights of the bars and is used in the `renderBars()` function outlined above. The [StackOverflow post](https://stackoverflow.com/questions/5836833/create-an-array-with-random-values) proved to be useful.

The `disableNav()` and `enableNav()` methods do exactly what their name suggests and add the disabled property to all the nav elements while the sorting algorithm is running to prevent the user from running multiple sorting algorithms or generating a new array while while the sorting algorithm is running.

The `markAllBarsSorted(bars)` and `markAllBarsUnsorted(bars)` functions are used when the algorithm can only tell at the end of the algorithm that all bars are in their correct positions and then adds the `sorted` class to each bar. Or alternatively removes the `sorted` class from each bar.

## <ins>algorithms/bubbleSort.js</ins>

The `bubbleSort()` was the first and easiest sorting algorithm I implemented. This algorithm compares each adjacent values height and swaps them around if the bars to the lefts height is larger thus moving the largest bar to the end on each consecutive loop. There is also an `animateBubbleSort()` function in this file which add/removes the appropriate classes to the bars to better visualize the steps being done to the user.

## <ins>algorithms/selectionSort.js</ins>

The `selectionSort()` function was also pretty easy to implement. This algorithm consecutively loops through all the value and finds the smallest bar and swaps it to the front of the bars. There is also a `minIdx` (minimun index) that increments by 1 each time the smallest bar is found/swapped to keep track of the position the smallest found bar should be swapped to and from where the algorithm should be searching from on each iteration. There is also an `animateSelection()` function in this file which add/removes the appropriate classes to the bars to better visualize the steps being done to the user.

## <ins>algorithms/insertionSort.js</ins>

The `insertionSort()` function was very straigtforward to implement. This algorithm essentially swaps all the bars backwards until the correct position for that bar at that point during the execution of the algorithm is found.

## <ins>algorithms/quickSort.js</ins>

The `quickSort()` function was much hard to implement because of its recursive nature. There are a few different ways to implement the partition part of the quicksort algorithm and may look different than other one. I've chosen to used the "CLRS" (Cormen, Leiserson, Rivest, Stein) implentation in my `partition()` function. 

## <ins>algorithms/heapSort.js</ins>

The `heapSort()` function was also challenging to implement. Heapsort is also a recursive function and works similary to the selectionSort where we first find the minimun element and place the minimun element at the beginning and repeat recursively the same process.
