import React from 'react';
import QuestionsModule from './Questions_answers/QuestionsModule.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-8">test</div>
                    <div className="col-md-4">othertest</div>
                    <div className="col-md-12">thirdtest</div>
                </div>

                <div className="row">
                    <div className="col-md-8">test</div>
                    <div className="col-md-4">othertest</div>
                    <div className="col-md-12">thirdtest</div>
                </div>

                <div className="row">
                    <div className="col-md-8">test</div>
                    <div className="col-md-4">othertest</div>
                    <div className="col-md-12">thirdtest</div>
                </div>

                <Reviews />
            </div>
        )
    }
}
