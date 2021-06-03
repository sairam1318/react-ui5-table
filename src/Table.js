import { Table, TableColumn, Label, TableCell, TableRow } from "@ui5/webcomponents-react";
import { useEffect, useState } from 'react';
export const MyTable = (props) => {
    const [wellCompletionTable, setWellCompletionTable] = useState([]);
    const [tableHeaders, setTableHeaders] = useState([]);
    // const [loading, setLoading] = useState(true)
    useEffect(()=> {
        fetch('https://60b7316917d1dc0017b89431.mockapi.io/users')
            .then(response => response.json())
            .then(json => setWellCompletionTable(json));
        // setLoading(false)
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(json => setTableHeaders(json));
        
    }, []);
  return (
    <>
      <Table
        className=""
        columns={
          <>
            {tableHeaders.map((header)=>{
              return (<TableColumn >
              <Label>{header.title}</Label>
            </TableColumn>)
            })}
           
          </>
          
        }
        onLoadMore={function noRefCheck() {}}
        onPopinChange={function noRefCheck() {}}
        onRowClick={function noRefCheck() {}}
        slot=""
        style={{}}
        tooltip=""
      >
        {}
        
        {wellCompletionTable.map(wellData => {

            return( <TableRow style={{width: '12rem', textAlign: "start"}}>
                    <TableCell>
                        <Label>{wellData.wellNumber}</Label>
                    </TableCell>
                    <TableCell>
                      <Label>{wellData.wellCity}</Label>
                    </TableCell>
                    <TableCell>
                        <Label>{wellData.wellCompletionDate}</Label>
                    </TableCell>
                  </TableRow>
            )
        })}
      
      </Table>
    </>
  );
};
