import React from 'react';
import { render } from '@testing-library/react';
import DisplayRequest from './DisplayRequest';

describe('DisplayCard component', () => {

    test(`Given the require props,
            When the component is rendered,
            Then it should render a request name`, () => {
        const testName = 'Hello Request';
        const testDescription = 'Test description';

        const props = {
            cardData: {
                charityName: testName,
                description: testDescription,
                amount: "£1500",
                duration: "2 years"
            }
        }
        const { getByText } = render(<DisplayRequest {...props} />);
        expect(getByText(testName)).toBeTruthy();
        // expect(getByText(testDescription)).toBeTruthy();
        // expect(getByText('Amount: £1500')).toBeTruthy();
        // expect(getByText("Duration: 2 years")).toBeTruthy();
    })

})