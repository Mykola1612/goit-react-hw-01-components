export function FriendList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => {
        return (
          <li class="item" id={friend.id}>
            <span class="status">{friend.isOnline}</span>
            <img
              class="avatar"
              src={friend.avatar}
              alt="User avatar"
              width="48"
            />
            <p class="name">{friend.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
