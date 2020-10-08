import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RequestDetailsAccept from './RequestDetailsAccept';

describe('RequestDisplayCard component', () => {

    test.skip(`Given the require props,
            When the component is rendered,
            Then it should render a request name`, () => {
        const testName = 'Hello Request';
        const testDescription = 'Test description';
        const testIncentive = 'Test incentive';

        const props = {
            cardData: {
                requestId: 1,
                charityName: testName,
                description: testDescription,
                amount: "1500",
                duration: "2",
                incentive: testIncentive
            }
        }
        const { getByText } = render(
            <MemoryRouter>
                <RequestDetailsAccept {...props} />
            </MemoryRouter>
        );
        expect(getByText(testName)).toBeTruthy();
        expect(getByText(testDescription)).toBeTruthy();
        expect(getByText("Amount: £1500")).toBeTruthy();
        expect(getByText("Duration: 2 years")).toBeTruthy();
        expect(getByText(testIncentive)).toBeTruthy();
    })

})