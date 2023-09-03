import { BalanceMessage } from "./BalanceMessage";

export function Friend({ friend, onSelect, onClose, isOpen }) {
  function handleSelect() {
    onSelect(friend);
    //todo: fix this onclose function for when the select button gets closed
    // onClose(true);
  }
  return (
    <li>
      <img src={friend.image} />
      <h3>{friend.name}</h3>
      <BalanceMessage friend={friend} />
      <button onClick={handleSelect} className="button">
        {isOpen ? "Close" : "Select"}
      </button>
    </li>
  );
}
