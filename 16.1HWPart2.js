$(document).ready(function() {

    // When form is submitted
    $('form').submit(function(event) {
      event.preventDefault(); // Prevent default form submit behavior
  
      // Get values of title and rating inputs
      var title = $('#title-input').val();
      var rating = $('#rating-input').val();
  
      // Create new list item element with title, rating, and remove button
      var listItem = $('<li>' + title + ' - ' + rating + ' ' + '<button class="remove-btn">Remove</button>' + '</li>');
  
      // Append new list item to movies list
      $('#movies-list').append(listItem);
  
      // Clear input values
      $('#title-input').val('');
      $('#rating-input').val('');
    });
  
    // When remove button is clicked
    $('#movies-list').on('click', '.remove-btn', function() {
      $(this).parent().remove(); // Remove parent element (list item) from DOM
    });
  
  });
  