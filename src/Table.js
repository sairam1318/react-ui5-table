import { Table, TableColumn, Label, TableCell, TableRow } from "@ui5/webcomponents-react";
import { useEffect, useState } from 'react';
export const MyTable = (props) => {
    const [wellCompletionTable, setWellCompletionTable] = useState([]);
    const [tableHeaders, setTableHeaders] = useState([]);
    const [errMessage, setErrMessage] = useState();
    const [errStatus, setErrStatus] = useState(false);
  
    useEffect(()=> {
        fetch('https://60b7316917d1dc0017b89431.mockapi.io/users')
            .then(response => response.json())
            .then(json => setWellCompletionTable(json))
            .catch(err => {
              setErrMessage(err);
              setErrStatus(true);
          });
            
        fetch('http://localhost:3000/posts')
            .then(response => response.json())
            .then(json => setTableHeaders(json))
            .catch(err => {
              setErrMessage(err);
              setErrStatus(true);
          })
        
    }, []);

    const loadwellCompletionHeader = (header) => {
      return(
        <>
            <TableColumn >
              <Label>{header.title}</Label>
            </TableColumn>
        </>
      )
    }
    const loadWellCompletionTableData = (wellData) => {
      return(
        <TableRow style={{width: '12rem', textAlign: "start"}}>
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
    }

  return (
    <>
      <Table
        className=""
        columns={<>
              {errStatus ? errMessage : tableHeaders.map((header)=>{
                return loadwellCompletionHeader(header);
              })}
             </>
          }
      >
        {}
        {errStatus ? errMessage : wellCompletionTable.map(wellData => {
            return( 
              loadWellCompletionTableData(wellData)
            )
        })}
      
      </Table>
    </>
  );
};
