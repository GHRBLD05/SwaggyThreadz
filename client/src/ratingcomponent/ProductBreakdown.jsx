import React from "react";

export default class ProductBreakdown extends React.Component {
    render() {
        var characteristics;
        if (this.props.characteristics === null) {
            characteristics = [0, 0, 0, 0]
        }
        else {
            characteristics = [
                this.props.characteristics["Comfort"] !== null ? this.props.characteristics["Comfort"] : 0,
                this.props.characteristics["Quality"] !== null ? this.props.characteristics["Quality"] : 0,
                this.props.characteristics["Size"] !== null ? this.props.characteristics["Size"] : 0,
                this.props.characteristics["Width"] !== null ? this.props.characteristics["Width"] : 0
            ];
        }

        return (
            <div id="characteristics">
                Comfort:
                <input type="range" min="1" max="5" value={characteristics[0] !== undefined ? characteristics[0].value : 0} className="ffslider" id="myRange" readOnly />
                Quality:
                <input type="range" min="1" max="5" value={characteristics[1] !== undefined ? characteristics[1].value : 0} className="ffslider" id="myRange" readOnly />
                Size:
                <input type="range" min="1" max="5" value={characteristics[2] !== undefined ? characteristics[2].value : 0} className="ffslider" id="myRange" readOnly />
                Width:
                <input type="range" min="1" max="5" value={characteristics[3] !== undefined ? characteristics[3].value : 0} className="ffslider" id="myRange" readOnly />
            </div>
        )
    }
}