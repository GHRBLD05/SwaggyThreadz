import React from 'react';
import $ from 'jquery';

export default class ModalReview extends React.Component {

    componentDidMount() {
        let form = document.getElementById("reviewmodal");
		form.addEventListener("submit", e => {
            e.preventDefault();
            this.submitReview(form.elements);
        })
    }

    submitReview(vals) {
        console.log('vals');
        console.log(vals.rating);

        //$.post('http://52.26.193.201:3000/reviews/2', JSON.stringify({ rating: 2, summary: 'testsumm', body: 'bodynasty', recommend: true, name: 'asdfs', email: 'asdf@gmail.com', photos: [], characteristics: {} }),
        //    function (returnedData) {
        //        console.log(returnedData);
        //    });

        $.ajax({
            url: `http://52.26.193.201:3000/qa/2`,
            type: "POST",
            body: JSON.stringify({
                body: 'test',
                name: 'testsumm',
                email: 'bodynasty'
            }),
            success: function (res) {
                console.log(res);
            }
        });

        //$.ajax({
        //    url: `http://52.26.193.201:3000/reviews/2`,
        //    type: "POST",
        //    body: JSON.stringify({
        //        rating: 2,
        //        summary: 'testsumm',
        //        body: 'bodynasty',
        //        recommend: true,
        //        name: 'asdfs',
        //        email: 'asdf@gmail.com',
        //        photos: [],
        //        characteristics: {}
        //    }),
        //    success: function (res) {
        //        console.log(res);
        //    }
        //});
    }

    render() {
        return (
            <div className="modal-cover">
                <div className="modal-area">
                    <form method="POST" id="reviewmodal">
						Rating:
						<input type="text" name="rating" defaultValue="3" />
						Summary:
                        <input type="text" name="summary" defaultValue="Enter summary here.." />
						Body:
                        <input type="text" name="body" defaultValue="Write more.." />
						Recommend:
                        <input type="checkbox" name="recommend" defaultChecked={false} />
                        Body:
                        <input type="text" name="name" defaultValue="Write more.." />
                        Email Address:
                        <input type="text" name="email" defaultValue="Write more.." />
                        Upload Photos:
                        <input type="file" name="photos" multiple/>
                        Characteristics:
                        <input type="text" name="characteristics" defaultValue="Write more.." />
						<input type="submit" value="Submit" />
					</form> 
				</div>
			</div>
		)
    }
}
