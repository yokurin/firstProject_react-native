/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
//var AfterLogin = require('./AfterLogin.js');
var _ = require('underscore');

var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  TextInput,
  View,
} = React;

var firstProject = React.createClass({
    width: null,
    height: null,

    getInitialState: function(){
        return(
            {
                address: '',
                password: '',
                errorMessage: ''
            }
        );
    },
    addressInput: function(e){
        this.setState(
            {
                address: e.nativeEvent.text,
            }
        );
    },
    passwordInput: function(e){
        this.setState(
            {
                address: e.nativeEvent.text,
            }
        );
    },
    afterLogin: function(){
        this.props.navigator.push({
            title: 'ログイン後',
            component: AfterLogin
            //passProps: {entries: responseData}
        });
    },
    render: function() {
        var $ = this;
        return
        (
            <View style={styles.container}>
                <View>
                    <TextInput
                        style={styles.address}
                        onChange={$.addressInput}
                        placeholder='アドレス'
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.password}
                        onChange={$.passwordInput}
                        placeholder='パスワード'
                    />
                </View>

                <View style={styles.button} underlayColor='#000080'>
                    <Text style={styles.buttonText} onPress={$.afterLogin}>ログイン</Text>
                </View>

            </View>
        );
}
});
var common = {
    height: 40,
    width: 300,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#F5F5F5',
    flex: 1,
    borderRadius: 3,
    padding: 5,
    alignItems: 'stretch'
};
var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    address: _.extend({
        //hintText: 'address'
    }, common),
    password: _.extend({
        //hintText: 'password'
    }, common),
    button: {
        height: 36,
        width: 300,
        backgroundColor: '#6495ED',
        borderRadius: 8,
        justifyContent: 'center',
        marginTop: 15
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center'
    },
});

AppRegistry.registerComponent('firstProject', () => firstProject);
