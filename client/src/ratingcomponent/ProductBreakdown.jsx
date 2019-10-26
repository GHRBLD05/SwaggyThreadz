import React from "react";

export default class ProductBreakdown extends React.Component {
    render() {
        var value;
        console.log(this.props)
        if (this.props.characteristics === null) {
            value = 0;
        }
        else {
            value = this.props.characteristics.Comfort
        }

        return (
            <div>
                <input type="range" min="1" max="5" value={value} className="ffslider" id="myRange" readOnly />
                <input type="range" min="1" max="5" value={value} className="ffslider" id="myRange" readOnly />
                <input type="range" min="1" max="5" value={value} className="ffslider" id="myRange" readOnly />
                <input type="range" min="1" max="5" value={value} className="ffslider" id="myRange" readOnly />
            </div>
        )
    }
}