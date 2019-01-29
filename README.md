# Literary Object Literals

You run a library for an incredibly diverse group of people with an incredibly wide array of interests. You need a way for your guests to find books they are interested in quickly, but you don't want to remove any of the books from your library.

You need to create a function that is able to take in a genre that a user selects, and return an array of books titles (stings) of that genre.

For example. If a user selects `Fantasy`, they should receive the array:

```JavaScript
['The Elf', 'The Unicorn']
```

Use a `for` loop to do this.

## Stretch

### Empty Search

If no genre is selected (an empty string or nothing is passed in as the parameter), all books should be returned.

### Similar Categories

Suggest similar categories. The array you return should list books in the selected category like it did before. It should also include books from the related category at the end of the array. The genre pairings are:

```
Action -> Adventure
Adventure -> Action
SciFi -> Fantasy
Fantasy -> SciFi
Non-Fiction -> Biography
Biography -> Non-Fiction
```

### Filter

A `for` loop is a terrific way of accomplishing many things, but ES6 has introduced event more ways to accomplish some common, specific things. Research `.filter` to see if you can use some of this new ES6 functionality.

### String Matching

Allow the user to enter a second parameter that is a search string. If a user enters the second parameter, the function should only return books that include that series of characters in the result. For example, if `Sp` was entered without any genre, the result should be:

```JavaScript
['The Public Speaker', 'The Spaceship']
```