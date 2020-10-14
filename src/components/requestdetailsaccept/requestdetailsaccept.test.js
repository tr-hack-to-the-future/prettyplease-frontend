import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import RequestDetailsAccept from './RequestDetailsAccept';

describe('RequestDisplayCard component', () => {


    test(`Given the require props,
            When the component is rendered,
            Then it should render a sponsorship request`, () => {
        const testName = 'Hello Request';
        const testDescription = 'Test description';
        const testIncentive = 'Test incentive';
  
        const props = {
            request: [{
                requestId: 1,
                charityName: testName,
                description: testDescription,
                amount: "1500",
                duration: "2",
                incentive: testIncentive
            },
            {
                requestId: 2,
                charityName: testName,
                description: testDescription,
                amount: "10000",
                duration: "3",
                incentive: testIncentive
            }
            ]
        }

        const { getByText } = render(
            <MemoryRouter initialEntries={['/ForSponsors/1']} >
                <Route exact path='/ForSponsors/:id'>
                    <RequestDetailsAccept {...props} />
                </Route>
            </MemoryRouter>
        );

        expect(getByText(testName)).toBeTruthy();
        expect(getByText(testDescription)).toBeTruthy();
        expect(getByText("Amount: £1500")).toBeTruthy();
        expect(getByText("Duration: 2 years")).toBeTruthy();
        expect(getByText(testIncentive)).toBeTruthy();
    })

})