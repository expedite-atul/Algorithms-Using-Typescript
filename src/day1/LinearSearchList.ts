export default function linear_search(haystack: number[], needle: number): boolean {
    for (let index = 0; index < haystack.length; index++) {
        const element = haystack[index];
        //we never return in reallife from for loops
        if (element === needle) {
            return true;
        }
        else false;
    }
    return false;
}