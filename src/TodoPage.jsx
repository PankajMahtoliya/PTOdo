import React from "react";
import Header from "./Header";
import Container from "./Container";
import H3 from "./H3";
import H1 from "./H1";
import TodoForm from "./TodoForm";
import TodoRow from "./TodoRow";
import Button from "./Button";
import moment from "moment";
import {
  extractIdsFromData,
  generateUniqueId,
  removeDuplicateObjects,
} from "./helper";
import Sidebar from "./Sidebar";

function TodoPage() {
  const [todoFormVisible, setTodoFormVisibility] = React.useState(false);

  const userId = JSON.parse(localStorage.getItem("user")).id;
  const savedTodoList = JSON.parse(localStorage.getItem(`todoList_${userId}`)) || [];
  const HistoryTodoList = JSON.parse(localStorage.getItem(`historyList_${userId}`)) || [];
  const [todoList, setTodoList] = React.useState(savedTodoList);

  const completeTodoList = todoList.filter((t) => t.done);
  const incompleteTodoList = todoList.filter((t) => !t.done);

  const showTodoForm = () => setTodoFormVisibility(true);

  const hideTodoForm = () => setTodoFormVisibility(false);

  const addTodo = (todoTitle) => {
    const newTodoList = [
      ...todoList,
      {
        id: generateUniqueId(extractIdsFromData(HistoryTodoList)),
        title: todoTitle,
        done: false,
        time: moment().format("MMMM Do YYYY, h:mm:ss a"),
      },
    ];
    setTodoList(newTodoList);
    localStorage.setItem(`todoList_${userId}`, JSON.stringify(newTodoList));

    const data = [...HistoryTodoList, ...newTodoList];
    localStorage.setItem(
      `historyList_${userId}`,
      JSON.stringify(removeDuplicateObjects(data))
    );
  };

  const onTodoDelete = (todo) => {
    const newTodoList = todoList.filter((t) => t.id !== todo.id);
    setTodoList(newTodoList);
    localStorage.setItem(`todoList_${userId}`, JSON.stringify(newTodoList));
  };

  const markAsDone = (todo) => {
    todo.done = true;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);

    localStorage.setItem(`todoList_${userId}`, JSON.stringify(newTodoList));

    const data = [...HistoryTodoList, ...newTodoList];
    localStorage.setItem(
      `historyList_${userId}`,
      JSON.stringify(removeDuplicateObjects(data))
    );
  };

  const markAsNotDone = (todo) => {
    todo.done = false;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);

    const data = [...HistoryTodoList, ...newTodoList];
    localStorage.setItem(`todoList_${userId}`, JSON.stringify(newTodoList));
    localStorage.setItem(
      `historyList_${userId}`,
      JSON.stringify(removeDuplicateObjects(data))
    );
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="flex h-full">
        <Sidebar />
        <Container>
          <div className="mt-6">
            <H1>Things to get done</H1>
            <div className="mt-5 mb-5">
              <H3>Things to do</H3>
            </div>
            <div className="mt-5 mb-5">
              {!incompleteTodoList.length && <div>No todos here</div>}

              {incompleteTodoList.map((t) => (
                <TodoRow
                  onStatusChange={markAsDone}
                  done={false}
                  todo={t}
                  key={t.id}
                  onDelete={onTodoDelete}
                />
              ))}
            </div>

            {!todoFormVisible && (
              <Button onClick={showTodoForm} theme="highlight" icon="+">
                Add a todo
              </Button>
            )}

            {todoFormVisible && (
              <TodoForm onClose={hideTodoForm} onCreate={addTodo} />
            )}
            <div className="mt-5 mb-5">
              <H3>Things done</H3>
            </div>

            {!completeTodoList.length && <div>No done added</div>}
            {completeTodoList.map((t) => (
              <TodoRow
                onStatusChange={markAsNotDone}
                todo={t}
                done={true}
                key={t.id}
                onDelete={onTodoDelete}
              />
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}

export default TodoPage;
