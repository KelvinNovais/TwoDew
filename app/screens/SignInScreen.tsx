import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const onSubmit = () => {
        // submit
    }
    return (
        <View style={{padding: 20}}>
            <TextInput
                placeholder='example@protonmail.me'
                value={email}
                onChangeText={setEmail}
                style={{
                    // color: 'black',
                    fontSize: 18,
                    width: '100%',
                    marginVertical: 25,
                }}
            />

            <TextInput
                placeholder='Password...'
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={{
                    // color: 'black',
                    fontSize: 18,
                    width: '100%',
                    marginVertical: 25,
                }}
            />

            <Pressable
                onPress={onSubmit}
                style={{
                    backgroundColor: 'red',
                    height: 40,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text
                    style={{
                        color: 'white',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}

                >
                    Sign In
                </Text>
            </Pressable>

            <Pressable
                onPress={() => navigation.navigate('SignUp')}
                style={{
                    // backgroundColor: 'red',
                    height: 40,
                    borderRadius: 15,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 20,
                }}
            >
                <Text
                    style={{
                        color: 'red',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}

                >
                    New here? Sign up
                </Text>
            </Pressable>
        </View>
    )
}

export default SignInScreen;