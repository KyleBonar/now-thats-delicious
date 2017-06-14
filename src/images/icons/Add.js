import React, { Component } from 'react'

class Add extends Component {
    render() {
        return(
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                x="0px"
                y="0px"
                viewBox="0 0 100 100"
                width={this.props.width || 50}
                height={this.props.height || 50}
            >
                <g transform="translate(0,-952.36218)">
                    <path d="M 10.8125 10 A 1.0000999 1.0000999 0 0 0 10 11 L 10 89 A 1.0000999 1.0000999 0 0 0 11 90 L 89 90 A 1.0000999 1.0000999 0 0 0 90 89 L 90 11 A 1.0000999 1.0000999 0 0 0 89 10 L 11 10 A 1.0000999 1.0000999 0 0 0 10.8125 10 z M 12 12 L 88 12 L 88 88 L 12 88 L 12 12 z M 49.875 26.96875 A 1.0000999 1.0000999 0 0 0 49 28 L 49 49 L 28 49 A 1.0000999 1.0000999 0 0 0 27.8125 49 A 1.0043849 1.0043849 0 0 0 28 51 L 49 51 L 49 72 A 1.0000999 1.0000999 0 1 0 51 72 L 51 51 L 72 51 A 1.0000999 1.0000999 0 1 0 72 49 L 51 49 L 51 28 A 1.0000999 1.0000999 0 0 0 49.875 26.96875 z " transform="translate(0,952.36218)"></path>
                </g>
            </svg>
        )
    }
}

module.exports = Add