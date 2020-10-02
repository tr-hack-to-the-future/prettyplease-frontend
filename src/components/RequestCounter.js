import React from 'react';


function RequestCounter({ requestCount }) {
    return (
        <p className="text-justify mt-4">There are {requestCount} sponsorship requests available</p>
    );

}
export default RequestCounter;