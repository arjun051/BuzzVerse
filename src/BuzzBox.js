import React, { useState } from "react";
import "./BuzzBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function BuzzBox() {
  const [buzzMessage, setBuzzMessage] = useState("");
  const [buzzImage, setBuzzImage] = useState("");

  const sendBuzz = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Akshit",
      username: "illuminati",
      verified: true,
      text: buzzMessage,
      image: buzzImage,
      avatar:
        "https://cdn.discordapp.com/attachments/1013499095756853301/1055733784340877363/illuminati1154_evil_jesus_c379180a-1a3e-4539-82df-598a36c4646f.png",
    });

    setBuzzMessage("");
    setBuzzImage("");
  };

  return (
    <div className="buzzBox">
      <form>
        <div className="buzzBox__input">
          <Avatar src="https://cdn.discordapp.com/attachments/1013499095756853301/1055733784340877363/illuminati1154_evil_jesus_c379180a-1a3e-4539-82df-598a36c4646f.png" />
          <input
            onChange={(e) => setBuzzMessage(e.target.value)}
            value={buzzMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          value={buzzImage}
          onChange={(e) => setBuzzImage(e.target.value)}
          className="buzzBox__imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />

        <Button
          onClick={sendBuzz}
          type="submit"
          className="buzzBox__buzzButton"
        >
          Gossip
        </Button>
      </form>
    </div>
  );
}

export default BuzzBox;
