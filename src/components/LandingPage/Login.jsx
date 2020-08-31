import React, {useState} from 'react'
import { Form, Item, Text } from 'native-base'
import { Formik } from 'formik'
import { Button, TextInput, View } from 'react-native';

export const Login = ({ onChangeView }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = () => {
        if (email && password) {
            onChangeView('mainView')
        }
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
                setEmail(values.email);
                setPassword(values.password);
                handleSubmit();
            }}
            onReset={() => onChangeView('mainView')}
        >
            {({ handleChange, handleSubmit, values, handleReset }) => (
                <View>
                    <TextInput
                        placeholder="email"
                        onChangeText={handleChange('email')}
                        value={values.email}
                    />
                    <TextInput
                        placeholder="password"
                        onChangeText={handleChange('password')}
                        value={values.password}
                    />
                    <Button onPress={handleReset} title="Cancel" />
                    <Button onPress={handleSubmit} title="Submit" />
                </View>
            )}
        </Formik>
    )
}
