// product rating reviews, sublabels, add/writing review functions
// progress bar logic
const setProductRatingValue = (value = 0) => {
  const values = {
    leftValue: 0,
    centerValue: 0,
    rightValue: 0,
  };
  if (value > 0 && value < 1.5) {
    values.leftValue = value;
  }
  if (value >= 1.5 && value < 3) {
    values.centerValue = value;
  }
  if (value >= 3 && value <= 5) {
    values.rightValue = value;
  }
  return values;
};

//review form mandatory
const getReviewFormTest = () => {
  const formTest = {
    rating: { //star rating 1-5
      label: 'Overall Rating: star?',
      mandatory: true,
      id: 'rating',
      type: 'radio',
      constraints: {
        options: [1, 2, 3, 4, 5],
      },
    },
    recommend: { // radio btn array of "yes/no"
      label: 'Do you recommend this product?',
      mandatory: true,
      id: 'recommend',
      type: 'radio',
      consraints: {
        options: ['Yes', 'No']
      },
    },
    characteristcs: {
      label: 'character placeholder',
      mandatory: false,
      id: 'character placeholder',
      type: 'radio',
      constraints: {
        options: ['Temp1, Temp2, Temp3'],
      },
    },
    summary: {
      label: 'Review Summary',
      mandatory: false,
      id: 'summary',
      type: 'text',
      consraints: {
        max: 60,
        placeholder: 'Example Best Purchase Ever!',
      },
    },
    body: {
      label: 'Review Body',
      mandatory: true,
      id: 'body',
      type: 'textarea',
      constraints: {
        min: 60,
        max: 1000,
        placeholder: 'Example Best Purchase Ever!',
      },
    },
    photos: {
      label: 'Upload Your Photos',
      mandatory: false,
      id: 'photos',
      type: 'file',
      constraints: {
        max: 5,
      },
    },
    name: {
      label: 'Your Email',
      mandatory: true,
      id: 'email',
      type: 'email',
      constraints: {
        max: 60,
        placeholder: 'Example: jackson11@email.com',
        sublabel: 'For authentication reasons, you will not be emailed',
      },
    },
  };
  return formTest;
};


//characteristcs mandatory

const setProductSublabels = (label = 'Default') => {
  const defaultSubLabels = {
    Size: {
      left: 'A size too small',
      center: 'Perfect',
      right: ' A size too wide'.
    },
    Width: {
      left: 'Too narrow',
      center: 'Perfect',
      right: 'Too wide',
    },
    Comfort: {
      left: 'Uncomfortable',
      center: 'Ok',
      right: 'Perfect',
    },
    Quality: {
      left: 'Poor',
      center: 'What I expected',
      right: 'Perfect',
    },
    Length: {
      left: 'Runs Short',
      center: 'Perfect',
      right: 'Runs long',
    },
    Fit: {
      left: 'Runs tight',
      center: 'Perfect',
      rigth: 'Runs long',
    }
    Default: {
      left: 'you is a test'
      center: 'you are not perfect test'
      rigth: 'you wish test'
    },
  };
  return {
    leftSublabel: defaultSubLabels[label].left || defaultSubLabels.Default.left,
    centerSublabel: defaultSubLabels[label].left || defaultSubLabels.Default.center,
    rightSublabel: defaultSubLabels[label].left || defaultSubLabels.Default.right,
  };
};

export {
  setProductRatingValue,
  setProductSublabels,
  getReviewFormTest,
};