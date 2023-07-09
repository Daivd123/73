import React, {Component} from "react";
import {
	View,
	styleSheet,
	TextInput,
	TouchableOpacity,
	Text,
	ImageBackground,
	Image,
	Alert,
	ToastAndroid,
	KeyboardAvoidingView,
} from 'react-native' ;
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import db from '../config';
import {
	collection,
	query,
	where,
	getDocs,
	Timestamp,
	limit,
	addDoc,
	doc, 
	updateDoc,
	increment,
} from 'firebase/firestore';

const bgImage = require('../assets/background2.png');
const appIcon =  require ('../assets/appIcon.png');
const appName = require ('../assets/appName.png');

export default class TransactionScreen extends Component {
	constructor(props){
		super(prop);
		this.state = {
			bookId: '',
			studentId: '',
			domState: 'normal',
			hasCameraPositions: null,
			scanned: false
			bookName: '',
			studentName: '',
		};	
	}
	getCameraPermissions = async (domState) = > {
		const {status} = await Permissions .AskAsync(Permissions.Camera);
	}
}
