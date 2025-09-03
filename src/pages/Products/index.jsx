import clsx from 'clsx';
import { useState, useEffect } from 'react';
import styles from './Products.module.scss';

function truncateText(text, maxLength = 100) {
    return text.length > maxLength ? text.substring(0, maxLength) + '…' : text;
}

function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function Products() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=12')
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error:', err);
                setLoading(false);
            });
    }, []);

    return loading ? (
        <div className={styles['posts__loading']}>Đang tải...</div>
    ) : (
        <div className={styles.posts}>
            <h1 className={styles['posts__title']}>Danh sách bài viết</h1>
            <div className={styles['posts__grid']}>
                {posts.map((post) => (
                    <div className={styles['post-card']} key={post.id}>
                        <div className={styles['post-card__id']}>#{post.id}</div>
                        <h2 className={styles['post-card__title']}>
                            {capitalizeFirstLetter(post.title)}
                        </h2>
                        <p className={styles['post-card__body']}>{truncateText(post.body, 100)}</p>
                        <button
                            className={styles['post-card__button']}
                            onClick={() => setSelectedPost(post)}
                        >
                            Xem chi tiết
                        </button>
                    </div>
                ))}
            </div>

            {selectedPost && (
                <div
                    className={clsx(styles.modal, {
                        [styles['modal--active']]: selectedPost,
                    })}
                >
                    <div
                        className={styles['modal__overlay']}
                        onClick={() => setSelectedPost(null)}
                    ></div>
                    <div className={styles['modal__content']}>
                        <button
                            className={styles['modal__close']}
                            onClick={() => setSelectedPost(null)}
                        >
                            &times;
                        </button>
                        <h2 className={styles['modal__title']}>{selectedPost.title}</h2>
                        <p className={styles['modal__body']}>{selectedPost.body}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Products;
