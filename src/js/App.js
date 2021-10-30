import User from './components/User/User';
import userData from '../json/user.json';

import Statistics from './components/Statistics/Statistics';
import statistics from '../json/statistics.json';

import Friends from './components/Friends/Friends';
import friends from '../json/friends.json';

import TransactionHistroy from './components/Transaction-history/Transaction-history';
import transactions from '../json/transactions.json';

export default function App() {
  return (
    <>
      <User
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics stat={statistics} />

      <Friends friends={friends} />

      <TransactionHistroy items={transactions} />
    </>
  );
}
