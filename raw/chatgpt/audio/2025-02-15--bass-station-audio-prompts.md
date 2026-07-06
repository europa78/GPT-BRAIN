---
title: "Bass Station Audio Prompts"
date: 2025-02-15
cluster: "Audio / DSP / Instruments"
messages: 12
source: chatgpt-export conversations.json (FULL transcript)
---

# Bass Station Audio Prompts

> 12 messages · 2025-02-15 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[Beautiful Melody Request]] · [[Stable Audio Prompts]] · [[Stable Audio Guide Summary]] · [[Stable Audio Manual Summary]]

## Transcript

**Mike:** you are an expert sound designer.  I am using stable audio to generate audio.  write the best prompts that will generate the most stunning audio.   i am using the novation bass station as inspiration.   the following info is from the novation manual hardware overview.  use the info to craft your prompts :  

1  25-note (two octaves) velocity-sensitive keyboard with aftertouch.
Pitch and Mod wheels: The Pitch wheel is mechanically biased to return to the centre position when released. The wheels are internally illuminated.
Octave shift keys – transpose the keyboard in octave increments.
Transpose - lets you transpose the keyboard in semitone increments, up to a maximum of +/- 12 semitones.
Function/Exit – hold this down to use any of Bass Station II’s On-Key Functions. A wide range of “system set-up” parameters can be set in this mode.

Master section:
LED display – a three-character alphanumeric display showing various items of unit data – e.g., patch number, octave shift and parameter values – depending on which other controls are in use.
Org. Value – one of these two LEDs will illuminate when the value of a parameter no longer matches the value stored for the patch.
Patch/Value – allows selection of one of the 64 Factory or 64 User Patches, and are also used to set parameter values for On-Key functions.
Save – use in conjunction with Patch keys	to save modified Patches in User Memories.
Volume – sets the Bass Station II’s audio volume.

Oscillator section:
11 Osc Select switch – assigns the controls in the Oscillator section to Oscillator 1 or Oscillator 2.
Range – steps through the base pitch ranges of the selected oscillator. For standard concert pitch (A3 = 440 Hz), set to 8’.
Waveform – steps through the range of available oscillator waveforms – sine, triangular, sawtooth and pulse.
Coarse – adjusts the pitch of the selected oscillator over a range of ±1 octave.
Fine – adjusts the oscillator pitch over a range of ±100 cents (±1 semitone).
Mod Env depth – controls the degree by which the oscillator pitch changes as a result of modulation by Envelope 2; the control is ‘centre-off’, so that either pitch increases or decreases can be obtained.
LFO 1 depth – controls the degree by which the oscillator pitch changes as a result of modulation by LFO 1.
Pulse width modulation source – active only when Waveform 13 is set to Pulse; this switch selects the method of varying the width of the pulse waveform. The options are: modulation by Envelope 2 (Mod Env), modulation by LFO 2 (LFO 2) or manual control

Pulse Width – a multi-functional control adjusting the pulse waveform; only active when Waveform   is set to Pulse. When the pulse width source modulation switch
11 is set to Manual, the control adjusts the pulse width directly; when set to Mod Env or LFO 2, it acts as a Modulation Depth control. Note that the pulse width may be modulated by all three sources simultaneously, by differing amounts.
Sync 1-2 – this LED illuminates when the Osc 1/Osc 2 Sync function is enabled (an On-Key Function)
Octave – sets the range of the sub-octave oscillator; the actual pitch of this oscillator is determined by OSC 1’s pitch, and adds additional bass frequencies (LF) to the sound. -1 adds LF one octave below OSC 1, -2 adds LF two octaves below.
Sub Osc Wave – a choice of three waveforms is available for the sub-octave oscillator: sine, narrow pulse or square.

LFO section:
LFO Delay/Speed – the two rotary controls in the LFO section are dual-function, the function being set by this switch. In Speed mode, the rotary controls adjust the frequencies of the two LFOs. In Delay mode, they set the “fade-in” time for the LFO. Speed mode can be changed to Sync mode by using one of the On-key functions. See “ Mod Wh: Filter Freq (bottom C)” on page 22 for further information.
LFO waveform – these buttons step through the available waveforms for each LFO independently: triangle, sawtooth, square, sample and hold. The associated LEDs give a visual indication of the LFO speed and waveform.
LFO rotary controls – these two controls either adjust LFO speed or delay, as set by the LFO Delay/Speed switch [23].


26
27
28

Mixer section:
OSC 1 – adjusts the proportion of Oscillator 1’s signal making up the sound.
OSC 2 – adjusts the proportion of Oscillator 2’s signal making up the sound.
Sub – adjusts the proportion of the sub-octave oscillator making up the sound. Additional inputs - up to three further sources may contribute to the synth output; this control sets their levels. The control’s function is set by switch 30 .
Noise/Ring/Ext – determines the function of rotary control 29 . When set to Noise, the rotary control sets the amount of white noise added to the sound; when set to Ring, it sets the amount of the output from the Ring Modulator circuit is added (the inputs to the Ring Modulator are Osc 1 and Osc 2); in the Ext position, an external signal connected to the rear panel connector  can be mixed in.

by the Pulse Width control	.

Filter section:
Type – two-position switch selecting filter type: Classic configures a variable filter, whose basic characteristics may be set with the Shape and Slope switches	and
; Acid configures a 4-pole diode ladder lo-pass filter, which emulates a type of filter found on early ‘80s analogue synths.
Shape – three-position switch; with Type set to Classic, sets the filter characteristic to be lo-pass (LP), band-pass (BP) or hi-pass (HP).
Slope – two-position switch; with Type set to Classic, sets the slope of filter beyond the passband to either 12dB or 24dB per octave.
Frequency – large rotary knob controlling the filter’s cut-off frequency (LP or HP), or its centre frequency (BP).
Resonance – adds resonance (an increased response at the filter frequency) to the filter characteristic.
Overdrive – adds a degree of pre-filter distortion to the mixer output.
Mod Env depth – controls the degree by which the filter frequency is modified by the Mod Envelope.
LFO 2 depth – controls the degree by which the filter frequency is modified by LFO 2.

Envelopes Section:
Env Select – assigns the Envelope faders [40] to vary the parameters of the Amplitude Envelope (Amp Env), Modulation Envelope (Mod Env), or both simultaneously (Amp+Mod Env).
Envelope controls – a set of four faders adjusting the standard ADSR Envelope parameters (Attack, Decay, Sustain and Release).
Triggering – three-position switch controlling how envelopes work with legato and portamento playing styles.

Arpeggiator section:
On/Legato – turns the arpeggiator on and off. Also allows notes in a recorded arp sequence to be tied, or played in a Legato style.
Latch/Rest – sets the arpeggiator to play the current pattern continuously. Also allows a musical rest to be inserted in an arp sequence. When the arpeggiator is off, the Latch/Rest button enables a Key Hold function, which simulates the effect of holding a key down continuously, until another key is pressed.
Tempo – sets the arp pattern tempo in the range 40 to 240 BPM.
Rhythm – selects one of 32 pre-defined arp rhythmic patterns. The LED display indicates the pattern number.
Arp Mode – the arp can play the notes making up the selected pattern in a variety of sequences; Arp Mode sets the sequence, and can also put the arp into Record and Play modes for patterns based on the notes actually played rather than on the pre- defined sequences.
Arp Octaves/SEQ – 4-position rotary switch setting the number of octaves over which the arp pattern plays. This control also selects one of four global sequences when Arp Mode is set to Play or Record.

Portamento section:
Glide Time – sets the portamento glide time; with the control fully anticlockwise, portamento is ‘off’.

Effects section:
Distortion – controls the amount of post-filter distortion added to the synth output.
Osc Filter Mod - allows the filter frequency to be modulated directly by Oscillator 2.

**GPT:** Here are several detailed prompt examples you can try with Stable Audio. They incorporate elements inspired by the Novation Bass Station’s hardware, from its dual oscillators to its vintage filter design and dynamic performance controls:

---

**Prompt 1: Classic Analog Bass Synthesis**

*“Generate a rich, analog bass sound inspired by the Novation Bass Station II. Use a dual oscillator setup with Oscillator 1 set to a warm sawtooth waveform and Oscillator 2 to a narrow pulse wave, featuring pulse width modulation controlled by both envelope and LFO. Add a sub-octave sine layer for extra low-end depth. Route the sound through an acid 4-pole diode ladder low-pass filter with adjustable resonance and overdrive for vintage grit. Incorporate dynamic modulation via velocity-sensitive aftertouch and pitch wheel sweeps to create expressive tonal shifts.”*

---

**Prompt 2: Evolving Textured Bassscape**

*“Craft an evolving bass sound that blends analog warmth with modern modulation. Start with two oscillators: one delivering a classic sawtooth tone with coarse and fine tuning, and the other offering a pulse waveform with variable pulse width (using manual control and envelope/LFO modulation). Introduce a swirling LFO that modulates both pitch and filter cutoff, using adjustable delay and sync modes for a rhythmic pulse. Apply a classic filter in low-pass mode (or even band-pass for a different character), enhanced by added resonance and subtle distortion. Finally, layer in controlled white noise and ring modulation for extra texture and movement.”*

---

**Prompt 3: Arpeggiated Analog Groove**

*“Design an arpeggiated sequence inspired by the expressive performance of the Bass Station II. Emulate a 25-note, velocity-sensitive keyboard with aftertouch and use a programmed arp pattern across 4 octaves at 120 BPM. Use dual oscillators (a sawtooth and a pulse wave) with sync capability, and modulate the pitch with a finely tuned glide/portamento effect. Route the signal through a classic analog filter with selectable modes (lo-pass, band-pass, or hi-pass) and adjustable slope (12dB/24dB) to add character. Incorporate envelope modulation on both amplitude and filter frequency to accentuate the rhythmic movement and dynamic interplay.”*

---

Feel free to adjust details such as waveform types, modulation depths, filter settings, and envelope characteristics to best suit your creative vision. Enjoy crafting your stunning audio!

**Mike:** here is the user guide from stable audio to guide your prompt creation :  Get more from your audio creations by adding structure to your prompts.

There are a few ways you can structure your prompts using Format, Genre, Sub-genre, Instruments, Moods, BPM and Styles.

First, you need to think about what you want to create. For example, to create a single drum stem, start your prompt with ‘Format: Solo‘ and ‘Instruments: drum’.  Format
Examples:

Solo
Band
Orchestra
Chorus
Duet
Genre
Examples:

Rock
Pop
Hip Hop
Indie
Foley
RnB
Sub-genre
Examples:

Drum loops
Electric guitar
Pop Music
Chillout
Ambient
Techno
Instruments
Examples:

Piano
Drum machine
Synthesizer
Snare drum
Keyboard
Organ
Strings
Percussion
Ukelele
Moods
Examples:

Dramatic
Inspiring
Magical
Uplifting
Driving
Animated
Tag
Atmospheric
Happy
Styles
Examples:

Film Instrumental
2000s
1960s
Dance
Video Games
High Tech
Sci-Fi
Tempo
Examples:

Medium
Slow
Building
Fast
Very Fast
BPM
Examples:

180
e.g. Drum and bass
140
e.g. Dubstep
120
e.g. Techno/trance
100
e.g. House
180
e.g. Hip-hop
60
e.g. Dub
Example of different prompt structures:
Prompt structures
5
3
Examples
There are a lot of variations to made to each element when searching for the right sound.

Take format, for example. For a stem, set the format to ‘Solo’ or for full melody or instrumental, set the format to ‘Band’.  
Format: Solo | Instruments: Vibraphone

2
Format: Solo | Genre: Pop | Atmospheric guitar

3
Format: Solo | Instruments: Drums, Bass, 808 bass stabs | Moods: Euphoric, Feel-Good | BPM: 100

Band = Full melodies and instrumentals
1
Format: Band | Genre: Pop | Subgenre: Energizing Music

2
Format: Band | Genre: Rock | Subgenre: Indie Rock | Instruments: echoing electric guitars with chorus, well recorded drum-kit, Electric Bass, occasional soaring harmonies | Moving, Epic, Climactic| BPM: 125

3
Format: Band | Genre: Drum & Bass | Subgenre: Liquid D&B | Instruments: Sustained Piano, Reese Bass, Vocal Chops, Drum Kit, Brass Hits | Moods: Spacious, Atmospheric, Ethereal | BPM: 170

Genre and subgenre
1
Genre: UK Bass | Instruments: 707 Drum Machine, Strings, 808 bass stabs, Beautiful Synths

2
Genre: Rock | Subgenre: Pop Rock, Indie Rock | Instruments: Guitar, Drum Kit, Bass, Electric Guitar | Moods: Driving, Strong, Edgy | Tempo: Medium

3
Genre: Hip Hop | Subgenre: Hip Hop Instrumental, Lo-Fi | Instruments: Drum Machine, Synthesizer, Synth stabs, Bass | Moods: Groovy, Mystical, Up-lifting, Flowing | BPM: 90

4
Genre: Pop | Subgenre: Electronic | Instruments: Drum Machine, Bass, Lush Synthesizer Pads, Synthesizer Arp, Synth Bass | Moods: Honest, Heart-Felt, Melancholic, Vibe, Cool, Modern | BPM: 120

Simple to complex prompts
Simple to complex
5
4
Examples
You can make a prompt as simple or complex as you like. Simple prompts are good for clean output audio. Complex prompts are good for adding texture and depth to the output audio.

Simple
1
Format: Solo | Instruments: Drums

2
Format: Band | Subgenre: Chillout | Moods: Vintage, Soul

3
Format: Solo | Instruments: beautiful piano arpeggio

Medium
1
Instruments: synthesizer arpeggio, beautiful rhodes piano chords and melodies, epic sweeping string section, syncopated percussion | Moods: mysterious, mystical, climactic, atmospheric

2
Format: Orchestra | Subgenre: Hollywood Orchestral Epic | Instruments: Brass section, Piano, Bass, Vocal Chops, Strings | Moods: Spacious, Atmospheric, Ethereal

3
Format: Band | Subgenre: Soulful Boom Bap Hip Hop | Instruments: solemn effected piano, SP-1200, low-key swing drums, sine wave bass | Moods: characterful, peaceful, Interesting, well-arranged composition | 90 BPM

4
Format: Band | Subgenre: Post Rock | Instruments: echoing electric guitars with chorus, well recorded drum-kit, electric bass, occasional soaring harmonies | Moods: moving, epic, climactic | 125 BPM

Complex
1
Format: Orchestra | Subgenre: Hollywood Orchestral Epic | Instruments: Strings, Drum Kit, Electric Bass, Choir, String Section, Flute, Harp, | Moods: Atmospheric, Spacious, cinematic, Inspiring, Beautiful | Styles: Recording, Auditorium, Film Instrumental | Tempo: Medium

2
Genre: Hip Hop | Subgenre: 70s Vintage Funk | Instruments: Hip Hop instrumental, Solemn effected Piano, SP-1200, low-key swing drums, sine wave bass, MPC Drums, Moog Synthesizer Lead, Rhodes Piano, Vintage Drum Machine, Short 808 Kick Stabs for Bass, Brass Stabs, String Section | Moods: Inspiring, Beautiful, Up-lifting, Epic, Flowing | BPM: 90

3
Genre: Trap | Styles: well arranged | Instruments: tap delay marimba arp, Shaker, Rim shot, 808 Kick, Syncopated Percussion, lush synthesizer pads, reverberating bongos, modular synth arp, granular synthesized | Moods: Ethereal, Transcendent, Atmospheric, Hypnotic | BPM: 130 

It’s best to separate the prompt structure with a ‘|’.
Example: Format: Solo | Instruments: drum.

Prompt elements
Prompt areas
5
2
Areas
Here’s an overview of the elements you can describe when creating a prompt. We’ve found that structuring your prompt around these elements help improve outputs.

**GPT:** Below are three prompt examples that fuse the powerful features of the Novation Bass Station with Stable Audio’s structured prompt style. You can tweak these examples to suit your creative vision:

---

**Example 1 – Simple Analog Bass Sound**  
Format: Solo | Genre: Electronic | Subgenre: Vintage Analog  
Instruments: Dual Oscillator Synth (Sawtooth & Pulse with PWM), Sub-Octave Sine, Analog Filter  
Moods: Bold, Expressive, Gritty

---

**Example 2 – Evolving Synth Texture**  
Format: Solo | Genre: Electronic | Subgenre: Ambient Synthscape  
Instruments: Dual Oscillator Synth (Sawtooth and Pulse with Envelope & LFO modulation), Sub-Octave Layer, Variable Analog Filter (LP/BP/HP modes), Noise and Ring Modulation Accents  
Moods: Atmospheric, Hypnotic, Dynamic | BPM: 120

---

**Example 3 – Retro-Futuristic Bass Synthesis (Complex)**  
Format: Band | Genre: Synthwave | Subgenre: Retro-Futuristic Bass  
Instruments: Novation Bass Station-inspired Synth (25-note aftertouch keyboard emulation, dual oscillators with coarse/fine tuning, pulse width modulation via envelope & LFO, acid diode ladder filter with selectable slope, LFO-modulated pitch/filter sweeps, expressive portamento)  
Moods: Cinematic, Driving, Nostalgic, Energetic | BPM: 110 | Styles: 1980s, High Tech

---

Feel free to adjust any elements to perfectly capture the stunning audio you envision!

**Mike:** 1
Text-to-audio is how you communicate with the Stable Audio models via text.

2
The generative AI model will output audio based on the natural language instructions you give it.

3
The Stable Audio model performs best when you give it musical descriptions based on genre, sub-genre, mood and instrument type.

4
The input text is called a ‘prompt’.

Text prompt
3
2
Prompts
Below are a few basic tips on how to prompt Stable Audio. We’ve broken the prompt down into four sections.

With Stable Audio, you describe the audio you want with your text prompt, and the generative model creates an audio output for you. This is what works for us - we encourage you to experiment and find out what works for you!

Add detail
Add detail
If you have something specific in mind, include it. Genres, descriptive phrases, instruments and moods work particularly well. The more detail, the better.

For example, a detailed prompt might look something like this:

Cinematic, Soundtrack, Wild West, High Noon Shoot Out, Percussion, Whistles, Horses, Action Scene, SFX, Shaker, Guitar, Bass, Timpani, Strings, Tense, Climactic, Atmospheric, Moody

Set the mood
Set the mood
When including detail on the mood you want, try using a combination of musical and emotional terms.

Musical terms might be groovy or rhythmic. Emotional terms might be sad or beautiful.

Choose instrument
Choose instruments
We’ve found that adding adjectives to instrument names is helpful.

For example, Reverberated Guitar, Powerful Choir, or Swelling Strings.

Choose BPM
Set the BPM
Setting the beats per minute is a great way to ensure your output is the tempo you want, and can help keep it in time. The key here is to try to stick to BPM settings that are appropriate to the genre you’re generating.

For example, if you were generating a Drum and Bass track, you might want to add 170 BPM to your prompt.

Text-to-audio examples:
Full instrumentals
3
3
Audio examples
Use Stable Audio to generate full musical audio encompassing a range of instruments. Include as much detail as you can!

1
Soulful Boom Bap Hip Hop instrumental, Solemn effected Piano, SP-1200, low-key swing drums, sine wave bass, Characterful, Peaceful, Interesting, well-arranged composition, 90 BPM

2
Trance, Ibiza, Beach, Sun, 4 AM, Progressive, Synthesizer, 909, Dramatic chords, Choir, Euphoric, Nostalgic, Dynamic, Flowing

3
Post Rock, echoing electric guitars with chorus, well recorded drum-kit, Electric Bass, occasional soaring harmonies, Moving, Epic, Climactic, 125 BPM

4
Nu-Disco, funky emotional Piano, lush string quartet, well layered Drum Machine, well-arranged composition, funky G-Funk bass, Synthersizers, Modern, Club-orientated, 115 BPM

5
Synthpop, Big Reverbed Synthesizer Pad Chords, Driving Gated Drum Machine, Atmospheric, Moody, Nostalgic, Cool, Club, Striped-back, Pop Instrumental, 100 BPM

6
Post-Rock, Guitars, Drum Kit, Bass, Strings, Euphoric, Up-Lifting, Moody, Flowing, Raw, Epic, Sentimental, 125 BPM

7
Ambient Techno, meditation, Scandinavian Forest, 808 drum machine, 808 kick, claps, shaker, synthesizer, synth bass, Synth Drones, beautiful, peaceful, Ethereal, Natural, 122 BPM, Instrumental

8
Warm soft hug, comfort, low synths, twinkle, wind and leaves, ambient, peace, relaxed, water

9
Lofi hip hop beat, chillhop

10
Disco, Driving Drum Machine, Synthesizer, Bass, Piano, Guitars, Instrumental, Clubby, Euphoric, Chicago, New York, 115 BPM

11
Cyberpunk, Country Instrumental, Synthwave

12
Ambient house, 808 drum machine, 808 kick, claps, shaker, synthesizer, synth bass, modern, futuristic, Dancy, Euphoric, 125 BPM

13
Calm meditation music to play in a spa lobby

14
3/4, in 3, 3 beat, guitar, drums, bright, happy, claps

15
Cinematic synthwave

16
Trip Hop, drum kit, bass, electric guitar, bass guitar, synthesizer, cool, moody, atmospheric, dreamy, groovy, introspective, thoughtful, beautiful, well-arranged composition, expansive, epic, 85 BPM

17
Pop, pop-electronic, ballad, billboard, drum machine, bass, lush synthesizer pads, synthesizer arp, synth bass, percussion, honest, heart-felt, melancholic, vibe, cool, modern, atmospheric, well-arranged composition, 115 BPM

18
Electronica, instrumental, arcade, vintage drum machine, rhodes piano, brass stabs, inspiring, beautiful, up-lifting, epic, flowing, vibe, cool

**GPT:** Below are three updated prompt examples that combine the Novation Bass Station-inspired sound design with Stable Audio’s structured prompt style. Each prompt includes details on genre, instruments, mood, and BPM for clear guidance:

---

**Example 1 – Classic Analog Bass (Simple)**  
Format: Solo | Genre: Electronic | Subgenre: Vintage Analog  
Instruments: Dual Oscillator Synth (Warm Sawtooth & Narrow Pulse with PWM), Sub-Octave Sine, Acid Diode Ladder Filter  
Moods: Bold, Gritty, Expressive | BPM: 100

---

**Example 2 – Evolving Synth Texture (Medium)**  
Format: Solo | Genre: Ambient Electronic | Subgenre: Analog Synthscape  
Instruments: Dual Oscillator Synth (Sawtooth & Pulse with Envelope and LFO modulation), Sub-Octave Layer, Variable Analog Filter (LP/BP/HP), Subtle Noise & Ring Modulation  
Moods: Atmospheric, Hypnotic, Dynamic | BPM: 120

---

**Example 3 – Retro-Futuristic Bass Synthesis (Complex)**  
Format: Band | Genre: Synthwave | Subgenre: Retro-Futuristic Bass  
Instruments: 25-note Expressive Synth (Emulated Aftertouch Keyboard, Dual Oscillators with Coarse/Fine Tuning, Pulse Width Modulation via Envelope & LFO, Expressive Portamento), Acid 4-Pole Diode Ladder Filter (Selectable Slope and Overdrive), LFO-modulated Pitch & Filter Sweeps  
Moods: Cinematic, Driving, Nostalgic, Energetic | BPM: 110 | Styles: 1980s, High Tech

---

Feel free to adjust these prompts by adding more adjectives or tweaking parameters to perfectly capture your desired audio aesthetic!

**Mike:** more info from novation manual about synthesis :  

SYNTHESIS TUTORIAL
This section covers the general principles of electronic sound generation and processing in more detail, including references to Bass Station II’s facilities where relevant. It is recommended that this chapter is read carefully if analogue sound synthesis is an unfamiliar subject. Users familiar with this subject can skip this section and move on to the next.

To gain an understanding of how a synthesiser generates sound it is helpful to have an appreciation of the components that make up a sound, both musical and non-musical.

The only way that a sound may be detected is by air vibrating the eardrum in a regular, periodic manner. The brain interprets these vibrations (very accurately) into one of an infinite number of different types of sound.

Remarkably, any sound may be described in terms of just three properties, and all sounds
always have them. They are:
Pitch
Tone
Volume

What makes one sound different from another is the relative magnitudes of the three properties as initially present in the sound, and how the properties change over the duration of the sound.

With a musical synthesiser, we deliberately set out to have precise control over these three properties and, in particular, how they can be changed during the “lifetime” of the sound. The properties are often given different names: Volume may be referred to as Amplitude, Loudness or Level, Pitch as Frequency and Tone as Timbre.

Pitch
As stated, sound is perceived by air vibrating the eardrum. The pitch of the sound is determined by how fast the vibrations are. For an adult human, the slowest vibration perceived as sound is about twenty times a second, which the brain interprets as a bass type sound; the fastest is many thousands of times a second, which the brain interprets as a high treble type sound.


Time	Time



If the number of peaks in the two waveforms (vibrations) are counted, it will be seen that there are exactly twice as many peaks in Wave B as in Wave A. (Wave B is actually an octave higher in pitch than Wave A). It is the number of vibrations in a given period that determines the pitch of a sound. This is the reason that pitch is sometimes referred to as frequency. It is the number of waveform peaks counted during a given period of time which defines the pitch, or frequency.

Tone
Musical sounds consist of several different, related pitches occurring simultaneously.



Having shown that just three elements may define any sound, these elements now have to be related to a Musical synthesiser. It is logical that a different section of the Synthesiser ‘synthesises’ (or creates) these different elements.

One section of the synthesiser, the Oscillators, provide raw waveform signals which define the pitch of the sound along with its raw harmonic content (tone). These signals are then mixed together in a section called the Mixer, and the resulting mixture is then fed into a section called the Filter. This makes further alterations to the tone of the sound, by removing (filtering) or enhancing certain of the harmonics. Lastly, the filtered signal is fed into the Amplifier, which determines the final volume of the sound.

Oscillators	Mixer	Filter	Amplifier




Additional synthesiser sections - LFOs and Envelopes - provide further ways of altering the pitch, tone and volume of a sound by interacting with the Oscillators, Filter and Amplifier, providing changes in the character of the sound which can evolve over time. Because LFOs’ and Envelopes’ only purpose is to control (modulate) the other synthesiser sections, they are commonly known as ‘modulators’.

These various synthesiser sections will now be covered in more detail.

The Oscillators And Mixer
The Oscillator section is really the heartbeat of the synthesiser. It generates an electronic wave (which creates the vibrations when eventually fed to a loudspeaker). This Waveform is produced at a controllable musical pitch, initially determined by the note played on the keyboard or contained in a received MIDI note message. The initial distinctive tone or timbre of the waveform is actually determined by the waveform’s shape.

Many years ago, pioneers of musical synthesis discovered that just a few distinctive waveforms contained many of the most useful harmonics for making musical sounds. The names of these waves reflect their actual shape when viewed on an instrument called an oscilloscope, and they are: Sine waves, Square waves, Sawtooth waves, Triangle waves and Noise. Bass Station II’s Oscillator section can generate all these waveforms.

Each waveform shape (except Noise) has a specific set of musically-related harmonics which can be manipulated by further sections of the synthesiser.

The diagrams below show how these waveforms look on an oscilloscope, and illustrate the relative levels of their harmonics. Remember, it is the relative levels of the various harmonics present in a waveform which determine the tone of the final sound.

Sine Waves


Volume



1

The loudest is referred to as the ‘fundamental’ pitch and corresponds to the perceived note of the sound. Other pitches making up the sound which are related to the
Sine Wave
Harmonic

fundamental in simple mathematical ratios are called harmonics. The relative loudness of each harmonic as compared to the loudness of the fundamental determines the overall tone or ‘timbre’ of the sound.

Consider two instruments such as a harpsichord and a piano playing the same note on the keyboard and at equal volume. Despite having the same volume and pitch, the instruments still sound distinctly different. This is because the different note- making mechanisms of the two instruments generate different sets of harmonics; the harmonics present in a piano sound are different to those found in a harpsichord sound.
These possess just one harmonic. A sine waveform produces the “purest” sound because it only has this single pitch (frequency).

Triangle Waves



Volume




1  3  5  7


Volume
Triangle Wave
Harmonic

Volume, which is often referred to as the amplitude or loudness of the sound, is determined by how large the vibrations are. Very simply, listening to a piano from a metre away would sound louder than if it were fifty metres away.




Volume
These contain only odd harmonics. The volume of each decreases as the square of its position in the harmonic series. For example, the 5th harmonic has a volume 1/25th of the volume of the fundamental.

Sawtooth Waves








Sawtooth Wave








Volume


1	2	3	4	5
Harmonic
Ring Modulation
A Ring Modulator is a sound generator that takes signals from two oscillators and effectively “multiplies” them together. Bass Station II’s Ring Modulator uses Oscillator 1 and Oscillator 2 as inputs. The resulting output depends on the various frequencies and harmonic content present in each of the two oscillator signals, and will consist of a series of sum and difference frequencies as well as the frequencies present in the original signals.


These are rich in harmonics, and contain both even and odd harmonics of the fundamental frequency. The volume of each is inversely proportional to its position in the harmonic series.
Square / Pulse Waves


OSC 1

OSC 2



Volume







Square Wave




1	2	3	4	5
Harmonic

The Mixer
To extend the range of sounds that may be produced, typical analogue synthesisers have more than one Oscillator. By using multiple Oscillators to create a sound, it is possible to achieve very interesting harmonic mixes. It is also possible to slightly detune individual Oscillators against each other, which creates a very warm, ‘fat’ sound. Bass

These contain only odd harmonics, which are at the same volume as the odd harmonics in a
sawtooth wave.

It will be noticed that the square waveform spends an equal amount of time in its ‘high’ state as in its ‘low’ state. This ratio is known as the ‘duty cycle’. A square wave always has a duty cycle of 50% which means it is ‘high’ for half the cycle and ‘low’ for the other half. Bass Station II lets you adjust the duty cycle of the basic square waveform to produce a waveform which is more ‘rectangular’ in shape. These are often known as Pulse waveforms. As the waveform becomes more and more rectangular, more even harmonics are introduced and the waveform changes its character, becoming more ‘nasal’ sounding.

The width of the pulse waveform (the ‘Pulse Width’) can be altered dynamically by a modulator, which results in the harmonic content of the waveform constantly changing. This can give the waveform a very ‘fat’ quality when the pulse width is altered at a moderate rate.

A pulse waveform sounds the same whether the duty cycle is – for example - 40% or 60%, since the waveform is just “inverted” and the harmonic content is exactly the same.
Station II’s Mixer allows you create a sound consisting of the waveforms of Oscillators 1 and 2, the separate sub-octave oscillator, a Noise source, the Ring Modulator output and an external signal, all mixed together as required.







50%

















40%

















10%

















60%







Noise
Noise is basically a random signal, and has no one fundamental frequency (and therefore no pitch property). All frequencies are present in noise, and all have the same volume. Because it possesses no pitch, noise is often useful for creating sound effects and percussion type sounds.





Volume




1	2	3	4	5
The Filter
Bass Station II is a subtractive music synthesiser. Subtractive implies that part of the sound is subtracted somewhere in the synthesis process.

The Oscillators provide the raw waveforms with plenty of harmonic content and the Filter section subtracts some of the harmonics in a controlled manner.

7 types of Filter are available on Bass Station II; they are all variations of the three basic filter types: Low Pass, Band Pass and High Pass. The type of Filter most commonly used on synthesisers is Low Pass. On a Low Pass Filter, a “cut-off frequency” is chosen and any frequencies below this are passed, while frequencies above are filtered out, or removed. The setting of the Filter Frequency parameter dictates the point above which frequencies are removed. This process of removing harmonics from the waveforms has the effect of changing the sound’s character or timbre. When the Frequency parameter is at maximum, the filter is completely “open” and no frequencies are removed from the raw Oscillator waveforms.

In practice, there is a gradual (rather than a sudden) reduction in the volume of the harmonics above the cut-off point of a Low Pass Filter. How rapidly these harmonics reduce in volume as frequency increases above the cut-off point is determined by the Filter’s slope. The slope is measured in ‘volume units per octave’. Since volume is measured in decibels, this slope is usually quoted as so many decibels per octave (dB/ oct). The higher the number, the greater the rejection of harmonics above the cut- off point, and the more pronounced the filtering effect. Bass Station II’s filter section provides two slopes, 12 dB/oct and 24 dB/oct.

A further important parameter of the Filter is its Resonance. Frequencies at the cut-off point may be increased in volume by the Filter Resonance control. This is useful for emphasising certain harmonics of the sound.

As Resonance is increased, a whistling-like quality will be introduced to the sound passing through the filter. When set to very high levels, Resonance actually causes the filter to self-oscillate whenever a signal is being passed through it. The resulting whistling tone being produced is actually a pure sine wave, the pitch of which depends on the setting of the Frequency knob (the filter’s cut-off point). This resonance- produced sine wave can actually be used for some sounds as an additional sound source if wished.

The diagram below shows the response of a typical low pass filter. Frequencies above the cut-off point are reduced in volume.


KEY "ON"	KEY "OFF"

Cut-off Frequency


Volume
VOLUME






Frequency


When resonance is added, the frequencies around the cut off point are boosted in volume.
TIME 
A Piano note quickly attains full volume after a key is pressed, and gradually falls in volume to zero after several seconds, even if the key is held.
KEY "ON"	KEY "OFF"



VOLUME





Volume











Frequency

Cut-off Frequency




TIME 
A String Section emulation only attains full volume gradually when a key is pressed. It remains at full volume while the key is held down, but once the key is released, the volume falls to zero fairly slowly.
KEY "ON"	KEY "OFF"



VOLUME


In addition to the traditional Low Pass Filter type, there are also High Pass and Band Pass types. On Bass Station II, the Filter type is selected with the Shape switch 32 .


A High Pass Filter is similar to a Low Pass Filter, but works in the “opposite sense”, so that frequencies below the cut-off point are removed. Frequencies above the cut- off point are passed. When the Filter Frequency parameter is set to zero, the filter is completely open and no frequencies are removed from the raw Oscillator waveforms.


Cut-off Frequency
Volume

TIME 

In an analogue synthesiser, changes to a sound’s character which occur over the duration of a note are controlled by a section called an Envelope Generator. Bass Station II has two Envelope Generators; one (Amp Env) is always related to the Amplifier, which controls the note’s amplitude – i.e., the volume of the sound - when the note is played. Each envelope generator has four main controls, which are used to adjust the shape of the envelope (often referred to as the ADSR parameters).











SUSTAIN



KEY "ON"	KEY "OFF"



VOLUME


Frequency

When a Band Pass Filter is used, only a narrow band of frequencies centered around the cut- off point are passed. Frequencies above and below the band are removed. It is not possible to fully open this type of Filter, and allow all frequencies to pass.







Attack Time




TIME


ATTACK DECAY	RELEASE






Volume










Envelopes And Amplifier


Cut-off Frequency



















Frequency
Adjusts the time it takes after a key is pressed for the volume to climb from zero to full volume. It can be used to create a sound with a slow fade-in.

Decay Time
Adjusts the time it takes for the volume to fall from its initial full volume to the level set by the Sustain control while a key is held down.

Sustain Level
This is unlike the other Envelope controls in that it sets a level rather than a period of time.
It sets the volume level that the envelope remains at while the key is held down, after the Decay Time has expired.

In earlier paragraphs, the synthesis of the pitch and the timbre of a sound was described. The next part of the Synthesis Tutorial describes how the volume of the sound is controlled. The volume of a note created by a musical instrument often varies greatly over the duration of the note, according to the type of instrument.

For example, a note played on an Organ quickly attains full volume when a key is pressed. It stays at full volume until the key is released, at which point the volume level falls instantly to zero.

SIMPLIFIED BLOCK DIAGRAM




Bass Station II Block diagram


Audio flow 
Mod flow	
Sub Osc control from Osc 1





Oscillator modulation controls

Mod flow	
Sub Osc control from Osc 1

Oscillator 1	Oscillator 2
  

Release Time
Adjusts the time it takes for the volume to fall from the Sustain level to zero once the key is released. It can be used to create sounds that have a “fade-out” quality.

Most synthesisers can generate multiple envelopes. One envelope is always applied to the amplifier to shape the volume of each note played, as detailed above. Additional envelopes can be used to dynamically alter other sections of the synthesiser during the lifetime of each note. Bass Station II’s second Envelope Generator (Mod Env) can be used to modify the filter cut-off frequency, or the pulse width of the Oscillators’ Square Wave outputs.











SUSTAIN



KEY "ON"	KEY "OFF"



FILTER CUT-OFF
Imagine this very low frequency wave being applied to an Oscillator’s pitch. The result is that the pitch of the Oscillator slowly rises and falls above and below its original pitch. This would simulate, for example, a violinist moving a finger up and down the string of the instrument whilst it is being bowed. This subtle up and down movement of pitch is referred to as the ‘Vibrato’ effect.

A waveshape often used for an LFO is a Triangle wave.




PITCH


PITCH WITHOUT MODULATION




TIME










LFOs




TIME


ATTACK DECAY	RELEASE



Alternatively, if the same LFO signal were to modulate the Filter cut-off frequency instead of the Oscillator pitch, a familiar wobbling effect known as ‘wah-wah’ would be the result.

Summary
A synthesiser can be broken down into five main sound generating or sound modifying

Like the Envelope Generators, the LFO section of a synthesiser is a Modulator. Thus instead of being a part of the sound synthesis itself, it is used to change (or modulate) other sections of the synthesiser. In Bass Station II, for example, the LFOs can be used to alter Oscillator pitch, or Filter cutoff frequency.

Most musical instruments produce sounds that vary over time both in volume and in pitch and timbre. Sometimes these variations can be quite subtle, but still contribute greatly towards characterising the final sound.

Whereas an Envelope is used to control a one-off modulation over during the lifetime of a single note, LFOs modulate by using a repeating cyclic waveform or pattern. As discussed earlier, Oscillators produce a constant waveform, which can take the shape of a repeating sine wave, triangle wave etc. LFOs produce waveforms in a similar way, but normally at a frequency which is too low to produce a sound that the human ear could perceive directly. (LFO stands for Low Frequency Oscillator.) As with an Envelope, the waveforms generated by the LFOs may be fed to other parts of the synthesiser to create the desired changes over time – or ‘movements’ - to the sound. Bass Station II has two independent LFOs, which may be used to modulate different synthesiser sections and can run at different speeds.
(modulating) blocks:

Oscillators that generate waveforms at a various pitches.
A Mixer that mixes the outputs from the Oscillators together (and add Noise and other signals).
Filters that remove certain harmonics, changing the character or timbre of the sound.
An Amplifier controlled by an Envelope generator, which alters the volume of a sound over time when a note is played.
LFOs and Envelopes that can be used to modulate any of the above.

Much of the enjoyment to be had with a synthesiser is with experimenting with the factory preset sounds (Patches) and creating new ones. There is no substitute for ‘hands on‘ experience. Experiments with adjusting Bass Station II’s various controls will eventually lead to a fuller understanding of how the various synth sections alter and help shape new sounds. Armed with the knowledge in this chapter, and an understanding of what is actually happening in the synth when tweaks to the knobs and switches are made, the process of creating new and exciting sounds will become easy. Have fun!

BASS STATION II IN DETAIL
The Oscillator Section




Pulse Width
When the Oscillator waveform is set to Square/Pulse, the timbre of the “edgy” square wave sound can be modified by varying the pulse width, or duty cycle, of the waveform.


The Pulse Width modulation source switch	allows the duty cycle to be varied either
manually or automatically. When set to Manual, the Pulse Width control 19 is enabled; the parameter range is 5 to 95, where 50 corresponds to a square wave (a duty cycle of 50%). Extreme clockwise and anticlockwise settings produce very narrow positive or negative pulses, with the sound becoming thinner and more “reedy” as the control is advanced.









Bass Station II’s Oscillator section consists of two identical primary oscillators, plus a “sub-octave” oscillator which is always frequency-locked to Oscillator 1. The primary oscillators, Osc 1 and Osc 2, share a single set of controls; the oscillator being controlled is selected by the Oscillator switch 18 . After adjustments have been made to one oscillator, the other may be selected and the same controls used to adjust its contribution to the overall sound, without altering the settings of the first. You can constantly reassign the controls between the two oscillators until you get the sound you’re after.

The following descriptions thus apply equally to the two oscillators, depending which is currently selected:

Pulse width may also be modulated by either (or both) the Modulation Envelope or LFO 2, by moving switch 18 to one of its other positions. The sonic effect of LFO modulation on pulse width is very dependent on the LFO waveform and speed used, while using envelope modulation can produce some good tonal effects, with the harmonic content of the note changing over its duration.

Oscillator Sync
Oscillator Sync is a technique of using one oscillator (Osc 1 on Bass Station II) to add additional harmonics to the waveform produced another (Osc 2), by making the waveform from Osc 1 “retrigger” that of Osc 2 before a full cycle of Osc 2’s waveform has been completed. This produces an interesting range of sonic effects, the nature of which varies as the frequency of Osc 1 is altered, and is also dependent on the ratio of the two oscillators’ frequencies, as the additional harmonics may or may not be musically related to the fundamental frequency. The diagrams below illustrate the process.


Waveform
The Waveform switch


selects one of four fundamental wave shapes -  Sine,

 Triangle,  (rising) Sawtooth or  Square/Pulse. The LEDs above the switch confirm the waveform currently selected.

Pitch
The three controls Range 12 , Coarse 14 and Fine 15 set the Oscillator’s fundamental frequency (or Pitch). The Range switch is calibrated in traditional “organ-stop” units, where 16’ gives the lowest frequencies and 2’ the highest. Each doubling of stop length halves the frequency and thus transposes the keyboard pitch down one octave. When Range is set to 8’, the keyboard will be at concert pitch with Middle C in the centre. (Note that Oscillator range setting is completely independent of the keyboard’s Octave Shift function, set with the Octave buttons  ).


OSC 2








OSC 1 (LEADER)




OSC 2 (FOLLOWER)


The Coarse and Fine rotary controls adjust the pitch over a range of ±1 octave and
±1 semitone respectively. The LED display shows the number of semitones above or below concert pitch as Coarse is adjusted. When Fine is adjusted, the display shows the variation above or below concert pitch in cents, where 1 cent = 1/100 of a semitone.




In general, it is advisable to turn down the volume of Osc 1 in the Mixer section	so that you don’t hear its effect. Osc Sync is enabled by an On-Key function – Oscillator:

Modulation
The frequency of either Oscillator may be varied by modulating it with either (or both) LFO 1 or the Mod Env envelope. The two Pitch controls, LFO 1 depth 17 and Mod
Osc 1-2 sync (the higher D). The Sync 1-2 LED selected.

The Sub Oscillator
illuminates when Osc 1-2 sync is

Env depth
control the depth – or intensity – of the respective modulation sources.
In addition to the two primary oscillators, Bass Station II has a secondary “sub-octave”

Note that only one LFO – LFO 1 - is used for oscillator modulation. Oscillator pitch can be varied by up to five octaves, but the LFO 1 depth control is calibrated to give finer resolution at lower parameter values (less than ±12), as these are generally more useful for musical purposes.




Negative values of LFO 1 depth “invert” the modulating LFO waveform; the effect of this will be more obvious with non-sinusoidal LFO waveforms.

Adding LFO Modulation can add a pleasing vibrato when a sine or triangle LFO waveform is used, and the LFO speed is set neither too high nor too low. A sawtooth or square LFO waveform will produce rather more dramatic and unusual effects.

Adding envelope modulation can give some interesting effects, with the oscillator pitch altering over the duration of the note as it is played. The control is “centre-off”, the LED display shows a range of -63 to +63 as it is adjusted. With the parameter value set to maximum, the oscillator pitch will vary over eight octaves. A parameter value of 8 shifts the pitch of the oscillator by one octave for the maximum level of the modulation envelope (e.g., if sustain is at maximum). Negative values invert the sense of the pitch variation; i.e., the pitch will fall during the attack phase of the envelope if Mod Env depth has a negative setting.
oscillator, whose output can be added to that of Osc 1 and Osc 2 to create great bass sounds. The sub oscillator’s frequency is always locked to that of Osc 1, so that the pitch is either exactly one or two octaves below it, according to the setting of the Sub Oscillator Octave switch 21 .

The waveform of the sub oscillator is selectable independently of Osc 1, with the Wave
switch 22 . The options are:  sinewave,  a narrow pulse wave or a  square wave.

Both the sub oscillator switches have associated sets of LEDs to confirm the current setting. The sub oscillator output is fed to the Mixer Section where it may be added to the synth sound to the degree required.

Paraphonic Mode
The Bass Station II is at its core a monophonic synthesiser. However, enabling paraphonic mode gives you different playing possibilities. Paraphonic means you can use the two oscillators separately and track them across separate keys.

In monosynth mode, when both oscillators are turned up, they track the keyboard together, regardless of if they are detuned from each other. With paraphonic mode enabled, when you play 2 keys on the keyboard you have the ability to separate the 2 oscillators and play them individually In paraphonic mode, the 2 oscillators will still share the same amplifier and filter.

To enable paraphonic mode, hold down the function button and double tap Osc 1-2 sync. The display will change to:P-0. Use the patch value buttons to enable (P-1) or disable (P-0) paraphonic mode. Paraphonic mode can be saved per-patch. By default paraphonic mode is always off.

Oscillator Error
To create a bit more carnage it’s now possible to introduce random detune to your oscillators each time a key is pressed. The error follows a pseudo-random function, so it should be different every time you press and give you impression of an older analogue synthesiser.

To turn on oscillator error: hold the function key and press Pitch Bend Range twice. The screen will change to:E-0. Use the patch value keys to change this value from 0-7. 0 is no error, and 7 represents an error of maximum approximately 1 semitone.

Oscillator error can be saved in the patch. By default it will be 0 (no error). When in paraphonic mode the error will be different for each part.

Extended Sub-Oscillator Tuning
By default the Sub-Oscillator follows the pitch of oscillator 1. The Sub-Oscillator can now be detuned from oscillator 1 using the Coarse/Fine controls. This means all 3 oscillators can be tuned to different pitches to create interesting intervals and triad chords with single key presses.

To adjust the tuning of the Sub-Oscillator press and hold the Function key whilst adjusting the oscillator Coarse/Fine tune controls.
The Filter Section


The sum created in the mixer from the various signal sources is fed to the Filter Section. Bass Station II’s filter section is both simple and traditional, and can be configured with only a small number of single-function controls.

Filter type

When the Sub-Oscillator detune is set to 0, it will match the detune of Oscillator 1,
The Type switch
selects one of two filter styles: Classic and Acid.

which is the default.

The Mixer Section

Acid configures the filter section as a fixed-slope, 4-pole (24 dB/oct), low-pass type. Low-pass filters reject higher frequencies, so this filter setting will be suitable for many types of bass sounds. This filter type is based on the simple diode-ladder designs that were found in various analogue synths popular in the 1980s, and has a particular sonic character. When Acid is selected as the Type, the Slope and Shape switches are inoperative.

When Type is set to Classic, the filter is configured as a variable type, whose Shape

and Slope may be set with the switches
and
respectively. A low-pass (LP),

band-pass (BP) or hi-pass (HP) characteristic may be selected with Shape; Slope sets the degree of rejection applied to out-of-band frequencies; the 24 dB position gives a steeper slope than the 12 dB; an out-of-band frequency will be attenuated more severely with the steeper setting.
Frequency

Volume







Frequency


Low Pass 24 dB (Classic / Acid)





Volume
Cutoff Frequency







The outputs of the various sound sources can be mixed together in various proportions to produce the overall synth sound, using what is essentially a standard 6-into-1 mono mixer.

The two Oscillators and the sub oscillator have dedicated, fixed level controls,
Osc 1 26 , Osc 2   and Sub 28 . The other three sources – the Noise source, Ring
Frequency


Low Pass 12 dB








Cutoff Frequency

Modulator output and external input - “share” a single level control, though any mix of
the three may be used. The Noise/Ring/Ext switch 30 assigns the fourth level control
29 to one of these three sources at a time; having set the level in the mix for one of

Volume

them, you can move switch	to a different position and add that source to the mix
without altering the level of the first.



Frequency

Low Pass 24 dB (Classic / Acid) with resonance




Volume
Cutoff Frequency



Volume

Cutoff Frequency






Frequency

Low Pass 12 dB with resonance

Frequency

High Pass 12 dB






Volume
Cutoff Frequency


Frequency


Band Pass 24 dB





Volume
Cutoff Frequency









Frequency

Band Pass 12 dB




Volume
Cutoff Frequency









Frequency


High Pass 24 dB

Frequency
The large rotary Frequency control

sets the cut-off frequency of the Acid filter
The Envelopes Section
Bass Station II generates two envelopes each time a key is pressed, which can be used

type, and also of the Classic filter type when Shape is set to HP or LP. With a Classic band-pass filter configured, Frequency sets the centre frequency of the pass-band.

Sweeping the filter frequency manually will impose a “hard-to-soft” characteristic on almost any sound.
to modify the synth sound in various ways. The envelope controls are based on the familiar ADSR concept.

KEY "ON"	KEY "OFF"


Resonance
The Resonance control 36 adds gain to the signal in a narrow band of frequencies around the frequency set by the Frequency control. It can accentuate the swept-filter effect considerably. Increasing the resonance parameter is very good for enhancing modulation of the cut-off frequency, creating a very edgy sound. Increasing Resonance also accentuates the action of the Frequency control, giving it a more pronounced effect.


VOLUME








ATTACK DECAY	RELEASE


Filter modulation
The filter’s Frequency parameter may be varied automatically - or modulated, by the output of LFO 2 and/or the Modulation Envelope. Either or both methods of modulation may be used, and each has a dedicated intensity control, LFO 2 depth 37 for LFO 2
The ADSR envelope can be most easily visualised by considering the amplitude (volume) of a note over time. The envelope describing the “lifetime” of a note can be split into four distinct phases:
Attack – the time it takes for the note to increase from zero (e.g., when the key is pressed) to its maximum level. A long attack time produces a “fade-in” effect.

and Mod Env depth
for the modulation envelope. (Compare with the use of LFO 1
Decay – the time it takes for the level to drop from the maximum value reached

and Mod Env for modulating the Oscillators.)

Note that only one LFO – LFO 2 - is used for filter modulation. Filter frequency can be varied by up to eight octaves.


Negative values of LFO 2 depth “invert” the modulating LFO waveform; the effect of this will be more obvious with non-sinusoidal LFO waveforms.

Modulating the filter frequency with an LFO can produce some unusual “wah-wah” type effects. Setting LFO 2 to a very slow speed can add a gradual hardening and then softening edge to the sound.

When the filter’s action is triggered by Envelope 2, the filter action changes over the duration of the note. By adjusting the Envelope controls carefully, this can produce some very pleasing sounds, as for example, the spectral content of the sound can be made to differ considerably during the attack phase of the note compared to its “fade- out”. Mod Env depth lets you control the “depth” and “direction” of the modulation; the higher the value, the greater the range of frequencies over which the filter will sweep. With the parameter set to its maximum value, the filter frequency with vary over a range of eight octaves when Envelope 2 Sustain is set to maximum. Positive and negative values make the filter sweep in opposite directions, but the audible result of this will be further modified by the filter type in use.

Overdrive
The filter section includes a dedicated drive (or distortion) generator; the Overdrive
at the end of the attack phase to a new level, defined by the Sustain parameter.
Sustain – this is an amplitude value, and represents the volume of the note after the initial attack and decay phases – i.e., while holding the key down. Setting a low value of Sustain can give a very short, percussive effect (providing the attack and decay times are short).
Release – This is the time it takes for the note’s volume to drop back to zero after the key is released. A high value of Release will cause the sound to remain audible (though diminishing in volume) after the key is released.

Although the above discusses ADSR in terms of volume, note that Bass Station II is equipped with two separate envelope generators, referred to as Amp Env and Mod Env.

Amp Env - the amplitude envelope - is the envelope that controls the amplitude of the synth signal, and is always routed just to the VCA in the output stage (see the
Bass Station II block diagram on page 14).

Mod Env – the modulation envelope - is routed to various other sections of Bass Station II, where it can be used to alter other synth parameters over the duration of the note. These are:
Modulating the pitch of Osc 1 and Osc 2, at a degree set by the Mod Env depth control
Modulating the pulse width of Osc 1 and Osc 2’s outputs when they are set to Square/Pulse waveforms and the Pulse Width modulation source switch  is set to Mod Env
Modulating the filter frequency (when the filter is in Classic mode), at a degree set by the Mod Env depth control

control	adjusts the degree of distortion treatment applied to the signal. The drive
is added before the filter.

Adjustable Filter-Tracking
Filter tracking is when the cutoff position of the filter frequency tracks the keyboard. This allows you to control how much the Filter Cutoff is going to be tracked and allow for more natural sounds, as typically going into higher registers timbres become brighter, much like that of a filter opening and letting higher frequencies pass.

Filter tracking can now be adjusted by holding the function key and pressing the Filter Freq key twice. The display will change to: F-0 This means that filter tracking is fully on.


You can use the patch value buttons to change this value in the range 0-7, where 0 is full filter tracking and 7 is no filter tracking.

The filter tracking setting can be saved per-patch. By default it is always fully on.



Bass Station II has a dedicated slider control for each ADSR parameter. The set of sliders will adjust the envelope(s) selected by the Env Select switch 38 : the amplitude envelope, the modulation envelope, or both together.

Attack - sets the note’s attack time. With the slider at its lowest position, the note attains its maximum level immediately the key is pressed; with the slider in its uppermost position, the note takes over 5 seconds to reach its maximum level. Midway, the time is approx. 250 ms.
Decay - sets the time the note takes to decay from its initial level to that defined
by the Sustain parameter. With the slider at the mid-position, the time is approx. 150 ms.
Sustain - sets the volume of the note after the decay phase. A low Sustain value will have the effect of emphasising the start of the note; having the slider fully down will make the note inaudible when the decay time has elapsed.

**GPT:** Here are three updated prompt examples that integrate detailed synthesis concepts from the Novation Bass Station II manual. These prompts blend elements like oscillator types, pulse width modulation, envelope shaping, filter characteristics, and modulation sources, all while using Stable Audio’s structured prompt style.

---

**Example 1 – Classic Analog Sub-Bass (Simple)**  
Format: Solo | Genre: Electronic | Subgenre: Vintage Analog  
Instruments: Dual Oscillator Synth with Warm Sawtooth & Modulated Square (adjustable Pulse Width via Manual, Envelope, and LFO); Sub-Octave Sine Layer; Acid Low-Pass Filter (24 dB/oct) with Resonance & Overdrive; Classic ADSR Envelope (Quick Attack, Moderate Decay, Strong Sustain, Short Release)  
Moods: Gritty, Bold, Expressive | BPM: 100

---

**Example 2 – Evolving Synth Texture (Medium)**  
Format: Solo | Genre: Ambient Electronic | Subgenre: Evolving Synthscape  
Instruments: Dual Oscillator Synth (Sawtooth and Pulse with dynamic Pulse Width modulation using both Envelope and LFO), Oscillator Sync for added harmonic richness, Detuned Sub-Octave Sine for extra depth; Classic Filter with selectable 12/24 dB slope, adjustable Cutoff and Resonance, modulated via LFO 2 and Mod Envelope; Detailed ADSR shaping for evolving tonal character, with subtle Oscillator Error for analog unpredictability  
Moods: Atmospheric, Hypnotic, Dynamic | BPM: 120

---

**Example 3 – Retro-Futuristic Synthwave Explosion (Complex)**  
Format: Band | Genre: Synthwave | Subgenre: Retro-Futuristic Bass  
Instruments: 25-Note Expressive Synth Emulation featuring Dual Oscillators (Warm Sawtooth & Rich Pulse) with Coarse/Fine Tuning and adjustable Pulse Width (modulated by Envelope & LFO), Oscillator Sync for harmonic complexity, Extended Tuning on a Detuned Sub Oscillator for triadic intervals; Acid Diode-Ladder Filter with selectable slope (24 dB/oct), boosted Resonance, and Overdrive; Dual Envelope Generators (Amp Env and Mod Env) sculpting amplitude and filter cutoff over time; LFOs for pitch and filter modulation, plus randomized Oscillator Error for vintage character  
Moods: Cinematic, Driving, Nostalgic, Energetic | BPM: 110 | Styles: 1980s, High Tech

---

Feel free to tweak any of these elements further to match your desired sound design vision. Enjoy creating stunning audio!

**Mike:** write a prompt meant for the novation bass station using info from the manual and best practices from stable audio manual.

**GPT:** Format: Solo | Genre: Electronic | Subgenre: Retro-Futuristic Analog Bass  
Instruments: Novation Bass Station-inspired Synth featuring a 25-note aftertouch keyboard emulation, dual oscillators with a warm sawtooth and rich pulse waveform (with variable Pulse Width modulation via Envelope and LFO), detuned sub-octave sine for added depth, and oscillator sync for harmonic complexity; routed through an Acid diode-ladder low-pass filter (24 dB/oct) with adjustable Resonance and Overdrive, and sculpted by dual ADSR envelopes (Amp Env for dynamics, Mod Env for evolving filter sweeps)  
Moods: Cinematic, Driving, Nostalgic, Energetic | BPM: 110 | Styles: Synthwave, 1980s, High Tech

**Mike:** simplify this prompt :  Format: Band | Genre: Synthwave | Subgenre: Retro-Futuristic Bass
Instruments: 25-Note Expressive Synth Emulation featuring Dual Oscillators (Warm Sawtooth & Rich Pulse) with Coarse/Fine Tuning and adjustable Pulse Width (modulated by Envelope & LFO), Oscillator Sync for harmonic complexity, Extended Tuning on a Detuned Sub Oscillator for triadic intervals; Acid Diode-Ladder Filter with selectable slope (24 dB/oct), boosted Resonance, and Overdrive; Dual Envelope Generators (Amp Env and Mod Env) sculpting amplitude and filter cutoff over time; LFOs for pitch and filter modulation, plus randomized Oscillator Error for vintage character
Moods: Cinematic, Driving, Nostalgic, Energetic | BPM: 110 | Styles: 1980s, High Tech

**GPT:** Format: Band | Genre: Synthwave | Subgenre: Retro-Futuristic Bass  
Instruments: 25-note expressive synth with dual oscillators (sawtooth & pulse), adjustable pulse width via envelope & LFO, oscillator sync, detuned sub oscillator, acid low-pass filter (24 dB/oct) with boosted resonance & overdrive, dual ADSR envelopes, and LFO modulation with randomized oscillator error  
Moods: Cinematic, Driving, Nostalgic, Energetic | BPM: 110 | Styles: 1980s, High Tech
