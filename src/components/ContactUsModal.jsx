import React, {useState} from 'react';
import { Modal, ModalContent, ModalTitle, ModalFooter } from '@mattjennings/react-modal';
import { Button, Text, Container, Close } from 'theme-ui';
import ContactUs from './ContactUs';

function ContactMeModal(props) {
    const [open, setOpen] = useState(false);
    return (
        <Container sx={
            {
                justifyContent: 'center'
            }
        }>
        <Button onClick={() => setOpen(true)}>Contact Me</Button>
        <Modal open={open} {...props}>
            {({onClose}) => (
            <>
            <ModalTitle>
                <Text>Contact Me</Text>
                <Close onClick={() => setOpen(false)}/>
            </ModalTitle>
            <ModalContent>
                <ContactUs p={1} click={() => {setOpen(false)}}></ContactUs>
            </ModalContent>
            <ModalFooter>
            </ModalFooter>
            </>
            )}
        </Modal>
        </Container>
    );
}

export default ContactMeModal;