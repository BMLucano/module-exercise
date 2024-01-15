import {choice, remove} from './helpers.js';
import fruits from './foods';

let fruit = choice(fruits);

console.log(`Id like one ${fruit}`)
console.log(`Here you go: ${fruit}`)
console.log(`Deleicios! May i have another?`);

remove(fruits, fruit);

console.log(`I'm sorry, we're all out. We have ${fruits.length} left.`)