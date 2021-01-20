import React from "react";
import MenuItem from "../menu-item/MenuItem";
import "./Directory.scss";
import { connect } from "react-redux";

import { selectDirectorySections } from "../../redux/Selectors/directorySelector";
import { createStructuredSelector } from "reselect";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherSectionProps }) => (
        <MenuItem key={id} {...otherSectionProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
