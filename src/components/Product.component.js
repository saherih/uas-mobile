import React, { Component } from 'react';
import { 
    View, 
    Text,
    Image,
    StyleSheet,
    TouchableOpacity 
} from 'react-native';

import themes from '../styles/theme.style';

class Product extends Component {
    addToCart = () => {
        this.props.addItemsToCart(this.props.item)
    }
    render() {
        const { product } = this.props;
            return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent: 'space-between'}} >
            <Image source={{uri:product.picture}} style={{borderRadius:10,width:150,height:150,resizeMode:'contain', marginTop:10}}/>
            <View style={styles.productDes}>
                <Text style={styles.textTitle}>{product.title}</Text>
                <Text>{product.description}</Text>
                <Text>{'\n'}</Text>
                <Text>Rp. {(product.price).toFixed(2)}</Text>
                <TouchableOpacity onPress={this.addToCart} style={styles.addBtn}>
                    <Text style={styles.text}>Add to cart</Text>
                </TouchableOpacity>
            </View>
            </View>
        </View>

    );
    }

}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#e9f1f2'
    },
    productDes: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        width:'60%'
    },
    addBtn: {
        borderRadius: 15,
        margin: 10,
        backgroundColor: themes.BUTTON_COLOR
    },
    text: {
        color: '#fff',
        fontSize: 16,
        padding: 12
    },
    textTitle: {
        color: '#000',
        fontSize: 18,
        marginBottom: 10
    }
});

export default Product;
