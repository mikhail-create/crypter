// Функция для получения всех продуктов
async function getAllProducts() {
  try {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    return data;
  } catch (error) {
    // Обработка ошибок
    console.error(error);
  }
}

// Функция для получения продукта по id
async function getProductById(id) {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    // Обработка ошибок
    console.error(error);
  }
}

// Функция для получения изображения по имени файла
async function getImage(filename) {
  try {
    const response = await fetch(`http://localhost:3000/images/${filename}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    // Обработка ошибок
    console.error(error);
  }
}