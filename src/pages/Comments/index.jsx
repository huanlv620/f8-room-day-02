import { useState, useEffect } from 'react';
import styles from './Comments.module.scss';

const fakeTimes = ['2 giờ trước', '5 giờ trước', '1 ngày trước', '2 ngày trước', '3 ngày trước'];

function Comments() {
    const [comments, setComments] = useState([]);
    const [form, setForm] = useState({ name: '', email: '', body: '' });

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then((res) => res.json())
            .then((data) =>
                setComments(
                    data.map((item, index) => ({
                        ...item,
                        time: fakeTimes[index % fakeTimes.length],
                    })),
                ),
            );
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.body) return;

        const newComment = {
            id: Date.now(),
            ...form,
            time: 'Vừa xong',
        };

        setComments((prev) => [newComment, ...prev]);
        setForm({ name: '', email: '', body: '' });
    };

    return (
        <div className={styles.comment}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                />
                <textarea
                    name="body"
                    placeholder="Write a comment..."
                    rows="3"
                    value={form.body}
                    onChange={handleChange}
                />
                <button type="submit">Add Comment</button>
            </form>

            {comments.map((c) => (
                <div className={styles.commentBox} key={c.id}>
                    <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                            c.name,
                        )}&background=random`}
                        alt={c.name}
                        className={styles.avatar}
                    />
                    <div className={styles.content}>
                        <div className={styles.header}>{c.name}</div>
                        <div className={styles.email}>{c.email}</div>
                        <div className={styles.body}>{c.body}</div>
                        <div className={styles.time}>{c.time}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Comments;
