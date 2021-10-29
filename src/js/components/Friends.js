import PropTypes from 'prop-types';

export default function Friends({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="item">
          {friend.isOnline ? (
            <span className="status active"></span>
          ) : (
            <span className="status deactive"></span>
          )}
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
