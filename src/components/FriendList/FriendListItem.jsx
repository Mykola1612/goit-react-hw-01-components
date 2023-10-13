import styles from './FriendList.module.css';

export function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.statusColorGreen : styles.statusColorRed
        }`}
      ></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}
