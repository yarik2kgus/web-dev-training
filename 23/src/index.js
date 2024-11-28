// Импорт нормализации стилей
import 'normalize.css';

// Импорт всех изображений из папки
const importAllImages = (requireContext) => {
  requireContext.keys().forEach(requireContext);
};
importAllImages(require.context('./img', false, /\.(png|jpe?g|gif|svg)$/));

// Импорт стилей Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// Пользовательские стили
import './styles/style.css';