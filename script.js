document.addEventListener('DOMContentLoaded', function() {
    const imgItems = document.querySelectorAll('.img-item');
  
    imgItems.forEach(item => {
      item.addEventListener('click', function() {
        // Toggle 'active' class to change image style
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        } else {
          // Remove 'active' class from all other items
          imgItems.forEach(otherItem => otherItem.classList.remove('active'));
          item.classList.add('active');
        }
      });
    });
  });
  