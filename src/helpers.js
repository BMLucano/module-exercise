/**Accepts an array of items.
 * Returns a random item from items.
 */
function choice(items){
  let idx = Math.floor(Math.random() * items.length);
  return items[idx];
}

/**Accepts an array or items and a single item.
 * Removes first matching item from items if it exists.
 * Otherwise, return undefined
 */
function remove(items, item){
  let matchingItemIdx = items.indexOf(item);

  if(matchingItemIdx !== -1){
    return items.splice(matchingItemIdx, 1);
  }
  return undefined;
}

export { choice, remove }