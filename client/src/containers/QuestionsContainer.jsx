import { connect } from 'react-redux';
import QuestionsModule from '../Questions_answers/QuestionsModule.jsx';

const mapStateToProps = state => ({
  currentProduct: state.currentProduct,
});

const QuestionsContainer = connect(
  mapStateToProps,
  null
)(QuestionsModule);

export default QuestionsContainer;
