import React from 'react';
import { render } from '@testing-library/react';
import DisplayCardRequest from './DisplayCardRequest';

describe('DisplayCard component', () => {

    test(`Given the require props,
            When the component is rendered,
            Then it should render a charity name`, () => {
        const testName = 'Test Charity';
        const testDescription = 'Test description';

        const props = {
            cardData: {
                charityName: testName,
                description: testDescription,
                amount: "£1500",
                duration: "2 years"
            }
        }
        const { getByText } = render(<DisplayCardRequest {...props} />);
        expect(getByText(testName)).toBeTruthy();
        expect(getByText(testDescription)).toBeTruthy();
        expect(getByText('Amount: £1500')).toBeTruthy();
        expect(getByText("Duration: 2 years")).toBeTruthy();
    })

    test(`Given the require props,
    When the component is rendered,
    Then it should render a link`, () => {
        const testName = 'Test Charity';
        const testDescription = 'Test description';

        const props = {
            cardData: {
                charityName: testName,
                description: testDescription,
                amount: "£1500",
                duration: "2 years"
            }
        }

        const { getByText } = render(<DisplayCardRequest {...props} />);
        expect(getByText(testName).closest('a')).toHaveAttribute('href', 'Charity1.html');
    })



})