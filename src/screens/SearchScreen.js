import React, { useState, useEffect } from "react";
import { View, ScrollView } from "react-native";
import {
  collection,
  query,
  startAt,
  endAt,
  limit,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { size, map } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { Loading } from "../components/Shared";
import { db, screen } from "../utils";

import { SearchBar, ListItem, Avatar, Icon, Text } from "@rneui/themed";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const navigation = useNavigation();
  console.log(size(searchResults), "size(searchResults)");
  useEffect(() => {
    (async () => {
      const q = query(
        collection(db, "subtitles"),
        orderBy("text"),
        startAt(searchText),
        endAt(`${searchText}\uf8ff`),
        limit(20)
      );

      console.log(q, "query");
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot, "querySnapshot");
      setSearchResults(querySnapshot.docs);
    })();
  }, [searchText]);

  const goToRestaurant = (idRestaurant) => {
    navigation.navigate(screen.restaurant.tab, {
      screen: screen.restaurant.restaurant,
      params: {
        id: idRestaurant,
      },
    });
  };
  return (
    <>
      <SearchBar
        placeholder="Buscar palabra"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      {!searchResults && <Loading show text="Cargando" />}

      <ScrollView>
        {size(searchResults) === 0 ? (
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>No se han encontrado resultados</Text>
          </View>
        ) : (
          map(searchResults, (item) => {
            const data = item.data();

            return (
              <ListItem bottomDivider>
                <ListItem.Content>
                  <ListItem.Title>{data.text}</ListItem.Title>
                </ListItem.Content>
                <Icon type="material-community" name="chevron-right" />
              </ListItem>
            );
          })
        )}
      </ScrollView>
    </>
  );
}
