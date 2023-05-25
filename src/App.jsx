import { NavLink, Route, Routes } from "react-router-dom";
// import "./App.css";
import { Profile } from "./components/Profile";
import { Messages } from "./components/Messages";
import { Settings } from "./components/Settings";
import { Shop } from "./components/Shop";
import { Advice } from "./components/Advice";

function App(props) {
  console.log(props);
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <NavLink className="nav-link" to="profile">
              Профиль
            </NavLink>
            <NavLink className="nav-link" to="messages">
              Сообщения
            </NavLink>
            <NavLink className="nav-link" to="settings">
              Настройки
            </NavLink>
            <NavLink className="nav-link" to="shop">
              Магазин
            </NavLink>
            <NavLink className="nav-link" to="advice">
              Советы
            </NavLink>
          </div>
        </div>
        <div className="col-md-9">
          <Routes>
            <Route
              path="/"
              element={
                <h3 className="text-red-500 text-2xl text-center">
                  Ваш личный кабинет. Пользуйтель меню слева.
                </h3>
              }
            />
            <Route
              path="/profile/*"
              element={<Profile function={props.function.key_getUser} />}
            />
            <Route
              path="/messages"
              element={<Messages function={props.function.key_getUsers} />}
            />
            <Route path="/settings" element={<Settings />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/advice" element={<Advice />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
