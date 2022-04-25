import React from "react";
import PropTypes from "prop-types";
import { Container, Card, Text, Grid, Paragraph } from "theme-ui";

function Projects(props) {
    return (
        <Container id="projects" p={props.p}>
            <h3>
                Projects
            </h3>
            <Paragraph>
            I think when learning language it is very helpful to get an idea of how and
            what about people make jokes, so me and my friends are trying
            to organise stand-up comedy nights in Russian language
            and we would welcome anyone who is
            interested and not only native Russian speakers.
            We would welcome anyone interested. Our
            events are not free (£5 or £10),
            but we not earning anything from them neither, we have to pay for the venue,
            cover transport costs,
            as we all live in different cities and will need to travel a lot,
            put some money into advertising and pay for the mics, speakers, etc.
          </Paragraph>
          <Grid columns={[1, 4]}>
          <Card sx={{
              maxWidth:256,
          }}>
              <Text>Card 1</Text>
          </Card>
          <Card sx={{
              maxWidth:256,
          }}>
              <Text>Card 2</Text>
          </Card>
          <Card sx={{
              maxWidth:256,
          }}>
              <Text>Card 3</Text>
          </Card>
          <Card sx={{
              maxWidth:256,
          }}>
              <Text>Card 4</Text>
          </Card>
          </Grid>
        </Container>
    );
}

Projects.propTypes = {
    p: PropTypes.String
}

export default Projects;