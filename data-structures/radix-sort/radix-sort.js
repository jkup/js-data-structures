function RadixSort(arr, begin, end, bit) {
    var i = begin, j = end, mask = << bit;

    while(i < j) {
        while(i < j && !(arr[i] & mask) {
            ++i;
        }

        while(i < j && (arr[j - 1] & mask) {
            --j;
        }

        if(i < j {
            j--;
            var tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
        }
    }

    if(bit && i > begin) {
        sort(arr, begin, i, bit - 1);
    }

    if(bit && i < end) {
        sort(arr, i, end, bit - 1);
    }
}

/*
 * Tests
**/
var arr = [1, 5, 6, 20, 34, 23424, 2, 1];

RadixSort(arr, 0, arr.length, 32);
