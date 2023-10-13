import styles from './FriendList.module.css';

import { FriendListItem } from './FriendListItem';

export function FriendList({ friends }) {
  return (
    <section className={styles.colorBg}>
      <div className="container">
        <ul className={`${styles.friendList}`}>
          {friends.map(friend => {
            return (
              <FriendListItem
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}
                // id={friend.id}
                key={friend.id}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
