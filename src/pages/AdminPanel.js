import React, { useEffect, useState } from "react";
import MessageList from "../components/MessageList";
import { useRouter } from "next/navigation";

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
      <h1>Hoşgeldin Öznur, </h1>
      <br />
      <h3>Mesaj Listesi</h3>
      <MessageList />
    </div>
  );
};

export default AdminPanel;
