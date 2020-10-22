import React from "react";
import { Footer } from "../components";

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Title>Questions? Contact us.</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link href="#">About Us</Footer.Link>
          <Footer.Link href="#">FAQs</Footer.Link>
          <Footer.Link href="#">How it works</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Campaigns</Footer.Link>
          <Footer.Link href="#">For Companies</Footer.Link>
          <Footer.Link href="#">For Charities</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Account</Footer.Link>
          <Footer.Link href="#">Contact Us</Footer.Link>
          <Footer.Link href="#">Corporate Informations</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link href="#">Facebook</Footer.Link>
          <Footer.Link href="#">Instagram</Footer.Link>
          <Footer.Link href="#">Twitter</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>
          © Pretty{" "}
          <span role="img" aria-label="Please">
            🙏
          </span>{" "}
          2020
      </Footer.Text>
    </Footer>
  );
}
