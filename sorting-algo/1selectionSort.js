let arr = [64, 25, 12, 22, 11];
let arr2 =["apple", "orange", "banana", "kiwi", "grape"];
function selectionSort(arr) {
    let i = 0;
    let j = arr.length - 1;
    while (i <= j) {
        let result = getMinIndex(i, arr.length - 1);
        arr = swapArrElement(i, result.minIndex, arr);
        i++;
        j--;
    }

    return arr;
}

function getMinIndex(i, j) {
    let min = Infinity;
    let minIndex = null;
    for (let outer = i; outer <= j; outer++) {
        if (arr[outer] < min) {
            min = arr[outer];
            minIndex = outer;
        }
    }
    return { minIndex };
}

function swapArrElement(i, j, arr) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return arr;
}
// console.log(selectionSort(arr));


//======================================================= Little bit refactoring of the code =======================================================//

function refactoredCode(arr) {
    // outer loop to iterate whole array
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        let min = arr[i];

        // inner loop to get min element index
        for (let j = i; j < arr.length-1; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        // swapping the elements
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    // return arr;
}
// console.log(refactoredCode(arr2));
// console.log(arr2);


// ======================================================= [Stable Selection Sort Algorithm] ===================================================================//

function stableSelectionSort(arr) {
    // outer loop to iterate whole array
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;

        // inner loop to find the index of the minimum element
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Move the minimum element to its correct position
        // by shifting the elements in the sorted part
        let minValue = arr[minIndex];
        while (minIndex > i) {
            arr[minIndex] = arr[minIndex - 1];
            minIndex--;
        }
        arr[i] = minValue;
    }
    return arr;
}

// console.log(stableSelectionSort(arr));
