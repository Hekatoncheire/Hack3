import * as React from 'react';
import { StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function HomeScreen() {
    interface AvatarItem {
        id: string;
        image: any;
    }

    const avatars: AvatarItem[] = [
        {
            id: '1',
            image: require('../assets/kovacs_hanna.png')
        },
        {
            id: '2',
            image: require('../assets/kertesi_hugo.png')
        },
        {
            id: '3',
            image: require('../assets/kantor_henrik.png')
        }
    ];

    const AvatarList: React.FC = () => {

        const renderItem = ({ item }: { item: AvatarItem }) => (
          <View style={styles.avatarContainer}>
            <Image 
              source={item.image} 
              style={styles.avatarImage}
              resizeMode='cover'
            />
          </View>
        );
      
        return (
          <View style={styles.container}>
            <FlatList 
              data={avatars}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        );
      };

    
    return (
        <View style={styles.container}>
            <Text style={styles.h1}>Top felajánlók</Text>
            <View style={styles.leaderboardContainer}>
                <AvatarList/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '10%'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 26
    },
    leaderboardContainer: {
        flex: 0.67,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    avatarContainer: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
        overflow: 'hidden'
      },
      avatarImage: {
        width: '100%',
        height: '100%'
      }
})