import React, {Component} from 'react';
import * as CLIENT from '../../client_secret';

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive.metadata.readonly';


class MainWindow extends Component{
    constructor(){
        super();
        this.state = {
            fileList: null
        }
    }

    componentWillMount(){
        gapi.load('client:auth2', this.initClient.bind(this));
    }

    initClient(){
        gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT.web.client_id,
            scope: SCOPES
        }).then(() => {
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus.bind(this));
            this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    }


    updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            // SignedIn
            listFiles();
        } else {
            // UnSigned
        }
    }

    listFiles() {
        gapi.client.drive.files.list({
            'pageSize': 10,
            'fields': "nextPageToken, files(id, name)"
        }).then((response) => {
            this.setState({fileList: response.result.files});
        });
    }

    signIn(){
        gapi.auth2.getAuthInstance().signIn();
    }

    signOut(){
        gapi.auth2.getAuthInstance().signOut();
    }

    render(){
        return(
            <div className="MainWindow">
             Testing googleapis
             <button onClick={this.signIn}>Auth</button>
             <button onClick={this.signOut}>Out</button>
             <ul>
                {this.state.fileList && this.state.fileList.map((file)=>{
                    return <li>file.name + ' ' file.id</li>
                })}
             </ul>
            </div>);
    }
}

export default MainWindow;