import { Table, TableColumn, Label, TableCell, TableRow } from "@ui5/webcomponents-react";
import { useEffect, useState } from 'react';
export const MyTable = (props) => {
    const [topics, setTopics] = useState([]);
    // const [loading, setLoading] = useState(true)
    useEffect(()=> {
        fetch('https://60b7316917d1dc0017b89431.mockapi.io/users')
            .then(response => response.json())
            .then(json => setTopics(json));
        
    }, []);
  return (
    <>
      <Table

        className=""
        columns={
          <>
            <TableColumn >
              <Label>ID</Label>
            </TableColumn>
            <TableColumn >
              <Label>Name</Label>
            </TableColumn>
            <TableColumn>
              <Label>Age</Label>
            </TableColumn>
           
          </>
          
        }
        onLoadMore={function noRefCheck() {}}
        onPopinChange={function noRefCheck() {}}
        onRowClick={function noRefCheck() {}}
        slot=""
        style={{}}
        tooltip=""
        showNoData
        noDataText="Loading.."
        
      >
        {}

        {topics.map(topic => {
            return(
                 <TableRow >
                    <TableCell>
                        <Label>{topic.id}</Label>
                    </TableCell>
                    <TableCell>
                        <Label>{topic.name}</Label>
                    </TableCell>
                    <TableCell>
                        <Label>{topic.Age}</Label>
                    </TableCell>
                </TableRow>
               
            )
        })}
      </Table>
    </>
  );
};
