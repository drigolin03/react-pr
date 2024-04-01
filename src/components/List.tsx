import React, { useState } from 'react';

const List: React.FC = () => {
    const [todos, setTodos] = useState<{ text: string; checked: boolean }[]>([]);
    const [newTodo, setNewTodo] = useState<string>('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, { text: newTodo, checked: false }]);
            setNewTodo('');
        }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const updatedTodos = [...todos];
        updatedTodos[index].checked = event.target.checked;
        setTodos(updatedTodos);
    };

    const handleDelete = (index: number) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const handleEdit = (index: number, newText: string) => {
        const updatedTodos = [...todos];
        updatedTodos[index].text = newText;
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h2 className="my-4">Todo List</h2>
            <div className="input-group mb-3">
                <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className="form-control" placeholder="Enter new todo" />
                <button onClick={addTodo} className="btn btn-primary">Add</button>
            </div>
            <ul className="list-group">
                {todos.map((todo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        <input type="checkbox" checked={todo.checked} onChange={(e) => handleChange(e, index)} className="form-check-input me-3" />
                        <input type="text" value={todo.text} onChange={(e) => handleEdit(index, e.target.value)} className="form-control" />
                        <button onClick={() => handleDelete(index)} className="btn btn-danger">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
