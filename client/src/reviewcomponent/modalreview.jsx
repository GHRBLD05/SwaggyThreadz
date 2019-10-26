import React from 'react';
import $ from 'jquery';

export default class ModalReview extends React.Component {

    componentDidMount() {
        let form = document.getElementById("reviewmodal");
        form.addEventListener("submit", e => {
            console.log('here');
            e.preventDefault();
            document.getElementById("controls").dispatchEvent(new CustomEvent("reviewSubmitted", null));
            this.submitReview(form.elements);
        })
    }

    handlePhotos(e) {
        console.log(e.target.files);
    }

    submitReview(vals) {
        var options = {
            rating: vals.rating.value,
            summary: vals.summary.value,
            body: vals.body.value,
            recommend: vals.recommend.value === 'on' ? true : false,
            name: vals.name.value,
            email: vals.email.value,
            photos: "",
            characteristics: {}
        };
        console.log(JSON.stringify(options));

        fetch(`http://52.26.193.201:3000/reviews/${this.props.productid}`, {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(options),
        })
        .then(response => {
            console.log(response);
        })
        .catch(function (error) {
            console.log('Failed', error);
        });

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
                        <input type="file" multiple name="photos" onChange={(e) => { this.handlePhotos(e); }}></input>
                        Characteristics:
                        <input type="text" name="characteristics" defaultValue="Write more.." />
						<input type="submit" value="Submit" />
					</form> 
				</div>
			</div>
		)
    }
}
