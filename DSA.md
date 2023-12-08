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
 - 
