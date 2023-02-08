import styled, { css } from "styled-components";

interface iStyledButtonProps {
  size: "big" | "medium";
  color: "primary" | "grey" | "transparent";
}

export const StyledButton = styled.button<iStyledButtonProps>`
  border-radius: 8px;
  border: 2px solid transparent;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize.headline};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  cursor: pointer;
  transition: 0.3s ease;

  ${({ size }) => {
    switch (size) {
      case "big":
        return css`
          padding: 18px 20px;
        `;
      case "medium":
        return css`
          padding: 10.5px 20px;
        `;
    }
  }};

  ${({ color }) => {
    switch (color) {
      case "primary":
        return css`
          background: ${({ theme }) => theme.color.primary};
          color: #fff;

          :hover {
            background: ${({ theme }) => theme.color.primary50};
          }
        `;
      case "grey":
        return css`
          background: ${({ theme }) => theme.color.grey100};
          color: ${({ theme }) => theme.color.grey300};

          :hover {
            background: ${({ theme }) => theme.color.grey300};
            color: ${({ theme }) => theme.color.grey100};
          }
        `;
      case "transparent":
        return css`
          background: transparent;
          padding: 0;
        `;
    }
  }}
`;
