// for project id, etc
import conf from '../conf/conf';

import { Client, ID, Databases, Storage, Query } from "appwrite";


export class Service{
    // properties
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // creating post
    async createPost({ title, slug, content, featuredImage, status, userId }){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite servie :: createPost :: error ",error);
        }
    }
    // update post
    async updatePost(  slug, { title, content, featuredImage, status }){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite servie :: updatePost :: error ",error)
        }
    }
    //delete post
    async deletePost( slug ){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error ",error)
            return false
        }
    }
    // when we need 1 post (get document)
    async getPost( slug ){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (error) {
            console.log("Appwrite service :: getPost :: error ",error);
            return false
        }
    }
    // get all post (list documents)
    // we want post according to status(active), so we will use queries over here (queries can be given multiples thats why
    // we give in []), queries can added when only indexes is provided in database
    async getPosts( queries = [ Query.equal( "status", "active" )] ){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error ",error)
            return false
        }
    }
    // file upload services/method, use can keep these files separately
    // file blob is passed not file name (in storage api documentation)
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: error ",error)
            return false
        }
    }
    // we need to pass fileId to deleteFile, we have stored it. when we upload file we will get the file id in return
    // while uploading the createPost we give fileid in featuredImage
    async deleteFile(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error ",error)
            return false
        }
    }
    // for file preview, its response is fast thats why asyn is not need
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
    
}

const service = new Service()

export default service