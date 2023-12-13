## Chapter 1:

The main array operations are:
 - Reading: Because the initial memory address of an array is saved by the computer, and it allocates memory next to that memory address for each index, reading can be done in one step by the computer
 - Searching (i.e. looking up a particular value): Computers don't know the value within each memory address, so they must inspect every index value. The maximum number of steps is N for array length N
 - Insertion: The computer must slide over every value starting from the right until the index of insertion is reached. The maximum number of steps is N + 1
 - Deletion: The computer must remove one index from memory, then slide over everything to the right of it. THe maximum number of steps is N if you deleted index 0

Sets:
 - The only difference between an array and an array based set is that the set never allows duplicate values in it
 - Reading and searching take the same amount of steps for arrays and sets
 - Insertion: the computer must search all the indexes to confirm it's not a duplicate, then perform a typical insertion. Takes between N + 1 and 2N + 1 steps


## Chapter 3:

The fundamental question is: if there are N data elements, how many steps will the algorithm take?
 - Our Big O expression O(N) says that it will take N steps
 - A reading operation for an array will be O(1)

Big O is not just concerned about how many steps an algorithm takes, but also how the number of steps increases as the data changes.

Big O generally refers to the worst case scenario unless specified otherwise

## Chapter 4:

If your algorithm is labelled by Big O as slow, it's worth thinking about how you can try to get it to fall into a faster category of Big O

Bubble Sort Algorithm:
 - A sorting algorithm that compares two values at a time and swaps their places if necessary. The "pointers" pass through until no more swaps are made
 - Called bubble sort because the highest unsorted value "bubbles up" to its correct position
 - Bubble sort makes (N - 1) + (N - 2) + (N - 3) … + 1 comparisons
 - In a worst case scenario there will be as many swaps as comparisons
 - Thus, bubble sort takes N^2 steps

When there is a nested loop inside an algorithm, that algorithm is generally O(N^2)

## Chapter 5:

Selection sort algorithm:
 - This algorithm starts at index 0 and saves the lowest value of each pass through. At the end of the pass through it swaps the lowest value to the current index.
 - The amount of comparisons in selection sort is equivalent to bubble sort, however there are a maximum of N - 1 swaps. This means there are about half as many steps in this algorithm
 
In Big O notation, selection sort is still described as O(N^2) because Big O ignores constants
 - This means that when 2 algorithms are in the same category of Big O, further analysis is required to determine which algorithm is faster
