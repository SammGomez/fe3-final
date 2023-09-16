import {useContext, createContext, useState, useReducer, useEffect} from 'react';
import axios from "axios";
import React from 'react';



const CharStates = createContext();


const reducer = (state,action) => {
    switch(action.type){
        case "GET_CHARS":
            return {...state, chars: action.payload}
        case "GET_CHAR":
            return { ...state, char: action.payload };
        case "ADD_FAV":
            return {...state, favs: [...state.favs, action.payload]}
        case "DELETE_FAV":
            return {...state, favs: state.favs.filter(fav => fav.id != action.payload.id)}
        case "dark":
            localStorage.setItem('theme', action.payload)
        return  {...state, theme: action.payload}
        case "light":
            localStorage.setItem('theme', action.payload)
        return {...state, theme: action.payload}
        default:
            throw new Error()
    }
}

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []


const initialState = {
    chars: [],
    char: {},
    favs: initialFavState,
    theme: localStorage.getItem('theme') || "light"
}

const Context = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)


    const url = "https://jsonplaceholder.typicode.com/users"

    useEffect(() => {
        axios(url)
        .then(res => {
            dispatch({type: "GET_CHARS", payload: res.data})
        })
        .catch((error) => {
            console.error("Error fetching data:", error);
          });
    }, [])

    useEffect(() => {
        localStorage.setItem("favs", JSON.stringify(state.favs))
    }, [state.favs])

    return (
        <CharStates.Provider value={{ state, dispatch }}>
          {children}
        </CharStates.Provider>
    )
}
export default Context

export const useCharStates = () => useContext(CharStates)

