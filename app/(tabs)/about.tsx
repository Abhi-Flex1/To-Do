import { Text, View, Button, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { withLayoutContext } from 'expo-router';

export default function About() {
    return(
        <View style={style.container}>
                <Image source={require("../../assets/images/Frame.png")} style={style.image} />
                <Text style={style.text} >To-Do</Text>
                <Text style={style.subtext} >Simple To-Do app made by Abhi</Text>
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
        fontSize: 25,
        marginBottom: 10,
    },

    subtext: {
        fontSize: 18,
    },

    image: {
        borderRadius: 20,
        borderColor: '#969696',
        borderWidth: 2,
        height: 100,
        width: 100,
        marginBottom: 20,
    }
});