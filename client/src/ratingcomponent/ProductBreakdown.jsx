import React from "react";

class ProductBreakdown extends React.Component {
    render() {
        return (
            <div>
                <input type="range" min="1" max="5" value="2" className="ffslider" id="myRange" readOnly/>
            </div>)
    }
}

export default ProductBreakdown;
