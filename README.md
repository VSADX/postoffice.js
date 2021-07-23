# PostOffice
  
PostOffice helps you create *more* reusable functions.  
  
+ **Powerful**: PostOffice lets you create simple functions, then bind any of the parameters you choose. 
Like `.bind` in JavaScript, binding a parameter creates a copy of your function. This way, you can bind 
parameters to the same function many times creating new functions (like Dependency Injection or Patial 
Application).
+ **Simple**: You don't need to write in a particular style! PostOffice exports just one function. If you 
pass in a function to `postoffice()`, you get a new function that support arbitrary parameter binding.
+ **Tiny**: The principles behind this library are so simple, you could do it yourself. However, `postoffice.js` 
is only 22 lines of code, so feel free to check out how it works.
  
<br>
  
```js
import { postoffice, N } from "postoffice.js"

const subtract = postoffice((first, second) => first - second)

const take_from_100 = subract(100)

console.log(take_from_100(70)) // 30

console.log(take_from_100(127)) // -27
```
  
<br>  
  
```js
const subtract = postoffice((first, second) => first - second)

const take_away_20 = subract(N, 20)

console.log(take_away_20(80)) // 60

console.log(take_away_20(13)) // -7
```
   
<br>   
    
## What's PostOffice doing?
Like a real postoffice, when you fill-out an envelope but forget some of the information, you get your letter back. 
You also get instructions on what is missing. Once you add all the missing information, the postoffice delivers your 
mail. This is not how most programming languages work. If you try to run a function, but don't supply all the required parameters, 
expect an exception or unexpected behavior.  
  
**What does this library do?** When you run a postoffice function, you don't have to supply all the required parameters. 
The function will bind all the parameters you added, but return a new function that takes the missing parameters. 
When you supply all the missing parameters, the function promptly executes.
  
**This is more than a debugging tool.** This library is designed to give you more freedom as a function author or API user. 
How so? The next code example shows how you can use `N` to add placeholders for any parameters of a function. Also, 
PostOffice can create multiple functions from just one original function. Each copied function can have different 
parameters bound, or the same one bound but using a different value.
    
<br>  
  
```js
const sell_food = postoffice((item, price, count) => `${item}: $${price * count}`)

const sell_pizza = sell_food("Pizza", 12.50, N)

const sell_drink = sell_food(N, 1.20, 1)

//////

sell_pizza(3) // "Pizza: $37.50"

sell_drink("Sprite") // "Sprite: $1.20"

sell_drink("Pepsi") // "Pepsi: $1.20"
```
  
References  
XMoñOcci, XBind, Ocxi.js  
  
