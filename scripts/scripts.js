
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
    addProduct(currentRow, './style/img/logitech-z906-speaker-1.jpg', 'Logitech Z906 5.1 SURROUND SOUND SPEAKER SYSTEM', '40,000৳');
    addProduct(currentRow, './style/img/lenovo-g27-20-27-inch-fhd-monitor-01.jpg', 'ENOVO G27-20 27 INCH 144 HZ IPS FHD MONITOR', '26,999৳');
    addProduct(currentRow, './style/img/corsair-sabre-rgb-wireless-black-gaming-mouse.jpg', 'CORSAIR SABRE RGB PRO CHAMPION SERIES ULTRA-LIGHTWEIGHT FPS/MOBA WIRELESS BLACK GAMING MOUSE', '9,900৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');

    currentRow = createRow(container);
    addProduct(currentRow, './style/img/corsair-k70-rgb-tkl-1.jpg', 'Corsair K70 RGB TKL Mechanical Gaming Keyboard ', '10,499৳');
    addProduct(currentRow, './style/img/gigabyte-geforce-rtx-4060-ti-gaming-oc-8gb-graphics-card-01.jpg', 'GIGABYTE GEFORCE RTX 4060 TI GAMING OC 8GB GRAPHICS CARD', '57,999৳');
    addProduct(currentRow, './style/img/intel-core-i5-14400-14th-gen-raptor-lake-processor.jpg', 'Intel Core I5 14400 14th Gen Raptor Lake Processor', '31,000৳');
    addProduct(currentRow, './style/img/techlandbd-amsung-970-evo-plus-250gb-nvme-m-2-1.jpg', 'Samsung 970 EVO Plus 250GB NVMe M.2 SSD', '4,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/logitech-z906-speaker-1.jpg', 'Logitech Z906 5.1 SURROUND SOUND SPEAKER SYSTEM', '40,000৳');

    currentRow = createRow(container);
    addProduct(currentRow, './style/img/corsair-sabre-rgb-wireless-black-gaming-mouse.jpg', 'CORSAIR SABRE RGB PRO CHAMPION SERIES ULTRA-LIGHTWEIGHT FPS/MOBA WIRELESS BLACK GAMING MOUSE', '9,900৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/gigabyte-geforce-rtx-4060-ti-gaming-oc-8gb-graphics-card-01.jpg', 'GIGABYTE GEFORCE RTX 4060 TI GAMING OC 8GB GRAPHICS CARD', '57,999৳');
    addProduct(currentRow, './style/img/intel-core-i5-14400-14th-gen-raptor-lake-processor.jpg', 'Intel Core I5 14400 14th Gen Raptor Lake Processor', '31,000৳');

    currentRow = createRow(container);
    addProduct(currentRow, './style/img/gigabyte-geforce-rtx-4060-ti-gaming-oc-8gb-graphics-card-01.jpg', 'GIGABYTE GEFORCE RTX 4060 TI GAMING OC 8GB GRAPHICS CARD', '57,999৳');
    addProduct(currentRow, './style/img/intel-core-i5-14400-14th-gen-raptor-lake-processor.jpg', 'Intel Core I5 14400 14th Gen Raptor Lake Processor', '31,000৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/dell-vostro-5620.png', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
    addProduct(currentRow, './style/img/msi-raider-ge68-hx-13vg-gaming-laptop.jpg', 'Dell Inspiron 15 3520 Core i3 12th Gen 15.6" FHD Laptop', '34,500৳');
}

addProducts();
