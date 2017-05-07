import React, { Component } from 'react';
import * as CLIENT from '../../../client_secret';

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
const SCOPES = 'https://www.googleapis.com/auth/drive';

class MainWindow extends Component{
    constructor(){
        super();
        this.auth2 = null;
        
        this.state = {
            fileList: null
        }
    }

    componentWillMount(){
        gapi.load('client:auth2', this.initClient.bind(this));
    }

    initClient(){
        this.auth2 = gapi.client.init({
            discoveryDocs: DISCOVERY_DOCS,
            clientId: CLIENT.web.client_id,
            scope: SCOPES
        }).then((value) => {
            gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus.bind(this));
            this.updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
    }


    updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            if(DEBUG) console.log('User signed in')
            // let test = gapi.auth2.getAuthInstance().currentUser.get().getAuthResponse().id_token;
        } else {

        }
    }

    signIn(){
        gapi.auth2.getAuthInstance().grantOfflineAccess().then((authToken)=>{
            let request = new XMLHttpRequest();
            request.open('POST', 'http://localhost:3000/tokens', true);
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
            request.onreadystatechange = function(){
                 if(request.readyState == XMLHttpRequest.DONE && request.status == 200) {
                    if(DEBUG) console.log(`Response: ${request.responseText}`)
                }
            }

            request.send("code=" + encodeURIComponent(authToken.code));
        });
    }

    signOut(){
        gapi.auth2.getAuthInstance().signOut()
        .then(()=>{
            if(DEBUG) console.log('User Logout');
        });
    }

    render(){
        return(
            <div className="MainWindow">
             Testing googleapis
             <button onClick={this.signIn}>Auth</button>
             <button onClick={this.signOut}>Out</button>
             <ul>
                {this.state.fileList && this.state.fileList.map((file)=>{
                    return <li key={file.id}>file.name + ' ' file.id</li>
                })}
             </ul>
            </div>);
    }
}

export default MainWindow;