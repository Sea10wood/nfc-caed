import React, { useState } from "react";

import TodoItem, { Todo } from "./TodoTimerCard";
import TodoForm from "./TodoForm";

const TodoListForm = (): JSX.Element => {
  const [todoItemList, setTodoList] = useState<Todo[]>([]);
  const addTodoOnClick = (todo: Todo) => {
    // const newTodoList = todoItemList.slice();
    const newTodoList = [...todoItemList];

    newTodoList.push(todo);
    setTodoList(newTodoList);
    console.log("追加");
  };

  return (
    <>
      {todoItemList.map((todo, i) => {
        return <TodoItem key={i} {...todo} />;
      })}
      <TodoForm addTodoOnclick={addTodoOnClick} />
    </>
  );
};

export default TodoListForm;
