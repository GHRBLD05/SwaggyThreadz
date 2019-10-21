import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ConnectedRatingBreakdown from './RatingBreakdown';
import ConnectedProductBreakdown from './ProductBreakdown';
import getMetaData from ....

const apiUrl = '52.26.193.201:3000'

const mapStateToProps = (state) => ({
  ...state,
});

export class ContainerBreakdown extends React.Component {
  componentDidMount() {
    this.fetchMetaData();
  }

  componentDidUpdate(previousProps) {
    const {productData} = this.props;
    const {id} = productData;
    if (previousProps.productData.id !== id) {
      this.fetchMetaData();
    }
  }

  fetchMetaData() { //code review
    const {productData, dispatch} = this.props;
    const {id} = productData;
    fetch(`${apiUrl}/reviews/${id}/meta`)
    .then((response) => response.json())
    .then((data) => dispatch(getMetaData))
    .catch(() => dispatch(getMetaData))
  }

  render() {
    return(
      <div className='container-breakdown'>
        <ConnectedRatingBreakdown />
        <ConnectedProductBreakdown />
      </div>
    );
  }
 }

 ContainerBreakdown.propTypes = {
   productData: PropTypes.shape({
     id: PropTypes.number.isRequired,
     name: PropTypes.string.isRequired,
   }).isRequired,
   dispatch: PropTypes.func.isRequired,
 };

 const ConnectedContainerBreakdown = connect(mapStateToProps, null)(ContainerBreakdown)