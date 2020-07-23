export const getServerSideProps = (context) => {
  console.log(context);
  return {
    props: {
      id: context.params.post,
    },
  };
};

export default ({ id }) => {
  return <h1>Your post id is {id}</h1>;
};
