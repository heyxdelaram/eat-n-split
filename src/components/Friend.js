import { BalanceMessage } from "./BalanceMessage";

export function Friend({ friend, onSelect, selectedFriend }) {
  const isSelected = friend.id === selectedFriend?.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} />
      <h3>{friend.name}</h3>
      <BalanceMessage friend={friend} />
      <button onClick={() => onSelect(friend)} className="button">
        {isSelected ? "Close" : "Select"}
      </button>
    </li>
  );
}
