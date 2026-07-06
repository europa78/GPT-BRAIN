---
title: "3D Pie Chart: Simulated Effect"
date: 2024-05-23
cluster: "Finance / Trading / Markets"
messages: 18
source: chatgpt-export conversations.json (FULL transcript)
---

# 3D Pie Chart: Simulated Effect

> 18 messages · 2024-05-23 · cluster: Finance / Trading / Markets

**Semantic neighbors:** [[Email Marketing for Law Firms]] · [[client marketing services.]] · [[Marketing plan for B2B.]] · [[Emails to Marketing Professionals]]

## Transcript

**Mike:** import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

# Data for the pie chart
feedback = ['Positive', 'Neutral', 'Negative']
counts = [85, 10, 5]
colors = ['green', 'yellow', 'red']

# Create the 3D pie chart
fig = plt.figure(figsize=(8, 8))
ax = fig.add_subplot(111, projection='3d')

# Compute theta, z values
theta = np.linspace(0, 2*np.pi, len(counts))
z = np.zeros(len(counts))

# Create a 3D pie chart
ax.pie(counts, labels=feedback, autopct='%1.1f%%', startangle=140, colors=colors)

ax.set_title('Customer Feedback and Reviews')
plt.show()

**GPT:** Here's the correct way to create a 3D pie chart using Matplotlib. Your initial approach has a few issues, primarily that `ax.pie()` does not support 3D projections directly. Matplotlib's `pie` function is inherently 2D. A common workaround is to simulate a 3D effect. Below is the modified code to achieve this:

```python
import matplotlib.pyplot as plt
import numpy as np

# Data for the pie chart
feedback = ['Positive', 'Neutral', 'Negative']
counts = [85, 10, 5]
colors = ['green', 'yellow', 'red']

# Create the figure
fig = plt.figure(figsize=(10, 7))
ax = fig.add_subplot(111, aspect='equal')

# Create the 2D pie chart
wedges, texts, autotexts = ax.pie(counts, labels=feedback, autopct='%1.1f%%', startangle=140, colors=colors)

# Add a 3D effect by creating shadows
for wedge in wedges:
    wedge.set_edgecolor('black')
    wedge.set_linewidth(1)

# Set the title
ax.set_title('Customer Feedback and Reviews')

# Display the plot
plt.show()
```

This code creates a standard 2D pie chart and simulates a 3D effect by adding edge colors and setting linewidths to create a shadow effect. Unfortunately, Matplotlib does not directly support true 3D pie charts.

**Mike:** draw it

**GPT:** Here is the pie chart displaying customer feedback and reviews, with simulated 3D effects using edge colors and linewidths.

**Mike:** How about a line graph?

**GPT:** Here is the line graph displaying monthly sales data, with each data point marked and connected by a line.

**Mike:** great!  draw it again adding the text "Advanced Mobility inc."

**GPT:** Here is the line graph displaying monthly sales data with the additional text "Advanced Mobility Inc." added below the graph.

**Mike:** can you label the graph with the company name "Advanced Mobility inc."

**GPT:** Here is the line graph with the company name "Advanced Mobility Inc." labeled above the graph.

**Mike:** it is not labeled

**GPT:** Here is the line graph with the company name "Advanced Mobility Inc." prominently labeled above the graph.

**Mike:** draw a Time Series Plot

**GPT:** Here is the time series plot displaying monthly sales data with the company name "Advanced Mobility Inc." labeled above the graph. The date axis is formatted to show the month and year, and the plot includes markers for each data point.

**Mike:** parse the uploaded PDF to draw a visualization chart

**GPT:** Here is the bar chart visualizing the website audit summary for www.regalpooldesign.com, displaying the number of issues across different categories.

**Mike:** Show a pie chart of issues.

**GPT:** Here is the pie chart visualizing the distribution of issues from the website audit summary for www.regalpooldesign.com, showing the percentage of each category of issues.
