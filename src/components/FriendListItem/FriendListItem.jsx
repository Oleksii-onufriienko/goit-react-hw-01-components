import css from './FriendListItem.module.css';

import PropTypes from 'prop-types';

export default function FriendListItem({ friend }) {
   return (
       <li className={css.item}>
           <span className={css.status} style={friend.isOnline ? { backgroundColor: "red" } : { backgroundColor: "green" }}></span>
           <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
           <p className={css.name}>{friend.name}</p>
       </li>
   )
}

FriendListItem.propTypes = {
    friend: PropTypes.shape({ 
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number,
    }),
}