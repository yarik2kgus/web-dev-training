const users = [
    { name: 'mario', premium: true },
    { name: 'luigi', premium: false },
    { name: 'yoshi', premium: true },
    { name: 'toad', premium: true },
    { name: 'peach', premium: false }
  ];

  const getPremUsers = (users) => {
    return users.filter(user => user.premium);
  };

//export default users; // дефолт экспорт обозначает основной обьект который мы хотим экспортировать, бывает толкьо 1 на весь файл

export {getPremUsers, users as default}//читай выше