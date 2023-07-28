import React, { useCallback, useEffect, useState } from "react";
import { useSocket } from "../../context/SocketProvider";
import { useNavigate } from "react-router-dom";

const Lobby = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitFrom = useCallback(
    (e) => {
      e.preventDefault();
      //   console.log({ email, room });
      socket.emit("join_room", { email, room });
    },
    [email, room]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("join_room", handleJoinRoom);
    return () => {
      socket.off("join_room", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);
  return (
    <div>
      <form onSubmit={handleSubmitFrom}>
        <label htmlFor="email">Email ID</label>
        <input
          type="email"
          name="email"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <br />
        <label htmlFor="room">Room ID</label>
        <input
          type="text"
          name="room"
          id="room"
          required
          onChange={(e) => {
            setRoom(e.target.value);
          }}
        />
        <button type="submit">Join Room</button>
      </form>
    </div>
  );
};

export default Lobby;
