import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

const DefaultStyles = `
  font-family: 'Roboto', sans-serif;
  font-size: 1em;
  font-weight: 400;
  margin: 0;
  padding: 0.50em 0.75em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  background-color: #B0E3F4;
`;

const StyledAlert = styled.div`
  ${DefaultStyles}
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  ${({ rounded }) =>
    rounded &&
    `
    border-radius: 0.25em;
  `}

  ${({ bordered, backgroundColor }) =>
    bordered &&
    `
    border: 1px solid ${darken(0.2, backgroundColor)};
  `}
`;

const DismissButton = styled.svg`
  fill: currentColor;
  color: ${(props) => props.color};
  height: 1.5em;
  width: 1.5em;

  &:hover {
    cursor: pointer;
  }
`;

export const Alert = ({
  backgroundColor,
  bordered,
  children,
  color,
  dismissable,
  onDismiss,
  rounded,
}) => {
  return (
    <StyledAlert
      backgroundColor={backgroundColor}
      bordered={bordered}
      color={color}
      rounded={rounded}
    >
      <div>{children}</div>
      {dismissable && (
        <DismissButton
          onClick={onDismiss}
          role="button"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <title>Close</title>
          <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
        </DismissButton>
      )}
    </StyledAlert>
  );
};
