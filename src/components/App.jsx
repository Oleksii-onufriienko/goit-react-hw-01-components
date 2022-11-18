import Profile from '../components/Profile/Profile'
import user from '../components/user.json'

console.log(user);

export const App = () => {
  return (
    <div>
      <Profile {...user} />
</div>
    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
