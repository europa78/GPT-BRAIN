---
title: "OpenLLaMA: Open Source Language Model"
date: 2023-06-19
cluster: "Misc / Uncategorized"
messages: 16
source: chatgpt-export conversations.json (FULL transcript)
---

# OpenLLaMA: Open Source Language Model

> 16 messages · 2023-06-19 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[2nd response email ZAP]] · [[Keyword Insights_5-17]] · [[Cubase Pro 12 Tips]] · [[AI for Web Data Collection.]]

## Transcript

**Mike:** summarize the following :  WEBSITE
DR
96
AR
21
RP
1.9B
RD
2.7M
ST
47.6M
KW
13.3M
PAGE
UR
22
RP
851
RD
353
ST
30
KW
14

Web vitals
Skip to content
Product
Solutions
Open Source
Pricing
Search
Sign in
Sign up
openlm-research
/
open_llama
Public
Code
Issues
16
Pull requests
2
Discussions
Actions
Projects
Security
Insights
openlm-research/open_llama
 1 branch
 0 tags
Latest commit
@young-geng
young-geng Update loss plot
d6a7fae
3 days ago
Git stats
 17 commits
Files
Type
Name
Latest commit message
Commit time
media
Update loss plot
3 days ago
.gitignore
Initial commit
2 months ago
LICENSE
Initial commit
2 months ago
README.md
Update loss plot
3 days ago
README.md
OpenLLaMA: An Open Reproduction of LLaMA
TL;DR: we are releasing our public preview of OpenLLaMA, a permissively licensed open source reproduction of Meta AI’s LLaMA 7B and 13B trained on the RedPajama dataset. Our model weights can serve as the drop in replacement of LLaMA in existing implementations. We also provide a smaller 3B variant of LLaMA model.

In this repo, we present a permissively licensed open source reproduction of Meta AI's LLaMA large language model. We are releasing 3B, 7B and 17B models trained on 1T tokens. We provide PyTorch and JAX weights of pre-trained OpenLLaMA models, as well as evaluation results and comparison against the original LLaMA models. Stay tuned for our updates.

PyTorch weights for Hugging Face transformers:

OpenLLaMA 3B
OpenLLaMA 7B
OpenLLaMA 13B
JAX weights for EasyLM:

OpenLLaMA 3B for EasyLM
OpenLLaMA 7B for EasyLM
OpenLLaMA 13B for EasyLM
Update 06/15/2023
We are happy to release our final 1T token version of OpenLLaMA 13B. We’ve updated the evaluation results.

For current version of OpenLLaMA models, our tokenizer is trained to merge multiple empty spaces into one before tokenization, similar to T5 tokenizer. Because of this, our tokenizer will not work with code generation tasks (e.g. HumanEval) since code involves many empty spaces. We are planning to open source long context models trained on more code data. Stay tuned.

Update 06/07/2023
We are happy to release our final 1T token version of OpenLLaMA 3B and 7B. We’ve updated the evaluation results. We are also happy to release a 600B token preview of the 13B model, trained in collaboration with Stability AI.

Update 05/22/2023
We are happy to release our 700B token checkpoint for the OpenLLaMA 7B model and 600B token checkpoint for the 3B model. We’ve also updated the evaluation results. We expect the full 1T token training run to finish at the end of this week.

Update 05/15/2023
After receiving feedback from the community, we discovered that the tokenizer of our previous checkpoint release was configured incorrectly so that new lines are not preserved. To fix this problem, we have retrained our tokenizer and restarted the model training. We’ve also observed lower training loss with this new tokenizer.

Weights Release, License and Usage
We release the weights in two formats: an EasyLM format to be use with our EasyLM framework, and a PyTorch format to be used with the Hugging Face transformers library. Both our training framework EasyLM and the checkpoint weights are licensed permissively under the Apache 2.0 license.

Loading the Weights with Hugging Face Transformers
Preview checkpoints can be directly loaded from Hugging Face Hub. Please note that it is advised to avoid using the Hugging Face fast tokenizer for now, as we’ve observed that the auto-converted fast tokenizer sometimes gives incorrect tokenizations. This can be achieved by directly using the LlamaTokenizer class, or passing in the use_fast=False option for the AutoTokenizer class. See the following example for usage.

import torch
from transformers import LlamaTokenizer, LlamaForCausalLM

model_path = 'openlm-research/open_llama_3b'
# model_path = 'openlm-research/open_llama_7b'
# model_path = 'openlm-research/open_llama_13b'

tokenizer = LlamaTokenizer.from_pretrained(model_path)
model = LlamaForCausalLM.from_pretrained(
    model_path, torch_dtype=torch.float16, device_map='auto',
)

prompt = 'Q: What is the largest animal?\nA:'
input_ids = tokenizer(prompt, return_tensors="pt").input_ids

generation_output = model.generate(
    input_ids=input_ids, max_new_tokens=32
)
print(tokenizer.decode(generation_output[0]))
For more advanced usage, please follow the transformers LLaMA documentation.

Evaluating with LM-Eval-Harness
The model can be evaluated with lm-eval-harness. However, due to the aforementioned tokenizer issue, we need to avoid using the fast tokenizer to obtain the correct results. This can be achieved by passing in use_fast=False to this part of lm-eval-harness, as shown in the example below:

tokenizer = self.AUTO_TOKENIZER_CLASS.from_pretrained(
    pretrained if tokenizer is None else tokenizer,
    revision=revision + ("/" + subfolder if subfolder is not None else ""),
    use_fast=False
)
Loading the Weights with EasyLM
For using the weights in our EasyLM framework, please refer to the LLaMA documentation of EasyLM. Note that unlike the original LLaMA model, our OpenLLaMA tokenizer and weights are trained completely from scratch so it is no longer needed to obtain the original LLaMA tokenizer and weights. Note that we use BOS (beginning of sentence) token (id=1) during training, so it is best to prepend this token for best performance during few-shot evaluation.

Dataset and Training
We train our models on the RedPajama dataset released by Together, which is a reproduction of the LLaMA training dataset containing over 1.2 trillion tokens. We follow the exactly same preprocessing steps and training hyperparameters as the original LLaMA paper, including model architecture, context length, training steps, learning rate schedule, and optimizer. The only difference between our setting and the original one is the dataset used: OpenLLaMA employs the RedPajama dataset rather than the one utilized by the original LLaMA.

We train the models on cloud TPU-v4s using EasyLM, a JAX based training pipeline we developed for training and fine-tuning large language models. We employ a combination of normal data parallelism and fully sharded data parallelism (also know as ZeRO stage 3) to balance the training throughput and memory usage. Overall we reach a throughput of over 2200 tokens / second / TPU-v4 chip for our 7B model. The training loss can be seen in the figure below.



Evaluation
We evaluated OpenLLaMA on a wide range of tasks using lm-evaluation-harness. The LLaMA results are generated by running the original LLaMA model on the same evaluation metrics. We note that our results for the LLaMA model differ slightly from the original LLaMA paper, which we believe is a result of different evaluation protocols. Similar differences have been reported in this issue of lm-evaluation-harness. Additionally, we present the results of GPT-J, a 6B parameter model trained on the Pile dataset by EleutherAI.

The original LLaMA model was trained for 1 trillion tokens and GPT-J was trained for 500 billion tokens. We present the results in the table below. OpenLLaMA exhibits comparable performance to the original LLaMA and GPT-J across a majority of tasks, and outperforms them in some tasks.

Task/Metric	GPT-J 6B	LLaMA 7B	LLaMA 13B	OpenLLaMA 7B	OpenLLaMA 3B	OpenLLaMA 13B
anli_r1/acc	0.32	0.35	0.35	0.33	0.33	0.33
anli_r2/acc	0.34	0.34	0.36	0.36	0.32	0.33
anli_r3/acc	0.35	0.37	0.39	0.38	0.35	0.40
arc_challenge/acc	0.34	0.39	0.44	0.37	0.34	0.41
arc_challenge/acc_norm	0.37	0.41	0.44	0.38	0.37	0.44
arc_easy/acc	0.67	0.68	0.75	0.72	0.69	0.75
arc_easy/acc_norm	0.62	0.52	0.59	0.68	0.65	0.70
boolq/acc	0.66	0.75	0.71	0.71	0.68	0.75
hellaswag/acc	0.50	0.56	0.59	0.53	0.49	0.56
hellaswag/acc_norm	0.66	0.73	0.76	0.72	0.67	0.76
openbookqa/acc	0.29	0.29	0.31	0.30	0.27	0.31
openbookqa/acc_norm	0.38	0.41	0.42	0.40	0.40	0.43
piqa/acc	0.75	0.78	0.79	0.76	0.75	0.77
piqa/acc_norm	0.76	0.78	0.79	0.77	0.76	0.79
record/em	0.88	0.91	0.92	0.89	0.88	0.91
record/f1	0.89	0.91	0.92	0.90	0.89	0.91
rte/acc	0.54	0.56	0.69	0.60	0.58	0.64
truthfulqa_mc/mc1	0.20	0.21	0.25	0.23	0.22	0.25
truthfulqa_mc/mc2	0.36	0.34	0.40	0.35	0.35	0.38
wic/acc	0.50	0.50	0.50	0.51	0.48	0.47
winogrande/acc	0.64	0.68	0.70	0.67	0.62	0.70
Average	0.52	0.55	0.57	0.55	0.53	0.57
We removed the task CB and WSC from our benchmark, as our model performs suspiciously high on these two tasks. We hypothesize that there could be a benchmark data contamination in the training set.

Contact
We would love to get feedback from the community. If you have any questions, please open an issue or contact us.

OpenLLaMA is developed by: Xinyang Geng* and Hao Liu* from Berkeley AI Research. *Equal Contribution

Acknowledgment
We thank the Google TPU Research Cloud program for providing part of the computation resources. We’d like to specially thank Jonathan Caton from TPU Research Cloud for helping us organizing compute resources, Rafi Witten from the Google Cloud team and James Bradbury from the Google JAX team for helping us optimizing our training throughput. We’d also want to thank Charlie Snell, Gautier Izacard, Eric Wallace, Lianmin Zheng and our user community for the discussions and feedback.

The OpenLLaMA 13B model is trained in collaboration with Stability AI, and we thank Stability AI for providing the computation resources. We’d like to especially thank David Ha and Shivanshu Purohit for the coordinating the logistics and providing engineering support.

Reference
If you found OpenLLaMA useful in your research or applications, please cite using the following BibTeX:

@software{openlm2023openllama,
  author = {Geng, Xinyang and Liu, Hao},
  title = {OpenLLaMA: An Open Reproduction of LLaMA},
  month = May,
  year = 2023,
  url = {https://github.com/openlm-research/open_llama}
}
@software{together2023redpajama,
  author = {Together Computer},
  title = {RedPajama-Data: An Open Source Recipe to Reproduce LLaMA training dataset},
  month = April,
  year = 2023,
  url = {https://github.com/togethercomputer/RedPajama-Data}
}
@article{touvron2023llama,
  title={Llama: Open and efficient foundation language models},
  author={Touvron, Hugo and Lavril, Thibaut and Izacard, Gautier and Martinet, Xavier and Lachaux, Marie-Anne and Lacroix, Timoth{\'e}e and Rozi{\`e}re, Baptiste and Goyal, Naman and Hambro, Eric and Azhar, Faisal and others},
  journal={arXiv preprint arXiv:2302.13971},
  year={2023}
}
About
OpenLLaMA, a permissively licensed open source reproduction of Meta AI’s LLaMA 7B trained on the RedPajama dataset

Resources
 Readme
License
 Apache-2.0 license
Stars
 4.6k stars
Watchers
 116 watching
Forks
 186 forks
Report repository
Contributors
3
@young-geng
young-geng Xinyang (Young) Geng
@lhao499
lhao499 Hao Liu
@mjul
mjul Martin Jul
Footer
© 2023 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

**GPT:** The provided text appears to be from the GitHub page of a project called OpenLLaMA, developed by Xinyang Geng and Hao Liu from Berkeley AI Research. OpenLLaMA is an open-source reproduction of Meta AI’s LLaMA large language model, and it's trained on the RedPajama dataset. The project offers 3B, 7B, and 13B models trained on 1 trillion tokens. The weights of these models can be used with PyTorch and JAX, and they are provided in two formats: an EasyLM format for the EasyLM framework, and a PyTorch format for the Hugging Face transformers library.

The OpenLLaMA models have been evaluated on a wide range of tasks using lm-evaluation-harness, and they exhibit comparable performance to the original LLaMA and GPT-J across a majority of tasks, and outperform them in some tasks. The developers have also noted some issues with the tokenizer and have plans to open source long context models trained on more code data.

The training of the OpenLLaMA models was done on cloud TPU-v4s using EasyLM, a JAX based training pipeline developed for training and fine-tuning large language models. The training process used a combination of normal data parallelism and fully sharded data parallelism (also known as ZeRO stage 3) to balance the training throughput and memory usage.

The project is licensed under the Apache 2.0 license and encourages feedback from the community. It acknowledges the Google TPU Research Cloud program, the Google Cloud team, the Google JAX team, and Stability AI for their contributions.

**GPT:** It seems like you didn't ask a question or provide any instructions in your last message. How can I assist you further?

**Mike:** can I make api calls to this new LLM ?

**GPT:** The text provided does not explicitly mention the availability of an API for the OpenLLaMA models. However, the models are open-source and the weights are available for use with the PyTorch and JAX libraries. This means you can download the model weights and use them locally in your own applications.

If you want to use the models in a way that resembles making API calls, you could consider setting up a server that loads the models and exposes endpoints for making predictions. This would involve using a web framework (like Flask or FastAPI in Python) to create an API that loads the model and uses it to make predictions based on incoming requests.

Remember that running large language models can require significant computational resources, so you'll need to ensure that your server is suitably equipped to handle the load.

If you're looking for a ready-made API, you might want to check the project's GitHub page or get in touch with the developers for more information. They may have plans to offer such a service, or they might be able to suggest third-party services that provide API access to their models.

**GPT:** It seems like you didn't ask a question or provide any instructions in your last message. How can I assist you further?

**Mike:** I can use this LLM on my local machine ?

**GPT:** Yes, you can use the OpenLLaMA models on your local machine, provided your machine has the necessary computational resources. Large language models can be resource-intensive, so you'll need a machine with a good amount of RAM and a powerful GPU if you want to use the larger models.

Here's a basic example of how you might load and use one of the models using the Hugging Face Transformers library in Python:

```python
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

model_name = 'openlm-research/open_llama_3b'  # Replace with the model you want to use
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(model_name)

prompt = 'What is the largest animal?'
input_ids = tokenizer.encode(prompt, return_tensors='pt')

output = model.generate(input_ids, max_length=50, temperature=0.7)
generated_text = tokenizer.decode(output[0])

print(generated_text)
```

This code loads the model and tokenizer from the Hugging Face Model Hub, generates a response to the prompt 'What is the largest animal?', and then prints the generated text.

Remember to replace `'openlm-research/open_llama_3b'` with the name of the model you want to use. The available models are `openlm-research/open_llama_3b`, `openlm-research/open_llama_7b`, and `openlm-research/open_llama_13b`.

You'll need to have the Hugging Face Transformers library installed to run this code. You can install it with pip:

```bash
pip install transformers
```

Please note that this is a basic example and you might need to adjust the code to suit your specific needs.

**Mike:** search the web for current info about LLMA.  what is the most useful real world application for it?

**GPT:** The Large Language Model Meta AI (LLaMA) is a state-of-the-art foundational large language model developed by Meta AI. It's designed to help researchers advance their work in the field of AI. The LLaMA models range from 7B to 65B parameters and are trained on trillions of tokens. They have shown to perform well on various benchmarks, with LLaMA-13B outperforming GPT-3 (175B) on most of them.

As for real-world applications, large language models like LLaMA can be used in a variety of contexts. Here are some potential applications:

1. **Natural Language Processing (NLP)**: These models can understand, generate, and translate human languages, making them useful for tasks like text generation, translation, summarization, and more.

2. **Chatbots and Virtual Assistants**: They can be used to power conversational AI, enabling more natural and engaging interactions with users.

3. **Content Creation**: They can assist in writing articles, creating dialogue for video games, generating ideas for stories, and more.

4. **Research**: They can be used to scan and summarize large amounts of text, making it easier for researchers to find relevant information.

5. **Education**: They can be used to create interactive educational tools, providing explanations and answering questions on a wide range of topics.

Remember that while these models are powerful, they also have limitations and ethical considerations, such as the potential to generate misleading or biased content. Always use them responsibly and with an understanding of their limitations.

**GPT:** It seems like you didn't ask a question or provide any instructions in your last message. How can I assist you further?

**Mike:** can this model be trained on my own data ?

**GPT:** Yes, you can train the OpenLLaMA models on your own data. However, training large language models like OpenLLaMA requires significant computational resources, including powerful GPUs and a lot of memory. It also requires a large amount of data to achieve good performance.

Here's a high-level overview of the process:

1. **Prepare your data**: Your data should be in a format that the model can understand. For text data, this typically means a large text file or a collection of text files. You'll also need to preprocess your data to remove any unwanted elements and possibly to tokenize the text.

2. **Choose a model architecture**: The OpenLLaMA models use a transformer-based architecture. You'll need to decide on the size of the model (i.e., the number of layers and the dimensionality of the layers).

3. **Train the model**: You'll need to feed your data into the model and adjust the model's parameters to minimize the difference between the model's predictions and the actual outcomes. This is typically done using a variant of stochastic gradient descent. Training a large language model can take a long time, even on powerful hardware.

4. **Evaluate the model**: After the model has been trained, you'll need to evaluate its performance on a separate test dataset to ensure that it's able to generalize from the training data to new data.

Remember that training large language models is a complex task that requires a good understanding of machine learning principles and practices. If you're new to this area, you might want to start with smaller models and simpler tasks to build up your understanding before tackling a project like this.
