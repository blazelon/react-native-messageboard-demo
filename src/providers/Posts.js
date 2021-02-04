import React, { useState, useEffect, useContext, useReducer } from 'react'

import { Api } from '../services'

const PostsContext = React.createContext()

export const usePosts = (props) => {
  return useContext(PostsContext)
}

const initialState = {
  data: []
}

export const PostsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const fetchPosts = async () => {
    const response = await Api.fetchPosts()

    if (response.ok) {
      dispatch({
        type: 'setData',
        payload: response.data
      })
    }

    return response
  }

  const fetchPost = id => Api.fetchPost(id)

  return (
    <PostsContext.Provider
      value={{
        fetchPosts,
        fetchPost,
        ...state
      }}
    >
      {children}
    </PostsContext.Provider>
  )
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'setData':
      return {
        ...state,
        data: action.payload
      }
    default:
      throw new Error()
  }
}