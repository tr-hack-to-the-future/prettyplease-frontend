import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Text>
            © Pretty{" "}
            <span role="img" aria-label="Please">
              🙏
            </span>{" "}
            2020
          </Footer.Text>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="/prettyplease-frontend/#/ForSponsors">
            For Companies
          </Footer.Link>
          <Footer.Link href="/prettyplease-frontend/#/ForCharities">
            For Charities
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="/prettyplease-frontend/#/Campaigns">
            Campaigns
          </Footer.Link>
          <Footer.Link href="/prettyplease-frontend/#/AboutUs">
            Contact Us
          </Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="#">
            <i className="fa fa-facebook" alt="Facebook"></i>
          </Footer.Link>
          <Footer.Link href="#">
            <i className="fa fa-instagram" alt="Instagram"></i>
          </Footer.Link>
          <Footer.Link href="#">
            <i className="fa fa-twitter" alt="Twitter"></i>
          </Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
    </Footer>
  );
}
