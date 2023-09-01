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
  const [isSplitFormOpen, setIsSplitFormOpen] = useState(false);

  function ToggleSplitForm() {
    setIsSplitFormOpen((curr) => !curr);
  }

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }
  function handleSelect(friend) {
    if (bill || yExpense) {
      setBill("");
      setYExpense("");
    }
    setSelectedFriend(friend);
  }

  function setFriendBalance(balance) {
    console.log(typeof balance);

    setFriends((friends) =>
      friends.map((friend) =>
        friend.name === selectedFriend.name ? { ...friend, balance } : friend
      )
    );
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          isOpen={isSplitFormOpen}
          onClose={ToggleSplitForm}
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
      {selectedFriend ? (
        <Form
          bill={bill}
          yExpense={yExpense}
          setBill={setBill}
          setYExpense={setYExpense}
          friend={selectedFriend}
          changeFriendBalance={setFriendBalance}
        />
      ) : null}
    </div>
  );
}
