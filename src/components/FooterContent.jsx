import React from "react";
import PropTypes from "prop-types";
import { Container, Paragraph } from "theme-ui";

const FooterContent = (props) => {
    return (
        <Container p={props.p}>
            <Paragraph>
                I think when learning language it is very helpful to get an idea of how and
                put some money into advertising and pay for the mics, speakers, etc.
            </Paragraph>
        </Container>
    );
};

FooterContent.propTypes = {
    p: PropTypes.string,
}

export default FooterContent;