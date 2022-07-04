import styled from 'styled-components';

const Span  = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => (props.online ? "#1db187" : '#d14f58')};
margin-right: 20px;
`

const Li = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    width: 350px;
    background-color: rgb(242, 239, 239);
    border-radius: 5px;
    box-shadow: 10px 10px 10px grey;
    margin-bottom: 20px;

` 
const Img = styled.img`
    width: 80px;
    margin-right: 20px;
`
const P = styled.p`
    font-weight: 600;
    font-size: 30px;    
    color: black;
`

export const FriendListItem = ({friend}) => {
    return <Li className='item'>
    <Span className="status" online = {friend.isOnline}></Span>
    <Img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
    <P className="name">{friend.name}</P>
  </Li>
}