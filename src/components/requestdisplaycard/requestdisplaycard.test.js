import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RequestDisplayCard from './RequestDisplayCard';

describe('RequestDisplayCard component', () => {


    test(`Given the require props,
            When the component is rendered,
            Then it should render a charity name`, () => {
        const testName = 'Test Charity';
        const testCharityDescription = 'Test charity description';
        const testEventDescription = 'Test event description';

        const props = {
            cardData: [{
                requestId: 1,
                charityName: testName,
                charityDescription: testCharityDescription,
                eventDescription: testEventDescription,
                amountRequested: "1500",
                durationInYears: "2"
            }]
        }
        const { getByText } = render(
            <MemoryRouter>
                <RequestDisplayCard {...props} />
            </MemoryRouter>
        );
        expect(getByText(testName)).toBeTruthy();
        expect(getByText(testEventDescription)).toBeTruthy();
        expect(getByText('Amount: £1500')).toBeTruthy();
        expect(getByText("Duration: 2 years")).toBeTruthy();
    })

    test(`Given the require props,
    When the component is rendered,
    Then it should render a link`, () => {
        const testName = 'Test Charity';
        const testCharityDescription = 'Test charity description';        
        const testEventDescription = 'Test event description';

        const props = {
            cardData: [{
                requestId: 13,
                charityName: testName,
                charityDescription: testCharityDescription,
                eventDescription: testEventDescription,
                amountRequested: "£1500",
                durationInYears: "2 years"
            }]
        }

        const { getByText } = render(
            <MemoryRouter>
                <RequestDisplayCard {...props} />
            </MemoryRouter>
        );
        expect(getByText(testName).closest('a')).toHaveAttribute('href', '/ForSponsors/1');
    })



})