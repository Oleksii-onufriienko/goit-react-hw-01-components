import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from 'json/user.json';
import data from 'json/data.json';
import friends from 'json/friends.json';
import transactions from 'json/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics filesType={data} title='Upload stats' />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
