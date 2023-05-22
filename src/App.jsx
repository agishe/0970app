import "./App.css";

function App() {
  return (
    <div className="container mt-5">
      <div className="row mt-3">
        <div className="col-md-3">
          <div className="nav flex-column nav-pills">
            <a className="nav-link" href="profile">
              Профиль
            </a>
            <a className="nav-link" href="messages">
              Сообщения
            </a>
            <a className="nav-link" href="settings">
              Настройки
            </a>
            <a className="nav-link" href="shop">
              Магазин
            </a>
          </div>
        </div>
        <div className="col-md-9"></div>
      </div>
    </div>
  );
}

export default App;
