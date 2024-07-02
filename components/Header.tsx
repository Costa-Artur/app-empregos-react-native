import { faBars} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { TouchableOpacity, View, Image, ViewStyle, ImageStyle } from "react-native";

type HeaderProps = {}

export default function Header(props: HeaderProps) {
    const userImageUri = 'https://cdn-icons-png.flaticon.com/512/149/149071.png';

    return (
        <View style={styles.header}>
            <TouchableOpacity onPress={() => console.log('User pressed')} style={{alignItems: 'center'}}>
              <Image source={{ uri: userImageUri }} style={styles.userImage} />
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => console.log('Burger menu pressed')} style={{alignItems: 'center'}}>
                <FontAwesomeIcon size={35} icon={faBars}></FontAwesomeIcon>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    header: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingTop: 20,
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
