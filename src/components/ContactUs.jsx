import React from "react";
import PropTypes from "prop-types";
import { Field, Box, Textarea, Button } from "theme-ui";

function ContactUs(props) {
    return (
        <Box p={props.p}>
            <Field label="Email" name="email" defaultValue=""/>
            <Textarea label="Message" name="message" defaultValue=""/>
            <Button>SUBMIT</Button>
            <Button>CANCEL</Button>
        </Box>
    );
}

ContactUs.propTypes = {
    p: PropTypes.p
}

export default ContactUs;