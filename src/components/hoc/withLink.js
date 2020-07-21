import React from 'react';
import { Link } from 'react-router-dom';

const withLink 0 wrappedComponent=> props => {
  const newProps = {
    ...props,
    video: {
      ...props.video,
      title: (
        <Link to={{ pathname: `/${props.video.id}`, autoplay: true}}>
          {props.video.title}
        </Link>
      )
    }
  };

  return <wrappedComponent {...props} />;

  export default withLink;
}