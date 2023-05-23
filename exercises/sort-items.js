/**
 * SORTING NODES WITHIN A CONTAINER
 * Please, make sure to read the following files in the exercises-info folder before you start
 * * "02 SortingNode.md" 
*/

/**
 * @task
 * Select all elements that have class of "item" as a NodeList.
 * Store them in the allItems variable
 * Example: const allItems = <Your code>;
 */

// Your code goes here...
const allItems = document.querySelectorAll('.item')



/**
 * @task
 * Select all sort buttons by class of "sortBtn" as a NodeList.
 * Store them in the sortBtn variable
 * Example: const sortBtn = <Your code>;
 */

// Your code goes here...
const sortBtn = document.querySelectorAll('.sortBtn')



/**
 * @task
 * Create a sortData function that follows the list of requirements:
 * * Takes an argument of the direction to sort as a string of 'asc' or 'desc'
 * * Defines a container variable to get the node by id of 'main'
 * * Uses the allItems variable as a source for the array of items to sort
 * * Sorts the items by id and appends them back to the main container in the sorted order.
 * Example: sortData('desc') => <reversed order of items in the main container>
 * Example: sortData('asc') => <a-z order of items in the main container>
 */

// Your code goes here...
const sortData = (direction) => {
    const container = document.getElementById('main'); // Get the container element by its id
  
    // Retrieve the items from the container
    const items = Array.from(container.children);
  
    // Sort the items based on the 'id' attribute
    if (direction === 'asc') {
      items.sort((a, b) => a.id.localeCompare(b.id));
    } else if (direction === 'desc') {
      items.sort((a, b) => b.id.localeCompare(a.id));
    }
  
    // Append the sorted items back to the container
    items.forEach((item) => container.appendChild(item));
};
  



/**
 * @task
 * Iterate through the every item in sortBtn NodeList and apply the
 * addEventListener click event to each item.
 * The item click must execute/call the following:
 * * Make the sortData function call, assign the item's dataset sortdir property
 */

// Your code goes here...

sortBtn.forEach(
    item => item.addEventListener('click', () => {
      const itemID = item.dataset.sortdir;
      
      if (itemID === 'desc') {
        sortData('desc');
      } else {
        sortData('asc');
      }
    })
  );
  


