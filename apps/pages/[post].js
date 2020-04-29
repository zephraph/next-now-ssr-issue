export const getServerSideProps = (req) => {
  return {
    props: {
      id: req.query.post,
    },
  };
};

export default ({ id }) => {
  return <h1>Your post id is {id}</h1>;
};
