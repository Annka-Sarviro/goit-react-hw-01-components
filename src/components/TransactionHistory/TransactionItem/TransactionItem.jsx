import styled from 'styled-components';
import PropTypes from 'prop-types';

const Tr = styled.tr`
    &:nth-child(even){
        background-color: #c7e2ed;
    }
`

export const TransactionItem = ({ items }) => {
    return <Tr key={items.id}>
    <td>{items.type}</td>
    <td>{items.amount}</td>
    <td>{items.currency}</td>
  </Tr>
}


TransactionItem.propTypes = {
    items: PropTypes.shape(
                {id: PropTypes.string.isRequired,
                type: PropTypes.string,
                amount: PropTypes.string,
                currency: PropTypes.string,
                }
            )
}