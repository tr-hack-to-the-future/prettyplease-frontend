import React from 'react';
import { Card } from 'react-bootstrap';
import DisplayCardRequest from '../displaycardrequest/DisplayCardRequest';

function SponsorshipRequestList({ requestData }) {

    return (
        <Card>
            {requestData.map((request) =>
                <DisplayCardRequest cardData={request} />
            )}
        </Card>
    );
}

export default SponsorshipRequestList;