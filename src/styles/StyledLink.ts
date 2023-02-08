import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface iStyledLink {
  type: "filled" | "empty";
}

export const StyledLink = styled(Link)<iStyledLink>`
  text-align: center;
  transition: 0.3s ease;

  ${({ type }) => {
    switch (type) {
      case "filled":
        return css`
          border-radius: 8px;
          border: 2px solid transparent;
          width: 100%;
          font-size: ${({ theme }) => theme.fontSize.headline};
          font-weight: ${({ theme }) => theme.fontWeight.semiBold};
          cursor: pointer;
          padding: 18px 20px;
          background: ${({ theme }) => theme.color.grey100};
          color: ${({ theme }) => theme.color.grey300};
          text-decoration: none;

          :hover {
            background: ${({ theme }) => theme.color.grey300};
            color: ${({ theme }) => theme.color.grey100};
          }
        `;
      case "empty":
        return css`
          font-size: ${({ theme }) => theme.fontSize.body};
          font-weight: ${({ theme }) => theme.fontWeight.regular};
          color: ${({ theme }) => theme.color.grey300};
          text-decoration: underline;
        `;
    }
  }};
`;
