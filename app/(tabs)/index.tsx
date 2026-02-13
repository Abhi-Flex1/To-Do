import { Text, View, StyleSheet, FlatList, Pressable, Modal, Button, TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

type Task = {
    id: string;
    text: string;
    due: Date;
    completed: boolean;
}

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [draftText, setDraftText] = useState("");
    const [pickerVisible, setPickerVisible] = useState(false);
    const [draftDate, setDraftDate] = useState(new Date()); 

    const saveTask = () => {
        if (draftText.trim() === "") return;

        const newTask = {
            id: Date.now().toString(),
            text: draftText,
            due: draftDate,
            completed: false,
        };
        setTasks(prev => [newTask, ...prev]);
        setDraftText("");
        setModalVisible(false);
    };

    const toggleTask = (id: string) => {
        setTasks((prev) =>
            prev.map((task) => 
                task.id === id
                ? {...task, completed: !task.completed}
                :task
            )
        );
    }

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((task) => task.id !== id))
    }

    return(
        <View style={style.container}>
               <FlatList
                    data={tasks}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={style.item}>
                            <Pressable onPress={() => toggleTask(item.id)}>
                                <Ionicons name={item.completed ? "checkbox" : "square-outline"} size={32}/>
                            </Pressable>
                            <Text>    {item.text}</Text>
                            <Pressable onPress={() => deleteTask(item.id)} style={{marginLeft: 'auto',}}>
                                <Ionicons name='trash-bin' size={24}/>
                            </Pressable>
                        </View>
                    )}/>
               <Pressable style={style.create} onPress={() => setModalVisible(true)}>
                    <Ionicons name={'add'} color="#FFFFFF" size={24} />
               </Pressable>

               <Modal visible={modalVisible}>
                    <View style={style.modal}>
                        <TextInput 
                            style={style.input}
                            placeholder='Task'
                            value={draftText}
                            onChangeText={setDraftText}
                            placeholderTextColor="#5d5d5d"
                        />
                        <Text style={style.button} onPress={() => setPickerVisible(true)}>Pick Date and Time</Text>
                        <DateTimePickerModal 
                            isVisible={pickerVisible}
                            mode='datetime'
                            date={draftDate}
                            onConfirm={(date) => {
                                setDraftDate(date);
                                setPickerVisible(false);
                            }}
                            onCancel={() => setPickerVisible(false)}
                        />
                        <Text>{draftDate.toString()}</Text>
                        <Text style={style.button} onPress={saveTask}>Save</Text>
                    </View>
                    
               </Modal>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    create: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 50,
        width: 50,
        backgroundColor: "#0063FF",
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
    },

    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#F2F2F2',
    },

    modal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        color: '#FFFFFF',
        backgroundColor: "#0063FF",
        margin: 15,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
    },

    input: {
        margin: 15,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#cecece',
        borderRadius: 20,
    },
});