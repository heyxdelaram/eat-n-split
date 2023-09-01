export function BalanceMessage({ friend }) {
  return (
    <p
      className={friend.balance > 0 ? "red" : friend.balance < 0 ? "green" : ""}
    >
      {friend.balance === 0
        ? `You and ${friend.name} are even`
        : friend.balance > 0
        ? `You owe ${friend.name} $${friend.balance}`
        : `${friend.name} owes you $${Math.abs(friend.balance)}`}
    </p>
  );
}
