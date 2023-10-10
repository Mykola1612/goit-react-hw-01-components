import { Profile } from '../components/Profile/Profile';
import user from '../path/user.json';
import { Statistics } from '../components/Statistics/Statistics';
import data from '../path/data.json';
import { FriendList } from '../components/FriendList/FriendList';
import friends from '../path/friends.json';
import { TransactionHistory } from '../components/TransactionHistory/TransactionHistory';
import transactions from '../path/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        avatar={user.avatar}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory arrayTransations={transactions} />
    </>
  );
};
