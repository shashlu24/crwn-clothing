import React from "react";
import PreviewCollection from "../../components/preview-collection/PreviewCollection";
import SHOP_DATA from "./ShopData";

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }
  render() {
    const { collections } = this.state;

    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionPreview }) => {
          return <PreviewCollection key={id} {...otherCollectionPreview} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
