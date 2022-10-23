import "./scss/DirectoryItems.scss";

const CategoryItems = ({ category }) => (
  <div key={category.id} className="directory-container">
    <div
      className="background-image"
      style={{
        //Allows use to use a string variable inside of another string:
        backgroundImage: `url(${category.imageUrl})`,
      }}
    />
    <div className="background-body">
      <h2>{category.title}</h2>
      <p>Shop Now</p>
    </div>
  </div>
);

export default CategoryItems;
