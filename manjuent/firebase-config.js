// ================================================================
// FIREBASE CONFIGURATION
// ================================================================
// SETUP INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Click "Add project" -> name it "ManjuEnt" -> Continue
// 3. Disable Google Analytics -> Create project
// 4. Click the </> (Web) icon to register your app
// 5. Copy the firebaseConfig object values below
// 6. In left sidebar: Build -> Firestore Database -> Create database
//    -> Start in production mode -> Choose asia-south1 (Mumbai) -> Enable
// 7. In Firestore: Rules tab -> replace with:
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /{document=**} {
//          allow read, write: if true;
//        }
//      }
//    }
//    -> Publish
// ================================================================

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyAvq04DKa_7iOn3J2zZvVHU7WBqahpWofk",
  authDomain: "manjuenterprise.firebaseapp.com",
  projectId: "manjuenterprise",
  storageBucket: "manjuenterprise.firebasestorage.app",
  messagingSenderId: "153131392022",
  appId: "1:153131392022:web:8d5eebdb072f77369b2937"
};

// ACCESS PIN - Change this to your desired 4-digit PIN
// All team members use the same PIN to access the app
const APP_PIN = "1234";
