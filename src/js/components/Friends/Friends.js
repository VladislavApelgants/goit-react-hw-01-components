import PropTypes from 'prop-types';
import s from './Friends.module.scss';
import FriendItem from './FrendItem';

export default function Friends({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </ul>
  );
}

Friends.propTypes = {
  friends: PropTypes.array,
};
