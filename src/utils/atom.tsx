import AsyncStorage from "@react-native-async-storage/async-storage"
import { atomWithStorage, createJSONStorage } from 'jotai/utils'

const storage = createJSONStorage(() => AsyncStorage)

export const loggedInAtom = atomWithStorage('loggedIn', false, storage)
export const userDataAtom = atomWithStorage('user', {}, storage)


