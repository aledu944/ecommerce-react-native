import { StyleSheet } from "react-native";
import { COLORS } from "./theme";


const SHADOWS = StyleSheet.create({
    shadow_sm: {
        shadowColor: COLORS.primary,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.18,
        shadowRadius: 4.59,
        elevation: 5
    },

    shadow_md: {
        shadowColor: COLORS.primary,
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5.62,
        elevation: 7
    },
})

export const GLOBALS = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },


    // CATEGORIES
    categories_list: {
        paddingVertical: 5
    },

    category_button: {
        flexDirection:'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: COLORS.primary,
        marginVertical: 10,
        marginLeft: 15,
        ...SHADOWS.shadow_md
    }
})

