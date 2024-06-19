import { StyleSheet, View, Button, TextInput, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText(''); // Clear the input after adding it
    }


    return <Modal visible={props.isVisible} animationType="slide">
        <View style={styles.inputContainer}>

            <Image source={require('../assets/images/goal.png')} style={styles.image} />
            <TextInput
                placeholder='Course Goal'
                style={styles.textInput}
                onChangeText={goalInputHandler}
                value={enteredGoalText} // Bind the input value to the state
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title='Add goal' onPress={addGoalHandler} color="#4b0a99" />
                </View>
                <View style={styles.button}>
                    <Button title='Cancel' onPress={props.onCancel} color="#f31282" />
                </View>
            </View>
        </View>
    </Modal>
}


export default GoalInput;

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#5e0acc',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        width: '100%',
        borderColor: '#e4d0ff',
        borderWidth: 1,
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        padding: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16,
    },
    button: {
        width: '40%',
        marginHorizontal: 8,
    }
});