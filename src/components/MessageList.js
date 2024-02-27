// import { unsubscribe } from 'diagnostics_channel';
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const MessageList = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // const timestamp = Date.now(); // This would be the timestamp you want to format

  // useEffect(()=>{
  //   const collectionRef = collection(db,"Messages");

  //   const q = query(collectionRef, orderBy("creationDate"));

  //   const unsubscribe = onSnapshot(q, (querySnapshot)  => {
  //     setMessages(querySnapshot.docs.map(doc=>({...doc.data(), id: doc.id, creationDate: doc.data().creationDate?.toDate().getTime()})));
  //   });
  //   return unsubscribe;
  // },[]);

  useEffect(() => {
    fetch("/api/message-list")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
        console.log(data);
        console.log(data.message_arabulucu.rows);
      });
  }, []);

  if (isLoading) return <p>Yükleniyor...</p>;
  if (!data) return <p>Mesaj Listesi Boş</p>;

  return (
    <div>

<TableContainer >
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Not</TableCell>
            <TableCell align="right">İsim</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Telefon</TableCell>
            <TableCell align="right">Yaratılma Tarihi</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.message_arabulucu.rows.map((item) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">{item.content}</TableCell>
                <TableCell align="right">
                {item.name}
                </TableCell>
                <TableCell align="right">{item.email}</TableCell>
                <TableCell align="right">{item.phonenumber}</TableCell>
                <TableCell align="right">
                {/* {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(item.creationdate)} */}
                {item.creationdate}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>

    {/* {messages.map(message => <div key={message.id}>{message.content}</div>)} */}


    </div>
  )
}

export default MessageList;