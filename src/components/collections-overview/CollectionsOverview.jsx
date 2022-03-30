import React from "react";
import CollectionPreview from "../collection-preview/CollectionPreview";
import { connect } from "react-redux";
import "./collectionsoverview.scss";
import { createStructuredSelector } from "reselect";
import { selectCollection } from "../../redux/shop/shopSelector";

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectCollection,
});

export default connect(mapStateToProps)(CollectionsOverview);
