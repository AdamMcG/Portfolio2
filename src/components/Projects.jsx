import React from "react";
import PropTypes from "prop-types";
import { Container } from "theme-ui";

function Projects(props) {

    return (
        <Container p={props.p}>
            <h3>
                Projects
            </h3>
            <p>
            I think when learning language it is very helpful to get an idea of how and
            what about people make jokes, so me and my friends are trying
            to organise stand-up comedy nights in Russian language
            and we would welcome anyone who is
            interested and not only native Russian speakers.

            We have 5 native Russian speakers with somewhat of stand-up experience
            (few 10 minute performances each), we are not professional comedians and all
            have different jobs. Our main aim is to build a community
            of those who want to make jokes in Russian language and who want
            to listen to that, please dont judge us for that some of us speak good
            English, some not, some watch western comedians without
            translation, some dont watch
            comedians at all, but our main reason we want to make jokes and make people laugh,
            surprisingly but it is pretty hard to do it in the language foreign for you.
            Personally I dont want to forget my mothers tongue and writing texts helps a lot.

            We have event scheduled for 13th of February in London.

            We would welcome anyone interested. Our
            events are not free (£5 or £10),
            but we not earning anything from them neither, we have to pay for the venue,
            cover transport costs,
            as we all live in different cities and will need to travel a lot,
            put some money into advertising and pay for the mics, speakers, etc.
          </p>
        </Container>
    );
}

Projects.propTypes = {
    p: PropTypes.String
}

export default Projects;