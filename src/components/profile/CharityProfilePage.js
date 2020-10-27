import React, { Component, useState, useEffect } from 'react';
import axios from "axios";

import { useAuth } from "../Firebase/AuthContext";
import ProfileTextDescription from './ProfileTextDescription';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CharityProfilePage() {   

    const [detailsCharity, setdetailsCharity] = useState([]);
    const { currentUserID } = useAuth();

  useEffect(() => {
    axios
      .get(
        "https://ae9g7g3iyl.execute-api.eu-west-2.amazonaws.com/dev/charities/"+currentUserID
      )
      .then(response => {
        setdetailsCharity(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  const changeCharityProfile = (name, description) => {
    const newProfile = {
      nameProfile: name,
      descriptionProfile: description
    };

    console.log(newProfile.nameProfile);
    console.log(newProfile.descriptionProfile);
    const updatedCharityProfile = [...detailsCharity, newProfile];

    setdetailsCharity(updatedCharityProfile);
  };

    return (     
        <div>
            <Container>
                 <Row  className="justify-content-md-center">
                     <Col xs={{span: 12, offset: 6}} md={{span: 6, offset: 5}}>
                        <h1>Profile</h1>
                    </Col>
                </Row>
            <ProfileTextDescription detailsProfile={detailsCharity} changeProfile={changeCharityProfile}/>
            </Container>
        </div>
    );
}

export default CharityProfilePage; 