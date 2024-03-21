
function createRow(container) {
    var row = document.createElement('div');
    row.classList.add('row', 'mt-4');
    container.appendChild(row);
    return row;
}


function addProduct(container, imgSrc, title, price) {
    var column = document.createElement('div');
    column.classList.add('col-lg-2', 'col-md-2', 'col-sm-4', 'col-6', 'mb-4');
    
    var card = document.createElement('div');
    card.classList.add('card');

    var img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = imgSrc;
    img.alt = title;

    var cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    var cardTitle = document.createElement('h5');
    cardTitle.classList.add('card-title');
    cardTitle.textContent = title;

    var productPrice = document.createElement('div');
    productPrice.classList.add('product-price');
    productPrice.innerHTML = '<span>' + price + '</span>';

    var viewDetailsBtn = document.createElement('a');
    viewDetailsBtn.classList.add('btn', 'btn-success', 'btn-block');
    viewDetailsBtn.href = '#';
    viewDetailsBtn.textContent = 'View Details';

    var addToCartBtn = document.createElement('a');
    addToCartBtn.classList.add('btn', 'btn-primary', 'btn-block');
    addToCartBtn.href = '#';
    addToCartBtn.textContent = 'Add to Cart';

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(productPrice);
    cardBody.appendChild(viewDetailsBtn);
    cardBody.appendChild(addToCartBtn);

    card.appendChild(img);
    card.appendChild(document.createElement('hr'));
    card.appendChild(cardBody);

    column.appendChild(card);
    container.appendChild(column);
}


var container = document.getElementById('productContainer');
var currentRow = createRow(container);

function addProducts() {
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'MSI RAIDER GE68 HX 13VG 16 INCH UHD+ 120HZ DISPLAY CORE I9 13TH GEN', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');

    currentRow = createRow(container);
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');

    currentRow = createRow(container);
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');

    currentRow = createRow(container);
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
}

addProducts();
