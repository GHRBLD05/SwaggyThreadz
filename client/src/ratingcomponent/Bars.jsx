import React from "react";

export default class Bars extends React.Component {
 
    render() {
        console.log(this.props);
        var index = 0;
        var bars = [];
        for (var i = 5; i > 0; i--) {
            bars.push(
                <div key={`starbar_${i}`} className="ratingcontainer col-sm-12">
                    <div className="col-sm-3">{i} Stars</div>
                    <div className="barcontainer col-sm-9">
                        <div className={`bar col-sm-${this.props.barinfo[index]}`}></div>
                        <div className={`antibar col-sm-${12 - this.props.barinfo[index++]}`}></div>
                    </div>
                </div>
            )
        }

      return(
          <div className="row">
              <div className="col-sm-12" >Some percent of people recommend this product</div>
              {bars}
          </div>
      )
  }
}
