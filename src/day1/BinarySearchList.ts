export default function bs_list(haystack: number[], needle: number): boolean {
    //if ordered array
    //[] jump 10 percent of n and x[i] = haystack then return true else if it is greater than haystack jump 10% forward and do the linear search
    //if x[i] < haystack then jump 10% backward.
    // BEST jump middle of the array and if x[i] < then haystack half it again
    // if x[i] > half it again 
    // if not half it again
    // logN
    let low = 0;
    let high = haystack.length;
    do {
        const mid = Math.floor(low + (high - low) / 2);
        const value = haystack[mid];
        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = mid;
        } else {
            low = mid + 1;
        }
    } while (low < high) {

    };
    return false;
}