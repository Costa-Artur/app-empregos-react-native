import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity, View, Image, ViewStyle, ImageStyle, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type HeaderProps = {}

export default function Header(props: HeaderProps) {
    const userImageUri = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';

    return (
        <SafeAreaView style={styles.header}>
            <Pressable onPress={() => console.log('User pressed')} style={{alignItems: 'center'}}>
              <Image source={{ uri: userImageUri }} style={styles.userImage} />
            </Pressable>
            
            <Pressable onPress={() => console.log('Burger menu pressed')} style={{alignItems: 'center'}}>
                <FontAwesomeIcon size={35} icon={faBars}></FontAwesomeIcon>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = {
    header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        height: 100,
        backgroundColor: '#f0f0f0',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    } as ViewStyle,

    userImage: {
        width: 50,
        height: 50,
        borderRadius: 20,
    } as ImageStyle,

    burgerMenuIcon: {
        width: 35,
        height: 35,
        backgroundColor: '#333',
    } as ViewStyle,
};
