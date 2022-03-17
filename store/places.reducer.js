import { ADD_PLACE } from './places.actions'
import Place from '../models/Place'

const initialState = {
    places: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            const place = new Place(
                Date.now(),
                action.payload.title,
                action.payload.image,
                action.payload.lat,
                action.payload.lng,
            )
            return {
                ...state,
                places: state.places.concat(place),
            }
        default:
            return state
    } 
}