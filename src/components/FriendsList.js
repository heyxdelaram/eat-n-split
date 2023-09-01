import { Friend } from "./Friend";

export function FriendsList({ friends, onSelect }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend onSelect={onSelect} friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}
