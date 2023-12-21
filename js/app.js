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
            250: 100,
            350: 'такого объёма нет',
            400: 'такого объёма нет',
        },
		description: 'Эспрессо - искусство кофейной страсти в каждой капле. Короткий, но могучий напиток, предлагающий вам насладиться интенсивным вкусом и ароматом свежеобжаренного кофе. Вдохновленный итальянской традицией, эспрессо - это мгновение энергии и удовольствия в каждой чашке.',
    },
    {
        id: 2,
        name: 'АМЕРИКАНО',
        image: '2.png',
        prices: {
            250: 100,
            350: 130,
            400: 130,
        },
		description: 'Американо - вдохновляющее кофейное приключение. Легкий и освежающий напиток, созданный для тех, кто ценит невероятный баланс между насыщенным вкусом и мягкой текстурой. С каждым глотком американо подарит вам утреннюю бодрость или послеполуденное освежение, даруя момент покоя и удовольствия. Откройте для себя американо и наслаждайтесь кофееной гармонией в каждой чашке.',
    },
    {
        id: 3,
        name: 'КАПУЧИНО',
        image: '3.png',
        prices: {
            250: 130,
            350: 160,
            400: 190,
        },
		description: 'Капучино - истинное удовольствие для ценителей кофейного искусства. Этот напиток совершенно сочетает в себе мягкую молочную пенку, насыщенный вкус эспрессо и легкую приправу. Каждая чашка капучино — это настоящий момент наслаждения, где игра текстур и гармония вкусов создают уникальный кофейный опыт. Разбудите свои чувства с капучино и наслаждайтесь изысканным сочетанием аромата и вкуса.',
    },
    {
        id: 4,
        name: 'ЛАТТЕ',
        image: '4.png',
        prices: {
            250: 'такого объёма нет',
            350: 160,
            400: 190,
        },
		description: 'Латте — это не просто кофе, а настоящее кофейное путешествие. Этот изысканный напиток объединяет в себе нежный вкус эспрессо, влажную молочную пенку и нежные нотки ванили. С каждым глотком латте подарит вам мягкость и умиротворение, создавая идеальное сочетание кофе и молока. Разнообразие вариаций объема позволяет выбрать именно тот формат, который подходит вашим предпочтениям. Откройте для себя мир настоящего удовольствия с латте.',
    },
    {
        id: 5,
        name: 'РАФ',
        image: '5.png',
        prices: {
            250: 'такого объёма нет',
            350: 170,
            400: 190,
        },
		description: 'Раф — это не просто напиток, а настоящее кофейное удовольствие для ценителей изысканного вкуса. Сочетание великолепного эспрессо, нежного молока и неповторимого аромата халвы создает уникальный вкусовой букет. Каждая глотка рафа приносит радость и наслаждение, раскрывая перед вами мир кофейного искусства. Выберите свой объем и погрузитесь в атмосферу удовольствия с нашим рафом.',
    },
    {
        id: 6,
        name: 'РАФ ХАЛВА',
        image: '6.png',
        prices: {
            250: 'такого объёма нет',
            350: 170,
            400: 190,
        },
		description: 'Раф Халва — это кофейное удовольствие, приносящее радость каждому глотку. В этом напитке встречаются изысканный вкус эспрессо и неповторимая сладость халвы. Каждый глоток — настоящее путешествие по миру вкуса. Погрузитесь в невероятное сочетание кофейного аромата и нежной сладости, созданной природой. Раф Халва — это удовольствие, которое невозможно забыть.Выберите свой объем и наслаждайтесь моментом вместе с нами.',
    },
    {
        id: 7,
        name: 'ФЛЕТ УАЙТ',
        image: '7.png',
        prices: {
            250: 150,
            350: 180,
            400: 'такого объёма нет',
        },
		description: 'Флет Уайт — это мгновение освежения, которое подарит вам легкость и наслаждение. Этот освежающий напиток объединяет бодрящий эспрессо и молочную пену, создавая утонченный вкусовой баланс. Нежная текстура и ароматный кофейный характер делают Флет Уайт идеальным выбором для ценителей кофейных удовольствий. Освежите свой день с этим легким и вдохновляющим напитком, который приготовлен с заботой и профессионализмом.',
    },
    {
        id: 8,
        name: 'МОККАЧИНО',
        image: '8.png',
        prices: {
            250: 'такого объёма нет',
            350: 160,
            400: 190,
        },
		description: 'Моккачино — это настоящее приглашение в мир наслаждения и утонченного вкуса. Этот кофейный напиток сочетает в себе богатство эспрессо, молока и нежной шоколадной ноты, создавая уникальный и неповторимый вкус. Моккачино восхищает своей гармонией и изысканным ароматом, принося радость каждому глотку. Разнообразные слои вкуса и теплая текстура делают этот напиток идеальным спутником для ценителей кофейного искусства. Погрузитесь в мир наших моккачино и насладитесь каждым моментом кофейного наслаждения.',
    },
    {
        id: 9,
        name: 'ГЛЯСЕ',
        image: '9.png',
        prices: {
            250: 'такого объёма нет',
            350: 190,
            400: 220,
        },
		description: 'Глясе — это настоящая неповторимость в каждой чашке кофе. Этот изысканный напиток завоюет ваше внимание своим утонченным вкусом и насыщенным ароматом. Глясе приглашает вас на кофейное путешествие, где каждый глоток становится настоящим искусством. Наслаждайтесь этим уникальным кофейным опытом, который откроет для вас новые грани вкуса и подарит неповторимые моменты наслаждения.',
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

let tg = window.Telegram.WebApp;
let order = document.getElementById("order");
tg.expand();

order.addEventListener("click", () => {
    document.getElementById("error").textContent = '';

    let name = document.getElementById("user_name").value;
    let email = document.getElementById("user_email").value;
    let phone = document.getElementById("user_phone").value;
    let koment = document.getElementById("user_koment").value;

    // Проверка данных
    if (name.length < 5) {
        document.getElementById("error").textContent = "Ошибка в имени";
        return;
    }
    if (phone.length < 5) {
        document.getElementById("error").textContent = "Ошибка в номере телефона";
        return;
    }

    let data = {
        name: name,
        email: email,
        phone: phone,
        koment: koment,
        items: cartData, // Передаем данные из корзины
        total: getTotalPrice() // Получаем общую сумму заказа из функции getTotalPrice
    };

    // Отправка данных в Telegram
    tg.sendData(JSON.stringify(data));
    tg.close();
});

