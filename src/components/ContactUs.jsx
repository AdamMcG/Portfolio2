import React from "react";
import { Field, Box, Textarea, Button } from "theme-ui";

function ContactUs() {
    return (
        <Box>
            <Field label="Email" name="email" defaultValue=""/>
            <Textarea label="Message" name="message" defaultValue=""/>
            <Button>SUBMIT</Button>
            <Button>CANCEL</Button>
        </Box>
    );
}

export default ContactUs;