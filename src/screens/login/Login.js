import { Button, Image, SafeAreaView, Text, TextInput, View } from "react-native";
import { useState } from "react";
import styles from "./styles.js";

function Login() {
  const email = "ahmed@gmail.com";
  const pass = "ahmed123";

  const [emailVal, setEmailVal] = useState("")
  const [passVal, setPassVal] = useState("")

  function getValue() {
    if (emailVal === email && passVal === pass) {
      alert("LOGGED IN")
    } else {
      alert("WRONG CREDENTIALS")
    }
  }

  return (
    <SafeAreaView style={styles.screenBody}>
      <View style={{ flex: 1 }}>
        {/* HEAD */}
        {/* <View style={styles.headCon}>
          <Text style={styles.headText}>
            LOGIN
          </Text>
          <Image
            style={styles.logo}
            source={{ uri: 'https://img.freepik.com/premium-vector/burger-vector-illustration-burger-logo-design_921448-1004.jpg?w=2000' }}
          />
        </View> */}

        {/* BODY */}
        <View style={styles.bodyCon}>
          <View style={styles.inputsCon}>
            <View>
              <Text style={styles.inputTitle}>
                Email:
              </Text>
              <TextInput
                inputMode="email"
                keyboardType="email-address"
                onChangeText={(e) => setEmailVal(e)}
                value={emailVal}
                style={styles.input}
              />
            </View>

            <View>
              <Text style={styles.inputTitle}>
                Password:
              </Text>
              <TextInput
                onChangeText={(e) => setPassVal(e)}
                secureTextEntry={true}
                value={passVal}
                style={styles.input}
              />
            </View>

            <Button
              title="LOGIN"
              onPress={getValue}
            />
          </View>
        </View>

        {/* FOOT */}
        <View style={styles.footCon}>
          <Text style={{ color: '#000' }}>
            Not a member?<Text style={{ color: '#0000EE', textDecorationLine: 'underline' }}> Register now </Text>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Login;