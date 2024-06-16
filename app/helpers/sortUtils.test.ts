import { stableSort, getComparator } from "../helpers/sortUtils";

describe("sortUtils", () => {
    const exampleArray = [
        { id: 1, name: "John", age: 25 },
        { id: 2, name: "Jane", age: 30 },
        { id: 3, name: "Alice", age: 20 },
    ];

    it("should sort the array in ascending order by name", () => {
        const comparator = getComparator("asc", "name");
        const sortedArray = stableSort(exampleArray, comparator);
        expect(sortedArray).toEqual([
            { id: 3, name: "Alice", age: 20 },
            { id: 2, name: "Jane", age: 30 },
            { id: 1, name: "John", age: 25 },
        ]);
    });

    it("should sort the array in descending order by age", () => {
        const comparator = getComparator("desc", "age");
        const sortedArray = stableSort(exampleArray, comparator);
        expect(sortedArray).toEqual([
            { id: 2, name: "Jane", age: 30 },
            { id: 1, name: "John", age: 25 },
            { id: 3, name: "Alice", age: 20 },
        ]);
    });

    it("should maintain the order of equal elements", () => {
        const comparator = getComparator("asc", "age");
        const sortedArray = stableSort(exampleArray, comparator);
        expect(sortedArray).toEqual([
            { id: 3, name: "Alice", age: 20 },
            { id: 1, name: "John", age: 25 },
            { id: 2, name: "Jane", age: 30 },
        ]);
    });
});