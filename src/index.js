import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { AppNavigator } from './navigation'
import { PostsProvider } from './providers'
import { ThemeProvider } from './theme'

export default function Root() {
	return (
    <PostsProvider>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </PostsProvider>
	);
}