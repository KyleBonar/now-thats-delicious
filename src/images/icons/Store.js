import React from 'react'

class Store extends React.Component {
    render() {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                width={this.props.width || 50}
                height={this.props.height || 50}
                enableBackground="new 0 0 512 512"
            >
            <title id="store-icon">Store Icon</title>
                <g>
                    <path d="M469,493.6V188c35.5-10.9,43.7-45,37.7-68.9L475.3,2H36.7L5.2,119.3C-0.7,143,7.9,177.1,43,188v305.6H2V510h508v-16.4H469z    M452.6,174.1c-22.6,0-41-18.4-41-41v-32.8h73.1l6.2,22.9C496.7,144,483.9,174.1,452.6,174.1z M116.7,100.3h81.9v32.8   c0,22.6-18.4,41-41,41c-22.6,0-41-18.4-41-41V100.3z M215,100.3H297v32.8c0,22.6-18.4,41-41,41c-22.6,0-41-18.4-41-41V100.3z    M313.4,100.3h81.9v32.8c0,22.6-18.4,41-41,41c-22.6,0-41-18.4-41-41V100.3z M49.3,18.4h413.5l17.6,65.5H31.7L49.3,18.4z    M21.1,123.4l6.2-23.1h73.1v32.8c0,22.6-18.4,41-41,41C28,174.1,15.3,143.1,21.1,123.4z M297,493.6v-213h114.7v213H297z    M452.6,493.6h-24.6V264.2H280.6v229.4H59.4V190.5c20.8,0,39.1-11.2,49.2-27.8c10,16.7,28.3,27.8,49.2,27.8   c20.8,0,39.1-11.2,49.2-27.8c10,16.7,28.3,27.8,49.2,27.8c20.8,0,39.1-11.2,49.2-27.8c10,16.7,28.3,27.8,49.2,27.8   c20.8,0,39.1-11.2,49.2-27.8c10,16.7,28.3,27.8,49.2,27.8V493.6z"></path>
                    <path d="M83.9,469h163.9V305.2H83.9V469z M100.3,395.3h57.4v57.4h-57.4V395.3z M174.1,452.6v-57.4h57.4v57.4H174.1z M231.4,378.9   h-57.4v-57.4h57.4V378.9z M157.7,321.5v57.4h-57.4v-57.4H157.7z"></path>
                    <rect x="165.9" y="231.4" width="16.4" height="16.4"></rect>
                    <rect x="133.1" y="231.4" width="16.4" height="16.4"></rect>
                    <rect x="198.6" y="231.4" width="16.4" height="16.4"></rect>
                </g>
            </svg>
        )
    }
}

module.exports = Store