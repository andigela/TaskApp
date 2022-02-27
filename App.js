import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, TextInput, View, Keyboard } from 'react-native';
import Task from './components/Task';

export default function App() {
    const [input, setInput] = useState(); // qka shkruhet prej inputit momentalisht ruhet ne input
    const [allItems, setallItems] = useState([]);   
    function saveItems() {
        if (input) {
            setallItems([...allItems, input]);
            setInput(null);
            Keyboard.dismiss(); //key={index} onPress={() => deleteItems(index)}
        } else {
            ;
        }
        
    }
    function deleteItems(indexP) {
        let deletedItems = [...allItems]; // pe ruj ni list me krejt items qka jon hi
        deletedItems.splice(indexP, 1); // pe heki ka nje item me indexin e veqant
        setallItems(deletedItems); // ruj edhe qato qe i kom rujt krejt edhe qato qe jon fshi
    }
    return (
        <View style={styles.container}>
            <View style={styles.taskWrapper}>
                <Text style={styles.taskTitle}>My Tasks</Text>
                <View style={styles.items}>   
                    {
                        allItems.map((item,index) => {
                            return (
                                <Task text={item} key={index} press={() => deleteItems(index)} />
                            );
                        })
                    }
                </View>
            </View>

            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.addView}
            >
                <TextInput style={styles.input} placeholder="Add a Task" value={input} onChangeText={text => setInput(text)} />
                <View style={styles.addTask}><TouchableOpacity onPress={saveItems}><Text style={styles.addTaskText}>+</Text></TouchableOpacity></View>
                

                
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff6363',
    },
    taskWrapper: {
        paddingTop: 80,
        paddingHorizontal: 30,
    },
    taskTitle: {
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 30,
    },
    addView: {
        position: 'absolute',
        bottom: 100,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        
    },
    input: {
        paddingVertical: 25,
        paddingHorizontal: 55,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
        maxWidth: '50%',
        minWidth: '50%',
        borderColor: '#000000',
        borderWidth: 0.5,
    },
    addTask: {
        backgroundColor: '#87bd7e',
        paddingVertical: 20,
        paddingHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 6,
        borderColor: '#000000',
        borderWidth: 0.5,
        
        
    },
    addTaskText: {
        fontSize: 20,
    },
});
