import React from 'react';
import { Card } from 'react-bootstrap';
import DisplayCardRequest from './DisplayCardRequest';

function SponsorshipRequestList({ requestData }) {

    return (
        <Card>
            <DisplayCardRequest charity={requestData} />
        </Card>

    );
}

export default SponsorshipRequestList;