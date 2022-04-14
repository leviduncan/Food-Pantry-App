import React from 'react';

function Hero2(props) {
    const { title, subTitle } = props
  return (
    <>
        <div className="row secondary-hero mb-4">
            <div className="container d-flex align-items-center">
                <div className="col-12 mt-3 text-center">
                    <h3>{ title }</h3>
                    <h4>{ subTitle }</h4>
                </div>
            </div>
        </div>
    </>
  );
}
export default Hero2