import { useState } from "react";
import { FriendsList } from "./components/FriendsList";
import { AddFriendForm } from "./components/AddFriendForm";
import { Form } from "./components/Form";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [friendFormOpen, setFriendFormOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [bill, setBill] = useState("");
  const [yExpense, setYExpense] = useState("");

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
    setFriendFormOpen(false);
  }
  function handleSelect(friend) {
    if (bill || yExpense) {
      setBill("");
      setYExpense("");
    }
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  function setFriendBalance(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          selectedFriend={selectedFriend}
          onSelect={handleSelect}
          friends={friends}
        />
        {friendFormOpen ? (
          <>
            <AddFriendForm onAdd={handleAddFriend} />
            <button onClick={() => setFriendFormOpen(false)} className="button">
              Close
            </button>
          </>
        ) : (
          <button onClick={() => setFriendFormOpen(true)} className="button">
            Add Friend
          </button>
        )}
      </div>
      {selectedFriend && (
        <Form
          bill={bill}
          yExpense={yExpense}
          setBill={setBill}
          setYExpense={setYExpense}
          friend={selectedFriend}
          changeFriendBalance={setFriendBalance}
        />
      )}
    </div>
  );
}
