import React, { useState, useEffect, useRef } from 'react';
import { View, TextInput } from 'react-native';
import Checkbox from '../Checkbox';

interface ToDoItemsProps {
    todo: {
        id: string;
        content: string;
        isCompleted: boolean;
    }
    onSubmit: () => void
}

const ToDoItem = ({ todo, onSubmit }: ToDoItemsProps) => {
    const [isChecked, setIsChecked] = useState(false);
    const [content, setContent] = useState('');

    const input = useRef(null)

    useEffect(() => {
        if (!todo) { return }

        setIsChecked(todo.isCompleted);
        setContent(todo.content)
    }, [todo])

    useEffect(() => {
        if (input.current) {
            input?.current?.focus();
        }

    }, [input])

    const test = () => {
        console.warn('ENTER')
    }

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 3 }}>
            {/* Checkbox */}
            <Checkbox
                isChecked={isChecked}
                onPress={() => { setIsChecked(!isChecked) }}
            />

            {/* Text input */}
            <TextInput
                ref={input}
                value={content}
                onChangeText={setContent}
                style={{
                    flex: 1,
                    fontSize: 16,
                    marginLeft: 12,
                }}
                keyboardType='default'
                // Determines how the return key should look
                returnKeyType='next'
                multiline
                onKeyPress={(event) => {
                    if (event.nativeEvent.key == "Enter") {
                        console.log('ENTER was pressed')
                    }
                    else {
                        console.log('Pressed ' + event.nativeEvent.key)
                    }
                    // https://stackoverflow.com/questions/53508294/react-native-e-nativeevent-key-enter-doesnt-work#53513365

                    if (event.nativeEvent.key == "Backspace" &&  content === "") {
                        // Delete item
                        console.warn("···> Delete item")
                    }
                }}
                onSubmitEditing={onSubmit}
                blurOnSubmit
                autoFocus
            />
        </View>
    )
}

export default ToDoItem;