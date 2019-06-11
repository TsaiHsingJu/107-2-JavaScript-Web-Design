class Product {
  constructor(pname, retail_price, category,pic) {
    this.pname = pname;
    this.retail_price = retail_price;
    this.category = category;
    this.pic = pic
  }
}

class UI {
  addProductToList(product) {
    const list = document.getElementById('product-list');
    // Create tr element
    const row = document.createElement('tr');
    // Insert cols
    row.innerHTML = `
      <td>${product.pname}</td>
      <td>${product.retail_price}</td>
      <td>${product.category}</td>
      <td>${product.pic}</td>
      <td><a href="#" class="delete">X<a></td>
    `;
  
    list.appendChild(row);
  }

  showAlert(message, className) {
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert ${className}`;
    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const container = document.querySelector('.container');
    // Get form
    const form = document.querySelector('#product-form');
    // Insert alert
    container.insertBefore(div, form);

    // Timeout after 3 sec
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }

  deleteProduct(target) {
    if(target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById('pname').value = '';
    document.getElementById('retail_price').value = '';
    document.getElementById('category').value = '';
    document.getElementById('pic').value = '';
  }
}

// Event Listener for add product
document.getElementById('product-form').addEventListener('submit', function(e){
  // Get form values
  const pname = document.getElementById('pname').value,
        retail_price = document.getElementById('retail_price').value,
        category = document.getElementById('category').value,
        pic = document.getElementById('pic').value

  // Instantiate product
  const product = new Product(pname, retail_price, category,pic);

  // Instantiate UI
  const ui = new UI();

  console.log(ui);

  // Validate
  if(pname === '' || retail_price === '' || category === '' || pic === '') {
    // Error alert
    ui.showAlert('Please fill in all fields', 'error');
  } else {
    // Add product to list
    ui.addProductToList(Product);

    // Show success
    ui.showAlert('Product Added!', 'success');
  
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listener for delete
document.getElementById('product-list').addEventListener('click', function(e){

  // Instantiate UI
  const ui = new UI();

  // Delete product
  ui.deleteProduct(e.target);

  // Show message
  ui.showAlert('Product Removed!', 'success');

  e.preventDefault();
});