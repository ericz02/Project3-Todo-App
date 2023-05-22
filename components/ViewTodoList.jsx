
const ViewTodoList = ({ todos }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>

      <ul className="space-y-2">
        {todos.map((todo, index) => (
          <li key={index} className="flex items-center">
            <span>{todo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewTodoList;
