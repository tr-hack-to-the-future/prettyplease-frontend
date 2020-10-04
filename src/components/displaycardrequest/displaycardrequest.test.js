import React from 'react';
import { findAllByTestId, render } from '@testing-library/react';
import DisplayCardRequest from './DisplayCardRequest';

describe('DisplayCard component', () => {

    test(`Given the require props,
            When the component is rendered,
            Then it should render a charity name`, () => {
        const testName = 'Test Charity'
        const testDescription = 'Test description'
        const props = {
            cardData: {
                charityName: testName,
                description: testDescription
            }
        }

        const { getByText } = render(<DisplayCardRequest {...props} />);
        expect(getByText(testName)).toBeTruthy();
        expect(getByText(testDescription)).toBeTruthy();
    })





})