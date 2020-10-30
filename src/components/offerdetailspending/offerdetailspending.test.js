import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router-dom";
import OfferDetailsPending from "./OfferDetailsPending";

describe.skip("OfferDetailsPending component", () => {
  test(`Given the require props,
            When the component is rendered,
            Then it should render a sponsorship request`, () => {
    const testName = "Hello Request";
    const testCharityDescription = "Test charity description";
    const testEventDescription = "Test event description";
    const testIncentive = "Test incentive";

    const props = {
      offers: [
        {
          requestId: 1,
          offerId: "ABC24",
          charityName: testName,
          charityDescription: testCharityDescription,
          eventDescription: testEventDescription,
          amountAgreed: "1500",
          agreedDurationInYears: "2",
          incentive: testIncentive,
        },
        {
          requestId: 2,
          offerId: "ABC25",
          charityName: testName,
          charityDescription: testCharityDescription,
          eventDescription: testEventDescription,
          amountAgreed: "10000",
          agreedDurationInYears: "3",
          incentive: testIncentive,
        },
      ],
    };

    const { getByText } = render(
      <MemoryRouter initialEntries={["/ForSponsorsAccepted/1"]}>
        <Route exact path="/ForSponsorsAccepted/:id">
          <OfferDetailsPending {...props} />
        </Route>
      </MemoryRouter>
    );

    expect(getByText(testName)).toBeTruthy();
    expect(getByText(testEventDescription)).toBeTruthy();
    expect(getByText("Amount: £1500")).toBeTruthy();
    expect(getByText("Duration: 2 years")).toBeTruthy();
    expect(getByText(testIncentive)).toBeTruthy();
  });
});
