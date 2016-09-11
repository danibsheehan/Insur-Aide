import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

 const insuranceCompanies = [{name:"Cr"},{name:"d"},{name:"b"},{name:"a"},{name:"test"},{name:"Cigna"}];

class OptionList extends Component {
    constructor(props){
        super(props)
        // TODO: need to hook it up with real data from firebase
        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
          data: dataSource.cloneWithRows(insuranceCompanies)
        }
    }
    click(i) {
        console.log(i)
    }
    options() {
        return insuranceCompanies.map(option => {
            return <Text onPress={this.click.bind(this, option.name)} style={styles.option}>{option.name}</Text>
        });
    }

    render() {
        return (
            <View>
                {this.options()}
            </View>
        );
    }
}

// OptionList.propTypes = {
//     select: PropTypes.func.isRequired,
// }

const styles = StyleSheet.create({
    list:{

    },
    option:{

    },
});

export default OptionList;
