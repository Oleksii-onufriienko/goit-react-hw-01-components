import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
    
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friend__list}>
            {friends.map(friend => { 
                return (<FriendListItem key={friend.id} friend={friend}/>)
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
}