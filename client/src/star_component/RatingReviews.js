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

const setProductTestlabels = (label = 'Default') => {
  const defaultTestLabels = {
    Size: {
      left: 'size too small',
      center: 'Perfect',
      right: 'size too big',
    },
    Width: {
      left: 'narrow',
      center: 'Perfect',
      rigth: 'too fat',
    },
    Comfort: {
      left: 'not the right fit',
      center: 'okay',
      right: 'Perfect',
    },
    Quality: {
      left: 'Garbage',
      center: 'what was I thinking?',
      right: 'Perfect',
    },
    Length: {
      left: 'too small',
      center: 'Perfect',
      right: 'too big',
    },
    Fit: {
      left: 'tight',
      center: 'Perfect',
      right: 'too big',
    },
  };
  return {
    leftTestlabel:
      defaultTestLabels[label].left || defaultTestLabels.Default.left,
    centerTestlabel:
      defaultTestLabels[label].center || defaultTestLabels.Default.center,
    rightTestlabel:
      defaultTestLabels[label].right || defaultTestLabels.Default.right,
  };
};

const getReviewFormConfig = () => {
  const formConfig = {
    rating: {
      label: 'Overall Rating:*',
      mandatory: true,
      id: 'rating',
      type: 'radio',
      constraints: {
        options: [1, 2, 3, 4, 5],
      },
    },
    characteristics: {
      label: 'Characteristics PlaceHolder',
      mandatory: false,
      id: 'characteristic placeholder',
      type: 'radio',
      constraints: {
        options: ['Temp1', 'Temp2', 'Temp3'],
      },
    },
  };
  return formConfig;
};
export { setProductRatingValue, setProductTestlabels, getReviewFormConfig };
