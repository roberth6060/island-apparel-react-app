import SHOP_DATA from "../../../shop-data.json";

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, name, imageUrl }) => (
        <div key={id}>
          <h1>{name}</h1>
          <img src={imageUrl} alt={id} width="300" />
        </div>
      ))}
    </div>
  );
};

export default Shop;
