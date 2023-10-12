import styles from './FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <section className={styles.colorBg}>
      <div className="container">
        <ul className={`${styles.friendList}`}>
          {friends.map(friend => {
            return (
              <li className={styles.item} key={friend.id}>
                {friend.isOnline ? (
                  <span
                    className={`${styles.status} ${styles.statusColorGreen}`}
                  ></span>
                ) : (
                  <span
                    className={`${styles.status} ${styles.statusColorRed}`}
                  ></span>
                )}
                <img
                  className={styles.avatar}
                  src={friend.avatar}
                  alt="User avatar"
                  width="48"
                />
                <p className={styles.name}>{friend.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
