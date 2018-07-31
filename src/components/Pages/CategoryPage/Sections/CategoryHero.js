import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Section from '../../../Layout/Section/Section';
import { SearchButton } from '../../../Shared/UI/Button/Button';

const HeroContainer = styled(Section)`
  background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${({ imgUrl }) => imgUrl});
  min-height: 380px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  margin: auto;
  padding: 0;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 380px;
  }
`;

const SearchInput = styled.input`
  padding: 15px;
  border: solid 1px #d3d4d5;
  flex-grow: 1;

  border-radius: 4px 0 0 4px;

  ::placeholder {
    color: #8a8a8a;
    opacity: 1;
  }
`;
const Content = styled.div`
  color: #fff;
  text-align: center;
  max-width: 66.66%;
`;
const TitleWrapper = styled.div`
  font-size: 40px;
  font-weight: bold;
`;
const SloganWrapper = styled.div`
  font-size: 20px;
  letter-spacing: 3px;
  margin-bottom: 1.5rem;
`;
const SearchWrapper = styled.div`
  display: flex;
`;

const CategoryHero = ({ imgUrl, title, slogan }) => (
  <HeroContainer imgUrl={imgUrl}>
    <Content>
      <TitleWrapper>{title}</TitleWrapper>
      <SloganWrapper>{slogan}</SloganWrapper>
      <SearchWrapper>
        <SearchInput placeholder="What service do you need?" />
        <SearchButton>Get Started</SearchButton>
      </SearchWrapper>
    </Content>
  </HeroContainer>
);

CategoryHero.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
};

export default CategoryHero;
