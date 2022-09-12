import { withTheme } from '@rneui/themed';
import {StyleSheet} from 'react-native'

export default StyleSheet.create({

      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        
      },
      container2: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 25
        
      },
      title: {
        fontSize: 64,
        textAlign: 'center',
      },
      image: {
          width: 71,
          height: 71,
          marginTop: 25,
      },
      wide: {
          width: 71,
          height: 50,
          marginTop: 25,
      },
      button: {
        marginTop: 12.5,
        marginBottom: 12.5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 25,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      text: {
        color: 'black',
        textDecorationLine: 'underline'
      },
      blueback: {
        backgroundColor: 'rgba(105,160,215,.4)',
        overflow: 'auto',
        paddingHorizontal: 100,
        paddingVertical: 25
        
      },
      lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:10,
      }
});