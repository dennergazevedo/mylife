import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 30px;
  width: 100%;
  background-color: ${props => props.theme.colors.background};
  border-bottom: 1px solid ${props => props.theme.colors.border};
`;

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

