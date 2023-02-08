import styled from "styled-components";

export const StyledLogo = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.heading1};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.grey600};

  > span {
    font-size: ${({ theme }) => theme.fontSize.heading3};
    color: ${({ theme }) => theme.color.secondary};
  }
`;
