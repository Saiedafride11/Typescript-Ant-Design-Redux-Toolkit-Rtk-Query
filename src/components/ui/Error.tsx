import React from 'react';

const Error = (props: {message: string}) => {
      return (
            <div>
                  {props?.message}
            </div>
      );
};

export default Error;