---
title: "Automating ThinkorSwim Trades."
date: 2023-05-07
cluster: "Finance / Trading / Markets"
messages: 6
source: chatgpt-export conversations.json (FULL transcript)
---

# Automating ThinkorSwim Trades.

> 6 messages · 2023-05-07 · cluster: Finance / Trading / Markets

**Semantic neighbors:** [[Flowchart Optimization Discussion]] · [[Digital Marketing Proposal: Jackson Stoneworks]] · [[Finance Keywords Table.]] · [[effective social media marketing strategy]]

## Transcript

**Mike:** What are the absolute coolest, most mind-blowing,  out of the box chat GPT prompts optimized for writing a script that automates trades in think or swim .  Write the script to be compatible with the think or swim code editor .  Automate indicators like rsi, macd and 50 day moving average.  Give me 5.

**GPT:** Creating scripts that automate trades in ThinkorSwim can be an exciting endeavor. To accomplish this, you'll need to write your code using ThinkScript, which is the built-in scripting language of the ThinkorSwim platform. Here are five cool and mind-blowing script ideas that incorporate RSI, MACD, and the 50-day moving average:

1. RSI Breakout Strategy:
Automate trades based on RSI breaking out of overbought or oversold zones with a confirmation from price movement above or below the 50-day moving average.

```thinkscript
input RSI_period = 14;
input overBought = 70;
input overSold = 30;
input MA_length = 50;

def RSI = RSI(price = close, length = RSI_period);
def MA = Average(close, MA_length);
def buySignal = RSI crosses above overSold and close > MA;
def sellSignal = RSI crosses below overBought and close < MA;

plot arrowUp = buySignal;
plot arrowDown = sellSignal;
```

2. MACD Crossover with RSI Filter:
This script triggers a trade when the MACD line crosses the signal line, and the RSI is within a specific range to avoid overbought or oversold conditions.

```thinkscript
input MACD_fastLength = 12;
input MACD_slowLength = 26;
input MACD_signalLength = 9;
input RSI_period = 14;
input overBought = 70;
input overSold = 30;

def MACD = MACD(fastLength = MACD_fastLength, slowLength = MACD_slowLength, MACDLength = MACD_signalLength);
def RSI = RSI(price = close, length = RSI_period);

def buySignal = MACD > MACD_signal and RSI > overSold and RSI < overBought;
def sellSignal = MACD < MACD_signal and RSI > overSold and RSI < overBought;

plot arrowUp = buySignal;
plot arrowDown = sellSignal;
```

3. Moving Average Bounce with RSI Divergence:
Automate trades based on the price bouncing off the 50-day moving average while showing RSI divergence.

```thinkscript
input MA_length = 50;
input RSI_period = 14;
input RSI_divergenceThreshold = 5;

def MA = Average(close, MA_length);
def RSI = RSI(price = close, length = RSI_period);

def priceDifference = close - MA;
def RSIDifference = RSI - RSI[1];

def buySignal = priceDifference > 0 and priceDifference < RSIDifference * RSI_divergenceThreshold;
def sellSignal = priceDifference < 0 and priceDifference * -1 < RSIDifference * RSI_divergenceThreshold;

plot arrowUp = buySignal;
plot arrowDown = sellSignal;
```

4. Triple Confirmation: RSI, MACD, and MA
Combine RSI, MACD, and the 50-day moving average to create a triple confirmation before triggering a trade.

```thinkscript
input RSI_period = 14;
input overBought = 70;
input overSold = 30;
input MACD_fastLength = 12;
input MACD_slowLength = 26;
input MACD_signalLength = 9;
input MA_length = 50;

def RSI = RSI(price = close, length = RSI_period);
def MACD = MACD(fastLength = MACD_fastLength, slowLength = MACD_slowLength, MACDLength = MACD_signalLength);
def MA = Average(close, MA_length);

def buySignal

**Mike:** Modify the scripts to have the ability to execute orders with options contracts.

**GPT:** To modify the scripts for executing options contracts, you'll need to integrate the AddOrder function into the existing ThinkScript code. The AddOrder function allows you to specify the order type, the condition for the order, and the price at which the order should be executed. Here's how to modify the existing scripts for options contracts:

1. RSI Breakout Strategy:

```thinkscript
input RSI_period = 14;
input overBought = 70;
input overSold = 30;
input MA_length = 50;

def RSI = RSI(price = close, length = RSI_period);
def MA = Average(close, MA_length);
def buySignal = RSI crosses above overSold and close > MA;
def sellSignal = RSI crosses below overBought and close < MA;

AddOrder(OrderType.BUY_TO_OPEN, buySignal, tradeSize = 1, tickcolor = GetColor(0), arrowcolor = GetColor(0));
AddOrder(OrderType.SELL_TO_CLOSE, sellSignal, tradeSize = 1, tickcolor = GetColor(1), arrowcolor = GetColor(1));
```

2. MACD Crossover with RSI Filter:

```thinkscript
input MACD_fastLength = 12;
input MACD_slowLength = 26;
input MACD_signalLength = 9;
input RSI_period = 14;
input overBought = 70;
input overSold = 30;

def MACD = MACD(fastLength = MACD_fastLength, slowLength = MACD_slowLength, MACDLength = MACD_signalLength);
def RSI = RSI(price = close, length = RSI_period);

def buySignal = MACD > MACD_signal and RSI > overSold and RSI < overBought;
def sellSignal = MACD < MACD_signal and RSI > overSold and RSI < overBought;

AddOrder(OrderType.BUY_TO_OPEN, buySignal, tradeSize = 1, tickcolor = GetColor(0), arrowcolor = GetColor(0));
AddOrder(OrderType.SELL_TO_CLOSE, sellSignal, tradeSize = 1, tickcolor = GetColor(1), arrowcolor = GetColor(1));
```

3. Moving Average Bounce with RSI Divergence:

```thinkscript
input MA_length = 50;
input RSI_period = 14;
input RSI_divergenceThreshold = 5;

def MA = Average(close, MA_length);
def RSI = RSI(price = close, length = RSI_period);

def priceDifference = close - MA;
def RSIDifference = RSI - RSI[1];

def buySignal = priceDifference > 0 and priceDifference < RSIDifference * RSI_divergenceThreshold;
def sellSignal = priceDifference < 0 and priceDifference * -1 < RSIDifference * RSI_divergenceThreshold;

AddOrder(OrderType.BUY_TO_OPEN, buySignal, tradeSize = 1, tickcolor = GetColor(0), arrowcolor = GetColor(0));
AddOrder(OrderType.SELL_TO_CLOSE, sellSignal, tradeSize = 1, tickcolor = GetColor(1), arrowcolor = GetColor(1));
```

4. Triple Confirmation: RSI, MACD, and MA

```thinkscript
input RSI_period = 14;
input overBought = 70;
input overSold = 30;
input MACD_fastLength = 12;
input MACD_slowLength = 26;
input MACD_signalLength = 9;
input MA_length = 50;

def RSI = RSI(price = close, length = RSI_period);
def

**Mike:** how do I set up these trading strategies in TOS ? please give me a comprehensive guide

**GPT:** Setting up these trading strategies in ThinkOrSwim (TOS) involves creating a custom script using ThinkScript in the "Studies" section of the TOS platform. Here's a step-by-step guide on how to do this:

1. **Launch ThinkOrSwim:**
   Start by launching your ThinkOrSwim desktop platform.

2. **Open a Chart:**
   Click on the "Charts" tab on the top menu.

3. **Create a New Study:**
   - Right-click anywhere on the chart and select "Studies" > "Edit Studies".
   - In the "Edit Studies and Strategies" window that pops up, click the "New Study" button near the lower left corner. This will open a new window for creating a custom script.

4. **Enter the Script:**
   - In the "thinkScript Editor" window, delete any default code that may be there.
   - Copy one of the scripts provided above and paste it into the editor.
   - Make any necessary adjustments to the input parameters at the beginning of the script to match your trading preferences.

5. **Name and Save the Study:**
   - At the top of the editor window, enter a name for your study in the "Study Name" field.
   - Click "OK" to save the study. This will close the editor window and bring you back to the "Edit Studies and Strategies" window.

6. **Apply the Study to Your Chart:**
   - In the "Edit Studies and Strategies" window, you should now see your new study listed in the "Studies" section on the left side of the window.
   - Select your study and click the "Add Selected" button in the middle of the window to add it to your chart.
   - Click "OK" to close the window. You should now see your study applied to your chart.

7. **Repeat the Process for Each Strategy:**
   - If you have multiple strategies that you want to use, simply repeat this process for each one.

Please note that while these scripts will generate visual signals on your chart for when to buy or sell, they will not execute actual trades. In order to use these signals to execute trades, you would need to manually place the trades yourself based on the signals generated by the script. As of my knowledge cutoff in September 2021, automated trading is not allowed directly through the ThinkOrSwim platform due to regulatory restrictions.

Always ensure you are aware of the risks involved in trading, and consider consulting with a financial advisor or doing thorough research before implementing any new trading strategies.
