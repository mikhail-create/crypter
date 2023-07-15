// Функция для получения всех продуктов
export const getAllProcuts = ({ page = 1, limit = 8 } = {}) => {
  const url = `https://crypter-backend.vercel.app/products?page=${page}&limit=${limit}`;

  return fetch(url)
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      return [];
    });
};

// Функция для получения продукта по id
export function getProductById(id) {
  return fetch(`https://crypter-backend.vercel.app/products/${id}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to fetch product');
      }
    })
    .catch(error => {
      console.error(error);
      return {};
    });
}

// Функция для получения изображения по имени файла
export async function getImage(filename) {
  try {
    const response = await fetch(`https://crypter-backend.vercel.app/images/${filename}`);
    const blob = await response.blob();
    return URL.createObjectURL(blob);
  } catch (error) {
    // Обработка ошибок
    console.error(error);
  }
}
