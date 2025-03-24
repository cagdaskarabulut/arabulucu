import React, { useEffect, useState } from "react";
import MessageList from "../components/MessageList";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";
import { signIn, signOut, useSession } from "next-auth/react";

const AdminPanel = () => {
  const router = useRouter();
  const [isAuthorizedUser, setIsAuthorizedUser] = useState(false);

  useEffect(() => {
    fetch("/api/auth/whoAmI/email")
      .then((res) => res.json())
      .then((data) => {
        setIsAuthorizedUser(false);
        if (data.email !== process.env.NEXT_PUBLIC_ADMIN_USER) {
          router.push("/api/auth/signin", { scroll: false });
        } else {
          setIsAuthorizedUser(true);
        }
      });
  }, []);

  return (
    <div>
      <h1>Hoşgeldin Öznur,</h1>
      <Button
        style={{ float: "right", marginTop: "10px" }}
        variant="contained"
        color="primary"
        onClick={() => signOut()}
      >
        Sign out
      </Button>
      <br />
      <h3>Mesaj Listesi</h3>
      {isAuthorizedUser && <MessageList />}
      {!isAuthorizedUser && <h4>Yükleniyor...</h4>}
    </div>
  );
};
export default AdminPanel;
