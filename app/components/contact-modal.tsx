'use client'

import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/react";
import {useDisclosure} from "@nextui-org/react";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "@nextui-org/react";
import React, {useState} from "react";
import {sendMail} from "@/app/services/email-sernder";

export function ContactModal() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    return (
        <>
            <Button onPress={onOpen} size={"lg"} radius={"none"} className={"w-[200px] text-white bg-red-600 border-2 border-red-600 hover:border-white hover:bg-transparent"}>
                Contact Us
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col text-white gap-1">Get Your Membership Today</ModalHeader>
                            <ModalBody>
                                <Input type="email" onChange={handleEmailChange} variant={"flat"} label="Email" />
                                <Input type="name" onChange={handleNameChange} variant={"flat"} label="Name" />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button onClick={() => {
                                    if (email.trim().length > 0 && name.trim().length > 0) {
                                        sendMail("Data", `email: ${email}; name: ${name}`).then(r => console.log(r));
                                    }}
                                } color="primary">
                                    Send
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}