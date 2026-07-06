---
title: "Reaper Bluetooth Output Setup"
date: 2024-10-16
cluster: "Audio / DSP / Instruments"
messages: 2
source: chatgpt-export conversations.json (FULL transcript)
---

# Reaper Bluetooth Output Setup

> 2 messages · 2024-10-16 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[SEO plugin]] · [[GPT Chart Visualization Plugin]] · [[Command Line Mastery Summary]] · [[REAPER manual download]]

## Transcript

**Mike:** How do set the output in reaper .  I have a Bluetooth device I want to set as output .  How do I accomplish this in a step by step list

**GPT:** To set your Bluetooth device as the output in Reaper, follow these steps:

1. **Pair Your Bluetooth Device**:
   - Go to your computer's **Bluetooth settings** and ensure your Bluetooth device (headphones, speaker, etc.) is paired and connected to the system.
   
2. **Set Bluetooth Device as Default Audio Output (Windows)**:
   - Right-click on the **volume icon** in the system tray (bottom-right corner of your screen).
   - Select **Sound settings** or **Open Sound settings**.
   - In the "Output" section, choose your Bluetooth device from the dropdown list of output devices.

3. **Launch Reaper**:
   - Open the **Reaper** Digital Audio Workstation (DAW).

4. **Open Reaper’s Audio Preferences**:
   - Go to **Options** in the top menu and select **Preferences** (or press `Ctrl+P`).

5. **Select Audio System**:
   - In the Preferences window, click on **Audio** on the left side.
   - Under **Audio system**, make sure **WASAPI** or **DirectSound** is selected for Windows (WASAPI is preferable for low-latency use with Bluetooth).

6. **Choose Output Device**:
   - Below the **Audio system** dropdown, there will be an **Output device** section.
   - Select your **Bluetooth device** from the list of available output devices.

7. **Apply Settings**:
   - Click **Apply** and then **OK** to confirm the settings.

8. **Test Playback**:
   - Play back a track in Reaper to ensure sound is coming through your Bluetooth device.

By following these steps, Reaper should output audio to your Bluetooth device successfully.
