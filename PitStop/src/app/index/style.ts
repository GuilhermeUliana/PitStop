import { StyleSheet } from "react-native";
 
export const styles = StyleSheet.create({
 
    container: {
        
        flex: 1,
        backgroundColor: "#fff"
    },
    header: {
       
    },
    headerImage: {
        width: "100%",
        height: 180,
        
        position: "relative"
    },
    restaurantName: {
        fontSize: 50,
        fontWeight: "bold",
        marginTop: 16,
        position: "absolute",
        color: "#fff",
        alignSelf:'center',
        bottom:'50%'
    },
    
    tabs: {
        flexDirection: "row",
        alignSelf: "center",
        padding:16,
        borderBottomColor:"#eee",
        borderBottomWidth: 1,
        gap:16
        
    },

    tabsName: {
        color: "#666"
    },
    menuList: {
      padding:6,
        flex:1
    },
    gridContainer: {
        flexDirection: 'row', // Isso alinha os filhos horizontalmente
        alignItems: 'center', // Opcional: alinha verticalmente
        flexWrap: "wrap",
        maxHeight:375
    },
    menuItem:{
        width: "50%",
        borderBottomColor:"#eee",
        borderBottomWidth:1,
        padding:16,
        flexDirection: "column",
    },

    menuContent:{
        flex:1
    },

    itemImage: {
        width:120,
        height:120,
        borderRadius:8
    },

    itemName: {
        marginTop:42,
        fontSize:16,
        fontWeight:"bold"
    },

    itemDescription: {
        color:"#666",
        marginTop:2,
        maxWidth: 150
    },

    itemPrice: {
        fontSize:16,
        fontWeight:"bold",
        marginTop:8
    }
})
 