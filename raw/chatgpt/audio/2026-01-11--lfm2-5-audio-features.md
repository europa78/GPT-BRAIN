---
title: "LFM2.5-Audio Features"
date: 2026-01-11
cluster: "Audio / DSP / Instruments"
messages: 22
source: chatgpt-export conversations.json (FULL transcript)
---

# LFM2.5-Audio Features

> 22 messages · 2026-01-11 · cluster: Audio / DSP / Instruments

**Semantic neighbors:** [[DJ MIDI Controller UI]] · [[Social Media Image Looping]] · [[Audio Frameworks and Plugins]] · [[Sampler Architecture Overview]]

## Transcript

**Mike:** Explain what this LLM can do :[Hugging Face's logoHugging Face](https://huggingface.co/)
Please check your email address for a confirmation link
# 
[LiquidAI](https://huggingface.co/LiquidAI)
/
[LFM2.5-Audio-1.5B](https://huggingface.co/LiquidAI/LFM2.5-Audio-1.5B) 
like207
Follow
Liquid AI1.88k
[Audio-to-Audio](https://huggingface.co/models?pipeline_tag=audio-to-audio)[Safetensors](https://huggingface.co/models?library=safetensors)[English](https://huggingface.co/models?language=en)[liquid-audio](https://huggingface.co/models?other=liquid-audio)[liquid](https://huggingface.co/models?other=liquid)[lfm2](https://huggingface.co/models?other=lfm2)[audio](https://huggingface.co/models?other=audio)[lfm2-audio](https://huggingface.co/models?other=lfm2-audio)[speech-to-speech](https://huggingface.co/models?other=speech-to-speech)
arxiv:2511.23404
License:lfm1.0
[Model card](https://huggingface.co/LiquidAI/LFM2.5-Audio-1.5B)[Files
xet](https://huggingface.co/LiquidAI/LFM2.5-Audio-1.5B/tree/main)[Community
4](https://huggingface.co/LiquidAI/LFM2.5-Audio-1.5B/discussions)
- 
  - 


  - 


  - 


  - 
    - 


  - 
    - 
    - 


  - 


  - 


  - 





Liquid AI
[**Try LFM**](https://playground.liquid.ai/)•[**Documentation**](https://docs.liquid.ai/lfm)•[**LEAP**](https://leap.liquid.ai/)
# LFM2.5‑Audio-1.5B
LFM2.5-Audio-1.5B is [Liquid AI](https://www.liquid.ai/)'s updated end-to-end audio foundation model. Key improvements include a custom, LFM based audio detokenizer, `llama.cpp` compatible GGUFs for CPU inference, and better ASR and TTS performance.
LFM2.5-Audio is an end-to-end multimodal speech and text language model, and as such does not require separate ASR and TTS components. Designed with low latency and real time conversation in mind, at only 1.5 billion parameters LFM2.5-Audio enables seamless conversational interaction, achieving capabilities on par with much larger models. Our model consists of a pretrained LFM2.5 model as its multimodal backbone, along with a FastConformer based audio encoder to handle continuous audio inputs, and an RQ-transformer generating discrete tokens coupled with a lightweight audio detokenizer for audio output.
LFM2.5-Audio supports two distinct generation routines, each suitable for a set of tasks. Interleaved generation enables real-time speech-to-speech conversational chatbot capabilities, where audio generation latency is key. Sequential generation is suited for non-conversational tasks such as ASR or TTS, and allows the model to switch generated modality on the fly.
## 📄 Model details
Property
**Parameters (LM only)**
1.2B
**Audio encoder**
FastConformer (115M, [canary-180m-flash](https://huggingface.co/nvidia/canary-180m-flash))
**Backbone layers**
hybrid conv+attention
**Audio detokenizer**
[Mimi](https://huggingface.co/kyutai/mimi)-compatible, using 8 codebooks
**Context**
32,768 tokens
**Vocab size**
65,536 (text) / 2049*8 (audio)
**Precision**
bfloat16
**License**
LFM Open License v1.0
**Supported languages:** English
## 🏃 How to run LFM2.5-Audio
Install the `liquid-audio` package via `pip`
`pip install liquid-audio pip install "liquid-audio [demo]" # optional, to install demo dependencies pip install flash-attn --no-build-isolation  # optional, to use flash attention 2. Will fallback to torch SDPA if not installed `
## Gradio demo
The simplest way to get started is by running the Gradio demo interface. After installation, run the command
`liquid-audio-demo `
This will start a webserver on port 7860. The interface can then be accessed via the URL [http://localhost:7860/](http://localhost:7860/).
## Multi-turn, multi-modal chat
The `liquid-audio` library provides a lower lever interface to the model and generation routines, ideal for custom usecases. We demonstrate this with a simple multi-turn chat, where the first turn is given as audio, and the second turn is given as text.
For multi-turn chat with text and audio output, we use interleaved generation. The system prompt should be set to `Respond with interleaved text and audio.`. Here we use audio as the first user turn, and text as the second one.
`import torch import torchaudio from liquid_audio import LFM2AudioModel, LFM2AudioProcessor, ChatState, LFMModality  # Load models HF_REPO = "LiquidAI/LFM2.5-Audio-1.5B"  processor = LFM2AudioProcessor.from_pretrained(HF_REPO).eval() model = LFM2AudioModel.from_pretrained(HF_REPO).eval()  # Set up inputs for the model chat = ChatState(processor)  chat.new_turn("system") chat.add_text("Respond with interleaved text and audio.") chat.end_turn()  chat.new_turn("user") wav, sampling_rate = torchaudio.load("assets/question.wav") chat.add_audio(wav, sampling_rate) chat.end_turn()  chat.new_turn("assistant")  # Generate text and audio tokens. text_out: list[torch.Tensor] = [] audio_out: list[torch.Tensor] = [] modality_out: list[LFMModality] = [] for t in model.generate_interleaved(**chat, max_new_tokens=512, audio_temperature=1.0, audio_top_k=4):     if t.numel() == 1:         print(processor.text.decode(t), end="", flush=True)         text_out.append(t)         modality_out.append(LFMModality.TEXT)     else:         audio_out.append(t)         modality_out.append(LFMModality.AUDIO_OUT)  # output: Sure! How about "Handcrafted Woodworking, Precision Made for You"? Another option could be "Quality Woodworking, Quality Results." If you want something more personal, you might try "Your Woodworking Needs, Our Expertise."  # Detokenize audio, removing the last "end-of-audio" codes # Mimi returns audio at 24kHz audio_codes = torch.stack(audio_out[:-1], 1).unsqueeze(0) waveform = processor.decode(audio_codes) torchaudio.save("answer1.wav", waveform.cpu(), 24_000)  # Append newly generated tokens to chat history chat.append(     text = torch.stack(text_out, 1),     audio_out = torch.stack(audio_out, 1),     modality_flag = torch.tensor(modality_out), ) chat.end_turn()  # Start new turn chat.new_turn("user") chat.add_text("My business specialized in chairs, can you give me something related to that?") chat.end_turn()  chat.new_turn("assistant")  # Generate second turn text and audio tokens. audio_out: list[torch.Tensor] = [] for t in model.generate_interleaved(**chat, max_new_tokens=512, audio_temperature=1.0, audio_top_k=4):     if t.numel() == 1:         print(processor.text.decode(t), end="", flush=True)     else:         audio_out.append(t)  # output: Sure thing! How about “Comfortable Chairs, Crafted with Care” or “Elegant Seats, Handcrafted for You”? Let me know if you’d like a few more options.  # Detokenize second turn audio, removing the last "end-of-audio" codes audio_codes = torch.stack(audio_out[:-1], 1).unsqueeze(0) waveform = processor.decode(audio_codes) torchaudio.save("answer2.wav", waveform.cpu(), 24_000) `
### ASR, TTS, additional information
Please visit the `liquid-audio` [package repository](https://github.com/Liquid4All/liquid-audio) for additional examples and sample audio snippets.
## 📈 Performance
### VoiceBench (audio input)
Higher is better. AlpacaEval, CommonEval and WildVoice are scored out of 5.
Model
Components & Size
AlpacaEval
CommonEval
WildVoice
SD-QA
MMSU
OBQA
BBH
IFEval
ADVBench
Overall
LFM2.5-Audio-1.5B
1.5B parameters
3.76
3.53
3.15
30.92
33.04
44.40
49.54
28.48
99.04
54.92
LFM2-Audio-1.5B
1.5B parameters
3.71
3.49
3.17
30.56
31.95
44.40
30.54
31.23
97.31
52.77
Moshi
7B parameters
2.01
1.60
1.30
15.64
24.04
25.93
47.40
10.12
44.23
29.51
Qwen2.5-Omni-3B
5B parameters
3.72
3.51
3.42
44.94
55.29
76.26
61.30
32.90
88.46
63.57
Mini-Omni2
0.6B parameters
2.32
2.18
1.79
9.31
24.27
26.59
46.40
11.56
57.50
33.49
### ASR
Word Error Rate (WER), lower is better.
Model
Components & Size
Audio output
Open
WER average
AMI
Earnings22
GigaSpeech
LibriSpeech-clean
LibriSpeech-other
SPGISpeech
TED-LIUM
VoxPopuli
LFM2.5-Audio-1.5B
1.5B parameters
Yes
Yes
7.53
15.63
14.56
10.47
1.95
4.30
2.76
3.47
7.13
LFM2-Audio-1.5B
1.5B parameters
Yes
Yes
9.38
15.36
19.75
10.63
2.03
4.39
4.17
3.56
9.93
Qwen2.5-Omni-3B
5B parameters
Yes
Yes
7.90
15.05
14.81
11.76
2.14
4.52
3.24
5.08
5.60
Whisper-large-V3
1.5B parameters
No — ASR only
Yes
7.44
15.95
11.29
10.02
2.01
3.91
2.94
3.86
9.54
## 📬 Contact
If you are interested in custom solutions with edge deployment, please contact [our sales team](https://www.liquid.ai/contact).
## License
The code in this the package repository and associated weights are licensed under the [LFM Open License v1.0](https://huggingface.co/LiquidAI/LFM2.5-Audio-1.5B/blob/main/LICENSE).
The code for the audio encoder is based on [Nvidia NeMo](https://github.com/NVIDIA-NeMo/NeMo/tree/main), licensed under [Apache 2.0](https://github.com/NVIDIA-NeMo/NeMo/blob/294ddff187f68c055d87ffe9400e65975b38693d/LICENSE), and the [canary-180m-flash](https://huggingface.co/nvidia/canary-180m-flash) checkpoint, licensed under [CC-BY 4.0](https://huggingface.co/datasets/choosealicense/licenses/blob/main/markdown/cc-by-4.0.md). To simplify dependency resolution, we also ship the Python code of [Kyutai Mimi](https://github.com/kyutai-labs/moshi), licensed under the [MIT License](https://github.com/kyutai-labs/moshi/blob/aee53fc0fc0119e4d7343e5ea4dd6ddafd7f09c4/LICENSE-MIT). We also redistribute weights for [Kyutai Mimi](https://huggingface.co/kyutai/moshiko-pytorch-bf16), licensed under [CC-BY-4.0](https://huggingface.co/datasets/choosealicense/licenses/blob/main/markdown/cc-by-4.0.md).
## Citation
`@article{liquidai2025lfm2,  title={LFM2 Technical Report},  author={Liquid AI},  journal={arXiv preprint arXiv:2511.23404},  year={2025} } `
Downloads last month586
Safetensors
Model size
1B params
Tensor type
I64
·
BF16
Chat template
Files info
Inference Providers[NEW](https://huggingface.co/docs/inference-providers)
[Audio-to-Audio](https://huggingface.co/tasks/audio-to-audio)
This model isn't deployed by any Inference Provider.[🙋1Ask for provider support](https://huggingface.co/spaces/huggingface/InferenceSupport/discussions/7357)
## Model tree forLiquidAI/LFM2.5-Audio-1.5B
Base model
[LiquidAI/LFM2-1.2B](https://huggingface.co/LiquidAI/LFM2-1.2B)
Finetuned
([55](https://huggingface.co/models?other=base_model:finetune:LiquidAI/LFM2-1.2B))
this model
Finetunes
[1 model](https://huggingface.co/models?other=base_model:finetune:LiquidAI/LFM2.5-Audio-1.5B)
Quantizations
[1 model](https://huggingface.co/models?other=base_model:quantized:LiquidAI/LFM2.5-Audio-1.5B)
## Space usingLiquidAI/LFM2.5-Audio-1.5B1
[⚡
EgoisticCoderX/LiquidAI](https://huggingface.co/spaces/EgoisticCoderX/LiquidAI)
## Collection includingLiquidAI/LFM2.5-Audio-1.5B
[#### 🔈 LFM2.5-Audio
Collection
2 items•Updated 6 days ago•14](https://huggingface.co/collections/LiquidAI/lfm25-audio)
## Paper forLiquidAI/LFM2.5-Audio-1.5B
[#### LFM2 Technical Report
Paper•2511.23404•Published Nov 28, 2025•45](https://huggingface.co/papers/2511.23404)
System theme
[TOS](https://huggingface.co/terms-of-service)[Privacy](https://huggingface.co/privacy)[About](https://huggingface.co/huggingface)[Careers](https://apply.workable.com/huggingface/)[Models](https://huggingface.co/models)[Datasets](https://huggingface.co/datasets)[Spaces](https://huggingface.co/spaces)[Pricing](https://huggingface.co/pricing)[Docs](https://huggingface.co/docs)

**GPT:** **LiquidAI/LFM2.5-Audio-1.5B** is a small (1.5B-class) **end-to-end speech model** that can **listen to audio, understand it, and respond in speech and/or text**—without you wiring together separate ASR → LLM → TTS components. citeturn1view0

## What it can do (practically)
- **Real-time speech-to-speech chat (voice assistant / voice bot)**  
  You talk → it responds quickly in audio (and optionally prints text as it speaks). This is the core “low-latency conversation” use case. citeturn1view0
- **ASR (speech-to-text / transcription)**  
  Feed it audio and have it output text (useful for captions, meeting notes, call transcripts). citeturn1view0
- **TTS (text-to-speech)**  
  Feed it text and have it generate spoken audio output. citeturn1view0
- **Multi-turn, mixed-modality conversation**  
  You can alternate between audio turns and text turns across a conversation (e.g., first message is voice, second is typed text, it can still answer with voice). citeturn1view0

## The two generation modes (why you care)
- **Interleaved generation** = optimized for **live voice conversations**  
  It emits **text tokens and audio tokens in an interleaved pattern** to minimize time-to-first-audio and keep speech responsive. citeturn1view0turn0search2
- **Sequential generation** = better for **non-conversational jobs** like **pure ASR or pure TTS**  
  It’s designed for tasks where latency isn’t the only goal and where switching output modality on the fly can be useful. citeturn1view0

## Why it’s notable
- Built for **on-device / edge deployment**: the LFM2 family is explicitly designed around **CPU/edge latency and memory constraints**, aiming for fast inference on constrained hardware. citeturn0search1  
- The model card also highlights **`llama.cpp`-compatible GGUFs for CPU inference**. citeturn1view0turn0search5  
- LiquidAI’s LFM2.5 launch notes claim the audio model is substantially faster on constrained hardware (e.g., mobile/IoT). citeturn0search3

## Key constraints / caveats
- **Language:** listed as **English**. citeturn1view0  
- **Audio output format:** uses a Mimi-compatible detokenizer; example code notes output audio at **24 kHz**. citeturn1view0  
- **Hosted inference:** the Hugging Face page indicates it **isn’t deployed by an Inference Provider**, so you typically run it yourself (local/server) rather than clicking a hosted API by default. citeturn1view0

## Easiest way to try it
They provide a **`liquid-audio-demo` Gradio app** (local web UI on port 7860) after installing `liquid-audio`. citeturn1view0

If you tell me your target setup (Windows laptop CPU only? GPU? real-time phone bot? transcription pipeline?), I can translate the above into a “best fit” architecture and run-mode choice (interleaved vs sequential), plus the exact install/run steps.

**Mike:** How do I use it ?

**GPT:** You’ve basically got **3 practical ways** to use **LiquidAI/LFM2.5-Audio-1.5B** (on Windows), depending on whether you want a quick demo, Python integration, or pure CPU/`llama.cpp` style.

This model is **end-to-end speech + text** (no separate ASR + TTS pipeline), and it supports:
- **Sequential generation** for **ASR (audio→text)** and **TTS (text→audio)**  
- **Interleaved generation** for **real-time speech-to-speech chat** (low latency) citeturn1view2turn4view0  
It’s currently listed as **English** support. citeturn1view2

---

## 1) Fastest: run the local Gradio demo (recommended first)
The official docs say you can install `liquid-audio` and launch `liquid-audio-demo`, which serves a UI on port **7860**. citeturn1view2turn4view0

### Windows (PowerShell)
```powershell
# 1) Create & activate a venv
py -m venv .venv
.\.venv\Scripts\Activate.ps1

# 2) Install the package + demo deps
pip install -U pip
pip install "liquid-audio[demo]"

# 3) Start the demo
liquid-audio-demo
```

Then open:
- `http://localhost:7860/` citeturn1view2turn4view0

> If you hit PyTorch/torchaudio errors, install PyTorch + torchaudio first (CPU or CUDA build) and then re-run the `pip install "liquid-audio[demo]"`.

---

## 2) Use it in Python (ASR, TTS, or real-time speech chat)

### A) ASR (audio → text)
Official example uses **sequential generation** with system prompt **`Perform ASR.`** citeturn4view0

```python
import torchaudio
from liquid_audio import LFM2AudioModel, LFM2AudioProcessor, ChatState

HF_REPO = "LiquidAI/LFM2.5-Audio-1.5B"
processor = LFM2AudioProcessor.from_pretrained(HF_REPO).eval()
model = LFM2AudioModel.from_pretrained(HF_REPO).eval()

chat = ChatState(processor)
chat.new_turn("system")
chat.add_text("Perform ASR.")
chat.end_turn()

chat.new_turn("user")
wav, sr = torchaudio.load("my_audio.wav")
chat.add_audio(wav, sr)
chat.end_turn()

chat.new_turn("assistant")
for t in model.generate_sequential(**chat, max_new_tokens=512):
    if t.numel() == 1:
        print(processor.text.decode(t), end="", flush=True)
```
citeturn4view0

### B) TTS (text → audio)
Official example uses **sequential generation** and you pick a voice via the system prompt: citeturn4view0
- `Perform TTS. Use the US male voice.`
- `Perform TTS. Use the US female voice.`
- `Perform TTS. Use the UK male voice.`
- `Perform TTS. Use the UK female voice.`

```python
import torch
import torchaudio
from liquid_audio import LFM2AudioModel, LFM2AudioProcessor, ChatState

HF_REPO = "LiquidAI/LFM2.5-Audio-1.5B"
processor = LFM2AudioProcessor.from_pretrained(HF_REPO).eval()
model = LFM2AudioModel.from_pretrained(HF_REPO).eval()

chat = ChatState(processor)
chat.new_turn("system")
chat.add_text("Perform TTS. Use the US female voice.")
chat.end_turn()

chat.new_turn("user")
chat.add_text("Hi! This is a text to speech test.")
chat.end_turn()

chat.new_turn("assistant")
audio_out = []
for t in model.generate_sequential(**chat, max_new_tokens=512, audio_temperature=0.8, audio_top_k=64):
    if t.numel() > 1:
        audio_out.append(t)

audio_codes = torch.stack(audio_out[:-1], 1).unsqueeze(0)
waveform = processor.decode(audio_codes)
torchaudio.save("tts.wav", waveform.cpu(), 24_000)
```
The examples note Mimi-style audio returns at **24 kHz**. citeturn4view0

### C) Real-time “speech-to-speech” style chat (interleaved)
Use system prompt **`Respond with interleaved text and audio.`** and call `generate_interleaved`. citeturn1view2turn4view0

(Their repo includes a full multi-turn example you can adapt.) citeturn4view0turn1view2

---

## 3) CPU / edge route: GGUF + llama.cpp-style runners (no Python)
LiquidAI also ships a **GGUF** package with CLI + server runners (`llama-liquid-audio-cli`, `llama-liquid-audio-server`). citeturn5view0  
This is great for CPU deployments, but on Windows you’ll often do this via **WSL2** unless you have Windows binaries.

### CLI (ASR / TTS / Interleaved)
From the GGUF model page: citeturn5view0

```bash
export CKPT=/path/to/LFM2.5-Audio-1.5B-GGUF
export INPUT_WAV=/path/to/input.wav
export OUTPUT_WAV=/path/to/output.wav

# ASR
./llama-liquid-audio-cli -m $CKPT/LFM2.5-Audio-1.5B-Q4_0.gguf \
  -mm $CKPT/mmproj-LFM2.5-Audio-1.5B-Q4_0.gguf \
  -mv $CKPT/vocoder-LFM2.5-Audio-1.5B-Q4_0.gguf \
  --tts-speaker-file $CKPT/tokenizer-LFM2.5-Audio-1.5B-Q4_0.gguf \
  -sys "Perform ASR." --audio $INPUT_WAV

# TTS
./llama-liquid-audio-cli -m $CKPT/LFM2.5-Audio-1.5B-Q4_0.gguf \
  -mm $CKPT/mmproj-LFM2.5-Audio-1.5B-Q4_0.gguf \
  -mv $CKPT/vocoder-LFM2.5-Audio-1.5B-Q4_0.gguf \
  --tts-speaker-file $CKPT/tokenizer-LFM2.5-Audio-1.5B-Q4_0.gguf \
  -sys "Perform TTS." -p "Hi, how are you?" --output $OUTPUT_WAV

# Interleaved speech chat
./llama-liquid-audio-cli -m $CKPT/LFM2.5-Audio-1.5B-Q4_0.gguf \
  -mm $CKPT/mmproj-LFM2.5-Audio-1.5B-Q4_0.gguf \
  -mv $CKPT/vocoder-LFM2.5-Audio-1.5B-Q4_0.gguf \
  --tts-speaker-file $CKPT/tokenizer-LFM2.5-Audio-1.5B-Q4_0.gguf \
  -sys "Respond with interleaved text and audio." --audio $INPUT_WAV --output $OUTPUT_WAV
```

### Server mode
```bash
export CKPT=/path/to/LFM2.5-Audio-1.5B-GGUF
./llama-liquid-audio-server -m $CKPT/LFM2.5-Audio-1.5B-Q4_0.gguf \
  -mm $CKPT/mmproj-LFM2.5-Audio-1.5B-Q4_0.gguf \
  -mv $CKPT/vocoder-LFM2.5-Audio-1.5B-Q4_0.gguf \
  --tts-speaker-file $CKPT/tokenizer-LFM2.5-Audio-1.5B-Q4_0.gguf
```
They mention using a `liquid_audio_chat.py` script to talk to the server. citeturn5view0

> Note: LiquidAI notes these runners are built from a `llama.cpp` PR and are still WIP (not fully upstream). citeturn5view0

---

## If you tell me your goal, I’ll point you to the shortest path
Just reply with one of these:
1) “I want a **local speech chatbot**” (mic in → voice out)  
2) “I only need **transcription (ASR)**”  
3) “I only need **TTS**”  
4) “I want **CPU-only GGUF** on my HP Windows laptop”

**Mike:** LFM2.5-1.2B-Base.ipynb
LFM2.5-1.2B-Base.ipynb_

[4]
5s
!pip install -U transformers
Requirement already satisfied: transformers in /usr/local/lib/python3.12/dist-packages (4.57.3)
Requirement already satisfied: filelock in /usr/local/lib/python3.12/dist-packages (from transformers) (3.20.0)
Requirement already satisfied: huggingface-hub<1.0,>=0.34.0 in /usr/local/lib/python3.12/dist-packages (from transformers) (0.36.0)
Requirement already satisfied: numpy>=1.17 in /usr/local/lib/python3.12/dist-packages (from transformers) (2.0.2)
Requirement already satisfied: packaging>=20.0 in /usr/local/lib/python3.12/dist-packages (from transformers) (25.0)
Requirement already satisfied: pyyaml>=5.1 in /usr/local/lib/python3.12/dist-packages (from transformers) (6.0.3)
Requirement already satisfied: regex!=2019.12.17 in /usr/local/lib/python3.12/dist-packages (from transformers) (2025.11.3)
Requirement already satisfied: requests in /usr/local/lib/python3.12/dist-packages (from transformers) (2.32.4)
Requirement already satisfied: tokenizers<=0.23.0,>=0.22.0 in /usr/local/lib/python3.12/dist-packages (from transformers) (0.22.1)
Requirement already satisfied: safetensors>=0.4.3 in /usr/local/lib/python3.12/dist-packages (from transformers) (0.7.0)
Requirement already satisfied: tqdm>=4.27 in /usr/local/lib/python3.12/dist-packages (from transformers) (4.67.1)
Requirement already satisfied: fsspec>=2023.5.0 in /usr/local/lib/python3.12/dist-packages (from huggingface-hub<1.0,>=0.34.0->transformers) (2025.3.0)
Requirement already satisfied: typing-extensions>=3.7.4.3 in /usr/local/lib/python3.12/dist-packages (from huggingface-hub<1.0,>=0.34.0->transformers) (4.15.0)
Requirement already satisfied: hf-xet<2.0.0,>=1.1.3 in /usr/local/lib/python3.12/dist-packages (from huggingface-hub<1.0,>=0.34.0->transformers) (1.2.0)
Requirement already satisfied: charset_normalizer<4,>=2 in /usr/local/lib/python3.12/dist-packages (from requests->transformers) (3.4.4)
Requirement already satisfied: idna<4,>=2.5 in /usr/local/lib/python3.12/dist-packages (from requests->transformers) (3.11)
Requirement already satisfied: urllib3<3,>=1.21.1 in /usr/local/lib/python3.12/dist-packages (from requests->transformers) (2.5.0)
Requirement already satisfied: certifi>=2017.4.17 in /usr/local/lib/python3.12/dist-packages (from requests->transformers) (2025.11.12)
Local Inference on GPU
Model page: https://huggingface.co/LiquidAI/LFM2.5-1.2B-Base

⚠️ If the generated code snippets do not work, please open an issue on either the model repo and/or on huggingface.js 🙏


[5]
1m
# Use a pipeline as a high-level helperhelperhelperhelperhelper
from transformers import pipeline

pipe = pipeline("text-generation", model="LiquidAI/LFM2.5-1.2B-Base")
messages = [
    {"role": "user", "content": "Who are you?"},
]
pipe(messages)


[6]
30s
# Load model directly
from transformers import AutoTokenizer, AutoModelForCausalLM

tokenizer = AutoTokenizer.from_pretrained("LiquidAI/LFM2.5-1.2B-Base")
model = AutoModelForCausalLM.from_pretrained("LiquidAI/LFM2.5-1.2B-Base")
messages = [
    {"role": "user", "content": "Who are you?"},
]
inputs = tokenizer.apply_chat_template(
    messages,
    add_generation_prompt=True,
    tokenize=True,
    return_dict=True,
    return_tensors="pt",
).to(model.device)

outputs = model.generate(**inputs, max_new_tokens=40)
print(tokenizer.decode(outputs[0][inputs["input_ids"].shape[-1]:]))
I am a Liquid Foundation Model (LFM), your AI assistant for clear, helpful responses.<|im_end|>
Colab paid products - Cancel contracts here

How do I use this model
The notebook demonstrates two ways to use the LiquidAI/LFM2.5-1.2B-Base model:

Using pipeline for high-level inference: This is a convenient way to perform text generation. You define your messages, and the pipeline handles the tokenization and model generation.
Using AutoTokenizer and AutoModelForCausalLM directly: This method provides more control. You explicitly load the tokenizer and model, apply the chat template to your messages, and then use the model's generate method.
What can I help you build?
0 / 2000
Gemini 2.5 Flash
Gemini can make mistakes so double-check it and use code with caution. Learn more

**GPT:** You’re already using it correctly in Colab. The main thing to know is **what you picked**:

- **`LiquidAI/LFM2.5-1.2B-Base`** = **pretrained “base” checkpoint** (best for **fine-tuning** or raw text completion). LiquidAI says this base checkpoint is **only recommended when you plan to fine-tune heavily** (domain/language/proprietary data). citeturn1view0  
- If you want a “ChatGPT-style” assistant out of the box, use **`LiquidAI/LFM2.5-1.2B-Instruct`** (it also publishes recommended sampling params + a ChatML-like template). citeturn1view3

Below are the cleanest ways to use it.

---

## 1) Quick chat in Colab (recommended: use the Instruct model)
This keeps your exact “messages” style, but swaps the model to the instruction-tuned one.

```python
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

model_id = "LiquidAI/LFM2.5-1.2B-Instruct"  # better for chat than Base citeturn1view3

tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    device_map="auto",
    torch_dtype=torch.bfloat16,  # matches their guidance style
)

messages = [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Write a short cold email to a restaurant owner about hood cleaning."},
]

inputs = tokenizer.apply_chat_template(
    messages,
    add_generation_prompt=True,
    return_tensors="pt",
).to(model.device)

out = model.generate(
    inputs,
    max_new_tokens=200,
    temperature=0.1, top_k=50, top_p=0.1, repetition_penalty=1.05  # recommended citeturn1view3
)

print(tokenizer.decode(out[0][inputs.shape[-1]:], skip_special_tokens=True))
```

**Why this is better:** LFM2.5-Instruct is meant for multi-turn instruction following, while Base is mainly a starting point for customization. citeturn1view0turn1view3

---

## 2) If you insist on using the Base model
Use it more like a **completion model** (simple prompt → completion). The Base page describes it as a pre-trained checkpoint for fine-tuning, with 32,768 context and multilingual pretraining. citeturn1view0

```python
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

model_id = "LiquidAI/LFM2.5-1.2B-Base"  # base for fine-tuning citeturn1view0
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = AutoModelForCausalLM.from_pretrained(
    model_id,
    device_map="auto",
    torch_dtype=torch.bfloat16,
)

prompt = "Write 5 punchy subject lines for a cold email to restaurant owners about hood cleaning:\n"
inputs = tokenizer(prompt, return_tensors="pt").to(model.device)

out = model.generate(
    **inputs,
    max_new_tokens=120,
    temperature=0.7,
    top_p=0.9,
)

print(tokenizer.decode(out[0][inputs["input_ids"].shape[-1]:], skip_special_tokens=True))
```

---

## 3) Using `pipeline()` (your first approach), correctly
`pipeline` is fine for quick tests—just pass a **string prompt** for Base, or **messages** for Instruct.

```python
from transformers import pipeline
import torch

pipe = pipeline(
    "text-generation",
    model="LiquidAI/LFM2.5-1.2B-Instruct",
    device_map="auto",
    torch_dtype=torch.bfloat16,
)

messages = [{"role":"user","content":"Give me a 1-paragraph bio for a local electrician website."}]
print(pipe(messages, max_new_tokens=150)[0]["generated_text"])
```

---

## 4) Run it on CPU locally (GGUF / llama.cpp)
If you want **easy CPU inference**, LiquidAI provides a GGUF variant; the model card shows you can run it with llama.cpp like: `llama-cli -hf LiquidAI/LFM2.5-1.2B-Base-GGUF`. citeturn1view2

---

## Which one should you use?
- **Building an assistant today:** use **`LFM2.5-1.2B-Instruct`** citeturn1view3  
- **Fine-tuning on your own dataset / domain:** start from **`LFM2.5-1.2B-Base`** citeturn1view0

If you tell me your target (Colab chat bot? local Windows CPU? fine-tuning on your business data?), I’ll give you the exact “best” minimal notebook for that path.
