import React from 'react'
import { Button, Container, Text } from 'native-base'

export const MainView = ({ onChangeView }) => {
    const handleLogin = () => {
        onChangeView('login')
    }

    return (
        <Container>
            <Text>This is the home page.</Text>
            <Button light onPress={handleLogin}>
                <Text>Login</Text>
            </Button>
        </Container>
    )
}
