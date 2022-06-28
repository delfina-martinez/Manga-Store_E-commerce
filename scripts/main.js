let arrayProducts = [{
        id: 0,
        anime: 'Komi-san no puede comunicarse #2',
        precio: 1550,
        cantidad: 20,
        cantidadActual: 1,
        sinopsis: "Hitohito Tadano acaba de empezar la secundaria alta anhelando que sea pura paz y tranquilidad, pero sus planes se truncan cuando termina sentado al lado de la perfecta Shoko Komi. Ella es linda, inteligente, educada y hasta huele bien. Pero tiene cero dotes sociales y no sabe cómo comunicarse con los demás. Es ahí cuando Tadano decide tomar cartas en el asunto y se propone ayudar a su compañera hasta que consiga cien amigos, y con suerte algo más.",
        imagen: "./assets/images/komisan3_product.jpg",
        coleccion: 'Komi-san no puede comunicarse',
        autor: 'Tomohito Oda',
        editorial: 'Ivrea',
        idioma: 'Español',
        genero: 'romance',
        genero2: 'Romance'
    },
    {
        id: 1,
        anime: 'Mieruko-chan #3',
        precio: 850,
        cantidad: 10,
        cantidadActual: 1,
        sinopsis: "Yotsuya Miko es una chica normal y corriente de instituto que vive su vida tranquilamente hasta que un día empieza a ver horribles monstruos allá donde va y es la única consciente de su presencia. Aunque tenga miedo, decide que lo mejor es no hacerles caso y continuar con su vida como si no pasara nada. Ignorar a los monstruos, a cada cual más grotesco y espantoso, no significa que la pobre no sufra con las terroríficas apariciones y a veces tenga que actuar para que los seres no se ensañen con sus amigos y su familia, pero todo lo hace desde la posición más estoica posible. ¿Por qué Miko es capaz de ver a esas criaturas y además es la única que puede hacerlo?",
        imagen: "./assets/images/mierukochan3_product.jpg",
        coleccion: 'Mieruko-chan',
        autor: 'Tomoki Izumi',
        editorial: 'Ivrea',
        idioma: 'Español',
        genero: 'misterio',
        genero2: 'Misterio'
    },
    {
        id: 2,
        anime: 'Chainsaw Man #10',
        precio: 900,
        cantidad: 25,
        cantidadActual: 1,
        sinopsis: "Denji cree haber encontrado el modo de ser feliz, ¡pero Makima tiene otros planes! Tras lo sucedido con Aki, Denji está sumido en una profunda depresión. Makima acude en su ayuda, pero lo que parece por fin un momento de calma se convierte en el comienzo de una pesadilla… Cuando el joven abre la puerta prohibida de su alma, ¡las verdaderas intenciones de Makima y el secreto demoníaco de Denji chocan en un sangriento infierno!",
        imagen: "./assets/images/chainsawman10_product.jpg",
        coleccion: 'Chainsaw Man',
        autor: 'Tatsuki Fujimoto',
        editorial: 'Ivrea',
        idioma: 'Español',
        genero: 'accion',
        genero2: 'Acción'
    },
    {
        id: 3,
        anime: 'Sword Art Online Progressive #1',
        precio: 1800,
        cantidad: 50,
        cantidadActual: 1,
        sinopsis: "¡¡Adaptación al manga de “Sword Art Online: Progressive”, un relato en orden cronológico del camino de la conquista de “SAO”!! ¡Asuna 'Flash' relata desde su propia perspectiva el comienzo de sus aventuras! Luego de que un caballero negro le salva la vida, Asuna lo ayuda a derrotar al jefe del primer piso. Sin embargo, algo sucede…",
        imagen: "./assets/images/saoprogressive1_product.jpg",
        coleccion: 'Sword Art Online',
        autor: 'Reki Kawahara, Kiseki Himura',
        editorial: 'Planeta Cómic',
        idioma: 'Español',
        genero: 'fantasia',
        genero2: 'Fantasía'
    },
    {
        id: 4,
        anime: 'Your Name #1',
        precio: 900,
        cantidad: 70,
        cantidadActual: 1,
        sinopsis: "Mitsuha Miyamizu es una chica de secundario que vive en un pueblito aislado en las montañas, donde oficia de sacerdotisa en el templo de su familia. Harta de la vida de campo, le pide un deseo a una estrella fugaz: tener la vida de un chico de Tokio. Luego de esto se despierta en el cuerpo de Taki Tachibana, un adolescente tokyota con quien parece haber cruzado deseos. Aunque originalmente ambos lo descartan como un sueño, cuando el intercambio comienza a suceder cada vez más seguido, comienzan a admitir que detrás se esconde algo mucho más tangible que un simple sueño…",
        imagen: "./assets/images/kiminonawa1_product.jpg",
        coleccion: 'Your Name',
        autor: 'Makoto Shinkai, Ranmaru Kotone',
        editorial: 'Ivrea',
        idioma: 'Español',
        genero: 'romance',
        genero2: 'Romance'
    },
    {
        id: 5,
        anime: 'Jujutsu Kaisen #0',
        precio: 850,
        cantidad: 50,
        cantidadActual: 1,
        sinopsis: "Yuta Okkotsu es un estudiante de preparatoria poseído por Rika, un espíritu maldito. Después de causar un incidente con unos compañeros, Satoru Gojo decide traerlo a la Escuela de Bachillerato Técnico de Brujería de Tokio para que aprenda a controlar la maldición. Va haciendo amistad con sus compañeros de primer año, Maki, Toge y Panda, con quienes aprende a exorcizar maldiciones. Pero, de repente, se aparece Suguru Geto, un hechicero maléfico, con la intención de apoderarse de Rika, la maldición de Yuta.",
        imagen: "./assets/images/jujutsukaisen0_product.jpg",
        coleccion: 'Jujutsu Kaisen',
        autor: 'Gege Akutami',
        editorial: 'Panini',
        idioma: 'Español',
        genero: 'accion',
        genero2: 'Acción'
    },
    {
        id: 6,
        anime: 'Naruto #67',
        precio: 900,
        cantidad: 75,
        cantidadActual: 1,
        sinopsis: "Obito absorbió al Jubi y se ha convertido en su jinchuriki, pero eso le está costando su propia identidad. Los Hokages del pasado se organizan y lanzan ataques conjuntos, pero quienes más importan en la estrategia son aquellos que representan el presente y el futuro del mundo shinobi: Naruto y Sasuke. Ahora algo ha sucedido y aquellos resucitados con el Edo Tensei deben ser en extremo cuidadosos, pues podrían desaparecer para siempre. La esperanza, no obstante, regresa, pues Kurama está más dispuesto que nunca a ayudar a Naruto, ¡y esta vez por completo!",
        imagen: "./assets/images/narutoshippuden67_product.jpg",
        coleccion: 'Naruto',
        autor: 'Masashi Kishimoto',
        editorial: 'Panini',
        idioma: 'Español',
        genero: 'accion',
        genero2: 'Acción'
    },
    {
        id: 7,
        anime: 'One Week Friends #4',
        precio: 1650,
        cantidad: 60,
        cantidadActual: 1,
        sinopsis: "Este manga cuenta la historia de Yuuki Hase, un chico de instituto que intenta hacerse amigo de Kaori Fujimiya, una compañera de clase solitaria y aparentemente apática. Tras conseguir un primer acercamiento amistoso, Yuuki se da cuenta de su fracaso cuando llega el fin de semana, ya que descubre que Kaori pierde cualquier recuerdo que tenga de sus amigos cada lunes debido a un trauma de su infancia. Pese a los muchos problemas que esto le ocasionará, Yuuki no cesa en su empeño de ganarse el cariño de su compañera aunque tenga que volver a hacerse amigo de ella todas las semanas.",
        imagen: "./assets/images/oneweekfriends4_product.jpg",
        coleccion: 'One Week Friends',
        autor: 'Matcha Hazuki',
        editorial: 'Ivrea',
        idioma: 'Español',
        genero: 'romance',
        genero2: 'Romance'
    },
    {
        id: 8,
        anime: 'Sakura Card Captor Clear Card Arc #10',
        precio: 650,
        cantidad: 70,
        cantidadActual: 1,
        sinopsis: "¿Quién es la misteriosa figura que aparece en los sueños de Sakura? El misterio de las nuevas cartas transparentes no hace más que aumentar: Eriol sabe más de lo que dice, y de hecho no es el único que le oculta información a Sakura por su propio bien. ¿Qué peligro amenaza a la cazadora de cartas?",
        imagen: "./assets/images/scc10_product.jpg",
        coleccion: 'Sakura Card Captor Clear Card Arc',
        autor: 'CLAMP',
        editorial: 'Norma',
        idioma: 'Español',
        genero: 'fantasia',
        genero2: 'Fantasía'
    },
    {
        id: 9,
        anime: 'Noragami #20',
        precio: 750,
        cantidad: 60,
        cantidadActual: 1,
        sinopsis: "Yato le ha prometido a Hiyori que se enfrentará a su padre y ahora no hay vuelta atrás. Para lograrlo, necesitará un shinki lo suficientemente poderoso como para derrotar al hechicero, pero no será fácil conseguirlo. Mientras sopesa sus opciones, se da cuenta de un problema aún mayor: ahora que Bishamon ha visto el verdadero rostro del hechicero, su vida corre un grave peligro...",
        imagen: "./assets/images/noragami20_product.jpg",
        coleccion: 'Noragami',
        autor: 'Adachitoka',
        editorial: 'Panini',
        idioma: 'Español',
        genero: 'fantasia',
        genero2:'Fantasía'
    },
    {
        id: 10,
        anime: 'Death Note #1',
        precio: 930,
        cantidad: 120,
        cantidadActual: 1,
        sinopsis: "Light Yagami, aplicado estudiante modelo, se aburre soberanamente. Pero cuando encuentra un misterioso cuaderno, ante él se abren infinidad de posibilidades: con el poder de la vida o la muerte de sus semejantes en sus manos, ¿qué camino escogerá? ¿Ayudar o crear un mundo en el que él sea el señor supremo?",
        imagen: "./assets/images/deathnote1_product.jpg",
        coleccion: 'Death Note',
        autor: 'Tsugumi Ohba, Takeshi Obata',
        editorial: 'Ivrea',
        idioma: 'Español',
        genero: 'misterio',
        genero2: 'Misterio'
    },
    {
        id: 11,
        anime: 'Dragon Ball Super #1',
        precio: 790,
        cantidad: 90,
        cantidadActual: 1,
        sinopsis: "Dragon Ball Super cuenta la historia que sigue al enfrentamiento contra Majin Boo. Goku y sus amigos deben enfrentarse a nuevas múltiples desafíos: desde un torneo contra representantes de otro universo hasta otro contra ¡todos los universos! Y también el regreso de Trunks del futuro y la amenaza de una versión malvada de Goku. Con personajes entrañables que hacen su reaparición y nuevos personajes como el dios de la destrucción, Beerus. ¡Más poderes! ¡Más transformaciones! Todo se eleva a la SÚPER potencia en este manga.",
        imagen: "./assets/images/dbs1_product.jpg",
        coleccion: 'Dragon Ball Super',
        autor: 'Akira Toriyama, Toyotaro',
        editorial: 'Ivrea',
        idioma: 'Español',
        genero: 'accion',
        genero2: 'Acción'
    }
];



let arrayCart = [];



/* CANTIDAD DE UN PRODUCTO */
let productCounter = document.getElementById('quantity');
let totalItems = 0;
let totalSum = totalItems;

productCounter.innerHTML = totalItems;



/* MOSTRAR PRODUCTOS */
const productsContainer = document.getElementsByClassName('productsContainer')[0];
const mainSection = document.getElementsByTagName('section')[0];

function showProducts() {
    for (let i = 0; i < arrayProducts.length; i++) {

        producto = document.createElement('div');
        producto.className = 'manga ' + arrayProducts[i].genero + '';

        let newContent =
        `
        <div class="cardContainer" id="${arrayProducts[i].id}">
                <div class="imageContainer">
                    <img src="${arrayProducts[i].imagen}" alt="">
                </div>
                <div class="productInfo">
                    <p class="productTitle">${arrayProducts[i].anime}</p>
                    <p class="productPrice">$${arrayProducts[i].precio}</p>
                </div>
            </div>
        `

        producto.innerHTML = newContent;
        productsContainer.appendChild(producto);

        productsContainer.animate(
            [{
                opacity: '0'
            },
            {
                opacity: '1'
            }
            ], {
                duration: 1000,
                iterations: 1
            }).finished.then(() => {
        });
    }
}

showProducts();



/* FILTRO POR GÉNEROS */
let genresLi = document.querySelectorAll('.genresContainer ul li');
let mangaContainer = document.querySelectorAll('.manga');

function changeCategory() {
    for (let i = 0; i < genresLi.length; i++) {

        genresLi[i].onclick = function() {
            let genreAttribute = genresLi[i].getAttribute('data-category');

            for (let i = 0; i < mangaContainer.length; i++) {
     
                if (mangaContainer[i].classList[1] != genreAttribute) {
                    mangaContainer[i].style.display = 'none';
                } else {
                    mangaContainer[i].style.display = 'flex';
                }
            }
        }
    }
    genresLi[0].addEventListener('click', function() {
        for (let i = 0; i < mangaContainer.length; i++) {
            mangaContainer[i].style.display = 'flex';
        }
    });
}

changeCategory();



/* PRODUCTO SELECCIONADO */
const cardContainer = document.getElementsByClassName('cardContainer');

function selectProduct() {
    let productToDisplay;

    for (let i = 0; i < cardContainer.length; i++) {

        cardContainer[i].onclick = function() {
            let selectedProduct = this;

            if (arrayProducts[i].id == selectedProduct.id) {
                productToDisplay = arrayProducts[i];
                showSelectedProduct(productToDisplay);
            }
        }
    }
}

selectProduct();



const genresUlLi = document.getElementById('genresUlLi');
const backArrow = document.getElementById('backArrow');
const genresContainer = document.getElementById('genresContainer');



/* MOSTRAR PRODUCTO SELECCIONADO */
function showSelectedProduct(productToDisplay) {
    let divDisplayContainer = document.createElement('div');

    let newContent =
        `
        <div class="productSection" id="productSection">
                <div class="innerProductSection">
                    <div class="imageProduct">
                        <img src="${productToDisplay.imagen}" alt="">
                    </div>
                    <div class="detailsButtonsContainer">
                        <div class="productDetails">
                            <p>${productToDisplay.anime}</p>
                            <p>$${productToDisplay.precio}</p>
                            <p>${productToDisplay.cantidad} disponibles</p>
                        </div>

                        <button class="btnBuyNow" id="btnBuyNow">Comprar</button>
                        <button class="btnAdd" id="${productToDisplay.id}">Agregar</button>

                        <p id="added">Producto añadido</p>
                    </div>
                </div>
                <div class="detailsSection">

                    <div class="detailsContainer">
                        <div class="titlesContainer">
                            <div class="toggleDiv"><p>SINOPSIS</p></div>
                            <div class="toggleDiv"><p>DETALLES</p></div>
                        </div>
                        <div class="descriptionContainer">
                            <p>${productToDisplay.sinopsis}</p>
                        </div>
                    </div>

                </div>
            </div>
        `
    divDisplayContainer.innerHTML = newContent;
    mainSection.appendChild(divDisplayContainer);
    productsContainer.style.display = 'none';
    addCart();

    /* ABRIR VENTANA MODAL 'FINALIZAR COMPRA' */
    const btnBuyNow = document.getElementById('btnBuyNow');

    btnBuyNow.onclick = function() {
        checkoutOuterModal.style.display = 'flex';

        /* CERRAR VENTANA MODAL 'FINALIZAR COMPRA' */
        window.onclick = function(event) {
            if (event.target == checkoutOuterModal) {
                checkoutOuterModal.style.display = 'none';
            }
        }
    }

    /* ABRIR VENTANA MODAL 'COMPRA EXITOSA' */
    const btnCheckout = document.getElementById('btnCheckout');
    const purchaseSuccessfulOuterModal = document.getElementById('purchaseSuccessfulOuterModal');
    
    btnCheckout.onclick = function(event) {
        event.preventDefault();
        
        checkoutOuterModal.style.display = 'none';
        purchaseSuccessfulOuterModal.style.display = 'flex';

        setTimeout(() => {
            location.reload();
        }, 3000);
    }

    /* CAMBIAR ENTRE 'SINOPSIS' Y 'DETALLES' */
    const toggleDiv = document.querySelectorAll('.toggleDiv');

    for (let j = 0; j < toggleDiv.length; j++) {
        let descriptionContainer = document.querySelectorAll('.descriptionContainer p')[0];
        
        toggleDiv[0].setAttribute('data-toggle', "true");
        toggleDiv[1].setAttribute('data-toggle', "false");

        toggleDiv[j].addEventListener('click', function() {
            if (toggleDiv[1].getAttribute("data-toggle") == "false") {
                toggleDiv[1].setAttribute('data-toggle', "true");
                toggleDiv[1].style.color = "#dd30b4";
                toggleDiv[1].style.borderBottom = "1px solid";
               
                toggleDiv[0].setAttribute('data-toggle', "false");
                toggleDiv[0].style.color = "black";
                toggleDiv[0].style.borderBottom = "1px solid #d5d5d5";
                
                let details =
                `
                <p><span class='detailsTitle'>COLECCIÓN:</span> ${productToDisplay.coleccion}</p>
                <p><span class='detailsTitle'>AUTOR:</span> ${productToDisplay.autor}</p>
                <p><span class='detailsTitle'>EDITORIAL:</span> ${productToDisplay.editorial}</p>
                <p><span class='detailsTitle'>IDIOMA:</span> ${productToDisplay.idioma}</p>
                <p><span class='detailsTitle'>GÉNERO:</span> ${productToDisplay.genero2}</p>
                `;

                descriptionContainer.innerHTML = details;
            } else {
                toggleDiv[0].setAttribute('data-toggle', "true");
                toggleDiv[0].style.color = "#dd30b4";
                toggleDiv[0].style.borderBottom = "1px solid";

                toggleDiv[1].setAttribute('data-toggle', "false");
                toggleDiv[1].style.color = "black";
                toggleDiv[1].style.borderBottom = "1px solid #d5d5d5";
                
                descriptionContainer.innerHTML = productToDisplay.sinopsis;
            }
        });
    }
    genresUlLi.style.display = 'none';
    backArrow.style.display = 'flex';
    backArrow.style.marginLeft = '23px';
    genresContainer.style.justifyContent = 'flex-start';
}



/* CERRAR VENTANA MODAL CON X */
const closeModal = document.querySelectorAll('.closeModal');

function closeCart() {
    for (let i = 0; i < closeModal.length; i++) {

        const closeButtons = closeModal[i];

        closeButtons.addEventListener('click', function() {
            checkoutOuterModal.style.display = 'none';
            cartHolder.style.display = 'none';

            if (arrayCart.length) {
                let singleProduct = document.querySelectorAll('.modalProduct');

                singleProduct.forEach(element => {
                    element.remove();
                });
            }
        });
    }
}

closeCart();



let position;

/* AGREGAR AL CARRITO */
function addCart() {
    const addToCart = document.getElementsByClassName('btnAdd')[0];
    const added = document.getElementById('added');
    let alreadyAdded = false;

    addToCart.onclick = function() {
        let productID = this.getAttribute('id');

        /* NO REPETIR PRODUCTO */
        for (let i = 0; i < arrayCart.length; i++) {
            if (arrayCart[i].id == productID) {
                alreadyAdded = true;
            }
        }

        for (let i = 0; i < arrayProducts.length; i++) {

            if (arrayProducts[i].id == productID && !alreadyAdded) {
                arrayCart.push(arrayProducts[i]);
                
                position = arrayCart.length-1;
                arrayCart[position].cantidadActual = 1;
                added.style.display = 'block';
                setTimeout(() => {
                    added.style.display = 'none';
                }, 5000);

                /* MOSTRAR CANTIDAD DE PRODUCTOS TOTALES EN CARRITO */
                totalItems++;
                totalSum++;
                productCounter.innerHTML = totalItems;

            } else if (arrayProducts[i].id == productID && alreadyAdded) {
                /* SI LA CANTIDAD ACTUAL PASA EL STOCK MÁXIMO */
                if (arrayProducts[i].cantidadActual == arrayProducts[i].cantidad) {
                    continue;
                }

                position = arrayCart.indexOf(arrayProducts[i]);
                arrayCart[position].cantidadActual++;
                totalItems++;
                totalSum++;
                alreadyAdded = false;

                for (let i = 0; i < arrayCart.length; i++) {
                    productCounter.innerHTML = totalSum;
                    if (totalItems <= arrayProducts[productID].cantidad) {
                        productCounter.innerHTML = totalSum;
                    }
                }
            }
        }
    }
}



/* MOSTRAR CARRITO */
const cart = document.getElementById('cartContainer');
const cartHolder = document.getElementsByClassName('outerModal')[0];
const modalContainer = document.getElementsByClassName('modalContainer')[0];
const innerModal = document.getElementsByClassName('innerModal')[0];
const cartStatus = document.getElementById('cartStatus');
const purchaseDetails = document.getElementById('purchaseDetails');
let totalPrice = 0;

cart.addEventListener('click', showCart);

function showCart() {
    cartHolder.style.display = 'flex';

    if (arrayCart.length == 0) {
        cartStatus.style.display = 'block';
        purchaseDetails.style.display = 'none';
        modalContainer.style.width = '300px';
    }

    for (let i = 0; i < arrayCart.length; i++) {

        if (arrayCart.length > 0) {
            let divModalProduct = document.createElement('div');
            divModalProduct.classList.add('modalProduct');
            innerModal.insertBefore(divModalProduct, innerModal.children[i]);

            let divModalProductImage = document.createElement('div');
            divModalProductImage.classList.add('modalProductImage');
            divModalProduct.insertBefore(divModalProductImage, divModalProduct.children[0])

            let cartImagen = document.createElement('img');
            cartImagen.setAttribute("class", "modalProductImage");
            cartImagen.setAttribute("src", arrayCart[i].imagen);
            divModalProductImage.insertBefore(cartImagen, divModalProductImage.children[0]);

            let divModalProductInfo = document.createElement('div');
            divModalProductInfo.classList.add('modalProductInfo');
            divModalProduct.appendChild(divModalProductInfo);

            let cartAnime = document.createElement('p');
            cartAnime.classList.add('product');
            cartAnime.innerHTML = arrayCart[i].anime;
            divModalProductInfo.appendChild(cartAnime);

            totalPrice = arrayCart[i].precio * arrayCart[i].cantidadActual;
            let cartPrecio = document.createElement('p');
            cartPrecio.classList.add('product');
            cartPrecio.innerHTML = '$' + totalPrice;
            divModalProductInfo.appendChild(cartPrecio);

            let cartCantidad = document.createElement('p');
            let ceroProductos = arrayCart[i].cantidadActual;
            cartCantidad.classList.add('product');
            cartCantidad.innerHTML = ceroProductos;
            divModalProductInfo.appendChild(cartCantidad);

            let minusIcon = document.createElement('i');
            minusIcon.classList.add('fa-solid');
            minusIcon.classList.add('fa-minus');
            minusIcon.setAttribute('data-idProducto', arrayCart[i].id);
            cartCantidad.appendChild(minusIcon);

            let plusIcon = document.createElement('i');
            plusIcon.classList.add('fa-solid');
            plusIcon.classList.add('fa-plus');
            plusIcon.setAttribute('data-idProducto', arrayCart[i].id);
            cartCantidad.appendChild(plusIcon);
            
            plusIcon.onclick = function() {
                let plusID = this.getAttribute('data-idProducto');

                totalItems = arrayCart[i].cantidadActual;

                if (totalItems < arrayCart[i].cantidad) {

                    for (let i = 0; i < arrayCart.length; i++) {

                        if (arrayCart[i].id == plusID) {
                            totalItems = arrayCart[i].cantidadActual++;

                            if (totalItems <= arrayCart[i].cantidad) {
                                totalPrice = arrayCart[i].precio * arrayCart[i].cantidadActual;
                                cartPrecio.innerHTML = '$' + totalPrice;
                            }
                            totalItems++;
                            totalSum++;
                        }
                    }
                }
                cartCantidad.innerHTML = totalItems;
                productCounter.innerHTML = totalSum;
                cartCantidad.appendChild(minusIcon);
                cartCantidad.appendChild(plusIcon);
                subtotal.innerHTML = 'Subtotal: $' + getTotal();
            }

            minusIcon.onclick = function() {
                let minusID = this.getAttribute('data-idProducto');

                totalItems = arrayCart[i].cantidadActual;

                if (totalItems > 1) {

                    for (let i = 0; i < arrayCart.length; i++) {

                        if (arrayCart[i].id == minusID) {
                            totalItems = arrayCart[i].cantidadActual--;

                            if (totalItems <= arrayCart[i].cantidad) {
                                totalPrice = arrayCart[i].precio * arrayCart[i].cantidadActual;
                                cartPrecio.innerHTML = '$' + totalPrice;
                            }
                            totalItems--;
                            totalSum--;
                        }
                    }
                }
                cartCantidad.innerHTML = totalItems;
                productCounter.innerHTML = totalSum;
                cartCantidad.appendChild(minusIcon);
                cartCantidad.appendChild(plusIcon);
                subtotal.innerHTML = 'Subtotal: $' + getTotal();
            }

            let pTrashIcon = document.createElement('p');
            divModalProductInfo.appendChild(pTrashIcon);
            let trashIcon = document.createElement('i');
            trashIcon.classList.add('fa-solid');
            trashIcon.classList.add('fa-trash-can');
            trashIcon.setAttribute('data-idProducto', arrayCart[i].id);
            pTrashIcon.appendChild(trashIcon);

            cartStatus.style.display = 'none';
            purchaseDetails.style.display = 'flex';
            purchaseDetails.style.flexDirection = 'column';
            purchaseDetails.style.alignItems = 'flex-end';

            modalContainer.style.width = 'auto';
            modalContainer.style.maxHeight = '85%';

            let subtotal = document.getElementById('subtotal');
            subtotal.innerHTML = 'Subtotal: $' + getTotal();



            /* BORRAR PRODUCTO DEL CARRITO */
            for (let i = 0; i < arrayCart.length; i++) {
                
                trashIcon.addEventListener('click', function() {
                    let productId = this.getAttribute('data-idProducto');
                    
                    for (let j = 0; j < arrayCart.length; j++) {
                        
                        if (arrayCart[j].id == productId) {
                            let newQuantity = totalSum - arrayCart[j].cantidadActual;

                            totalItems = newQuantity;
                            totalSum = newQuantity;
                            arrayCart.splice(j, 1);
                            alreadyAdded = false;
                            productCounter.innerHTML = newQuantity; 
                            subtotal.innerHTML = 'Subtotal: $' + getTotal();

                            this.parentElement.parentElement.parentElement.remove();
                          
                            if (!arrayCart.length) {
                                cartStatus.style.display = "block";
                                purchaseDetails.style.display = "none";
                            }
                        }
                    }
                });
            }
        }
    }



    /* CERRAR CARRITO CON BOTÓN */
    let closeCart = document.getElementById('btnKeepBuying');

    closeCart.addEventListener('click', function() {
        cartHolder.style.display = 'none';

        if (arrayCart.length) {
            let singleProduct = document.querySelectorAll('.modalProduct');

            singleProduct.forEach(element => {
                element.remove();
            });
        }
    });

    /* CERRAR CARRITO CON MODAL */
    let modal = document.getElementById('outerModal');

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";

            if (arrayCart.length) {
                let singleProduct = document.querySelectorAll('.modalProduct');

                singleProduct.forEach(element => {
                    element.remove();
                });
            }
        }
    }
}



function getTotal() {
    let subtotalPrice = 0;

    for (let i = 0; i < arrayCart.length; i += 1) {
        subtotalPrice += arrayCart[i].precio * arrayCart[i].cantidadActual;
    }
    return subtotalPrice;
}



/* VOLVER AL INICIO */
const home = document.getElementById('homeContainer');

function goBack() {
    const indexSection = document.getElementById('productsContainer');
    const productSection = document.getElementById('productSection');

    indexSection.style.display = 'flex';

    productSection.remove();

    genresUlLi.style.display = 'flex';
    backArrow.style.display = 'none';
    genresContainer.style.justifyContent = 'center';
}

home.addEventListener('click', goBack);
backArrow.addEventListener('click', goBack);



/* VENTANA MODAL 'FINALIZAR COMPRA' */
const btnModalBuy = document.getElementById('btnBuy');
const checkoutOuterModal = document.getElementById('checkoutOuterModal');
let modal = document.getElementById('outerModal');

btnModalBuy.onclick = function() {
    checkoutOuterModal.style.display = 'flex';
    modal.style.display = 'none';

    /* CERRAR VENTANA MODAL 'FINALIZAR COMPRA' */
    window.onclick = function(event) {
        if (event.target == checkoutOuterModal) {
            checkoutOuterModal.style.display = 'none';
            modal.style.display = 'none';

            if (arrayCart.length) {
                let singleProduct = document.querySelectorAll('.modalProduct');

                singleProduct.forEach(element => {
                    element.remove();
                });
            }
        }
    }
}