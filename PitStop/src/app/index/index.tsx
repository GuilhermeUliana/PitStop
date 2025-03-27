import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style"


export default function Index() {
    const MENU = [
        {
            id: 1,
            name: "Turbina",
            description: "Turbina (50/63)",
            price: 1500.00,
            image: require("@/assets/images/turbinapit.png")
        },
        {
            id: 2,
            name: "Rodas Esportiva",
            description: "Roda Aro 20, Liga leve",
            price: 2300.00,
            image: require("@/assets/images/roda.png")
        },
        {
            id: 3,
            name: "FuelTech",
            description: "FT450 SFI - Injeção Eletrônica Programável FuelTech",
            price: 4500.00,
            image: require("@/assets/images/fueltech.png")
        },
        {
            id: 4,
            name: "Spoiler",
            description: "Spoiler Fibra de Carbono",
            price: 800.00,
            image: require("@/assets/images/spoiler.png")
        }
    ]
    return (
        <View style={styles.container}>
            <Image style={styles.headerImage} source={require("@/assets/images/estabelecimento.png")} />



            <View style={styles.tabs}>
                {["Produtos em destaques", "Catálogo"].map((item) => (
                    <TouchableOpacity>
                        <Text style={styles.tabsName}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>

            <ScrollView style={styles.menuList}>
                <View style={styles.gridContainer}>
                    {
                        MENU.map((item) => (
                            <TouchableOpacity style={styles.menuItem}>
                                <Image style={styles.itemImage} source={item.image} />
                                <View style={styles.menuContent}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    <Text style={styles.itemDescription}>{item.description}</Text>
                                    <Text style={styles.itemPrice}>{item.price.toFixed(2)}</Text>
                                </View>

                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
        </View>
    )
}
