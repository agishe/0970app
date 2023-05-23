const user = {
  name: "Иван",
  lastname: "Иванов",
  email: "ivan@ya.ru",
  id: "1",
  about: "Тут я рассказываю о себе и своих увлечениях",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&w=200&q=80",
};

const users = {
  0: { name: "Юлия", lastname: "Свиридова" },
  1: { name: "Петр", lastname: "Тетерин" },
  2: { name: "Владислав", lastname: "Яблочков" },
  3: { name: "Ника", lastname: "Кораблева" },
  4: { name: "Ирина", lastname: "Иванова" },
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}