import { Text, View, Button, StyleSheet } from 'react-native';

export default function About() {
    return(
        <View style={style.container}>
               <Text style={style.text} >This is my first React Native app.</Text>
        </View>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#FFFFFF",
    },

    text: {
        fontSize: 20,
    }
});