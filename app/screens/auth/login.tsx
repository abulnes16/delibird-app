/* Login screen
   Log an user in the application
*/
import React from 'react';
import { Layout, Input, Button, Text } from '@ui-kitten/components';
import { StyleSheet, KeyboardAvoidingView } from 'react-native';
import Header from '../../components/header.component';
import SocialButton from '../../components/atoms/social-button.component';

const LoginScreen = () => {
  return (
    <Layout style={styles.container}>
      <Header />
      <Layout style={styles.relative}>
        <Layout style={styles.loginContainer}>
          <KeyboardAvoidingView>
            <Input style={styles.input} placeholder="Correo" />
            <Input style={styles.input} placeholder="Contraseña" />
            <Button style={styles.btn} status="info">
              Inicia Sesión
            </Button>
          </KeyboardAvoidingView>
          <Layout style={styles.row}>
            <Text>¿No tienes cuenta?</Text>
            <Button style={styles.btn}>Registrate</Button>
          </Layout>
          <Layout>
            <Text style={styles.center}>
              O inicia sesión con tus redes sociales
            </Text>
            <Layout style={styles.row}>
              <SocialButton iconName="facebook" />
              <SocialButton iconName="google" />
              <SocialButton iconName="twitter" />
            </Layout>
          </Layout>
        </Layout>
      </Layout>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 15,
  },
  relative: {
    position: 'relative',
    height: '100%',
  },
  loginContainer: {
    position: 'absolute',
    top: -40,
    right: 0,
    left: 0,
    bottom: 0,
    padding: 50,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  input: {
    marginBottom: 10,
    borderRadius: 15,
  },

  btn: {
    borderRadius: 50,
    paddingVertical: 8,
  },
  center: {
    textAlign: 'center',
  },
});

export default LoginScreen;
