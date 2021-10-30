import PropTypes from 'prop-types';
import s from './Friends.module.scss';

export default function Friends({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <li key={friend.id} className={s.item}>
          <span
            className={s.status}
            style={{ backgroundColor: friend.isOnline ? 'green' : 'red' }}
          ></span>

          <img
            className="avatar"
            src={friend.avatar}
            alt={friend.name}
            width="48"
          />
          <p className="name">{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

Friends.prototype = {
  friends: PropTypes.array,
};
