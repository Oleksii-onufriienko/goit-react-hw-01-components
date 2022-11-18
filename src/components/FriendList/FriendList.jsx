import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
    
import PropTypes from 'prop-types';

export default function FriendList({ friendsList }) {
    return (
        <ul className={css.friend__list}>
            {friendsList.map(element => { 
                return (<FriendListItem {...element} />)
            })}
        </ul>
    );
};

FriendList.propTypes = {
    friendsList: PropTypes.array,
}