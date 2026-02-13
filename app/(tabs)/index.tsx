import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

type Task = {
    id: string;
    text: string;
    date: string;
    completed: boolean;
}

export default function Home() {
    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = () => {
        const newTask: Task = {
            id: Date.now().toString(),
            text: "Task",
            date: Date.now().toString(),
            completed: false,
        };
        setTasks((prev) => [newTask, ...prev]);
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
                        </View>
                    )}/>
               <Pressable style={style.create} onPress={addTask}>
                    <Ionicons name={'add'} color="#FFFFFF" size={24} />
               </Pressable>
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
});