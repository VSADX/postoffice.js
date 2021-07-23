# postoffice.js
  

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
  
