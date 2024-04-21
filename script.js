function setupDropdownHover(dropdownId, contentId) {
  var dropdown = document.getElementById(dropdownId);
  var content = document.getElementById(contentId);

  // Show the dropdown content on mouseover
  dropdown.addEventListener('mouseover', function() {
    content.style.display = 'inline-block'
  });

  // Hide the dropdown content on mouseout
  dropdown.addEventListener('mouseout', function() {
    content.style.display = 'none';
  })
}
