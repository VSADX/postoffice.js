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
  
