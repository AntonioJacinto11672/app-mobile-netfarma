import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const componentMainValue = createSlice({
    name: 'componentMain',
    initialState: {
        value: 0
    },
    reducers: {
        setcomponentMainValue: (state, action: PayloadAction<any>) => {
            state.value = action.payload
        }
    }
})

export const { setcomponentMainValue } = componentMainValue.actions

export default componentMainValue.reducer