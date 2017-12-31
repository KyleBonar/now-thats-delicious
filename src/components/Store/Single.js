import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getStoreBySlug as getStore } from "../../actions/store";

import Checker from "../../helper/Checker/Checker.js";
import FillerImage from "../../images/photos/store.jpg";

const GenerateStaticGoogleMap = ({ className, longitude, latitude }) => {
  return (
    <img
      className={className}
      src={`https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=800x150&key=AIzaSyBjyKevCZH8vO5TOByZaH37d--miW703f8&markers=${latitude},${longitude}&scale=2`}
    />
  );
};
GenerateStaticGoogleMap.proptypes = {
  className: PropTypes.string.isRequired,
  longitude: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired,
  latitude: PropTypes.oneOf([PropTypes.string, PropTypes.number]).isRequired
};

const GenerateTagsList = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map(tag => {
        return (
          <li className="tag" key={tag}>
            <Link to={`/tags/${tag}`} className="tag-link">
              <span className="tag-text">#{tag}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
GenerateTagsList.proptypes = {
  tags: PropTypes.arrayOf([PropTypes.string]).isRequired
};

class Single extends Component {
  componentDidMount() {
    this.getStore();
  }

  render() {
    return (
      <div className="inner">
        {Object.keys(this.props.store).length > 0 && (
          <div className="single">
            <div className="single-hero">
              <img
                className="single-image"
                onLoad={e =>
                  (e.target.src = `http://localhost:7777/public/uploads/${
                    this.props.store.photo
                  }`)
                }
                src={FillerImage}
                onError={e => (e.target.src = FillerImage)}
              />
              <h2 className="title title-single">
                <Link to={this.props.store.slug}>{this.props.store.name}</Link>
              </h2>
            </div>
          </div>
        )}

        {Object.keys(this.props.store).length > 0 && (
          <div className="single-details inner">
            <GenerateStaticGoogleMap
              longitude={this.props.store.location.coordinates[0]}
              latitude={this.props.store.location.coordinates[1]}
              className="single-map"
            />
            <p className="single-location">
              {this.props.store.location.address}
            </p>
            <p>{this.props.store.description}</p>
            {this.props.store.tags.length > 0 && (
              <GenerateTagsList tags={this.props.store.tags} />
            )}
          </div>
        )}
      </div>
    );
  }

  getStore = () => {
    if (this.props.store && Object.keys(this.props.store).length > 0) return;

    const slug = this.props.match.params.slug;
    this.props
      .getStore(slug)
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
}
Single.proptypes = {
  store: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf([PropTypes.string]).isRequired,
    location: PropTypes.shape({
      address: PropTypes.string.isRequired,
      coordinates: PropTypes.arrayOf([PropTypes.number.isRequired]).isRequired
    }).isRequired
  }).isRequired,
  getStore: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    store: state.store
  };
};

const mapDispatchToProps = {
  getStore
};

module.exports = connect(mapStateToProps, mapDispatchToProps)(Single);
