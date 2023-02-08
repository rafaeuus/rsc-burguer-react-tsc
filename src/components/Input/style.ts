import styled from "styled-components";

interface iStyledInputProps {
  error?: string;
}

export const StyledInput = styled.div<iStyledInputProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 9px;

  div > input::placeholder {
    color: transparent;
  }

  div > input {
    width: 100%;
    height: 60px;
    border-radius: 8px;
    outline: none;
    border: 2px solid
      ${({ error, theme }) => {
        if (error) {
          return theme.color.negative;
        } else {
          return theme.color.primary;
        }
      }};
    padding: 20.5px 15px;
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    background: #fff;
  }

  div > input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px white inset;
    box-shadow: 0 0 0 30px white inset;
  }

  div > input:placeholder-shown {
    border-color: transparent;
    color: ${({ theme }) => theme.color.grey600};
    background: ${({ theme }) => theme.color.grey0};
  }

  div > input:placeholder-shown + span {
    transform: none;
    padding: 20.5px 15px;
    background: transparent;
  }

  div > input:focus {
    background: #fff;
    border-color: ${({ theme }) => theme.color.grey600};
  }

  div > input:focus + span,
  input:-webkit-autofill + span,
  span {
    position: absolute;
    left: 0;
    font-size: ${({ theme }) => theme.fontSize.headline};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.grey50};
    pointer-events: none;
    transition: 0.2s ease;
    padding: 3px 5px;
    border-radius: 2px;
    background: #fff;
    transform: translateY(-10px) translateX(6px);
  }

  > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.negative};
  }
`;
