import React from 'react';
import Star from '../star_component/Star.jsx';

export default class Review extends React.Component {
    render() {
      return  (
          <div id="review">
              <header className="topbar">
                  <div className="review_rating">
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                      <Star />
                  </div>
                  <div className="review_userinfo">
                      <div>ExampleUser123, January, 1, 2020</div>
                  </div>
              </header>
              <content>
                  <div className="focus review_title">
                      <div className="overflowhidden ellipsis">Testing title aaaaaaaaaaaaaaaad dddddddddddddddddddd vvvvvvvvvvvvvvvvvvv Testing title aaaaaaaaaaaaaaaad dddddddddddddddddddd vvvvvvvvvvvvvvvvvvv</div>
                  </div>
                  <p className="review_content">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in metus id nulla accumsan viverra. Mauris viverra velit ac enim aliquam vehicula. Nulla tincidunt sem quis est fermentum mattis vitae viverra massa. Proin quis metus aliquet, pretium magna ac, commodo felis. Donec elementum lobortis ex eu egestas. Vivamus et nisi condimentum, dictum nisi sed, efficitur neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pulvinar, nulla ac pulvinar varius, diam metus pulvinar nibh, at luctus ipsum ex vel mi. Vestibulum eget mi erat. Fusce consectetur faucibus tellus sit amet sodales. Suspendisse potenti. Donec sollicitudin laoreet turpis, sed lacinia tellus bibendum ullamcorper. Mauris lacinia sed tortor eu condimentum. Aliquam a nisl eget felis fringilla ultrices a vel turpis.
                  </p>
              </content>
              <footer className="leftjustify review_feedback">
                  <div>Was this review helpful?</div>
                  <div onClick={() => console.log('test')} className="leftpadding reviewlinks">Yes</div><div className="leftpadding">|</div><div onClick={() => console.log('test')} className="leftpadding reviewlinks">Report</div>
              </footer>
            </div>
        )
    }
}