import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Logo from "../../../assets/images/Logo_1.jpg"
import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"

const SignInScreen = () => {
  const [ userName, setUserName ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const { height } = useWindowDimensions()
  const onSignInPressed = () => {
    console.warn( "Sign In" )
  }
  const onForgotPasswordPressed = () => {
    console.warn( "Forgot Password" )
  }
  const onSignInWithFacebook = () => {
    console.warn( "Sign In with Facebook" )
  }
  const onSignInWithGoogle = () => {
    console.warn( "Sign In with Google" )
  }
  const onSignInWithApple = () => {
    console.warn( "Sign In with Apple" )
  }
  const onSignUpPressed = () => {
    console.warn( "Sign Up" )
  }
  return (
    <ScrollView showsVerticalScrollIndicator={ false }>
      < View style={ styles.root } >
        <Image source={ Logo } style={ [ styles.logo, { height: height * 0.3 } ] } resizeMode="contain" />
        <CustomInput placeholder="UserName" value={ userName } setValue={ setUserName } />
        <CustomInput placeholder="Password" value={ password } setValue={ setPassword } secureTextEntry />
        <CustomButton text="Sign In" onPress={ onSignInPressed } type="PRIMARY" />
        <CustomButton text="Forgot Password?" onPress={ onForgotPasswordPressed } type="TERTIARY" />
        <CustomButton text="Sign In With Facebook" onPress={ onSignInWithFacebook } type="TERTIARY" bgColor="#E7EAF4" fgColor="#4765A9" />
        <CustomButton text="Sign In With Google" onPress={ onSignInWithGoogle } type="TERTIARY" bgColor="#FAE9EA" fgColor="#DD4D44" />
        <CustomButton text="Sign In With Apple" onPress={ onSignInWithApple } type="TERTIARY" bgColor="#e3e3e3" fgColor="#363636" />

        <CustomButton text="Don't have an account? Create One" onPress={ onSignUpPressed } type="TERTIARY" />
      </ View >
    </ScrollView>
  )
}

const styles = StyleSheet.create( {
  root: {
    alignItems: "center",
    padding: 20
  },
  logo: {
    width: "70%", maxWidth: 300, maxHeight: 200, marginBottom: 20
  }
} )

export default SignInScreen