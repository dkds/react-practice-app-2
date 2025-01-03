import { useState } from "react";

export default function Player({ name, symbol, isActive, onNameChange }) {
  const [playerName, setPlayerName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditingToggleClick() {
    setIsEditing((editing) => !editing);
    if (!isEditing) {
      onNameChange(symbol, playerName);
    }
  }

  function handleInputChange(event) {
    setPlayerName(event.target.value);
  }

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            required
            value={playerName}
            onChange={handleInputChange}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditingToggleClick}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </li>
  );
}
