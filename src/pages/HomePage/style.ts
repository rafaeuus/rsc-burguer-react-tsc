import styled from "styled-components";

export const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;

  > div > div {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    left: 0;
  }

  > div > div > .loading-icon {
    width: 80px;
    height: 80px;
    color: ${({ theme }) => theme.color.grey300};
  }

  > div > ul {
    margin-top: 135px;
    margin-bottom: 85px;
    display: flex;
    flex-wrap: wrap;
    gap: 56px;
  }

  @media (max-width: 768px) {
    > div > ul {
      margin-top: 135px;
      margin-bottom: 85px;
      display: flex;
      flex-wrap: nowrap;
      gap: 56px;
      overflow-y: scroll;
    }
  }

  > div > ul > li {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 300px;
    border-radius: 2px;
    border: 2px solid ${({ theme }) => theme.color.grey0};
  }

  > div > ul > li:hover {
    border-color: ${({ theme }) => theme.color.primary};
  }

  > div > ul > li > img {
    background: ${({ theme }) => theme.color.grey0};
    width: 100%;
    height: 150px;
    object-fit: contain;
    border-radius: 2px 2px 0 0;
  }

  > div > ul > li > div {
    padding: 23px 20px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  > div > ul > li > div > h2 {
    font-size: ${({ theme }) => theme.fontSize.heading3};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.color.grey600};
  }

  > div > ul > li > div > p {
    font-size: ${({ theme }) => theme.fontSize.caption};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    color: ${({ theme }) => theme.color.grey300};
  }

  > div > ul > li > div > span {
    font-size: ${({ theme }) => theme.fontSize.body};
    font-weight: ${({ theme }) => theme.fontWeight.semiBold};
    color: ${({ theme }) => theme.color.primary};
  }

  > div > ul > li > div > button {
    background: ${({ theme }) => theme.color.grey200};
    color: #fff;
    max-width: 106px;
    width: 100%;
    padding: 10px;
  }

  > div > ul > li:hover > div > button {
    border-color: ${({ theme }) => theme.color.primary};
    background: ${({ theme }) => theme.color.primary};
  }

  > div > ul > li > div > button:hover {
    background: ${({ theme }) => theme.color.primary50};
    border-color: ${({ theme }) => theme.color.primary50};
    color: #fff;
  }
`;
