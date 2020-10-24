import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import OfferAcceptedDisplayCard from './OfferAcceptedDisplayCard';

describe('OfferAcceptedDisplayCard component', () => {


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
                offerAmount: "1500",
                durationInYears: "2",
                requestStatus: "ACCEPTED"
            }]
        }
        const { getByText } = render(
            <MemoryRouter>
                <OfferAcceptedDisplayCard {...props} />
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
                offerAmount: "£1500",
                durationInYears: "2 years",
                offerStatus: "ACCEPTED"
            }]
        }

        const { getByText } = render(
            <MemoryRouter>
                <OfferAcceptedDisplayCard {...props} />
            </MemoryRouter>
        );
        expect(getByText(testName).closest('a')).toHaveAttribute('href', '/ForSponsorsAccepted/1');
    })




})