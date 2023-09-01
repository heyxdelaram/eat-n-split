import { useState } from "react";

export function Form({
  friend,
  bill,
  yExpense,
  setBill,
  setYExpense,
  changeFriendBalance,
}) {
  const [payingFriend, setPayingFriend] = useState("");

  function handleSplitSubmit(e) {
    e.preventDefault();

    console.log(payingFriend);

    payingFriend === friend.name
      ? changeFriendBalance(Number(yExpense))
      : changeFriendBalance(Number(yExpense) - Number(bill));
  }
  return (
    <form onSubmit={handleSplitSubmit} className="form-split-bill">
      <h2>Split a bill with {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        value={bill}
        onChange={(e) => setBill(e.target.value)}
        type="number"
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        value={yExpense}
        onChange={(e) => setYExpense(e.target.value)}
        type="number"
      />
      <label>👩🏼‍🤝‍🧑🏻 FRIEND'S expense</label>
      <input value={yExpense && bill - yExpense} disabled />
      <label>🤑 Who is paying the bill?</label>
      <select
        value={payingFriend}
        onChange={(e) => setPayingFriend(e.target.value)}
      >
        <option value="You">You</option>
        <option value={friend.name}>{friend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
