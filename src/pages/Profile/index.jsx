import { useState, useEffect } from 'react';
import styles from './Profile.module.scss';

function Profile() {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then((res) => res.json())
            .then((data) => {
                setProfile(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error:', err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Đang tải...</p>;
    if (!profile) return <p>Không có dữ liệu</p>;

    return (
        <div className={styles.profile}>
            <div className={styles.profile__card}>
                <div className={styles.profile__header}>
                    <h2 className={styles.profile__name}>{profile.name}</h2>
                    <span className={styles.profile__username}>@{profile.username}</span>
                </div>

                <div className={styles.profile__body}>
                    <div className={styles.profile__info}>
                        <span className={styles.profile__label}>Email:</span>
                        <span className={styles.profile__value}>{profile.email}</span>
                    </div>
                    <div className={styles.profile__info}>
                        <span className={styles.profile__label}>Phone:</span>
                        <span className={styles.profile__value}>{profile.phone}</span>
                    </div>
                    <div className={styles.profile__info}>
                        <span className={styles.profile__label}>Website:</span>
                        <span className={styles.profile__value}>{profile.website}</span>
                    </div>
                    <div className={styles.profile__info}>
                        <span className={styles.profile__label}>Address:</span>
                        <span className={styles.profile__value}>
                            {profile.address.city} - {profile.address.street}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
