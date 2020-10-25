import React from "react";
import { Featurette } from "../components";

export function FeaturetteContainer() {
  return (
    <Featurette>
      <Featurette.Pane>
        <Featurette.Text>Actions Speak louder than emojis</Featurette.Text>
      </Featurette.Pane>
      <Featurette.Pane>
        <Featurette.ButtonLink
          href="/prettyplease-frontend/#/ForSponsors"
          alt="For sponsors"
        >
          For Sponsors
        </Featurette.ButtonLink>
      </Featurette.Pane>
    </Featurette>
  );
}
