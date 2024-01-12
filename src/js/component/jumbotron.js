import React from "react";


const Jumbotron = () => {
	// Here you have to return expected html using the properties being passed to the component
	return (
		<div className="jumbotron m-4 bg-light">
			<h1 className="display-4 p-3"> A Warm Welcome!</h1>
			<p className="lead p-3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at sapien id ante posuere varius euismod sed magna. Phasellus eros mauris, ornare eu sapien tempus, bibendum porttitor lorem. Maecenas a quam vitae lorem bibendum efficitur in at enim. Curabitur ac vestibulum justo. Aliquam dignissim felis ipsum, mattis egestas ipsum vehicula eu. Suspendisse mattis ullamcorper nibh. Nulla quam leo, tincidunt eu molestie placerat, vulputate luctus augue. Suspendisse elementum, ante at malesuada tempus, leo arcu mollis augue, sit amet semper elit nulla nec nisl.</p>
			<a className="btn btn-primary btn-lg m-3" role="button">
				Call to action
			</a>
			
		</div>
	);
};

export default Jumbotron;
