Go's only looping construct is `for`

```go
package main

import "fmt"

func main() {

    i := 1
    for i <= 3 {
        fmt.Println(i)
        i = i + 1
    }

    for j := 7; j <= 9; j++ {
        fmt.Println(j)
    }

    for {
        fmt.Println("loop")
        break
    }

    for n := 0; n <= 5; n++ {
        if n%2 == 0 {
            continue
        }
        fmt.Println(n)
    }
}
```


Switch statements express conditionals across many branches.

```go
package main

import (
    "fmt"
    "time"
)

func main() {

    i := 2
    fmt.Print("Write ", i, " as ")
    switch i {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
    case 3:
        fmt.Println("three")
    }

    switch time.Now().Weekday() {
    case time.Saturday, time.Sunday:
        fmt.Println("It's the weekend")
    default:
        fmt.Println("It's a weekday")
    }

    t := time.Now()
    switch {
    case t.Hour() < 12:
        fmt.Println("It's before noon")
    default:
        fmt.Println("It's after noon")
    }

    whatAmI := func(i interface{}) {
        switch t := i.(type) {
        case bool:
            fmt.Println("I'm a bool")
        case int:
            fmt.Println("I'm an int")
        default:
            fmt.Printf("Don't know type %T\n", t)
        }
    }
    whatAmI(true)
    whatAmI(1)
    whatAmI("hey")
}
```
You can loop through an array using range:
```go
package main

import "fmt"

func main() {
    numbers := []int{2, 4, 6, 8, 10}

    // Looping through slice using range
    for index, value := range numbers {
        fmt.Printf("Index: %d, Value: %d\n", index, value)
    }
}
```

Useful packages in Go:

`strconv`implements conversions to and from string representations of basic data types
 - `strconv.Itoa(number)` converts int to string
 - `strconv.Atoi(string)` converts string to int

`strings`
 - `strings.ReplaceAll(word, " ", "")`
 - `strings.Join(array, "")`
 - `strings.Fields(phrase)` splits `phrase` into an array separated by whitespace characters

`fmt`
 - `return fmt.Sprintf("%d %d", tmpH, tmpL)` this code returns a string formatted by `Sprintf`
