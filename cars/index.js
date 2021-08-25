import {AppRegistry} from 'react-native';
import React from 'react';
import {SafeAreaView,View,FlatList,StyleSheet,Text,StatusBar} from 'react-native';

const DATA = [
    {
        id: '1',
        title: 'Toyota',
    },
    {
        id: '2',
        title: 'Mazda',
    },
    {
        id: '3',
        title: 'Mitshubishi',
    },
];
const Item = ({title}) => (
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
    </View>
)
const App = () => {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
/*const textosaludo =()=>{
    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text>"Hola Mundo"</Text>
        </View>
    );
}*/
AppRegistry.registerComponent("cars", () => App);