import styled from 'styled-components';

const Bar = styled.div`
  width: 120px;
  height: 8px;
  border-radius: 16px;
  background: ${({ status }) => {
    if (status === 'PENDING') {
      return '#e3e2e7';
    } else if (status === 'IN-PROGRESS') {
      return '#6542f1';
    } else if (status === 'DONE') {
      return '#baa9ff';
    }
  }};
`;
export default Bar;
