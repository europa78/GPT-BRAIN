---
title: "Creating ThinkScript on TOS"
date: 2026-06-29
cluster: "Coding / Dev / Infra"
messages: 2
source: chatgpt-export conversations.json (FULL transcript)
---

# Creating ThinkScript on TOS

> 2 messages · 2026-06-29 · cluster: Coding / Dev / Infra

**Semantic neighbors:** [[Python Library Overview.]] · [[Library_Script]] · [["Generating Article Analysis Script"]] · [[4-25-Python LDA Topic Modeling]]

## Transcript

**Mike:** How do I create a script on the think or swim platform?  Here is the code: 
def gapUp = FVGbullCondition and !isGapClosed and middleCandleVolatilityCondition and !isFairValueGap[1];
def GUhigh = if gapUp then low else GUhigh[1];
def GUlow = if gapUp then high[2] else GUlow[1];
def gapDown = FVGbearCondition and !isGapClosed and middleCandleVolatilityCondition and !isFairValueGap[1];
def GDhigh = if gapDown then high else GDhigh[1];
def GDlow = if gapDown then low[2] else GDlow[1];
def hg = (if gapUp then high[2] + (GUhigh - GUlow) else if gapDown then high[2] + (GDlow - GDhigh) else 0) / 2;
def gapRemaining = if gapUp then GUhigh - GUlow else if gapDown then GDlow - GDhigh else 0;
def percentRemaining = 100 * gapRemaining / if gapUp then AbsValue(GUhigh - GUlow) else if gapDown then AbsValue(GDlow - GDhigh) else 0;
def gapFilled = if percentRemaining == 0 then 1 else 0;
def halfGapFilled = if percentRemaining <= 50 then 1 else 0;


#FVG Plots
plot gH = if (gapUp and  marketOpen and !newDay[-1])
then GUhigh else if (gapDown and marketOpen and !newDay[-1])
then GDhigh else Double.NaN;
plot gL = if (gapUp and marketOpen and !newDay[-1])
then GUlow else if (gapDown and  marketOpen and !newDay[-1])
then GDlow else Double.NaN;
plot hGF = if !gapFilled and !halfGapFilled and marketOpen and !newDay[-1]
then hg else Double.NaN;

gH.SetPaintingStrategy(PaintingStrategy.DASHES);
gH.AssignValueColor(if gapDown then Color.MAGENTA else Color.DARK_GREEN);
gL.SetPaintingStrategy(PaintingStrategy.DASHES);
gL.AssignValueColor(if gapDown then Color.MAGENTA else Color.DARK_GREEN);

gH.HideBubble();
gL.HideBubble();

AddCloud(gH, gL, Color.VIOLET, Color.VIOLET);

#Troubleshooting Bubbles
AddChartBubble(gapRemaining, high, gapRemaining, Color.ORANGE);
#addchartbubble(gapUp, high, GUhigh +" | " + GUlow, color.green);
#addchartbubble(gapDown, low, GDhigh +" | " + GDlow, color.red);

**GPT:** To create a script in the Thinkorswim platform using the provided code, follow these steps:

### 1. **Open Thinkorswim Platform:**
   - Launch Thinkorswim and log in to your account.

### 2. **Access the ThinkScript Editor:**
   - Go to the **Charts** tab.
   - Click on **Studies** (beaker icon) and then select **Edit Studies...** from the dropdown menu.
   - In the **Edit Studies and Strategies** window, click on the **Create** button to open the ThinkScript Editor.

### 3. **Enter Your Script:**
   - In the ThinkScript Editor, delete any pre-existing code in the editor window.
   - Copy and paste the provided script into the editor.

### 4. **Name Your Script:**
   - At the top of the ThinkScript Editor, you'll see a field to name your script. Give it a meaningful name, like `Gap Analysis`.

### 5. **Check for Errors:**
   - After pasting the code, click on **OK** to check for any syntax errors. If there are errors, Thinkorswim will highlight them, and you can make the necessary corrections.

### 6. **Save and Apply the Script:**
   - Once your script is error-free, click **OK** to save it.
   - Your new custom study will now appear in the **Studies** list. Select it and click **Add Selected** to apply it to your chart.

### 7. **Customize and Test:**
   - With the study applied, you can customize its settings if needed and observe how it behaves with live or historical data.

### **Explanation of Key Functions:**
- **gapUp / gapDown:** These conditions define whether there's a gap up or gap down based on the criteria you've set (e.g., FVG conditions, volatility, etc.).
- **GUhigh / GUlow / GDhigh / GDlow:** These variables store the high and low values of the gap.
- **gapRemaining / percentRemaining:** These calculate the remaining gap and its percentage.
- **gapFilled / halfGapFilled:** These flags indicate whether the gap is fully or halfway filled.
- **gH / gL / hGF:** These plots represent the gap highs, lows, and half-gap fill levels on the chart.

Once applied, this script will visualize gaps and their status on your charts, helping you analyze market behavior effectively.
