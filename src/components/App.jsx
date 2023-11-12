import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendsList/friends.json';
import transactions from './TransactionHistory/transactions.json';

import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendsList from './FriendsList/FriendsList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
