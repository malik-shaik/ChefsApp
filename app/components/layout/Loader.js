import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import colors from '../../config/colors'

const Loader = () => {
    return (
        <ActivityIndicator size='small' color={colors.primary} style={{marginTop:20}} />
        
    )
}

export default Loader

const styles = StyleSheet.create({})
