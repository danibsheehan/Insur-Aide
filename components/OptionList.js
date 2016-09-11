import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ListView
} from 'react-native';

import Store from '../store'

const options = {
    insurance: 
['Roseville Insurance',
'AARP',
'Aetna',
'American Family Insurance',
'American National Insurance Company',
'Amerigroup',
'Anthem Blue Cross and Blue Shield',
'Assurant',
'Blue Cross and Blue Shield Association',
'Celtic Insurance Company, subsidiary of Centene Corporation',
'Centene Corporation',
'Cigna',
'Coventry Health Care',
'EmblemHealth',
'Fortis',
'Golden Rule Insurance Company',
'Group Health Cooperative',
'GHI',
'Health Net',
'HealthMarkets',
'HealthSpring',
'Highmark',
'Humana',
'Independence Blue Cross',
'Kaiser Permanente',
'LifeWise Health Plan of Oregon',
'Medical Mutual of Ohio',
'Molina Healthcare',
'Premera Blue Cross',
'Principal Financial Group',
'The Regence Group',
'Shelter Insurance',
'Thrivent Financial for Lutherans',
'UnitedHealth Group',
'Unitrin',
'Universal American Corporation',
'WellCare Health Plans',
'WellPoint'],
    locations: ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID", "IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY", "OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"],
    problems: ["what", "problems"],
    
}


class OptionList extends Component {
    constructor(props){
        super(props)
        
    }

    renderList() {
        let list = this.props.cat
        return options[list].map((item) => {
                return <Text text={item} key={item} onPress={this.select.bind(this, item)}>{item}</Text>
            })
    }

    select(e) {
        let list = this.props.cat
        console.log(e)
        Store[list] = e
        this.props.navigator.push({
        ident: "GetHelp"
    })
     
    }
    
    render() {
        return (
            <View>
                {this.renderList()}
            </View>
        );
    }
}


export default OptionList;
