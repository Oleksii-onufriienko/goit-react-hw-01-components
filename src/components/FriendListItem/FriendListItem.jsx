import css from './FriendListItem.module.css';

import PropTypes from 'prop-types';

export default function FriendListItem({ friends }) {
    return (
        friends.map(friend => { 
            return (
        <li key={friend.id} className={css.item}>
            <span className={css.status} style={friend.isOnline ? { backgroundColor: "red" } : { backgroundColor: "green" }}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
        </li>
            )
        })

    );
}

FriendListItem.propTypes = {
    friends: PropTypes.array,

}