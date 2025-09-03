import clsx from 'clsx';
import { useState } from 'react';
import styles from './Counter.module.scss';

function Counter() {
    const [count, setCount] = useState(0);
    const updateCount = (value) => setCount((prev) => prev + value);

    return (
        <div className={styles.counter}>
            <h1 className={styles.counter__heading}>Counter App</h1>

            <div
                className={styles.counter__number}
                style={{ color: count > 0 ? 'green' : count < 0 ? 'red' : 'gray' }}
            >
                {count}
            </div>

            <div className={styles.counter__status}>
                {count === 0 ? 'Bằng không' : count < 1 ? 'Âm' : 'Dương'}
            </div>

            <div className={styles.counter__group}>
                <button
                    className={clsx(styles.counter__btn, styles['counter__btn--increase'])}
                    onClick={() => updateCount(1)}
                >
                    Tăng (+1)
                </button>

                <button
                    className={clsx(styles.counter__btn, styles['counter__btn--reset'])}
                    onClick={() => setCount(0)}
                >
                    Reset (0)
                </button>

                <button
                    className={clsx(styles.counter__btn, styles['counter__btn--decrease'])}
                    onClick={() => updateCount(-1)}
                >
                    Giảm (-1)
                </button>
            </div>
        </div>
    );
}

export default Counter;
