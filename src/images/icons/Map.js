import React, { Component } from "react";
import PropTypes from "prop-types";

class Map extends Component {
  render() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 100 100"
        width={this.props.width || 50}
        height={this.props.height || 50}
      >
        <title id="map-logo"> Map Logo </title>
        <g transform="translate(0,-952.36218)">
          <path
            d="M 50 7 C 34.547861 7 22 19.54786 22 35 C 22 40.57041 23.638151 45.76226 26.4375 50.125 L 41.8125 74.09375 C 40.231164 74.53008 38.773343 75.075874 37.5 75.75 C 34.237716 77.4771 32 80.0043 32 83 C 32 85.9957 34.237716 88.5229 37.5 90.25 C 40.762284 91.9771 45.162521 93 50 93 C 54.837479 93 59.237716 91.9771 62.5 90.25 C 65.762284 88.5229 68 85.9957 68 83 C 68 80.0043 65.762284 77.4771 62.5 75.75 C 61.230445 75.077879 59.763012 74.531175 58.1875 74.09375 L 73.5625 50.125 C 76.361854 45.76236 78 40.57042 78 35 C 78 19.54786 65.452139 7 50 7 z M 50 9 C 64.371261 9 76 20.62874 76 35 C 76 40.17818 74.476246 44.9774 71.875 49.03125 L 50 83.125 L 28.125 49.03125 C 25.523749 44.9773 24 40.17819 24 35 C 24 20.62874 35.628739 9 50 9 z M 50 24 C 43.9367 24 39 28.9368 39 35 C 39 41.0632 43.9367 46 50 46 C 56.0633 46 61 41.0632 61 35 C 61 28.9368 56.0633 24 50 24 z M 50 26 C 54.9824 26 59 30.0176 59 35 C 59 39.9824 54.9824 44 50 44 C 45.0176 44 41 39.9824 41 35 C 41 30.0176 45.0176 26 50 26 z M 42.96875 75.875 L 49.15625 85.53125 A 1.0001 1.0001 0 0 0 50.84375 85.53125 L 57.03125 75.875 C 58.732044 76.302949 60.27775 76.851118 61.5625 77.53125 C 64.453006 79.06155 66 81.0251 66 83 C 66 84.9748 64.453006 86.93855 61.5625 88.46875 C 58.671994 89.99905 54.55136 91 50 91 C 45.44864 91 41.328006 89.99905 38.4375 88.46875 C 35.546994 86.93855 34 84.9748 34 83 C 34 81.0251 35.546994 79.06155 38.4375 77.53125 C 39.723065 76.850687 41.266195 76.303105 42.96875 75.875 z "
            transform="translate(0,952.36218)"
          />
        </g>
      </svg>
    );
  }
}
Map.propTypes = {
  height: PropTypes.string,
  widthL: PropTypes.string
};
module.exports = Map;
