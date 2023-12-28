type Status = "Done" | "Progress" | "Incomplete";

export type Todo = {
  title: string;
  content: string;
  status: string;
};

const TodoItem = (props: Todo): JSX.Element => {
  let statusClassName = {
    text: "",
    textColor: "",
    bgColor: "",
  };
  switch (props.status) {
    case "Done":
      statusClassName.text = "完了";
      statusClassName.textColor = "text-emerald-500";
      statusClassName.bgColor = "bg-emerald-500";
      break;
    case "Progress":
      statusClassName.text = "実行中";
      statusClassName.textColor = "text-blue-600";
      statusClassName.bgColor = "bg-blue-600";
      break;
    case "Incomplete":
      statusClassName.text = "未対応";
      statusClassName.textColor = "text-gray-600";
      statusClassName.bgColor = "bg-gray-600";
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
