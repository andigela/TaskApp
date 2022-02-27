import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Task(props) {
    return (
        <View style={styles.items}>
            <View style={styles.leftItems}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.rightItems}>
                <TouchableOpacity onPress={props.press}>
                    <Text style={styles.D}>D</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    items: {
        padding: 20,
        backgroundColor: '#FFF',
        marginBottom: 20,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    leftItems: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center'
    },
    square: {
        borderBottomColor: '#fa027a',
        borderTopColor: '#ff2990',
        borderLeftColor: '#ff2990',
        borderRightColor: '#fa027a',
        width: 15,
        height: 15,
        borderWidth: 4,
        borderRadius: 3,
        marginRight: 20,
        
    },
    itemText: {
        maxWidth: '80%',
    },
    rightItems: {
        backgroundColor: '#ff3668',
        width: 26,
        height: 26,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        
    },
    D: {
        fontWeight: 'bold',
        color: '#f7f7f7'
    }

});
