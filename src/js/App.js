import User from './components/User';
import userData from '../json/user.json';

import Statistics from './components/Statistics';
import statistics from '../json/statistics.json';

import Friends from './components/Friends';
import friends from '../json/friends.json';

import TransactionHistroy from './components/transaction-history';
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
