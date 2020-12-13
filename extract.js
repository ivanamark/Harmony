function extractEachKth(nums, index) {
    const result = nums.filter(x => x % index !=0);
    return result;
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))

