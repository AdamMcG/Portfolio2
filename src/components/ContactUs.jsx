import React from "react";
import PropTypes from "prop-types";
import { Input, Box, Textarea, Button, Label } from "theme-ui";

function ContactUs(props) {
    return (
        <Box as="form" onSubmit={(e) => e.preventDefault()} p={props.p}>
            <Label htmlFor="Email">Email</Label>
            <Input mb={3} sx={
                {
                    width: '50vw'
                }
            } label="Email" name="email" />
            <Label htmlFor="Message">Message</Label>
            <Textarea mb={3} sx={
                {
                    height: '13vh',
                    maxWidth: '50vw',
                    maxHeight: '50vh'
                }} label="Message" name="message" />
            <Button onClick={() => {
                props.click();
            }}>Submit</Button>
        </Box>
    );
}

ContactUs.propTypes = {
    p: PropTypes.Object,
    click: PropTypes.func
}

export default ContactUs;