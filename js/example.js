$(function() {
  
  // TODO: Create a list of JS Object each representing a game. 
  // Use the data contained in the <ul> to build this list of game titles.
const games = [
  {
    "title": "The Legend of Zelda", 
  },
  {
    "title": "God of war ragnarok", 
  },
   {
    "title": "Halo infinete", 
  },
  {
    "title": "Minecraft", 
  },
   {
    "title": "Super mario oddesy", 
  }
]

  var gameList, newItemForm, newItemButton;
  var item = '';                                 
  
  // const ulObj
  gameList = $('ul');                               
  newItemForm = $('#newItemForm');              
  newItemButton = $('#newItemButton');          

  // TODO:  Render game titles as list items inside the <ul>. 
  // To do so, create a function that loops through each object in the game list, 
  // create a new node "list item" holding the game title and 
  // inject the new node inside the <ul>.
  function loadGames() {
    //const ulObj = document.getElementById("gameList");
    //creation of dynamic
    games.forEach( game=> {
    const listItem = $("<li>");
    listItem.html(`${game.title}`);
    gameList.append(listItem);  
    })
    
  }
  loadGames();


  function updateCount() {                      
    var items = $('li').length; 
    $('#counter').text(`${items}`);                   
  }
  updateCount();                                 

  
  newItemButton.show();                         
  newItemForm.hide();                           
  $('#showForm').on('click', function() {        
    newItemButton.hide();                       
    newItemForm.show();                         
  });

  
  newItemForm.submit(function(e) {       
    e.preventDefault();                         
    var text = $('input:text').val();           
    gameList.append(`<li>${text}</li>`);      
    $('input:text').val('');                    
    updateCount();                              
  });  



});