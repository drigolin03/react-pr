import React from 'react';

interface TodoProps {
    id: number;
    title: string;
    completed: boolean;
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ id, title, completed, onDelete, onToggle }) => {
    const handleDelete = () => {
        onDelete(id);
    };

    const handleToggle = () => {
        onToggle(id);
    };

    return (
        <div style={{ textDecoration: completed ? 'line-through' : 'none' }}>
            <input type="checkbox" checked={completed} onChange={handleToggle} />
            <span>{title}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Todo;
