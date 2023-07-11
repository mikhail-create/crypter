// Функция для получения всех продуктов
function getAllProducts() {
    return fetch('http://localhost:3000/products')
        .then(response => response.json())
        .then(data => {
            // Обработка полученных данных
            return data;
        })
        .catch(error => {
            // Обработка ошибок
            console.error(error);
        });
}

// Функция для получения продукта по id
function getProductById(id) {
    return fetch(`http://localhost:3000/products/${id}`)
        .then(response => response.json())
        .then(data => {
            // Обработка полученных данных
            return data;
        })
        .catch(error => {
            // Обработка ошибок
            console.error(error);
        });
}

// Функция для получения изображения по имени файла
function getImage(filename) {
    return fetch(`http://localhost:3000/images/${filename}`)
        .then(response => response.blob())
        .then(blob => {
            // Обработка полученного изображения
            return URL.createObjectURL(blob);
        })
        .catch(error => {
            // Обработка ошибок
            console.error(error);
        });
}