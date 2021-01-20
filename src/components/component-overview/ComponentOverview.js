import React from "react";
import "./ComponentOverview.scss";
import PreviewCollection from "../preview-collection/PreviewCollection";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/Selectors/shopSelectors";

const ComponentOverview = ({ collections }) => {
  return (
    <div className="component-overview">
      {collections.map(({ id, ...otherCollectionPreview }) => {
        return <PreviewCollection key={id} {...otherCollectionPreview} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectShopItems,
});

export default connect(mapStateToProps)(ComponentOverview);
