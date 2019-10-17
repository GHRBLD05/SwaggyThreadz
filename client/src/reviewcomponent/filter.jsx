import React from 'react';

export default class Filter extends React.Component {
    constructor(props) {
        super(props);

        this.sortingChanged = new CustomEvent("sortingChanged", { detail: { sortOptions: null } })
    }

    onSortingChanged(e) {
        this.sortingChanged.detail.sortOptions = e.target.value;
        document.getElementById("reviews").dispatchEvent(this.sortingChanged);
    }

    render() {
      return  (
          <div id="rnrFilter">
              <div className="focus filter">250 reviews, sorted by
                  <select onChange={this.onSortingChanged.bind(this)} className="focus dropdown">
                      <option value="relevance">relevance</option>
                      <option value="helpful">helpful</option>
                      <option value="newest">newest</option>
                  </select>
              </div>
            </div>
        )
    }
}