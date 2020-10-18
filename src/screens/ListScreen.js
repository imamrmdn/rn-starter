import React from 'react'
import {View, StyleSheet, Text, FlatList} from 'react-native'

const ListScreen = () => {

    const mahasiswa = [
        {name: 'imam'},
        {name: 'ipunk'},
        {name: 'aji'},
        {name: 'amad'},
        {name: 'reja'},
    ]

    const binatang = [
        {nama: 'Gajah', age: '16'},
        {nama: 'Harimau', age: '15'},
        {nama: 'Jerapah', age: '12'},
        {nama: 'Zebra', age: '15'},
        {nama: 'Kuda', age: '10'},
    ]
    
    let lastIndex = mahasiswa.length - 1
 
    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={true}
                keyExtractor={(mahasiswa) => mahasiswa.name}
                data={mahasiswa}
                renderItem={(element) => {
                    let index = element.index;
                    return <View style={ (index == 0) ? { marginLeft: 10, marginTop: 15 } : (lastIndex) ? { marginRight: 10, marginTop: 15  } : 0}>
                        <Text style={styles.textStyle}>Nama: {element.item.name} Nomor {element.index + 1}</Text>
                    </View>
                }}
             />
             <FlatList 
                keyExtractor={(binatang) => binatang.nama}
                data={binatang}
                renderItem={({ item }) => {
                    return <Text  style={styles.textFlatList}>Nama Binatang: {item.nama} - Umur: {item.age}</Text>
                }}
             />
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 18,
        color: 'teal',
        marginHorizontal: 5,
    },
    textFlatList: {
        marginTop: 25,
        marginHorizontal: 20,
        fontSize: 16,
        color: 'green'
    }
})

export default ListScreen;