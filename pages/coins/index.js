import axios from "axios";

const CoinList = ({ coinData }) => {
  console.log(coinData);
  return (
    <div>
      {coinData.coins.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <img src={item.icon} />
            <p>{item.price}</p>
          </div>
        );
      })}
    </div>
  );
};

// Fetching data ===>>> getStaticProps or getServerSideProps (update itself when their is request)
export const getStaticProps = async ({ params }) => {
  //   const id = params.id;

  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  return {
    props: {
      coinData: data.data,
    },
    revalidate: 5,
  };
};
export default CoinList;
