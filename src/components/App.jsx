import React, { useState, useMemo, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import KanbanBoard, {
  COLUMN_KEY_DONE,
  COLUMN_KEY_ONGOING,
  COLUMN_KEY_TODO,
} from "./KanbanBoard";
import AdminContext from "../context/AdminContext";

function App() {
  const [todoList, setTodoList] = useState([
    { title: "开发任务-1", status: "2022-05-22 18:15" },
    { title: "开发任务-3", status: "2022-06-22 18:15" },
    { title: "开发任务-5", status: "2022-07-22 18:15" },
    { title: "测试任务-3", status: "2022-07-23 18:15" },
  ]);
  const [ongoingList, setOngoingList] = useState([
    { title: "开发任务-4", status: "2022-05-22 18:15" },
    { title: "开发任务-6", status: "2022-06-22 18:15" },
    { title: "测试任务-2", status: "2022-07-22 18:15" },
  ]);
  const [doneList, setDoneList] = useState([
    { title: "开发任务-2", status: "2022-06-24 18:15" },
    { title: "测试任务-1", status: "2022-07-03 18:15" },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  // 对这个写法有疑问，经下面的 a-01 测试理解了, 这样写可以将变量作为 key 去使用。 2022-09-26
  const updaters = {
    [COLUMN_KEY_TODO]: setTodoList,
    [COLUMN_KEY_ONGOING]: setOngoingList,
    [COLUMN_KEY_DONE]: setDoneList,
  };
  const handleAdd = (column, newCard) => {
    // console.log(column, newCard);
    updaters[column]((currentStat) => [newCard, ...currentStat]);
  };
  const handleRemove = (column, cardToRemove) => {
    updaters[column]((currentStat) =>
      currentStat.filter((item) => item.title !== cardToRemove.title)
    );
  };

  const handleToggleAdmin = (evt) => {
    setIsAdmin(!isAdmin);
  };

  useEffect(() => {
    setTimeout(() => {
      setTodoList(todoList);
      setOngoingList(ongoingList);
      setDoneList(doneList);
      setIsLoading(false);
    }, 450);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          我的看板
          <label>
            <input
              type="checkbox"
              value={isAdmin}
              onChange={handleToggleAdmin}
            />
            管理员模式
          </label>
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <AdminContext.Provider value={isAdmin}>
        <KanbanBoard
          // {...(todoList, ongoingList, doneList)}
          todoList={todoList}
          ongoingList={ongoingList}
          doneList={doneList}
          onAdd={handleAdd}
          onRemove={handleRemove}
          isLoading={isLoading}
        ></KanbanBoard>
      </AdminContext.Provider>
    </div>
  );
}

export default App;
