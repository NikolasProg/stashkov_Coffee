let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});

let products = [
    {
        id: 1,
        name: 'ЭСПРЕССО',
        image: '1.png',
        prices: {
            250: 120,
            350: 'такого объёма нет',
            400: 'такого объёма нет',
        },
		description: 'Эспрессо — это вдохновение в каждом глотке! ☕✨ Почувствуйте мощь и насыщенность этого короткого напитка, который пробуждает вас своим насыщенным ароматом и богатым вкусом. Освежите свой день с чашечкой настоящего итальянского эспрессо. ☕🇮🇹 #КофейноеНаслаждение',
    },
    {
        id: 2,
        name: 'АМЕРИКАНО',
        image: '2.png',
        prices: {
            250: 110,
            350: 140,
            400: 'такого объёма нет',
        },
		description: 'Американо — свежесть и легкость в каждом глотке! ☕🌞 Нежный эспрессо, разбавленный горячей водой, создаёт удивительно мягкий напиток с насыщенным ароматом и деликатным вкусом. Откройте для себя лёгкость кофейного наслаждения в каждой чашке американо. ☕🌿 #КофейнаяГармония',
    },
    {
        id: 3,
        name: 'КАПУЧИНО',
        image: '3.png',
        prices: {
            250: 140,
            350: 170,
            400: 200,
        },
		description: 'Капучино — это искусство кофейного уюта! ☕🎨 Слои нежного эспрессо, густой молочной пены и легкой порции воздушной пенки образуют чарующий вкус и аромат. Погрузитесь в мир тепла и наслаждения с каждым глотком капучино. ☕🌟 #КофейнаяИзысканность',
    },
    {
        id: 4,
        name: 'ЛАТТЕ',
        image: '4.png',
        prices: {
            250: 'такого объёма нет',
            350: 170,
            400: 200,
        },
		description: 'Латте — это настоящее искусство гармонии в каждой чашке! ☕🌈 Отличается бархатистой текстурой молока, окутывающей нежный эспрессо. Погрузитесь в волшебный мир мягкости и насыщенности, наслаждаясь утонченным вкусом латте. Превратите свой кофейный момент в настоящее удовольствие. ☕💖 #КофейноеНаслаждение',
    },
    {
        id: 5,
        name: 'РАФ',
        image: '5.png',
        prices: {
            250: 'такого объёма нет',
            350: 180,
            400: 200,
        },
		description: 'Раф — это бархатное наслаждение в каждом глотке! ☕🍰 Это сочетание нежного эспрессо, теплого молока и богатого ванильного сиропа. Погрузитесь в атмосферу нежности и утонченности с этим восхитительным кофейным напитком. Освежите свой вкусовой опыт с рафом — деликатным угощением для вашего вкуса. ☕✨ #КофейнаяНежность',
    },
    {
        id: 6,
        name: 'РАФ ХАЛВА',
        image: '6.png',
        prices: {
            250: 'такого объёма нет',
            350: 180,
            400: 200,
        },
		description: 'Раф Халва — это пленительное соединение нежного эспрессо, теплого молока и насыщенной сладости халвы. Наслаждайтесь уникальным вкусом, где традиционные восточные ноты встречаются с ароматом свежеиспеченного кофе. Погрузитесь в волшебный мир вкусов и наслаждения с этим удивительным кофейным напитком. ☕🌰✨ #КофейнаяИзысканность',
    },
    {
        id: 7,
        name: 'ФЛЕТ УАЙТ',
        image: '7.png',
        prices: {
            250: 160,
            350: 190,
            400: 'такого объёма нет',
        },
		description: 'Флет Уайт — это легкость и изысканность в каждой чашке! ☕🍼 Эспрессо, облегченное горячим молоком и нежной пеной, создает напиток с бархатистой текстурой и приятным вкусом. Погрузитесь в чувственный опыт кофейной гармонии с Флет Уайт. ☕🌟 #КофейнаяЛегкость',
    },
    {
        id: 8,
        name: 'МОККАЧИНО',
        image: '8.png',
        prices: {
            250: 'такого объёма нет',
            350: 170,
            400: 200,
        },
		description: 'Моккачино — это сочетание страстного эспрессо, гладкого шоколада и воздушной пены молока! ☕🍫 Наслаждайтесь утонченным вкусом кофе и нежностью шоколадного аромата в каждом глотке. Погрузитесь в мир неповторимого наслаждения с этим изысканным напитком. ☕✨ #КофейнаяСтрасть',
    },
    {
        id: 9,
        name: 'ГЛЯСЕ',
        image: '9.png',
        prices: {
            250: 'такого объёма нет',
            350: 200,
            400: 230,
        },
		description: 'Глясе — это тонкий шарм и насыщенный вкус в каждой ложке! 🍧✨ Сладкий десерт с яркими оттенками, охваченный изысканной глазурью, раскроет перед вами настоящий вкусовой праздник. Погрузитесь в мир сладких наслаждений с этим изысканным десертом Глясе. 🍰🌈 #ДесертнаяРоскошь',
    },
];

let listCards = {};

// Добавьте следующий код после вашего существующего кода создания продуктов
products.forEach((product) => {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');
    newDiv.innerHTML = `
        <img src="image/${product.image}" data-description="${product.description}" class="picture">
        <div class="title">${product.name}</div>
        <div class="price" id="price_${product.id}">${getFormattedPrice(product.prices[250])}</div>
        <select id="user_obym_${product.id}" onchange="updatePrice(${product.id})">
            <option value="250">250 мл</option>
            <option value="350">350 мл</option>
            <option value="400">400 мл</option>
        </select>
        <button onclick="addToCard(${product.id})">Добавить в корзину</button>`;
    list.appendChild(newDiv);
});

// Добавьте следующий код после вашего существующего кода
document.addEventListener('DOMContentLoaded', function () {
    // Получите все элементы с классом 'item'
    let items = document.querySelectorAll('.item');

    // Добавьте обработчик события для каждого элемента
    items.forEach(function (item) {
        let img = item.querySelector('img');

        // Добавьте обработчик события для клика на изображение
        img.addEventListener('click', function () {
            // Получите описание товара из атрибута 'data-description'
            let description = img.getAttribute('data-description');

            // Покажите всплывающее окно с описанием
            alert(description);
        });
    });
});

function initApp() {
    products.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price" id="price_${key}">${getFormattedPrice(value.prices[250])}</div>
            <select id="user_obym_${key}" onchange="updatePrice(${key})">
                <option value="250">250 мл</option>
                <option value="350">350 мл</option>
                <option value="400">400 мл</option>
            </select>
            <button onclick="addToCard(${key})">Добавить в корзину</button>`;
        list.appendChild(newDiv);
    });
}


// Новая функция для форматирования цены
function getFormattedPrice(price) {
    return price !== 'такого объёма нет' ? String(price).replace(/р$/, '') + 'р' : 'такого объёма нет';
}

function addToCard(key) {
    const selectedVolume = document.getElementById(`user_obym_${key}`).value;
    const productKey = `${key}_${selectedVolume}`;

    // Проверка, есть ли у выбранного объема действительная цена
    if (products[key - 1].prices[selectedVolume] !== 'такого объёма нет') {
        if (!listCards[productKey]) {
            // Товара еще нет в корзине, добавляем новый
            listCards[productKey] = {
                ...products[key - 1],
                quantity: 1,
                selectedVolume: selectedVolume,
                price: products[key - 1].prices[selectedVolume]
            };
        } else {
            // Товар уже в корзине, увеличиваем количество и обновляем цену
            listCards[productKey].quantity++;
            listCards[productKey].price = products[key - 1].prices[selectedVolume] * listCards[productKey].quantity;
        }

        reloadCard();
    } else {
        alert('Такого объёма нет. Выберите другой объем.');
    }
	
	// Обновление текста "Корзина" с суммой товаров
    updateShoppingText();
}


function reloadCard() {
    listCard.innerHTML = '';
    let totalPrice = 0;
    let count = 0;

    Object.keys(listCards).forEach((productKey) => {
        const value = listCards[productKey];

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}" class="picture"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}р</div>
                <div>Объем: ${value.selectedVolume} мл</div>
                <div>
                    <button onclick="changeQuantity('${productKey}', 'decrement')">-</button>
                    <div class="count" id="count_${productKey}">${value.quantity}</div>
                    <button onclick="changeQuantity('${productKey}', 'increment')">+</button>
                </div>`;
            listCard.appendChild(newDiv);

            totalPrice += value.price;
            count += value.quantity;
        }
    });

    // Обновление текста "Корзина" с суммой товаров
    updateShoppingText();

    total.innerText = `${totalPrice.toLocaleString()}р`;
    quantity.innerText = count;
}


function changeQuantity(productKey, action) {
    const selectedVolume = listCards[productKey].selectedVolume;
    let currentQuantity = listCards[productKey].quantity;

    if (action === 'decrement') {
        if (currentQuantity > 1) {
            currentQuantity--;
        } else {
            // Если количество равно 1 и происходит уменьшение, удаляем товар из корзины
            delete listCards[productKey];
        }
    } else if (action === 'increment') {
        currentQuantity++;
    }

    if (listCards[productKey]) {
        listCards[productKey].quantity = currentQuantity;
        listCards[productKey].price = listCards[productKey].prices[selectedVolume] * currentQuantity;
    }

    reloadCard();
	
	// Обновление текста "Корзина" с суммой товаров
    updateShoppingText();
}


function updatePrice(key) {
    const selectedVolume = document.getElementById(`user_obym_${key}`).value;

    // Проверка, есть ли у выбранного объема действительная цена
    if (products[key - 1].prices[selectedVolume] !== 'такого объёма нет') {
        const priceElement = document.getElementById(`price_${key}`);
        priceElement.innerText = getFormattedPrice(products[key - 1].prices[selectedVolume]);
    } else {
        // Обработка случая, когда у выбранного объема нет цены
        const priceElement = document.getElementById(`price_${key}`);
        priceElement.innerText = 'такого объёма нет';
    }
}

// "Корзина" заменяется общей стоимостью
function updateShoppingText() {
    let totalQuantity = 0;
    let totalSum = 0;

    // Подсчет общего количества товаров и суммы в корзине
    Object.keys(listCards).forEach((productKey) => {
        const value = listCards[productKey];
        if (value != null) {
            totalQuantity += value.quantity;
            totalSum += value.price;
        }
    });

    // Обновление текста "Корзина" с суммой товаров
    const shoppingText = totalQuantity > 0 ? `${totalSum.toLocaleString()}р` : 'Корзина';
    
    // Находим элемент <p> и обновляем его содержимое
    document.querySelector('.shopping p').innerText = shoppingText;
}

// JavaScript для управления всплывающей формой

const overlay = document.getElementById('overlay');
const form = document.getElementById('form');
const totalDiv = document.querySelector('.total');

// Показать форму при клике на totalDiv
totalDiv.addEventListener('click', () => {
    overlay.style.display = 'block';
    form.style.display = 'block';
    setTimeout(() => {
        form.style.opacity = '1';
        form.style.pointerEvents = 'auto';
    }, 50);
});

// Скрыть форму при клике вне её области
overlay.addEventListener('click', () => {
    form.style.opacity = '0';
    form.style.pointerEvents = 'none';
    setTimeout(() => {
        overlay.style.display = 'none';
        form.style.display = 'none';
    }, 300);
});
