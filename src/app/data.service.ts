
import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, DocumentData,doc,getDoc,deleteDoc,addDoc, setDoc } from 'firebase/firestore/lite';



@Injectable({
  providedIn: 'root'
})
//config firebase
export class FirebaseService {
   fireBaseConfig = {
  apiKey: "AIzaSyCUzg_Uq0K6ghmPr3iBO3hEA3v5gqj7zok",
  authDomain: "test-joke-6afba.firebaseapp.com",
  databaseURL: "https://test-joke-6afba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "test-joke-6afba",
  storageBucket: "test-joke-6afba.appspot.com",
  messagingSenderId: "1055001549452",
  appId: "1:1055001549452:web:3664dadd1c2a17cf9179a9"

  }

app = initializeApp(this.fireBaseConfig);
db = getFirestore(this.app);

//get all jokes return document and fields
async  getJokes() {
  const jokeCol = collection(this.db, 'jokes');
  const jokeSnapshot = await getDocs(jokeCol);
  return jokeSnapshot.docs.map(doc =>{
    return {
      id:doc.id,
      datas:doc.data()
    }
  });

}
//delete jokeById
async deleteJoke(id:string){

  await deleteDoc(doc(this.db, "jokes",id ));
}
//create joke
async postJoke(joke:string,id:string){
  await addDoc(collection(this.db, "jokes"), {

    joke,

  });
}

//update joke by id
async updateJoke(joke:string,id:string){
  await setDoc(doc(this.db, "jokes", id),{joke});
}

//get joke by id
async getJokeById(id:string){
const docRef = doc(this.db, "jokes",id);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
return docSnap.data();
}



  constructor() { }
}
