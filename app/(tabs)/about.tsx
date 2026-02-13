import { Text, View, Button, StyleSheet } from 'react-native';

export default function About() {
    return(
        <View style={style.container}>
               <Text>Helo</Text>
        </View>
    );
}

const style = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    }
});