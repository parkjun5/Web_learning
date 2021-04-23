var list = document.querySelector('ul.output');
var searchInput = document.querySelector('input.output');
var searchBtn = document.querySelector('button.output');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1
      myHistory.unshift(searchInput.value);
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';
      searchInput.value ="";
    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }
      
    if (myHistory.length > 5){
          myHistory.pop();
      }
      searchInput.focus();
  }
}