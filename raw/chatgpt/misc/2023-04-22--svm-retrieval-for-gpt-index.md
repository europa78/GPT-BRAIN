---
title: "SVM retrieval for @gpt_index"
date: 2023-04-22
cluster: "Misc / Uncategorized"
messages: 12
source: chatgpt-export conversations.json (FULL transcript)
---

# SVM retrieval for @gpt_index

> 12 messages · 2023-04-22 · cluster: Misc / Uncategorized

**Semantic neighbors:** [[CSV Data Assistance]] · [[Adsense]] · [[Download OpenAI APIs]] · [[AI Chatbot Workflow Analysis]]

## Transcript

**Mike:** Explain: You can now use @karpathy’s SVM retrieval idea in @gpt_index (0.5.21)!

Instead of doing kNN embedding lookup, you can now fit a hyperplane to separate query from data:
- SVM
- logistic regression (s/o @dsmilkov)
- Linear regression

**GPT:** In version 0.5.21 of the @gpt_index, you can now use @karpathy's Support Vector Machine (SVM) retrieval idea to enhance search and retrieval performance. Previously, the system relied on k-Nearest Neighbors (kNN) embedding lookup to find the closest matches in the index. Now, you have more options to find relevant information by fitting a hyperplane to separate the query from the data, using various machine learning models:

1. **SVM (Support Vector Machines)**: SVM is a powerful supervised learning algorithm used for classification and regression. In this context, it can be used to find the optimal hyperplane that separates the query from the data points, ensuring the best possible match is found. This method reduces the search space and improves retrieval efficiency.

2. **Logistic Regression**: As suggested by @dsmilkov, logistic regression can also be used as an alternative to SVM. It is a statistical method for analyzing a dataset in which there are one or more independent variables that determine an outcome. In this case, logistic regression can be used to fit a linear decision boundary between the query and the data points, increasing the chances of finding relevant information.

3. **Linear Regression**: Linear regression is another supervised learning algorithm that models the relationship between a dependent variable and one or more independent variables. While it is primarily used for regression problems, it can also be adapted to classify queries and data points. By fitting a linear decision boundary, linear regression can help separate the query from the dataset and improve retrieval performance.

These alternative methods allow for more flexibility and choice in how you interact with the @gpt_index. By using different techniques to separate the query from the data, you can better tailor your search experience and retrieve more relevant information.

**Mike:** Explain this in lay man terms

**GPT:** Sure! In the newest version of a search tool called @gpt_index, they added a new way to find the information you're looking for, based on an idea by @karpathy. 

Before, the search tool would find the closest matches to your query by looking at the "neighbors" of the information you were searching for, kind of like asking people in your neighborhood for help. Now, they've introduced a few new methods that can improve how well the search tool finds what you're looking for.

1. **SVM**: Imagine you're trying to separate two groups of objects, like red and blue balls, using a flat cardboard sheet. SVM helps you find the best position for that sheet so that the groups are separated as accurately as possible. This helps the search tool find the most relevant information for your query.

2. **Logistic Regression**: This method is like trying to draw a line between the red and blue balls instead of using a cardboard sheet. It helps the search tool find a good boundary between relevant and irrelevant information.

3. **Linear Regression**: This method also involves drawing a line, but it's more focused on predicting a value rather than separating groups. However, it can still be used to help find the best matches for your query.

These new methods give you more options when searching, so you can find the information you need more accurately and efficiently.

**Mike:** Give a high level explanation with bullet points : import logging
import sys

logging.basicConfig(stream=sys.stdout, level=logging.INFO)
logging.getLogger().addHandler(logging.StreamHandler(stream=sys.stdout))

from gpt_index import GPTSimpleVectorIndex, SimpleDirectoryReader
from IPython.display import Markdown, display
INFO:numexpr.utils:Note: NumExpr detected 12 cores but "NUMEXPR_MAX_THREADS" not set, so enforcing safe limit of 8.
Note: NumExpr detected 12 cores but "NUMEXPR_MAX_THREADS" not set, so enforcing safe limit of 8.
INFO:numexpr.utils:NumExpr defaulting to 8 threads.
NumExpr defaulting to 8 threads.
/Users/jerryliu/Programming/gpt_index/.venv/lib/python3.10/site-packages/tqdm/auto.py:21: TqdmWarning: IProgress not found. Please update jupyter and ipywidgets. See https://ipywidgets.readthedocs.io/en/stable/user_install.html
  from .autonotebook import tqdm as notebook_tqdm
# load documents
documents = SimpleDirectoryReader('../paul_graham_essay/data').load_data()
index = GPTSimpleVectorIndex.from_documents(documents)
INFO:gpt_index.token_counter.token_counter:> [build_index_from_nodes] Total LLM token usage: 0 tokens
> [build_index_from_nodes] Total LLM token usage: 0 tokens
INFO:gpt_index.token_counter.token_counter:> [build_index_from_nodes] Total embedding token usage: 17617 tokens
> [build_index_from_nodes] Total embedding token usage: 17617 tokens
# save index to disk
index.save_to_disk('index_simple.json')
# load index from disk
index = GPTSimpleVectorIndex.load_from_disk('index_simple.json')
Query Index
# set Logging to DEBUG for more detailed outputs
response = index.query("What did the author do growing up?")
INFO:gpt_index.token_counter.token_counter:> [query] Total LLM token usage: 4154 tokens
> [query] Total LLM token usage: 4154 tokens
INFO:gpt_index.token_counter.token_counter:> [query] Total embedding token usage: 8 tokens
> [query] Total embedding token usage: 8 tokens
display(Markdown(f"<b>{response}</b>"))
The author grew up writing short stories, programming on an IBM 1401, and building a computer kit with a friend. He also wrote programs for a TRS-80 computer, such as games, a program to predict model rocket flight, and a word processor. He studied philosophy in college, but switched to AI and taught himself Lisp. He wrote a book about Lisp hacking and reverse-engineered SHRDLU for his undergraduate thesis. He visited Rich Draves at CMU and realized he could make art that would last. He took art classes at Harvard and applied to RISD and the Accademia di Belli Arti in Florence. He passed the entrance exam in Florence and studied painting at the Accademia, arriving at an arrangement whereby the students wouldn't require the faculty to teach anything, and in return the faculty wouldn't require the students to learn anything. He also painted still lives in his bedroom at night, using leftover scraps of canvas.

Query Index with SVM/Linear Regression

Use Karpathy's SVM-based approach. Set query as positive example, all other datapoints as negative examples, and then fit a hyperplane.

query_mode = "svm"
# query_mode = "linear_regression"
# query_mode = "logistic_regression"

# set Logging to DEBUG for more detailed outputs
response = index.query(
    "What did the author do growing up?", vector_store_query_mode=query_mode
)
display(Markdown(f"<b>{response}</b>"))
The author grew up writing short stories, programming on an IBM 1401, and building a computer kit with a friend. They also wrote programs for a TRS-80 computer, such as games, a program to predict model rocket flight, and a word processor. In college, they studied philosophy and AI, and wrote a book about Lisp hacking. They also took art classes and applied to art schools, and while a student at the Accademia, they started painting still lives in their bedroom at night. These paintings were tiny, because the room was, and because they painted them on leftover scraps of canvas, which was all they could afford at the time. They also arrived at an arrangement with the faculty whereby the students wouldn't require the faculty to teach anything, and in return the faculty wouldn't require the students to learn anything. They even had a little stove, fed with kindling, that you see in 19th century studio paintings, and a nude model sitting as close to it as possible without getting burned. The author also painted the model, while the other students spent their time chatting or occasionally trying to imitate things they'd seen in American art magazines. The model turned out to live just down the street from the author, and made a living from a

print(response.source_nodes[0].source_text)

**GPT:** Here's a high-level explanation of the code with bullet points:

1. Import necessary libraries, including logging and gpt_index modules.
2. Set up logging configuration to display information on the screen.
3. Load documents from a folder (in this case, essays by Paul Graham) into the search tool.
4. Build an index using GPTSimpleVectorIndex, which helps in searching for relevant documents.
5. Save the index to disk as a JSON file for future use.
6. Load the saved index back into the search tool.
7. Query the index with a question like "What did the author do growing up?" and display the response.
8. Try alternative methods to query the index, such as SVM, Linear Regression, and Logistic Regression.
9. Query the index again using one of these alternative methods and display the response.
10. Show the source text of the response to provide context.

This code demonstrates how to create a search index using GPTSimpleVectorIndex, save and load the index, and perform queries with different techniques.

**Mike:** What is a practical application for this

**GPT:** A practical application for this approach is building a custom search engine or information retrieval system. By using GPTSimpleVectorIndex along with different query techniques (like SVM, Linear Regression, or Logistic Regression), you can create a powerful search tool that helps users find relevant information in a given dataset quickly and efficiently.

Here's an example use case: Let's say you have a large collection of technical documents, research papers, or articles on various topics. You want to build a search tool that allows users to quickly find the most relevant documents based on their search queries.

Using the code and techniques mentioned earlier, you can:

1. Load your collection of documents into the search tool.
2. Create an index of the documents using GPTSimpleVectorIndex, which will help in searching for relevant documents.
3. Save the index to disk for future use or efficient loading.
4. Implement a user interface or API where users can input their search queries.
5. Use different query techniques like SVM, Linear Regression, or Logistic Regression to enhance search performance and find the most relevant information.
6. Display the search results to the user, with options to view the source text or explore related content.

This approach can be applied to various domains, such as technical support, academic research, legal document search, or any scenario where you need to quickly and accurately find relevant information within a large dataset.

**Mike:** What I Worked On

February 2021

Before college the two main things I worked on, outside of school, were writing and programming. I didn't write essays. I wrote what beginning writers were supposed to write then, and probably still are: short stories. My stories were awful. They had hardly any plot, just characters with strong feelings, which I imagined made them deep.

The first programs I tried writing were on the IBM 1401 that our school district used for what was then called "data processing." This was in 9th grade, so I was 13 or 14. The school district's 1401 happened to be in the basement of our junior high school, and my friend Rich Draves and I got permission to use it. It was like a mini Bond villain's lair down there, with all these alien-looking machines — CPU, disk drives, printer, card reader — sitting up on a raised floor under bright fluorescent lights.

The language we used was an early version of Fortran. You had to type programs on punch cards, then stack them in the card reader and press a button to load the program into memory and run it. The result would ordinarily be to print something on the spectacularly loud printer.

I was puzzled by the 1401. I couldn't figure out what to do with it. And in retrospect there's not much I could have done with it. The only form of input to programs was data stored on punched cards, and I didn't have any data stored on punched cards. The only other option was to do things that didn't rely on any input, like calculate approximations of pi, but I didn't know enough math to do anything interesting of that type. So I'm not surprised I can't remember any programs I wrote, because they can't have done much. My clearest memory is of the moment I learned it was possible for programs not to terminate, when one of mine didn't. On a machine without time-sharing, this was a social as well as a technical error, as the data center manager's expression made clear.

With microcomputers, everything changed. Now you could have a computer sitting right in front of you, on a desk, that could respond to your keystrokes as it was running instead of just churning through a stack of punch cards and then stopping. [1]

The first of my friends to get a microcomputer built it himself. It was sold as a kit by Heathkit. I remember vividly how impressed and envious I felt watching him sitting in front of it, typing programs right into the computer.

Computers were expensive in those days and it took me years of nagging before I convinced my father to buy one, a TRS-80, in about 1980. The gold standard then was the Apple II, but a TRS-80 was good enough. This was when I really started programming. I wrote simple games, a program to predict how high my model rockets would fly, and a word processor that my father used to write at least one book. There was only room in memory for about 2 pages of text, so he'd write 2 pages at a time and then print them out, but it was a lot better than a typewriter.

Though I liked programming, I didn't plan to study it in college. In college I was going to study philosophy, which sounded much more powerful. It seemed, to my naive high school self, to be the study of the ultimate truths, compared to which the things studied in other fields would be mere domain knowledge. What I discovered when I got to college was that the other fields took up so much of the space of ideas that there wasn't much left for these supposed ultimate truths. All that seemed left for philosophy were edge cases that people in other fields felt could safely be ignored.

I couldn't have put this into words when I was 18. All I knew at the time was that I kept taking philosophy courses and they kept being boring. So I decided to switch to AI.

AI was in the air in the mid 1980s, but there were two things especially that made me want to work on it: a novel by Heinlein called The Moon is a Harsh Mistress, which featured an intelligent computer called Mike, and a PBS documentary that showed Terry Winograd using SHRDLU. I haven't tried rereading The Moon is a Harsh Mistress, so I don't know how well it has aged, but when I read it I was drawn entirely into its world. It seemed only a matter of time before we'd have Mike, and when I saw Winograd using SHRDLU, it seemed like that time would be a few years at most. All you had to do was teach SHRDLU more words.

There weren't any classes in AI at Cornell then, not even graduate classes, so I started trying to teach myself. Which meant learning Lisp, since in those days Lisp was regarded as the language of AI. The commonly used programming languages then were pretty primitive, and programmers' ideas correspondingly so. The default language at Cornell was a Pascal-like language called PL/I, and the situation was similar elsewhere. Learning Lisp expanded my concept of a program so fast that it was years before I started to have a sense of where the new limits were. This was more like it; this was what I had expected college to do. It wasn't happening in a class, like it was supposed to, but that was ok. For the next couple years I was on a roll. I knew what I was going to do.

For my undergraduate thesis, I reverse-engineered SHRDLU. My God did I love working on that program. It was a pleasing bit of code, but what made it even more exciting was my belief — hard to imagine now, but not unique in 1985 — that it was already climbing the lower slopes of intelligence.

I had gotten into a program at Cornell that didn't make you choose a major. You could take whatever classes you liked, and choose whatever you liked to put on your degree. I of course chose "Artificial Intelligence." When I got the actual physical diploma, I was dismayed to find that the quotes had been included, which made them read as scare-quotes. At the time this bothered me, but now it seems amusingly accurate, for reasons I was about to discover.

I applied to 3 grad schools: MIT and Yale, which were renowned for AI at the time, and Harvard, which I'd visited because Rich Draves went there, and was also home to Bill Woods, who'd invented the type of parser I used in my SHRDLU clone. Only Harvard accepted me, so that was where I went.

I don't remember the moment it happened, or if there even was a specific moment, but during the first year of grad school I realized that AI, as practiced at the time, was a hoax. By which I mean the sort of AI in which a program that's told "the dog is sitting on the chair" translates this into some formal representation and adds it to the list of things it knows.

What these programs really showed was that there's a subset of natural language that's a formal language. But a very proper subset. It was clear that there was an unbridgeable gap between what they could do and actually understanding natural language. It was not, in fact, simply a matter of teaching SHRDLU more words. That whole way of doing AI, with explicit data structures representing concepts, was not going to work. Its brokenness did, as so often happens, generate a lot of opportunities to write papers about various band-aids that could be applied to it, but it was never going to get us Mike.

So I looked around to see what I could salvage from the wreckage of my plans, and there was Lisp. I knew from experience that Lisp was interesting for its own sake and not just for its association with AI, even though that was the main reason people cared about it at the time. So I decided to focus on Lisp. In fact, I decided to write a book about Lisp hacking. It's scary to think how little I knew about Lisp hacking when I started writing that book. But there's nothing like writing a book about something to help you learn it. The book, On Lisp, wasn't published till 1993, but I wrote much of it in grad school.

Computer Science is an uneasy alliance between two halves, theory and systems. The theory people prove things, and the systems people build things. I wanted to build things. I had plenty of respect for theory — indeed, a sneaking suspicion that it was the more admirable of the two halves — but building things seemed so much more exciting.

The problem with systems work, though, was that it didn't last. Any program you wrote today, no matter how good, would be obsolete in a couple decades at best. People might mention your software in footnotes, but no one would actually use it. And indeed, it would seem very feeble work. Only people with a sense of the history of the field would even realize that, in its time, it had been good.

There were some surplus Xerox Dandelions floating around the computer lab at one point. Anyone who wanted one to play around with could have one. I was briefly tempted, but they were so slow by present standards; what was the point? No one else wanted one either, so off they went. That was what happened to systems work.

I wanted not just to build things, but to build things that would last.

In this dissatisfied state I went in 1988 to visit Rich Draves at CMU, where he was in grad school. One day I went to visit the Carnegie Institute, where I'd spent a lot of time as a kid. While looking at a painting there I realized something that might seem obvious, but was a big surprise to me. There, right on the wall, was something you could make that would last. Paintings didn't become obsolete. Some of the best ones were hundreds of years old.

And moreover this was something you could make a living doing. Not as easily as you could by writing software, of course, but I thought if you were really industrious and lived really cheaply, it had to be possible to make enough to survive. And as an artist you could be truly independent. You wouldn't have a boss, or even need to get research funding.

I had always liked looking at paintings. Could I make them? I had no idea. I'd never imagined it was even possible. I knew intellectually that people made art — that it didn't just appear spontaneously — but it was as if the people who made it were a different species. They either lived long ago or were mysterious geniuses doing strange things in profiles in Life magazine. The idea of actually being able to make art, to put that verb before that noun, seemed almost miraculous.

That fall I started taking art classes at Harvard. Grad students could take classes in any department, and my advisor, Tom Cheatham, was very easy going. If he even knew about the strange classes I was taking, he never said anything.

So now I was in a PhD program in computer science, yet planning to be an artist, yet also genuinely in love with Lisp hacking and working away at On Lisp. In other words, like many a grad student, I was working energetically on multiple projects that were not my thesis.

I didn't see a way out of this situation. I didn't want to drop out of grad school, but how else was I going to get out? I remember when my friend Robert Morris got kicked out of Cornell for writing the internet worm of 1988, I was envious that he'd found such a spectacular way to get out of grad school.

Then one day in April 1990 a crack appeared in the wall. I ran into professor Cheatham and he asked if I was far enough along to graduate that June. I didn't have a word of my dissertation written, but in what must have been the quickest bit of thinking in my life, I decided to take a shot at writing one in the 5 weeks or so that remained before the deadline, reusing parts of On Lisp where I could, and I was able to respond, with no perceptible delay "Yes, I think so. I'll give you something to read in a few days."

I picked applications of continuations as the topic. In retrospect I should have written about macros and embedded languages. There's a whole world there that's barely been explored. But all I wanted was to get out of grad school, and my rapidly written dissertation sufficed, just barely.

Meanwhile I was applying to art schools. I applied to two: RISD in the US, and the Accademia di Belli Arti in Florence, which, because it was the oldest art school, I imagined would be good. RISD accepted me, and I never heard back from the Accademia, so off to Providence I went.

**GPT:** It sounds like your journey has been quite an interesting one, filled with exploration and discovery. Your early experiences with programming on the IBM 1401 and later with microcomputers like the TRS-80 sparked your passion for programming. In college, you initially planned to study philosophy but eventually switched to AI, which led you to learn Lisp.

While pursuing a PhD in computer science, you became disillusioned with the field of AI as it was practiced at the time and decided to focus on Lisp. However, your dissatisfaction with the impermanence of systems work led you to explore art. You began taking art classes at Harvard and were excited by the idea of creating something that could last, unlike software.

In an unexpected turn of events, you managed to complete your PhD dissertation in just a few weeks and graduated from your program. Simultaneously, you applied to art schools and got accepted into RISD. Your unique background and experiences have provided you with a diverse set of skills and perspectives, which will likely enrich both your programming and artistic pursuits.

**Mike:** from llama_index import GPTTreeIndex, GPTSimpleVectorIndex
from llama_index.indices.composability import ComposableGraph

...

# subindices
index1 = GPTSimpleVectorIndex.from_documents(notion_docs)
index2 = GPTSimpleVectorIndex.from_documents(slack_docs)

# tree index for routing
tree_index = ComposableGraph.from_indices(
    GPTTreeIndex, 
    [index1, index2],
    index_summaries=["summary1", "summary2"]
)

response = tree_index.query(
    "In Notion, give me a summary of the product roadmap.",
    mode="recursive",
    query_configs=...

**GPT:** This code snippet appears to be a part of a larger Python program that uses Llama Index, a library designed to work with large language models like GPT-3 to create searchable indices of documents. In this specific example, the program is creating two separate subindices from two different sets of documents, `notion_docs` and `slack_docs`.

The `index1` and `index2` subindices are created using `GPTSimpleVectorIndex.from_documents` method, which generates an index using the document embeddings from GPT-3. 

Then, a `ComposableGraph` called `tree_index` is created using the `ComposableGraph.from_indices` method. This method takes the `GPTTreeIndex` class, the subindices (`index1` and `index2`), and their respective summaries (`"summary1"` and `"summary2"`). The `ComposableGraph` allows for hierarchical querying by routing queries to the appropriate subindices.

Finally, a query is made to the `tree_index` using the `query` method with the string "In Notion, give me a summary of the product roadmap." as the query text. The `mode` parameter is set to "recursive" which means the query will be passed down the tree hierarchy, and the `query_configs` parameter allows for additional configurations to be applied to the query.

The `response` variable should contain the results of the query, in this case, a summary of the product roadmap from the Notion documents.
