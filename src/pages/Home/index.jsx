import clsx from 'clsx';
import styles from './Home.module.scss';

function Home() {
    return (
        <main className={styles.home}>
            <section className={styles.hero}>
                <h1 className={styles['hero__title']}>
                    Chào mừng đến với <span>F8 React Day 35</span>
                </h1>
                <p className={styles['hero__subtitle']}>
                    Xây dựng giao diện hiện đại với React, SCSS Module & clsx.
                </p>

                <div className={styles['hero__actions']}>
                    <a href="/getting-started" className={clsx(styles.btn, styles['btn--primary'])}>
                        🚀 Bắt đầu ngay
                    </a>
                    <a href="/docs" className={clsx(styles.btn, styles['btn--ghost'])}>
                        📘 Tài liệu
                    </a>
                </div>
            </section>

            <section className={styles.stats}>
                <div className={styles['stats__item']}>
                    <span className={styles['stats__num']}>35</span>
                    <span className={styles['stats__label']}>Ngày học</span>
                </div>
                <div className={styles['stats__item']}>
                    <span className={styles['stats__num']}>+120</span>
                    <span className={styles['stats__label']}>Bài tập</span>
                </div>
                <div className={styles['stats__item']}>
                    <span className={styles['stats__num']}>∞</span>
                    <span className={styles['stats__label']}>Cơ hội</span>
                </div>
            </section>

            <section className={styles.features}>
                <article className={styles['features__card']}>
                    <div className={styles['features__icon']}>⚛️</div>
                    <h3 className={styles['features__title']}>Component Driven</h3>
                    <p className={styles['features__desc']}>
                        Tổ chức UI theo khối, tái sử dụng, dễ mở rộng và bảo trì.
                    </p>
                </article>

                <article className={styles['features__card']}>
                    <div className={styles['features__icon']}>🎨</div>
                    <h3 className={styles['features__title']}>SCSS Modules</h3>
                    <p className={styles['features__desc']}>
                        Style cục bộ, tránh xung đột, viết BEM gọn & rõ ràng.
                    </p>
                </article>

                <article className={styles['features__card']}>
                    <div className={styles['features__icon']}>⚡</div>
                    <h3 className={styles['features__title']}>Hiệu năng</h3>
                    <p className={styles['features__desc']}>
                        Render mượt, tối ưu tương tác, UX nhẹ nhàng & sắc nét.
                    </p>
                </article>

                <article className={styles['features__card']}>
                    <div className={styles['features__icon']}>🧩</div>
                    <h3 className={styles['features__title']}>clsx Friendly</h3>
                    <p className={styles['features__desc']}>
                        Ghép class động, kiểm soát trạng thái UI linh hoạt.
                    </p>
                </article>
            </section>

            <footer className={styles.footer}>
                <p className={styles['footer__text']}>
                    Made with ❤️ by <span className={styles['footer__brand']}>Huzi Dev</span>
                </p>
            </footer>
        </main>
    );
}

export default Home;
