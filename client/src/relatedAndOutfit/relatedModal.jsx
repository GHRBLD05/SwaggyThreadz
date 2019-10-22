import React from "react";

const RelatedModal = props => {
  const featureObjects = props.currentProduct.features.map(featureObj => ({
    feature: featureObj.feature,
    currentProductValue: featureObj.value,
    relatedProductValue: null
  }));
  const features = featureObjects.map(featureObj => featureObj.feature);
  for (const relatedFeatureObj of props.relatedProduct.features) {
    if (!features.includes(relatedFeatureObj.feature)) {
      featureObjects.push({
        feature: relatedFeatureObj.feature,
        currentProductValue: null,
        relatedProductValue: relatedFeatureObj.value
      });
    } else {
      for (const featureObj of featureObjects) {
        if (relatedFeatureObj.feature === featureObj.feature) {
          featureObj.relatedProductValue = relatedFeatureObj.value;
        }
      }
    }
  }
  console.log("currentItem: ", props.currentProduct);
  console.log("relatedItem: ", props.relatedProduct);
  console.log("totalFeatures: ", featureObjects);
  return (
    <div
      className="modal fade container"
      id={`relatedModal${props.relatedProduct.id}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <div className="container">
              <div className="row justify-content-center">
                <h5 className="modal-title">Comparison</h5>
              </div>
              <div className="row">
                <h4 className="col-4">{props.currentProduct.name}</h4>
                <div className="col-4"></div>
                <h4 className="col-4 text-right">
                  {props.relatedProduct.name}
                </h4>
              </div>
            </div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="container">
              {featureObjects.map(featureObj => (
                <div className="row">
                  <div className="col-4">
                    <p>{featureObj.currentProductValue}</p>
                  </div>
                  <div className="col-4">
                    <p>
                      <b>{featureObj.feature}</b>
                    </p>
                  </div>
                  <div className="col-4">
                    <p>{featureObj.relatedProductValue}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={function(e) {
                e.stopPropagation();
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedModal;
