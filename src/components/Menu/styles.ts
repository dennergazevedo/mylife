import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 20vw;
  min-width: 200px;
  max-width: 300px;
  height: 100%;
  background-color: ${props => props.theme.colors.background};
  border-right: 1px solid ${props => props.theme.colors.border};
  padding: 20px 0px;
  max-height: calc(100vh - 70px);
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar{
    display: none;
  }

  :hover{
    ::-webkit-scrollbar{
      display: flex;
    }
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.secundary};
    border-radius: 100px;
  }
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 15px;
  background-color: ${props => props.theme.colors.contrast};
  border-radius: 15px;
  width: calc(100% - 40px);
  flex-wrap: nowrap;
  overflow: hidden;
  cursor: pointer;
  margin: 0 auto;
  min-height: 70px;
`;

export const Photo = styled.img`
  display: flex;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  min-width: 50px;
  object-fit: cover;
  margin-right: 15px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h1{
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  p{
    font-size: 12px;
    color: ${props => props.theme.colors.info};
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 80%;
  }
`;

export const RoutesList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.border};

  .active{
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
  }

  .inactive{
    color: ${props => props.theme.colors.secundary};
    font-weight: normal;
  }

  .titleSpace{
    margin-top: 20px;
  }

`;

export const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-transform: lowercase;
  font-variant: small-caps;
  margin-bottom: 15px;
`;

export const Route = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  padding: 15px;

  :hover{
    background-color: ${props => props.theme.colors.contrast}
  }

  span{
    font-size: 0.9rem;
  }

  .icon{
    font-size: 1.3rem;
    margin-right: 10px;
  }
`;

export const Help = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 20px;
  padding: 20px;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.border};

  h1{
    font-size: 1rem;
    margin-bottom: 5px;
  }

  p{
    font-size: 0.75rem;
    margin-bottom: 15px;
  }
`;

export const Docs = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px 20px;
  border-radius: 100px;
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.text};
  width: 100%;
  border: none;
  cursor: pointer;
  transition: 0.5s all;
  font-weight: bold;

  :hover{
    transition: 0.5s all;
    background-color: ${props => props.theme.colors.primaryHover};
  }
`;
