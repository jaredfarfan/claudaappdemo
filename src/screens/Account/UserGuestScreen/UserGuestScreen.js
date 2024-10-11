import React from "react";
import { ScrollView } from "react-native";
import { Text, Button, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.style";

export function UserGuestScreen() {
  const navigation = useNavigation();
  const goToLogin = () => {
    // navigation.navigate(screen.account.tab, { screen: screen.account.login });
    navigation.navigate(screen.account.login);
  };

  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/user-guest.png")}
        style={styles.image}
      />
      <Text style={styles.title}>Consultar tu perfil</Text>
      <Text style={styles.description}>
        Explora las mañaneras de Claudia Sheinbaum Pardo de manera rápida y
        sencilla. Utiliza este buscador para encontrar sus transmisiones
        diarios. Las transmiciones se actualizan en el transcurso de la semana.
      </Text>

      <Button
        title="Ver tu perfil"
        onPress={goToLogin}
        buttonStyle={styles.btnStyle}
      />
    </ScrollView>
  );
}
