import transactions from 'transactions.json';
import { TransactionItem } from './TransactionItem/TransactionItem';
import styled from 'styled-components';

const Table = styled.table`
    width: 350px;
    text-align: center;
    box-shadow: 10px 10px 10px grey;
    border-radius: 15px;
    overflow: hidden;
`

const Thead = styled.thead`
    background-color: skyblue;
    color: white;
    font-weight: 600;
    font-size: 18px;
    padding: 10px;
`
const Tbody = styled.tbody`
    font-weight: 400;
    font-size: 18px;
    color: rgb(42, 41, 41);
`
const Th = styled.th`
    padding: 10px;
`

export const TransactionHistory = () => {
    return <Table className="transaction-history">
    <Thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
    </Thead>
  
    <Tbody>
       { transactions.map((transaction) => <TransactionItem key={transaction.id} items={transaction}/>)}
    </Tbody>
  </Table>
}