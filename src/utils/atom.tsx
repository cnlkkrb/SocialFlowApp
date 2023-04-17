import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'


const storage = createJSONStorage(() => AsyncStorage)


export const loggedInAtom = atomWithStorage('loggedIn',false, storage)
export const userDataAtom = atomWithStorage ('user',{}, storage)


