import clsx from 'clsx';

import { useState } from 'react';
import styles from './Todo.module.scss';

let uniqId = 0;

function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [todos, setTodos] = useState([]);

    const handleChangeInput = (e) => {
        setInputValue(e.target.value);
    };

    const handleCheckInput = (id) => {
        setTodos((prev) =>
            prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)),
        );
    };

    const handleDelete = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim()) {
            setTodos([...todos, { id: ++uniqId, text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    return (
        <div className={styles.todo}>
            <form className={styles['todo__input-group']} onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={styles.todo__input}
                    placeholder="Nhập task mới..."
                    value={inputValue}
                    onChange={handleChangeInput}
                />
                <button type="submit" className={styles['todo__add-btn']}>
                    Thêm
                </button>
            </form>

            <div className={styles.todo__stats}>
                <div className={styles.todo__stat}>
                    <span className={styles['todo__stat-label']}>Tổng:</span>
                    <span className={styles['todo__stat-value']}>{todos.length} task(s)</span>
                </div>
                <div className={styles.todo__stat}>
                    <span className={styles['todo__stat-label']}>Hoàn thành:</span>
                    <span className={styles['todo__stat-value']}>
                        {todos.filter((t) => t.completed).length} task(s)
                    </span>
                </div>
                <div className={styles.todo__stat}>
                    <span className={styles['todo__stat-label']}>Còn lại:</span>
                    <span className={styles['todo__stat-value']}>
                        {todos.filter((t) => !t.completed).length} task(s)
                    </span>
                </div>
            </div>

            <div className={styles.todo__list}>
                {todos.length === 0 ? (
                    <p>Chưa có task nào. Hãy thêm task đầu tiên!</p>
                ) : (
                    todos.map((todo) => (
                        <div
                            key={todo.id}
                            className={clsx(
                                styles.todo__item,
                                todo.completed && styles['todo__item--completed'],
                            )}
                        >
                            <span className={styles.todo__text}>{todo.text}</span>
                            <div className={styles.todo__actions}>
                                <input
                                    type="checkbox"
                                    className={styles.todo__checkbox}
                                    checked={todo.completed}
                                    onChange={() => handleCheckInput(todo.id)}
                                />
                                <button
                                    className={styles['todo__delete-btn']}
                                    onClick={() => handleDelete(todo.id)}
                                >
                                    Xóa
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default Todo;
