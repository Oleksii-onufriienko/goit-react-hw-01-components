import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

import user from 'components/user.json';
import data from 'components/data.json';
import friends from 'components/friends.json';

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics filesType={data} />
      <FriendList friendsList={friends}/>
    </div>

  );
};
