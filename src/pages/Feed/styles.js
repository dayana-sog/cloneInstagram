import styled from 'styled-components/native';


export const Post = styled.View`
  margin-top: 10px;
`;

export const Header = styled.View`
  padding: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  margin-right: 10px;
`;

export const Name = styled.Text`
  color: #333;
  font-weight: bold;
`;

export const Description = styled.Text`
  padding: 15px;
  line-height: 18px;
`;

export const AvatarDiscription = styled.Image`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  flex-direction: row;
`;

export const Loading = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999',
})`   
  margin: 30px 0;
`;

export const Icons = styled.View`
  margin-top: 10px;
  flex-direction: row;
  margin-left: 10px;
  margin-bottom: 5px
`;

export const Heart = styled.Image`
  border-color: #333;
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const Dialoge = styled.Image`
  width: 30px;
  height: 30px;
  margin-right: 8px;
`;

export const Share = styled.Image`
  width: 30px;
  height: 30px;
`;

