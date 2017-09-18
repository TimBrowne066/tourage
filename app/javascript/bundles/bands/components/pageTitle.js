import React from 'react';
import { Row, Col } from 'react-bootstrap';


const PageTitle = (props) => {
  return(
    <div>
        <h1 className="bands-title">{props.title}</h1>
    </div>
  )
}

export default PageTitle;
