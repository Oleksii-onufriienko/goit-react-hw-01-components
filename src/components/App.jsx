import Profile from 'components/Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from 'components/user.json';
import data from 'components/data.json';

// console.log(user);

export const App = () => {
  return (
    <div>
      <Profile {...user} />
      <Statistics filesType={data} />
    </div>

  );
};
