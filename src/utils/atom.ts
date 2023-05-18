import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { SocailData } from '../data/SocailPlatformData'


const storage = createJSONStorage(() => AsyncStorage)


export const loggedInAtom = atomWithStorage('loggedIn',false, storage)
export const userDataAtom = atomWithStorage ('user', {}, storage)
export const businessDataAtom = atomWithStorage ('business',{}, storage)

export const socialPlatformAtom = atom(null)

export const myDataAtom = atom(SocailData)
