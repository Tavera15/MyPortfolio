import React from 'react';

function PageCarousel(props)
{
	return(
		<div className="image-ctr">
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">

            	{props.images.map((image, key) => {
					return (key === 0 ?
						<div key={key+1} className="carousel-item active">
			              <img className="d-block w-100 work-img" src={image} alt="First slide" />
			            </div> :
			            <div key={key+1} className="carousel-item">
			              <img className="d-block w-100 work-img" src={image} alt="Next slide" />
			            </div>
					)
				})}

            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
	)
}

export default PageCarousel;