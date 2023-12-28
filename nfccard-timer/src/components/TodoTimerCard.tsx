type Status = "Done" | "Progress" | "Incomplete";

export type Todo = {
  id: number;
  title: string;
  content: string;
  status: string;
  addTodoOnclick: (todo: Todo) => void;
};

const TodoItem = (props: Todo): JSX.Element => {
  let statusClassName = {
    text: "",
    textColor: "",
    bgColor: "",
  };
  switch (props.status) {
    case "Dangerous":
      statusClassName.text = "やばいよ〜";
      statusClassName.textColor = "text-yellow-500";
      statusClassName.bgColor = "bg-yellow-400";
      break;
    case "hurry up":
      statusClassName.text = "まぁ、まだ大丈夫";
      statusClassName.textColor = "text-blue-600";
      statusClassName.bgColor = "bg-blue-600";
      break;
  }

  return (
    <div className="px-12 py-2">
      <div className="flex w-[100%] border border-gray-300  overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 ">
        <div
          className={`flex items-center justify-center w-24 ${statusClassName.bgColor} `}
        >
          {props.status}
        </div>
        <div className="px-4 py-2 -mx-3">
          <div className="mx-3">
            <span className={`font-semibold ${statusClassName.textColor}`}>
              {statusClassName.text}
            </span>
            <p className="me-1 mb-0 text-gray-700">{props.title}</p>
            <span className="text-sm  text-gray-600 dark:text-gray-200 me-1">
              {props.content}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
