import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';


class OptionList extends Component {
    constructor(props){
        super(props)
        this.renderRow = this.renderRow.bind(this)

        // TODO: need to hook it up with real data from firebase
        const insuranceCompanies = [{name:"Cigna"},{name:"Cigna"},{name:"Cigna"},{name:"Cigna"},{name:"Cigna"},{name:"Cigna"}];

        const dataSource = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })

        this.state = {
          data: dataSource.cloneWithRows(insuranceCompanies)
        }
    }

    renderRow(option) {
        return (
            <View style={styles.list} onPress={this.props.select}>
                    <Text style={styles.option}>{option.name}</Text>
            </View>
        )
    }

    render() {
        return (
            <ListView dataSource={this.state.data} renderRow={this.renderRow}/>
        );
    }
}

OptionList.propTypes = {
    select: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    list:{

    },
    option:{

    },
});

export default OptionList;
