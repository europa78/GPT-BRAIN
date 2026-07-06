---
title: "Baby GPT as Markov Chain."
date: 2023-04-15
cluster: "Prompt Eng / GPT Building"
messages: 8
source: chatgpt-export conversations.json (FULL transcript)
---

# Baby GPT as Markov Chain.

> 8 messages · 2023-04-15 · cluster: Prompt Eng / GPT Building

**Semantic neighbors:** [[Python Pal - GPT]] · [[Canva - GPT]] · [[Personalized LinkedIn Message]] · [[Market Analyst GPT]]

## Transcript

**Mike:** Explain : This is a baby GPT with two tokens 0/1 and context length of 3, viewing it as a finite state markov chain. It was trained on the sequence "111101111011110" for 50 iterations. The parameters and the architecture of the Transformer modifies the probabilities on the arrows.

**GPT:** In this case, the baby GPT is a very simple version of a language model with only two tokens (0 and 1) and a context length of 3, meaning it can only take into account the three most recent tokens when predicting the next one. This model can be viewed as a finite state Markov chain, which is a mathematical model that represents a sequence of states and the probabilities of transitioning between them.

The training sequence for this baby GPT is "111101111011110," and it has been trained for 50 iterations. The architecture of the Transformer and the training process modify the probabilities associated with the transitions between different tokens (i.e., the arrows in the Markov chain). The objective is to learn the most likely patterns in the training sequence and predict the next token based on the previous three tokens.

Since we have a context length of 3, the model will have 2^3 = 8 possible states, representing all combinations of three tokens (000, 001, 010, 011, 100, 101, 110, 111). Each state will have two outgoing arrows representing the probability of transitioning to a new state with either a 0 or a 1 as the next token.

For example, if the current state is 110 and the baby GPT has learned that the next token is more likely to be a 1, the probability on the arrow from state 110 to 101 (with 1 as the next token) will be higher than the probability on the arrow from state 110 to 100 (with 0 as the next token).

In summary, this baby GPT with a context length of 3 and two tokens (0 and 1) can be viewed as a finite state Markov chain. The training process, involving the Transformer architecture, adjusts the probabilities on the arrows in the Markov chain based on the training sequence.

**Mike:** What is a Markov chain

**GPT:** A Markov chain is a mathematical model that describes a sequence of events, also called states, in which the probability of transitioning from one state to another depends only on the current state and not on the previous states. This property is known as the Markov property or memorylessness.

Markov chains are often represented as directed graphs, where each node represents a state, and the edges between nodes represent the transition probabilities between those states. The transition probabilities are usually represented by a matrix called the transition matrix, where each element (i, j) represents the probability of transitioning from state i to state j.

Markov chains have various applications in different fields such as physics, economics, finance, computer science, and natural language processing. They are used to model random processes, predict future states based on current information, and simulate complex systems.

In summary, a Markov chain is a stochastic model that describes a sequence of events, where the probability of transitioning from one state to another depends only on the current state. This model has numerous applications in various domains and is useful for modeling random processes and predicting future events.

**Mike:** Write  variation on this script : curl https://api.openai.com/v1/embeddings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "input": "Your text string goes here",
    "model": "text-embedding-ada-002"
  }'

**GPT:** You can modify the given `curl` script to use a different model or customize the input text. Here's a variation of the script:

```bash
curl https://api.openai.com/v1/embeddings \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -d '{
    "input": "Custom text string for embedding",
    "model": "text-embedding-custom-001"
  }'
```

In this variation, the "input" field has been changed to "Custom text string for embedding," and the "model" field has been changed to "text-embedding-custom-001." Replace the text and model names with your desired input and model identifier, and the script will request the embeddings for the provided text using the specified model.

**Mike:** Can you embed this script in a website instead of copying in text?

**GPT:** Certainly! To embed this script in a website, you can create an HTML form and use JavaScript to make an AJAX request to the API. Here's an example of how to do that:

1. Create an HTML file with a form:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Text Embedding</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="embedding.js"></script>
</head>
<body>
    <h1>Text Embedding</h1>
    <form id="embedding-form">
        <label for="input-text">Enter text:</label>
        <input type="text" id="input-text" name="input-text" required>
        <button type="submit">Get Embedding</button>
    </form>
    <pre id="embedding-result"></pre>
</body>
</html>
```

2. Create a JavaScript file named `embedding.js`:

```javascript
$(document).ready(function () {
    const OPENAI_API_KEY = 'your_api_key_here'; // Replace with your API key

    $('#embedding-form').on('submit', function (event) {
        event.preventDefault();

        const inputText = $('#input-text').val();
        const url = 'https://api.openai.com/v1/embeddings';
        const model = 'text-embedding-ada-002';

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
        };

        const data = {
            input: inputText,
            model: model,
        };

        $.ajax({
            type: 'POST',
            url: url,
            headers: headers,
            data: JSON.stringify(data),
            success: function (response) {
                $('#embedding-result').text(JSON.stringify(response, null, 2));
            },
            error: function (error) {
                console.error('Error:', error);
            },
        });
    });
});
```

Replace `'your_api_key_here'` with your actual OpenAI API key.

3. Save both the HTML and JavaScript files in the same directory and open the HTML file in a browser. Enter text in the form and click the "Get Embedding" button to make the request to the API.

Please note that this example uses jQuery for simplicity, and it is not recommended to include your API key in the client-side code for security reasons. In a production environment, it's better to create a server-side proxy to handle the API request and store the API key securely on the server.
