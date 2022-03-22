import React, { useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { loadPlaces } from '../store/places.actions';

const PlaceListScreen = () => {
    const dispatch = useDispatch()

    const places = useSelector(state => state.places.places);
    console.log(places)

    useEffect(() => {
        dispatch(loadPlaces())
    }, [])

    return (
        <View style={styles.container}>
            <Text>Direcciones</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceListScreen
