import styled from "styled-components";

export const StyledCartItens = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 24px;
  gap: 20px;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-height: 400px;
    overflow-y: scroll;
  }

  > ul > li {
    display: flex;
    justify-content: space-between;
  }

  > ul > li > div {
    display: flex;
    gap: 10px;
  }

  > ul > li div > img {
    width: 82px;
    height: 80px;
    padding: 13px;
    background: ${({ theme }) => theme.color.grey100};
    border-radius: 5px;
  }

  > ul > li > div > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  > ul > li > div > div > h2 {
    font-size: ${({ theme }) => theme.fontSize.heading3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.grey600};
  }

  > ul > li > div > div > div {
    display: flex;
    width: max-content;
    justify-content: space-between;
    background: ${({ theme }) => theme.color.grey100};
    border: 2px solid ${({ theme }) => theme.color.grey100};
  }

  > ul > li > div > div > div > button {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 7px;
  }

  > ul > li > div > div > div > button > .icons {
    color: ${({ theme }) => theme.color.secondary};
    width: 16px;
    height: 16px;
  }

  > ul > li > div > div > div > span {
    width: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 9px 20px;
    background: #fff;
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
  }

  > ul > li > button {
    width: max-content;
    height: max-content;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  > ul > li > button > .trash-icon {
    color: ${({ theme }) => theme.color.grey200};
  }

  > ul > li > button > .trash-icon:hover {
    color: ${({ theme }) => theme.color.grey300};
  }

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid ${({ theme }) => theme.color.grey100};
    padding: 15px 0;
  }

  > div > h3 {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.grey600};
  }

  > div > span {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.grey300};
  }
`;
