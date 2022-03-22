import "./collectionitem.scss";
import CustomButton from "../custom-button/CustomButton";

const CollectionItem = ({ imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted={true}>Add To Cart</CustomButton>
    </div>
  );
};

export default CollectionItem;
