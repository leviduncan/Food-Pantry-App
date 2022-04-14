import React from 'react';

function ContentCard2(props) {
    const { title } = props
  return (
    <>
        <div className="card border h-100" >
        <div className="card-header">{ title }</div>
        <div className="card-body">
            <h5 className="card-title">Success card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        </div>
    </>
  );
}
export default ContentCard2 