import styled from "styled-components";

interface Props {
  activeCategory: boolean;
  beingRemoved: boolean;
}

const CategoryStyles = styled.a<Props>`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 70px;

  align-items: center;
  justify-content: space-between;

  padding-left: 20px;
  padding-right: 20px;

  border-radius: 20px;

  opacity: ${(props) => (props.beingRemoved ? "0" : "1")};
  transform: ${(props) => (props.beingRemoved ? "translateY(-10px)" : "")};

  cursor: pointer;

  background-color: ${(props) => (props.activeCategory ? "var(--bg)" : "")};

  transition: 0.25s ease;
  transition-property: background-color transform opacity;

  animation: fadeIn 0.25s ease;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }

  :hover {
    background-color: var(--bg);
  }

  .left {
    position: relative;

    display: flex;
    flex-direction: row;

    align-items: center;

    gap: 20px;

    span {
      display: grid;
      place-items: center;

      width: 33px;
      height: 33px;

      border-radius: 10px;

      outline: 2px solid transparent;

      transition: 0.25s ease;
      transition-property: background-color;

      :hover {
        background-color: var(--gray);
      }
    }
  }

  .task-amout {
    position: relative;

    display: grid;
    place-items: center;

    width: 30px;
    height: 30px;

    border-radius: 10px;

    color: var(--darkGray);
    background-color: var(--gray);

    :hover {
      .remove-category {
        opacity: 1;
        pointer-events: auto;
      }
    }

    .remove-category {
      position: absolute;

      display: grid;
      place-items: center;

      border: none;
      outline: none;

      opacity: 0;
      pointer-events: none;

      cursor: pointer;

      background-color: var(--gray);

      transition: 0.25s ease;
      transition-property: opacity;

      img {
        pointer-events: none;
      }
    }
  }

  @media (max-width: 1024px) {
    padding: 0px;
    padding-left: 20px;

    .task-amout {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;

    justify-content: center;

    border-radius: 15px;

    padding: 0px;

    .left {
      h3 {
        display: none;
      }
    }
  }
`;

export default CategoryStyles;