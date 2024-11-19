import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from "@mdi/react";
import { mdiHomeOutline } from "@mdi/js";
import { mdiStoreOutline } from "@mdi/js";
import { mdiCartOutline } from "@mdi/js";

export default function NavBar() {
  const NavDiv = styled.nav`
    background-color: #242424;
    color: rgba(255, 255, 255, 0.87);
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
  `;

  const Ul = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    flex: 1;
  `;

  const Li = styled.li`
    display: inherit;
  `;

  const StyledLink = styled(Link)`
    color: inherit;
    text-decoration: none;
  `;

  const Button = styled.button`
    border-radius: 15px;
    padding: 10px;
    font-size: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5rem;
    transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;

    &:hover {
      color: rgb(99, 89, 59);
      transform: scale(1.1);
      cursor: pointer;
    }
  `;

  return (
    <NavDiv>
      <Ul>
        <Li>
          <StyledLink to="/">
            <Button>
              Home
              <Icon path={mdiHomeOutline} size={1} />
            </Button>
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/shop">
            <Button>
              Shop
              <Icon path={mdiStoreOutline} size={1} />
            </Button>
          </StyledLink>
        </Li>
        <Li>
          <StyledLink to="/cart">
            <Button>
              Cart
              <Icon path={mdiCartOutline} size={1} />
            </Button>
          </StyledLink>
        </Li>
      </Ul>
    </NavDiv>
  );
}
