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

## Chapter 6:

Being able to consider all scenarios (not just the worst case) is an important skill

Insertion sort:
 - Beginning with index 1, move it in a temporary value. Compare it to the earlier index values. Once you find one that is smaller than the current index value, insert the current index value to the right of that and shift everything else over to the spot where the value used to be
 - Insertion sort contains removal, comparison, shift, and insertion operations
 - There are a maximum of 1 + 2 + 3 + … + (N - 1) comparisons, or approximately N^2 / 2
 - There's as many shifts as comparisons
 - Removing and inserting the temp value happens once per pass through, so N - 1 of both
 - Thus, there are N^2 + 2N - 2 steps

Another rule of Big O notation is that it only takes into account the highest order of N when there are multiple orders added together. For insertion sort, this becomes O(N^2)

When comparing worst case scenarios, selection sort is the best of the 3 algorithms. However, this algorithm has N^2 / 2 steps regardless of best or worst case scenario, since it doesn't have any mechanism for ending the pass-through early. Insertion sort has a best case scenario of N, average case of N^2 / 2, and worst case of N^2. Which one is best depends on what the data you are sorting tends towards, but if it's completely random the two algorithms are similar in performance

## Chapter 8:

For each key-value pair in a hash table, each value is stored at the index of the key after the key has been hashed.
Then, to find the value associated with a key, the computer hashes the key we're looking up and looks in the cell with the associated hash value. The lookup process in a hash is typically O(1). However, if we want to use the value to find an associated key, the lookup process is no longer O(1)

If there are two keys that, when hashed, are the same, the corresponding cell contains a array of arrays rather than a single value. THis is called a collision. The arrays are then searched to find the key and then retrieve its value. 

A hash table must balance avoiding collisions (by allocating lots of cells) with memory efficiency (by not using too many cells). A rule of thumb is that for every 7 elements that need to be stored, there should be 10 cells. Thus, the ideal "load factor" is 0.7
