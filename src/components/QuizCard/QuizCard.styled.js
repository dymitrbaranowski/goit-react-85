import styled from 'styled-components';

const getBorderColor = props => {
  switch (props.level) {
    case 'beginner':
      return props.theme.color.green;
    case 'intermediate':
      return props.theme.color.orange;
    case 'advanced':
      return props.theme.color.red;
    default:
      return null;
  }
};
export const Wrapper = styled.div`
  padding: 8px;
  border: 10px solid ${getBorderColor};
  border-radius: 4px;
`;

export const Topic = styled.h2`
  margin-top: 0;
  margin-bottom: 12px;
`;

export const Metawrapper = styled.div`
  display: flex;
  gap: 8px;
`;
export const Text = styled.p`
  margin: 0;

  color: ${props => {
    return props.color;
  }};
`;
