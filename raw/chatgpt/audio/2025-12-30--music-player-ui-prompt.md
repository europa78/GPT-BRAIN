---
title: "Music Player UI Prompt"
date: 2025-12-30
cluster: "Audio / DSP / Instruments"
messages: 29
source: chatgpt-history (globe snapshot — previews truncated ~280 chars; full text lives in conversations.json export)
---

# Music Player UI Prompt

> 29 messages · 2025-12-30 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Audio software questions]] · [[React Audio App Conversion]] · [[DJ MIDI Controller UI]] · [[Social Media Image Looping]]

## Transcript preview

**Mike:** Generate a prompt that will create a music player as seen in the attached screenshots.

**GPT:** Here is a **high-fidelity prompt** you can drop directly into an agent, website builder, or code-generation model to recreate the music player UI shown in your screenshots. --- ## PROMPT: Build a Modern Mobile Music Player UI (Dark Green Theme) **Role** You are a senior…

**Mike:** Do what ever will build a fully functioning music player

**Mike:** Generate a React Native / Flutter version.

**GPT:** Below are **working starter implementations** for **React Native (Expo)** and **Flutter** that give you a *real, functioning* music player: - import audio files (user picks files) - build a local library (persisted) - play/pause/seek - next/prev - playlists (basic) - “Now…

**Mike:** Option a

**GPT:** Cool — **Option A (Expo / React Native)** is the fastest path *and* you can still get a **fully functioning player** (queue, background playback, lockscreen controls, notification controls) by switching the audio engine from `expo-av` → **react-native-track-player**. Below is…

**Mike:** All 4.

**GPT:** Got it — we’ll add **all 4** upgrades to the Expo/TrackPlayer app: 1) **Metadata + artwork (practical MVP)** 2) **Artists / Albums / Folders tabs** 3) **Sort menu** 4) **Playing equalizer animation in the song row** ### Important (so you don’t get stuck) -…

**Mike:** Android only
