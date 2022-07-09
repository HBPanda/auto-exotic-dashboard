import styled from "styled-components";

interface Props {
  checked?: boolean;
}

const MainStyles = styled.main<Props>`
  display: flex;
  flex-direction: column;

  width: calc(70vw - 120px);
  height: calc(100vh - 80px);

  align-items: center;

  #tasks-area-wrapper {
    display: flex;
    flex-direction: column;

    width: 80%;
    height: 100%;

    gap: 10px;
    padding: 40px;
    padding-bottom: 0;

    header {
      position: relative;

      display: flex;
      flex-direction: column;

      height: fit-content;

      justify-content: center;

      margin-bottom: 30px;

      transform: translateX(60px) translateY(0px);

      animation: slideIn 0.15s ease;

      @keyframes slideIn {
        0% {
          transform: translateX(60px) translateY(-10px);
          opacity: 0;
        }
        100% {
          transform: translateX(60px) translateY(0px);
          opacity: 1;
        }
      }

      img {
        position: absolute;

        left: -60px;
      }

      h2 {
        color: var(--darkGray);
      }
    }

    #task-writter {
      display: flex;
      flex-direction: row;

      z-index: 1;

      width: 100%;
      min-height: 70px;

      align-items: center;

      padding-left: 20px;
      padding-right: 15px;
      margin-bottom: 10px;

      border-radius: 20px;

      background-color: var(--gray);

      transition: 0.15s ease;
      transition-property: background-color box-shadow;

      .left {
        display: flex;
        flex-direction: row;

        width: 100%;
        height: 100%;

        align-items: center;

        gap: 20px;

        overflow: hidden;

        label {
          width: 30px;
          height: 30px;

          cursor: pointer;

          input {
            display: none;
          }

          .checkbox-div {
            display: grid;
            place-items: center;

            width: 30px;
            height: 30px;

            border-radius: 10px;

            background-color: ${(props) => (props.checked ? "black" : "var(--gray)")};

            transform: translateX(-51px);

            transition: 0.15s ease;
            transition-property: opacity transform background-color;

            ::before {
              content: "";

              display: inline-block;

              height: 3px;
              width: 6px;

              border-radius: 2px;

              border-bottom: 4px solid white;
              border-left: 4px solid white;

              opacity: ${(props) => (props.checked ? "1" : "0")};
              transform: ${(props) => (props.checked ? "rotate(-45deg) scale(1)" : "rotate(-45deg) scale(0)")};

              transition: 0.15s ease;
              transition-property: transform opacity;
            }
          }
        }

        form {
          width: 100%;
          height: 100%;

          overflow: hidden;

          transform: translateX(-50px);

          transition: 0.15s ease;
          transition-property: transform;

          input {
            width: 100%;
            height: 100%;

            border: none;
            outline: none;

            font-family: "Inter var", sans-serif;
            font-size: clamp(12px, 1.65vw, 16px);
            font-weight: 400;

            background-color: transparent;
          }
        }
      }

      .right {
        position: relative;

        display: flex;
        flex-direction: row;

        height: 40px;
        width: 150px;

        align-items: center;

        gap: 12px;
        padding: 0px 12px;
        margin-left: 12px;

        border-radius: 10px;

        cursor: pointer;

        color: var(--darkGray);
        background-color: var(--gray);

        opacity: 0;
        pointer-events: none;

        transition: 0.15s ease;
        transition-property: opacity;

        h4 {
          overflow: hidden;
          white-space: nowrap;
        }

        img {
          pointer-events: none;
        }
      }

      :focus-within,
      :active {
        background-color: var(--fg);

        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1);

        .left {
          label {
            pointer-events: auto;

            .checkbox-div {
              transform: translateX(0px);
              opacity: 1;

              animation: bounce 0.25s ease forwards;

              @keyframes bounce {
                0% {
                  transform: scale(1);
                }
                50% {
                  transform: scale(0.9);
                }
                100% {
                  transform: scale(1);
                }
              }
            }
          }

          form {
            transform: translateX(0px);
          }
        }

        .right {
          opacity: 1;
          pointer-events: auto;
        }
      }
    }

    .category-indicator {
      display: none;

      padding-left: 20px;
    }

    ul {
      display: flex;
      flex-direction: column;

      width: 100%;
      height: 100%;

      overflow: scroll;
      white-space: nowrap;

      gap: 10px;

      ::-webkit-scrollbar {
        width: 0;
      }
    }
  }

  @media (max-width: 1024px) {
    width: 100%;

    #tasks-area-wrapper {
      #task-writter {
        min-height: 50px;
        border-radius: 15px;
      }

      header {
        transform: translateX(0px);
        padding-left: 20px;

        img {
          display: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
    #tasks-area-wrapper .category-indicator {
      display: unset;
    }
  }

  @media (max-width: 600px) {
    #tasks-area-wrapper {
      width: 100%;
    }
  }

  @media (max-width: 425px) {
    #tasks-area-wrapper header {
      display: none;
    }
  }
`;

export default MainStyles;