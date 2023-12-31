
// for project id, etc
import conf from '../conf/conf.js';

import { Client, Account, ID} from "appwrite";
import { useParams } from 'react-router-dom';


export class AuthService {
    // creating properties
    client = new Client();
    account;


    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
            
    }
    // creating account, but we dnt want to make it dependent, so only appwrite services will be called, we created
    // wrapper 
    // we are using async bz till went account is not created we dnt want to move forward
    async createAccount({ email, password, name})
    {
        // if this method fails, thats why we are using try and catch
        try{
            const userAccount = await this.account.create( ID.unique(), email, password, name );
            if(userAccount)
            {
                    return this.login({ email, password });
            }
            else return userAccount;
        } catch(error){
            console.log("Appwrite service :: createAccount   :: error ",error);
        }
    }

    async login({ email, password }){
        try {
            const session = await this.account.createEmailSession( email, password);
            if(session){
                const verify = this.emailVerification()
                if(verify){
                    return session;
                }
                else{
                    console.log("Account not created ");
                }
            }
        } catch (error) {
            console.log("Appwrite service :: login :: error ",error);
        }
    }
    // whether we are login or not for home page
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }   

    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error ",error)
        }
    }
    async emailVerification() {
        const url ='http://localhost:5173/all-posts/'
        return await this.account.createVerification(url).then(( response) => {
            console.log("Verify your acccount by clicking on the verification link in your email ",response);
        })
        .catch((error) => {
            console.log("Verification failed ",error);
        })
    }
}

// creating object for AuthService class and exporting it
const authService = new AuthService();
export default authService
