import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
    
import PropTypes from 'prop-types';

export default function FriendList({ friends }) {
    return (
        <ul className={css.friend__list}>
            <FriendListItem friends={friends} />
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.array,
}