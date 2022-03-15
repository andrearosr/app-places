import * as FileSystem from 'expo-file-system'

export const ADD_PLACE = 'ADD_PLACE'


export const addPlace = (title, image) => {
    return async dispatch => {
        const filename = image.split('/').pop()
        const Path = FileSystem.documentDirectory + filename

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })

            dispatch({
                type: ADD_PLACE,
                payload: {
                    title,
                    image: Path,
                }
            })
        } catch(err) {
            console.log(err)
            throw err;
        }
    } 
}