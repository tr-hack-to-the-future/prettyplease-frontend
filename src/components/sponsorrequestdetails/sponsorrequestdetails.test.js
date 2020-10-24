import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import SponsorRequestDetails from './SponsorRequestDetails';

describe('SponsorRequestDetails component', () => {


    test(`Given the require props,
            When the component is rendered,
            Then it should render a sponsorship request`, () => {
        const testName = 'Hello Request';
        const testCharityDescription = 'Test charity description';
        const testEventDescription = 'Test event description';
        const testIncentive = 'Test incentive';
  
        const props = {
            request: [{
                requestId: 1,
                charityName: testName,
                charityDescription: testCharityDescription,
                eventDescription: testEventDescription,
                amountRequested: "1500",
                durationInYears: "2",
                incentive: testIncentive
            },
            {
                requestId: 2,
                charityName: testName,
                charityDescription: testCharityDescription,
                eventDescription: testEventDescription,
                amountRequested: "10000",
                durationInYears: "3",
                incentive: testIncentive
            }
            ]
        }

        const { getByText } = render(
            <MemoryRouter initialEntries={['/ForSponsors/1']} >
                <Route exact path='/ForSponsors/:id'>
                    <SponsorRequestDetails {...props} />
                </Route>
            </MemoryRouter>
        );

        expect(getByText(testName)).toBeTruthy();
        expect(getByText(testCharityDescription)).toBeTruthy();
        expect(getByText(testEventDescription)).toBeTruthy();
        expect(getByText("Amount: £1500")).toBeTruthy();
        expect(getByText("Duration: 2 years")).toBeTruthy();
        expect(getByText(testIncentive)).toBeTruthy();
    })

})