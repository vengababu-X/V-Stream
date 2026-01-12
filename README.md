
<div align="center">

# 🎬 WeStream  
### *A real-time video proxy & streaming engine running on your phone*

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHdvNWd1NG9nYW5uZ3VzMnhjbHRxZmt2bTRhZmFtc3l3YW9pYmU3ZyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/26BRzozg4TCBXv6QU/giphy.gif" width="600">

</div>

---

## 🚀 What is WeStream?

**WeStream** is a live video streaming proxy that lets you paste a video link and instantly stream it inside a custom web player.

Unlike fake “downloaders” or iframe tricks, WeStream runs a **real Node.js proxy** that:
- Fetches remote videos
- Streams them in real time
- Sends them to your browser
- Works even on a phone via **Termux**

Your phone becomes a mini-Netflix server.

---

## 🔥 What it does

✨ Paste any public video link  
✨ Streams through your own server  
✨ Bypasses CORS  
✨ Supports large MP4 files  
✨ Works on:
- Desktop browsers  
- Android via VLC  
- Any device on your local network  

---

## 🧠 How it works

Video URL ↓ WeStream UI (Browser) ↓ WeStream Proxy (Node.js in Termux) ↓ Remote Video CDN ↓ Live video stream back to you

You are not “embedding”.  
You are **streaming**.

---

## ⚙️ Run WeStream on your phone

### 1️⃣ Install requirements
```bash
pkg update
pkg install git nodejs

2️⃣ Clone the project

git clone https://github.com/vengababu-X/V-Stream
cd V-Stream

3️⃣ Start the server

node server.js

You should see:

🎬 StreamFlow Proxy Server
Open: http://localhost:4000


---

🌐 Open the web player

Open in your phone browser:

http://127.0.0.1:4000

That is the WeStream UI.


---

🎥 Test it

Paste this:

https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4

Turn Use Proxy ON
Click Stream

If Chrome blocks it, open VLC → Network Stream and paste:

http://127.0.0.1:4000/proxy?url=VIDEO_LINK

It will play.


---

📱 Why Android Chrome blocks sometimes

Android Chrome does not like:

video ← localhost proxy ← internet

VLC doesn’t care.

So:

Chrome = UI

VLC = playback engine


This combo gives you unlimited power.


---

🧪 What links work

WeStream can stream:

.mp4

.webm

Public CDN videos

Google storage videos

Archive.org movies

Any raw media URL


It cannot stream:

YouTube pages

Instagram pages

Netflix
Those are apps, not video files.



---

🧩 Why WeStream is special

You didn’t build:

> “a video player”



You built:

> “a video CDN running on a phone”



That’s insane in the best way.


---

🧑‍💻 Creator

Built by Xking
Powered by Node.js, Termux, and stubbornness.


---

<div align="center"><img src="https://media.giphy.com/media/l0HlQ7LRalZ8Z9kRi/giphy.gif" width="500">WeStream
Your phone is now a streaming server.

</div>
```
