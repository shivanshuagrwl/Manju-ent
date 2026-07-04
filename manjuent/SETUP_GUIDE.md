# Manju Enterprises — Deployment Guide

## What's in this folder
- `index.html` — the full app
- `firebase-config.js` — your Firebase keys + PIN (edit this!)
- `vercel.json` — Vercel deployment config
- `SETUP_GUIDE.md` — this file

---

## STEP 1: Setup Firebase (Free Database)

1. Go to **https://console.firebase.google.com**
2. Click **"Add project"** → Name: `ManjuEnt` → Continue → Disable Analytics → Create project
3. Click **`</>`** (Web icon) to register a web app → Name it `ManjuEnt` → Register
4. **Copy the firebaseConfig** values shown — you'll need them next

5. **Open `firebase-config.js`** in any text editor and paste your values:
   ```
   apiKey: "AIzaSy...",
   authDomain: "manjuent-xxxxx.firebaseapp.com",
   projectId: "manjuent-xxxxx",
   ...
   ```

6. **Create the database:**
   - In Firebase left sidebar: **Build → Firestore Database → Create database**
   - Choose **"Start in production mode"** → Next
   - Select **asia-south1 (Mumbai)** → Enable

7. **Set database rules (allow your app to read/write):**
   - In Firestore: click **Rules** tab
   - Replace everything with:
     ```
     rules_version = '2';
     service cloud.firestore {
       match /databases/{database}/documents {
         match /{document=**} {
           allow read, write: if true;
         }
       }
     }
     ```
   - Click **Publish**

---

## STEP 2: Set Your PIN

In `firebase-config.js`, change this line:
```js
const APP_PIN = "1234";
```
Change `1234` to whatever 4-digit PIN you want. Share it with your staff.

---

## STEP 3: Deploy to Vercel (Free Website)

### Option A — Drag & Drop (Easiest, no account needed for testing)
1. Go to **https://vercel.com**
2. Sign up free (use Google or GitHub)
3. Click **"Add New → Project"**
4. Choose **"Import from folder"** or drag the entire `manjuent` folder
5. Click **Deploy** — done!
6. Vercel gives you a URL like `manjuent.vercel.app`

### Option B — Vercel CLI (for updates)
```bash
npm install -g vercel
cd manjuent
vercel
```
Follow the prompts. After first deploy, just run `vercel --prod` to update.

---

## STEP 4: Share with your team

- Send them the Vercel URL (e.g. `https://manjuent.vercel.app`)
- Tell them the PIN
- Works on any phone or computer browser
- **All data syncs in real-time** — price changes you make appear on their screen instantly

---

## How the PIN works
- First visit: shows PIN screen
- Once unlocked: stays unlocked for that browser session
- Closing and reopening the browser asks for PIN again
- **To change PIN:** edit `firebase-config.js` and re-deploy to Vercel

---

## Backup
The Backup screen still works — you can export a .json file anytime as a local backup.

---

## Troubleshooting
- **"Sync error" red dot:** Check your Firebase config values are correct in `firebase-config.js`
- **Data not syncing:** Check Firebase Rules are published (Step 1 → Point 7)
- **PIN not working:** Make sure APP_PIN is set correctly in `firebase-config.js`
