import "./collection.scss";
import CollectionItem from "../../components/collection-item/CollectionItem";
import { connect } from "react-redux";
import { selectCollect } from "../../redux/shop/shopSelector";

const Collection = ({ collection }) => {
  console.log("collection ========>", collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollect(ownProps.match.params.categoryId)(state),
  };
};
export default connect(mapStateToProps)(Collection);
