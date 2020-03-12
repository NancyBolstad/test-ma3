import * as React from 'react';
import ThemeWrapper from '../../components/ThemeWrapper';
import Heading from '../../components/Heading';
import HomeContent from '../../components/HomeContent';
import NewsList from '../../components/NewsList';

interface Props {}

export const News: React.FunctionComponent<Props> = () => {
  return (
    <ThemeWrapper>
      <Heading content="News List" isPrimaryColor />
      <HomeContent>
        <NewsList />
      </HomeContent>
    </ThemeWrapper>
  );
};

export default News;
