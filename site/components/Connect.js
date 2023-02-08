import React from "react";
import { useConnect, useDisconnect } from "wagmi";
import { useAppContext } from "@/context/context";
import style from "./button.module.css";

function Connect() {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { disconnect } = useDisconnect();
  const [connector] = connectors;
  const [connected, setConnected] = React.useState(false);
  const { useraddress } = useAppContext();

  return (
    <div
      className={style.buttonContainer}
      onClick={() => {
        console.log(connected);
        if (!connected) {
          setConnected(true);
          connect({ connector });
        } else {
          console.log("Disconnected");
          disconnect();
          setConnected(false);
        }
      }}
    >
      <img src="/metamask-icon.png" alt="" width="20" />
      <div className={style.connector}>
        {isLoading
          ? "Connecting"
          : useraddress === undefined
          ? connector.name
          : useraddress.slice(0, 8) + "..."}
      </div>
    </div>
  );
}

export default Connect;
