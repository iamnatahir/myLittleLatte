import { Appearance, StyleSheet, Platform, SafeAreaView, ScrollView, FlatList, View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { MENU_ITEMS } from "@/constants/menuItems";
import MENU_IMAGES from "@/constants/menuImages";

export default function MenuScreen() {
    const colorScheme = Appearance.getColorScheme();
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light;
    const style = createStyles(colorScheme, theme);
    const Container = Platform.OS === 'web' ? ScrollView : SafeAreaView;

    return (
        <Container>
            <FlatList
                contentContainerStyle={style.contentContainer}
                showsVerticalScrollIndicator={false}
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={style.itemContainer}>
                        <View style={style.textContainer}>
                            <Text style={style.title}>{item.title}</Text>
                            <Text style={style.description}>{item.description}</Text>
                        </View>
                        <Image 
                            style={style.image} 
                            source={MENU_IMAGES[item.id - 1]} 
                        />
                    </View>
                )}
            />
        </Container>
    );
}

function createStyles(colorScheme, theme) {
    return StyleSheet.create({
        contentContainer: {
            paddingTop: 10,
            paddingBottom: 20,
            paddingHorizontal: 12,
            backgroundColor: theme.backgroundColor,
        },
        itemContainer: {
            flexDirection: "row",  
            alignItems: "center",
            marginBottom: 20,
            padding: 10,
            backgroundColor: theme.backgroundColor,
            borderRadius: 10,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 4,
        },
        textContainer: {
            flex: 1,
            marginRight: 10,
        },
        title: {
            fontSize: 18,
            fontWeight: "bold",
            color: theme.text,
        },
        description: {
            fontSize: 14,
            color: theme.text,
        },
        image: {
            width: 100,  
            height: 100, 
            borderRadius: 10, 
            resizeMode: "cover", 
        },
    });
}
