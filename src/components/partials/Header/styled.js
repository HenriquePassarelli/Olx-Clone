import styled from "styled-components";

export const HeaderArea = styled.div`
  background-color: #fff;
  height: 60px;
  border-bottom: 1px solid #ccc;

  .container {
    max-width: 1000px;
    margin: auto;
    display: flex;
    align-items: center;
  }
  a {
    text-decoration: none;
  }
  .logo {
    flex: 1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo-01,
    .logo-02,
    .logo-03 {
      font-size: 27px;
      font-weight: bold;
    }
    .logo-01 {
      color: #ff0000;
    }
    .logo-02 {
      color: #00ff00;
    }
    .logo-03 {
      color: #0000ff;
    }
  }
  nav {
    padding-top: 10px;
    padding-bottom: 10px;

    ul,
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    ul {
      display: flex;
      align-items: center;
      height: 40px;
    }
    li {
      margin-left: 20px;
      margin-right: 20px;

      a {
        color: #000;
        font-size: 14px;
        text-decoration: none;

        &:hover {
          color: #555;
        }

        &.button {
          background-color: #ff8100;
          border-radius: 4px;
          color: #fff;
          padding: 5px 10px;
        }
        &.button:hover {
          background-color: #e57766;
        }
      }
    }
  }
`;
