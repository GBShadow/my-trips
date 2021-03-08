import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';
import PageTemplate from 'templates/Pages';

const About = () => {
  return <PageTemplate />;
};

export const getStaticPaths = async () => {
  const { pages } = await client.request(GET_PAGES);

  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
  };
};

// export const getStaticProps = async () => {
//   const { pages } = await client.request(GET_PAGES);

//   return {
//     props: {},
//   };
// };

export default About;
