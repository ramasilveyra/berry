import styled from '@emotion/styled';
import {Link} from 'gatsby';
import React  from 'react';

const Container = styled.div`
  position: relative;

  padding-left: 300px;

`;

const Menu = styled.div`
  position: fixed;
  left: 0;

  width: 300px;
  height: calc(100vh - 4em);

  background: #d1dee8;
`;

const MenuEntry = styled(Link)`
  display: flex;
  position: relative;
  align-items: center;

  border-bottom: 1px solid #cfdee9;

  &:first-of-type {
    border-top: 1px solid #cfdee9;
  }

  padding: 1.5em;

  text-decoration: none;

  background: #ffffff;
  color: #333333;

  &::before {
    content: "";

    position: absolute;
    z-index: 1;
    top: -1px;
    bottom: -1px;
    right: 0;

    width: 5px;

    background: #cfdee9;
  }

  &.active::before {
    background: #2188b6;
  }
`;

const Content = styled.div`
  & > * {
    overflow: auto;
  }
`;

const Navigation = ({items, children}) => <>
  <Container>
    <Menu>
      {items.map(({to, name}) => <>
        <MenuEntry to={to} activeClassName={`active`}>
          {name}
        </MenuEntry>
      </>)}
    </Menu>
    <Content>
      {children}
    </Content>
  </Container>
</>;

export default Navigation;
