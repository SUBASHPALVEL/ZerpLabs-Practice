// Fetch JSON data
fetch('data.json')
.then(res => res.json())  
.then(data => {

  // Get container element
  const container = document.querySelector('body');

  // Loop through elements
  data.elements.forEach(item => {

    // Create element 
    const el = createElement(item);

    // Append element to container
    container.appendChild(el);

  });

})
.catch(err => console.log(err));


// Create element from JSON
function createElement(item) {

  // Create element
  const el = document.createElement(item.type);

  // Add ID
  if (item.id) el.id = item.id;

  // Add classes
  if (item.class) {
    item.class.split(' ').forEach(c => {
      el.classList.add(c);
    });
  }

  // Add text content
  if (item.textContent) {
    el.textContent = item.textContent;
  }

  // Add image properties
  if (item.type === 'img') {
    el.src = item.src;
    el.alt = item.alt;
  }

  // Add children
  if (item.children) {
    item.children.forEach(child => {
      const childEl = createElement(child);
      el.appendChild(childEl);
    });
  }

  return el;

}