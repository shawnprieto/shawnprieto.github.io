import React from 'react';
import Img from './Img';
import NoImgs from './NoImgs';
const ImgList = props => {
	const results = props.data;
	let imgs;
	if (results.length > 0) {
		imgs = results.map(img =>
			<Img
				url={img.urls.thumb}
				user={img.user.links.html}
				name={img.user.name}
				link={img.links.html}
				key={img.id}
                desc={img.alt_description}
                dload={img.links.download}
                
			/>
		);
	} else {
		imgs = <NoImgs />;
	}
	return (
		<ul className="img-list">
			{imgs}
		</ul>


	);
};

export default ImgList;