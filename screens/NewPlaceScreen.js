import React, { useState } from 'react';
import { View, Text, ScrollView, Button, TextInput, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux';
import COLORS from '../constants/Colors';
import ImageSelector from '../components/ImageSelector';
import { addPlace } from '../store/places.actions';

const NewPlaceScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState();
    const [image, setImage] = useState();

    const handleSave = () => {
        dispatch(addPlace(title, image))
        navigation.navigate('Direcciones') // goBack
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />

                <ImageSelector onImageSelected={setImage} />

                <Button
                    title="GUARDAR"
                    color={COLORS.MAROON}
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
})

export default NewPlaceScreen
