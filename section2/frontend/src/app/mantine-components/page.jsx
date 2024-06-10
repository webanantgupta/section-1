"use client"
import { Button, Container, Drawer, Input, MultiSelect, Rating } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconSearch, IconUser } from '@tabler/icons-react';
import React from 'react'

const MantineComponents = () => {

   const [opened, {open,close}]= useDisclosure(false);
    return (
        <Container>
            <Input
                mt={25}
                placeholder='Enter here'
                size='lg'
                radius={20}
                error
                rightSection={
                    <IconSearch />
                }
            />

            <IconUser  color='Yellow' mt={50}/>

            <Rating  mt={50} size={30} fractions={2} count={10}/>

            <MultiSelect 
            label="Select typr"
            placeholder='pick '
            data={["action","drama","Comedy","horror","romantic"]}
            />

            <Button variant='outline' color='grape' onClick={open}>Open Drawer</Button>
            <Drawer opened={opened} position='bottom' onClose={close}>
            overLayProps={[backgroundOpacity: 0.5, blur:4]}
                <h2>Drawer Content</h2>
            </Drawer>
        </Container>
    )
}

export default MantineComponents;