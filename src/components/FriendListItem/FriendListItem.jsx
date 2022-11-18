import css from './FriendListItem.module.css';

import PropTypes from 'prop-types';

export default function FriendListItem({ avatar, name, isOnline, id }) {
    const colorOnline = isOnline ? { backgroundColor: "red" } : { backgroundColor: "green" };
    return (
        <li key={id} className={css.item}>
            <span className={css.status} style={colorOnline}></span>
            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number,
}