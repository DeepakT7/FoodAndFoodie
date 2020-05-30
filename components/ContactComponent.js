import React, { Component } from 'react';
import { Card } from 'react-native-elements';
import { View, Text, StyleSheet } from 'react-native';


class Contact extends Component {
    render() {
        return (
            <View>
                <Card title='Contact Information'>
                    <Text>
                        121, Clear Water Bay Road{"\n\n"}
                        Clear Water Bay, Kowloon{"\n\n"}
                        HONG KONG{"\n\n"}
                        Tel: +852 1234 5678{"\n\n"}
                        Fax: +852 8765 4321{"\n\n"}
                        Email:confusion@food.net
                    </Text>
                </Card>
            </View>
        );
    }
}

export default Contact;