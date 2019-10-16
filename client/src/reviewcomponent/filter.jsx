import React from 'react';

export default class Filter extends React.Component {
    render() {
      return  (
          <div id="rnrFilter">
              <div className="focus filter">250 reviews, sorted by
                  <select className="focus dropdown">
                      <option value="helpful">helpful</option>
                      <option value="newest">newest</option>
                      <option value="relevant">relevance</option>
                  </select>
              </div>
            </div>
        )
    }
}