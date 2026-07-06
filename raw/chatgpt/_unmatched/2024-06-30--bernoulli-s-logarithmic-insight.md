---
title: "Bernoulli's Logarithmic Insight"
date: 2024-06-30
cluster: "unassigned"
messages: 26
source: chatgpt-export conversations.json (FULL transcript)
---

# Bernoulli's Logarithmic Insight

## Transcript

**Mike:** I need a comprehensive analysis of text from a financial book. The analysis should be aimed at finance professionals, economists, and avid readers, resembling a scholarly critique and financial review. The analysis should be structured in a narrative format and adopt a tone that is both analytical and conversational, akin to a seasoned financial critic.  Here is the text :  On the surface, you can see how academics ran with this over the years, as Bernoulli seemed to have given a psychological explanation for the perception of risk that creates all sorts of opportunities for mathematical torturing of theories and data. (Specifically, economists took Bernoulli to be assuming that people have a logarithmic utility function of wealth.) But what Bernoulli really had in mind was something entirely different. His use of the logarithmic function wasn't just a psychobabble presumption used to create the impression of rigor from esoteric math. On the contrary, it is actually grounded in the physical reality of the real world. Let's see what I mean by that. This logarithmic function harkens back to the Babylonians about 4,000 years ago, and more formally to a Swiss clockmaker (Bürgi) and Scottish mathematician (Napier) in the seventeenth century. They found a simplifying mapping between multiplication (for positive numbers) and addition—which is naturally much easier: Add (or subtract) the log of two numbers and you get the log of their product (or ratio); similarly, divide the log of a number by n and you get the log of the n th root of that number. (The logarithm is still used for that purpose to this day, as in the slide rules that quickly reduce multiplication problems down to addition problems for geeks immemorial.) You see, that mapping from multiplication to addition conveniently allows us to restate Bernoulli's expected value formula as something much more comprehendible and meaningful: the geometric average: As you can see, the geometric average is multiplicative. Unlike the arithmetic average where we add up all the data points, to get the geometric average we multiply them all together. Then, we need to scale them back down to size. In the case of the arithmetic average, this is done by dividing their sum by the number of data points (let's say there are n of them). In the case of the geometric average, this is done by taking the root of their product (specifically, the n th root, or taking the product to the 1/n th power). The geometric average definitely plays second fiddle to the arithmetic average, as the arithmetic average is the one that typically gets all of the attention; it's what we think of whenever we use the term average on its own (or the word mean, which is interchangeable with the word average). When it comes to investing, however, it should play second fiddle no more. Don't worry about the math here. The big idea is that Bernoulli's expected average of all potential ending wealth outcomes, wrapped around a slick objective function in the form of the logarithm. Bernoulli was not explicit about how all this works, but he relied on it, nonetheless. It was his whole point. As Bernoulli phrased it, his emolumentum “suggests” the rule of taking the geometric average ending wealth, without ever even calling it by name or making the broader economic case for it. He even wrote, regarding the use of the geometric average to value risky bets, “I would elaborate it into a complete theory as has been done with the traditional analysis, were it not that, despite its usefulness and originality, previous obligations do not permit me to undertake this task.” Ultimately, Bernoulli put a stake in the ground for using the geometric average (rather than the expected value or arithmetic average) of wealth outcomes as the principle “essential for the measurement of the value of risky propositions.” He was the first, and the rest was history. We'll see in the chapters ahead that it literally changes everything, especially our understanding of risk mitigation. But for now, let's return to our previously posed question. What is the most you would be willing to pay to play the Petersburg wager? Keeping with our assumed starting wealth of $100,000, we can try a few more examples. Let's try betting all of it, the entire $100,000—bet the ranch (since we've already determined that you have a gambling problem). Here's what that range of potential ending wealth outcomes and their geometric average look like: Just $61. Not good. How about betting just 10% of your wealth, or $10,000? Here's what that looks like: Now your geometric expected value is $136,445. It's finally higher than your

**GPT:** ### Scholarly Critique and Financial Review: An Analysis of the Perception of Risk and Bernoulli's Contributions

The excerpt presented delves into the historical and theoretical foundations of risk perception, specifically through the lens of Daniel Bernoulli’s contributions. It offers a narrative that juxtaposes the historical lineage of logarithmic functions with their application in economic theory, particularly in the context of wealth and investment.

#### Historical Context and Mathematical Foundations

The text begins by contextualizing the long-standing academic interest in Bernoulli’s psychological explanation for risk perception. The mention of Bernoulli's assumption—that people have a logarithmic utility function of wealth—highlights a pivotal point in economic theory. This premise has served as a cornerstone for numerous theoretical developments, providing a basis for the mathematical modeling of risk and utility.

The author takes us back to the Babylonians and further to the contributions of the Swiss clockmaker Bürgi and Scottish mathematician Napier, emphasizing the evolution and practical utility of logarithmic functions. This historical journey underscores the fundamental role of logarithms in simplifying complex multiplicative relationships into more manageable additive ones, a transformation still crucial in various scientific and economic applications today.

#### Bernoulli’s Logarithmic Utility and Its Real-World Relevance

In addressing Bernoulli's use of the logarithmic function, the text dispels the notion of it being mere "psychobabble" and instead grounds it in physical reality. This pivot from psychological to physical application is critical; it positions Bernoulli's insights as not just theoretically sound but also practically applicable. By linking logarithms to real-world phenomena, the author underscores the enduring relevance of Bernoulli’s work in contemporary economic theory and practice.

The detailed explanation of the geometric average versus the arithmetic average serves to clarify why Bernoulli’s approach remains significant. The geometric average, being multiplicative, aligns more closely with the realities of compounding in financial contexts. This distinction is crucial for finance professionals and economists who often default to the arithmetic average without considering its limitations in the realm of investing and risk assessment.

#### The Geometric Average in Investment and Risk Assessment

The text transitions to a practical application of Bernoulli’s theory by illustrating the geometric average's superiority in evaluating wealth outcomes. This is particularly pertinent for investment decisions where the geometric average provides a more accurate measure of expected outcomes over time, considering the effects of volatility and compounding.

By framing the discussion around the Petersburg wager, the author provides a concrete example that bridges theoretical concepts with practical implications. The analysis of different betting scenarios, including betting the entire wealth versus a fraction of it, effectively demonstrates the utility of the geometric average in making informed risk assessments. This is an essential consideration for finance professionals who must navigate the complexities of risk and return in their decision-making processes.

#### Conclusion: Bernoulli's Legacy and Modern Implications

Ultimately, the text positions Bernoulli as a pioneering figure whose insights laid the groundwork for modern understandings of risk and utility. His advocacy for the geometric average as the proper measure for evaluating risky propositions marks a significant departure from traditional arithmetic-based assessments. This shift has profound implications for our comprehension of risk mitigation and investment strategies.

In conclusion, the excerpt not only pays homage to Bernoulli’s contributions but also invites finance professionals, economists, and avid readers to reconsider conventional approaches to risk and utility. By appreciating the historical and theoretical underpinnings of these concepts, we can better appreciate their application in contemporary financial analysis and decision-making. The narrative thus serves as both an educational resource and a call to action for a more nuanced understanding of risk in the realm of economics and finance.

**Mike:** Explain in detail the difference between geometric average versus the arithmetic average

**GPT:** ### Detailed Explanation of the Difference Between Geometric Average and Arithmetic Average

#### Arithmetic Average

**Definition:**
The arithmetic average, often referred to as the mean, is calculated by summing all the data points and then dividing by the number of data points. It is the most common measure of central tendency.

**Formula:**
\[ \text{Arithmetic Average} = \frac{1}{n} \sum_{i=1}^{n} x_i \]
where \( n \) is the number of data points, and \( x_i \) represents each individual data point.

**Usage:**
The arithmetic average is straightforward and useful in scenarios where all data points contribute equally. It is commonly used in situations where the data is evenly distributed without significant outliers or extreme values.

**Example:**
Consider a set of returns for an investment over four years: 5%, 10%, 15%, and 20%. The arithmetic average return would be:
\[ \text{Arithmetic Average} = \frac{5 + 10 + 15 + 20}{4} = \frac{50}{4} = 12.5\% \]

**Limitations:**
The arithmetic average can be misleading in contexts where data points are interdependent or where there are significant variations among data points. It does not accurately reflect the compounded effect of returns over multiple periods.

#### Geometric Average

**Definition:**
The geometric average, or geometric mean, is calculated by multiplying all the data points together and then taking the \( n \)th root of the product, where \( n \) is the number of data points. It is particularly useful in situations involving rates of change or growth over time.

**Formula:**
\[ \text{Geometric Average} = \left( \prod_{i=1}^{n} x_i \right)^{\frac{1}{n}} \]
where \( n \) is the number of data points, and \( x_i \) represents each individual data point.

**Usage:**
The geometric average is used in situations where data points are multiplicative or exponential in nature. It is particularly relevant in finance for calculating average returns over multiple periods, as it accurately accounts for the compounding effect of returns.

**Example:**
Using the same set of investment returns (5%, 10%, 15%, and 20%), the geometric average return would be calculated as follows:

Convert percentages to decimals:
\[ 1.05, 1.10, 1.15, 1.20 \]

Multiply all the returns together:
\[ 1.05 \times 1.10 \times 1.15 \times 1.20 \approx 1.6106 \]

Take the \( n \)th root (4th root, since there are 4 data points):
\[ \text{Geometric Average} = (1.6106)^{\frac{1}{4}} \approx 1.126 \]

Convert back to percentage:
\[ \text{Geometric Average} \approx 1.126 - 1 = 0.126 = 12.6\% \]

**Advantages:**
The geometric average provides a more accurate measure of central tendency for data sets involving rates of growth or proportional changes. It takes into account the compounding effect, making it more suitable for evaluating investment performance over time.

**Comparison:**
The arithmetic average for the given data is 12.5%, while the geometric average is 12.6%. The slight difference highlights the impact of compounding in the geometric average. In more volatile scenarios, the discrepancy between the two averages can be significant.

#### Key Differences

1. **Calculation Method:**
   - Arithmetic Average: Sum of data points divided by the number of data points.
   - Geometric Average: \( n \)th root of the product of data points.

2. **Application:**
   - Arithmetic Average: Suitable for evenly distributed data without compounding effects.
   - Geometric Average: Ideal for multiplicative data, rates of change, and compounding effects.

3. **Impact of Volatility:**
   - Arithmetic Average: Can be skewed by extreme values or volatility.
   - Geometric Average: More robust to volatility, providing a truer measure of central tendency for growth rates.

4. **Interpretation in Finance:**
   - Arithmetic Average: Reflects simple average return.
   - Geometric Average: Reflects compounded average return, critical for long-term investment analysis.

Understanding the distinction between these averages is essential for accurate data interpretation, particularly in finance where compounded returns play a crucial role in investment performance assessment.

**Mike:** Explain the saint Petersburg paradox : Bernoulli's solution to the Petersburg paradox was a minor point tucked away at the end of his paper. His primary focus was his methodology. And then there was yet another, far lesser‐known Saint Petersburg paradox that Bernoulli addressed briefly in that paper; it was a much more practical case study, as well as a more dramatic and intriguing one. This problem involved a Saint Petersburg merchant who has purchased commodities in Amsterdam and wishes to ship them home to Saint Petersburg to sell for a tidy profit. But he faces substantial financial risk in transporting those commodities some 1,100 nautical miles across the Baltic Sea to Saint Petersburg. It sounds like a benign enough trip. But this was the golden age of piracy, after all; the dreaded Dane, “Jack of the Baltic,” was actively looting cargo ships in and out of Saint Petersburg in his ominously named pirate ship, the Sudden Death. (He was that rare, real pirate cliché who drowned all his victims by making them walk the plank before scuttling their seized ships.) Given those risks, how can our merchant cost‐effectively mitigate them? Let's say the net value of the Petersburg merchant's commodities (net of shipping costs, etc.) that he intends to sell is 10,000 rubles; in addition, he has savings of 3,000 rubles. (It's a levered business.) So his total wealth, upon making his sale in Saint Petersburg, is 13,000 rubles. Typically, for every 100 ships that sail from Amsterdam to Saint Petersburg, 5 end up seized by pirates or the sea—or a 5% probability of a 10,000‐ruble total shipment loss to the merchant. Perhaps some risk mitigation could help, like insurance. Let's say the best price the merchant can find for insuring his entire precious 10,000‐ruble cargo is 800 rubles—which he considers “outrageously high! Ochen' dorogo!”—and not at all cost‐effective. He would appear to be right: Based on history, the actuarial expected value of such a contract is (–800 × 95/100) + (9,200 × 5/100) = –300. This would really eat into his expected return from each 10,000‐ruble cargo. Without mitigating his risks, this shipment would perhaps be riskier than he could bear. But the insurance industry was seemingly a loser's game, merely preying on its customers' fears; as the calculation indicates, the premium being charged was higher than the actuarially “fair” amount. The Petersburg merchant has quite the dilemma of risk. So, he considers alternative risk‐mitigation strategies, such as diversifying his risk. In fact, Bernoulli made a point of this as a logical derivation of his methodology. (Because of this, some call him the originator of the formal concept of diversification, a rightful claim. The University of Basel beat the University of Chicago by more than 200 years—sorry, Maroons.) As Bernoulli sagely advised: “This is the rule that it is advisable to divide goods which are exposed to some danger into several portions rather than to risk them all together.” Easier said than done, it turns out to our merchant. He gets a pretty good deal with the shipper that he's been using for years. If he were to start paring that down and trying to send smaller cargos with a handful of other shippers instead, he would suddenly find that he would be paying much higher shipping costs. What's more, the Baltic isn't the Atlantic; there are fewer ships and fewer diversifying routes. And it's pretty naïve to think that old Jack of the Baltic would let a handful of ships sail right by unimpaired, even if separated by days, and choose only one to seize; any diversification value would likely be overstated. (This is an uncanny parallel to the shortcomings of today's financial market diversification, which we will discuss later.) So much for pirate and weather diversification. Our merchant is left hiring a single ship, setting sail at the mercy of Captain Jack and the Baltic. When that ship leaves port, what follows is only one outcome out of all that might happen. In other words, he gets to sample only one outcome from the enormous sample space of possibilities. (His N equals 1.) Of course, he expects to keep parlaying such shipments throughout his career, thus diversifying through time; but one 10,000‐ruble loss will really set him back. The only other way that he might reduce his risk is to just take less of it—with a smaller ship and smaller and less valuable cargo, or else lay off some of his interest to partners. Sometimes that can be a good strategy. He could even decide not to sail at all, keeping the ship in the harbor, as it were. But there must be a better way, he thinks. He doesn't want to cut and run. The only way he can remain a successful merchant is by exposing himself to the risks of the high seas and the pirates lurking therein. He even has his motto framed on his Saint Petersburg office wall: “A ship in harbor is safe …” (What follows is implied, as written much later by John Augustus Shedd: “… but that is not what ships are built for.”) He needs to roll the dice on his financial fate. He spends countless days and sleepless nights plotting his course over the Baltic, with reports on the whereabouts and sailing patterns of the Sudden Death and reams of weather reports and forecasts. He sees this as his treasure map to navigate his precious cargo past the financial destruction of menacing pirates and financial storms to safe harbor at the far shore across the sea. But, of course, in the end, all of this would be about as useful as holding his finger to the wind. If only our merchant had read Daniel Bernoulli instead of all of those spurious pirate and weather reports. You see, Bernoulli's framework would have provided him with the intuition to solve his otherwise counterintuitive problem: We start with the merchant's 3,000‐ruble savings plus the 10,000 rubles he would receive from selling his commodities in Saint Petersburg. This is point A on the following chart. Next, we subtract the 800‐ruble insurance premium, moving from point A to point B, to see the logarithmic cost—the vertical line from B to C. (You get a blown‐up view of this in the chart on the right.) This is the cost of insuring—and thus removing—a potential loss from point A to point D, representing the 10,000‐ruble total loss of the cargo at sea. And the logarithmic cost of doing that is represented by the vertical line from D to E (as the poor seized merchant vessel plunges down into the abyss of the sea)

**GPT:** ### The Saint Petersburg Paradox and Bernoulli’s Solution

#### Introduction to the Saint Petersburg Paradox

The Saint Petersburg Paradox is a famous problem in probability theory and economics, initially formulated by Nicolaus Bernoulli. The paradox involves a theoretical lottery game with an infinite expected value, leading to the question of how much one should be willing to pay to play the game. Despite its infinite expected value, most people would not pay a significant amount to participate, highlighting a discrepancy between expected value and human behavior.

#### Bernoulli’s Contribution to Resolving the Paradox

Daniel Bernoulli, in his 1738 paper, proposed a solution to this paradox by introducing the concept of utility. He suggested that the utility of money is not linear, but rather follows a logarithmic function. This implies that the subjective value or utility derived from each additional unit of currency decreases as one’s wealth increases. This concept of diminishing marginal utility helps explain why people would not be willing to pay a large amount to enter the game despite its infinite expected value.

#### A Lesser-Known Saint Petersburg Paradox: The Merchant’s Dilemma

In addition to addressing the famous paradox, Bernoulli’s paper also discusses a more practical and dramatic problem faced by a Saint Petersburg merchant. This merchant, engaged in shipping commodities from Amsterdam to Saint Petersburg, faces significant financial risks due to the threats of piracy and the perils of the sea.

**Scenario Outline:**
- **Wealth and Cargo Value:** The merchant’s commodities are worth 10,000 rubles, and he has additional savings of 3,000 rubles, totaling 13,000 rubles in wealth.
- **Risk:** There is a 5% probability that his shipment will be seized by pirates or lost at sea.
- **Insurance Cost:** The merchant finds insurance for his cargo at a premium of 800 rubles, which he considers excessively high.

#### Analyzing the Risk and Cost-Effectiveness of Insurance

Bernoulli uses this scenario to illustrate a practical application of his risk management methodology. The insurance premium of 800 rubles seems high, but Bernoulli’s framework helps assess whether it is justified.

**Expected Value Calculation Without Insurance:**
\[ \text{Expected Loss} = (10,000 \times 0.05) + (0 \times 0.95) = 500 \text{ rubles} \]

**Cost-Effectiveness of Insurance:**
While the actuarial expected value of the insurance contract suggests a loss of 300 rubles:
\[ \text{Expected Value of Insurance} = (-800 \times 0.95) + (9,200 \times 0.05) = -300 \text{ rubles} \]

Bernoulli emphasizes the importance of considering the reduction of risk rather than focusing solely on the expected value.

#### Diversification as a Risk Mitigation Strategy

Bernoulli advocates for diversification to mitigate risk. He suggests dividing goods into several portions rather than risking them all on one shipment. However, practical constraints, such as higher shipping costs and limited diversifying routes in the Baltic, make this challenging for the merchant.

**Challenges to Diversification:**
- Higher costs associated with using multiple shippers.
- Limited number of ships and routes in the Baltic.
- Ineffectiveness of diversifying against a savvy pirate like "Jack of the Baltic."

#### Applying Bernoulli’s Logarithmic Utility Framework

Bernoulli’s framework can provide a more intuitive solution to the merchant’s problem by analyzing the situation using his logarithmic utility function.

1. **Starting Wealth:** The merchant’s total wealth is 13,000 rubles.
2. **Insurance Premium:** Subtracting the 800-ruble insurance premium reduces the wealth to 12,200 rubles.
3. **Logarithmic Cost Analysis:** Using a logarithmic scale to evaluate the cost of potential losses and the benefit of insurance.

**Logarithmic Utility Calculation:**
\[ U(W) = \ln(W) \]
where \( W \) is the wealth.

**Without Insurance:**
- Potential outcomes: 13,000 rubles (safe shipment) or 3,000 rubles (loss).
- Expected utility: 
  \[ 0.95 \times \ln(13,000) + 0.05 \times \ln(3,000) \]

**With Insurance:**
- Wealth after premium: 12,200 rubles.
- Utility: 
  \[ \ln(12,200) \]

Comparing the expected utility values, the merchant can make a more informed decision about purchasing insurance.

#### Conclusion

Bernoulli’s approach to the Saint Petersburg Paradox and the merchant’s dilemma highlights the importance of considering utility and risk reduction rather than focusing solely on expected monetary values. His insights into diminishing marginal utility and diversification laid the groundwork for modern financial risk management and behavioral economics, emphasizing that decisions under uncertainty must account for both potential outcomes and the subjective value of wealth.

**Mike:** The book continues: shipments) exceeds the sum of 5 horizontal losses from A to D (the expected 5 times that there will be a claim over those 100 insured shipments). The difference in the average is the –300 expected loss to the merchant for buying insurance (and the expected actuarial profit to the underwriter). However, the sum of 100 vertical losses from B to C does not exceed the sum of 5 vertical losses from D to E. Not even close. And this shows the impact that owning insurance at this price to remove those 10,000‐ruble losses would have on the geometric average of all possible outcomes for the merchant. This is what I will forever call the Petersburg merchant trade (even though it remains a mystery to our poor merchant): A risk‐mitigation strategy that mitigates the right risk in a portfolio—and thus prevents it from plunging down the logarithmic curve—and at the right price can both lose money on its own (–300 rubles on average per trip, in this case) and yet raise the portfolio's rate of compounding and its ending wealth. This is what's so decisive about the Petersburg merchant trade: The arithmetic cost of its risk mitigation is more than offset by its geometric effect—such that its net portfolio effect is positive. Just let that simmer for a bit. Without the logarithmic shortcut to the geometric average, this net portfolio effect would be really difficult to visualize, let alone believe. So difficult, in fact, that our Petersburg merchant is too busy plotting his treacherous course to give it any attention whatsoever. Notice on the logarithmic map that, if you ever suffered a one‐period loss of 100%, taking you all the way to zero on the x‐axis and down the curve, then it's game over. You lose all your wealth, and no amount of future profits can compensate. In a string of total returns multiplied together as they compound, just a single “0” makes the whole thing zero—and this is why, as x approaches 0, the logarithm of x approaches negative infinity. More simply stated: bet it all, lose it all—there's no coming back. In contrast, if we calculate the arithmetic average, then adding in a total return of 0 isn't catastrophic; it just pulls the average down. The arithmetic losses (represented by the horizontal lines) are but an illusion, existing only in a timeless world. This is because those horizontal incremental losses are not all equal when compounded; they don't simply add up in our merchant's accounting ledger—and this is why he is so blind to the correct accounting. The relative vertical losses are what essentially add up to the merchant's eventual wealth. By focusing only on the horizontal profits and losses, and summing (or averaging) them, our merchant concludes that this risk mitigation is a net cost. Our merchant believes he would be paying more than the insurance is “actuarially worth.” What he doesn't see is that by summing (or averaging) his vertical profit and loss, he gets the real picture of what is going on with his wealth, and why buying (seemingly) “overpriced” insurance is well worth it. To look at this in terms of the geometric average of the potential outcomes, just as Bernoulli did, we can look at the case where the merchant abstains from insuring himself, and compare that to his insured case where he is guaranteed a fortune of 3,000 rubles plus the 10,000 ruble proceeds (either from selling his commodities or from the insurance underwriter) less the 800 ruble insurance premium, which is 3,000 + 9,200 = 12,200 rubles. On the other hand, without insurance, his geometric average fortune would be 3,000 rubles plus 10,000 rubles in proceeds on 95 trips, and on 5 trips he would only have his original 3,000 rubles (10,000 rubles in commodities lost to Captain Jack). We thus get a Bernoullian geometric expected value, like in the Petersburg wager, of: Strangely, the insurance contract is not a zero‐sum game. The merchant has a geometric expected value gain (from 12,081 rubles to 12,200 rubles, or +119 rubles per shipment) and the insurance underwriter has an actuarial arithmetic expected value gain (of 300 rubles per shipment). Thus, the granting of the insurance contract represents a gain (measured in their own frameworks) for both the merchant and the insurer—it's a win–win, mutually advantageous arrangement. Unbeknownst to the merchant, the insurance premium was both outrageously high and outrageously low—Ochen' dorogo i ochen' deshevo!—both at the same time. Therein lies this second Saint Petersburg paradox. Now think about what the geometric average means here from an economic standpoint. Think of the merchant's profits on each shipment in terms of a total return on whatever capital investment was needed to fund that shipment. The total return ratio is simply the ending wealth divided by the beginning wealth, or one plus the return on the starting wealth, which produced the ending wealth. Let's say that the investment needed for that 10,000 rubles in proceeds for his commodities sale was 8,000 rubles. This means he started with 3,000 + 8,000 = 11,000 rubles; if successful, he ends up with 3,000 + 10,000 = 13,000 rubles, or a 13/11 = 1.18 total return (or an 18% profit). But if his shipment is lost, he ends up with just 3,000 rubles, or a 3,000/11,000 = 0.27 total return (or a 73% loss!). Of course, our merchant wouldn't be done after he unloads his commodities in Saint Petersburg. This is his business, and he plans to keep doing this for as long as he can, parlaying his capital on shipment after shipment. His aim is to compound his capital by adding (or subtracting) each of his previous winnings (or losses) to the capital needed for each next shipment, and thus grow his capital geometrically. The words compound and geometric refer to a change or growth in the size of something that is proportional to that thing itself—as in his wealth. Compound or geometric growth is thus multiplicative growth, represented by a geometric progression of returns, where each subsequent outcome is determined by the previous outcome multiplied by the next total return. (And this is the wonderful thing about working with total return ratios.) Each output becomes the new multiplicative input—it is a recursive map. Should he suffer that 0.27 total return, or 73% loss, he would need to make a profit of 270% from there just to get himself back to even. It is a most insidious wealth tax. (So his pirate and weather forecasts had better be right!) It gets worse and worse, the more grave the losses, as shown in this chart: An Insidious Wealth Tax: The Greater the Loss, the Greater the Profit Needed to Get Back to Even And this is just another way of thinking about the meaning of that logarithmic map. (Flip this curve over horizontally and it becomes something like the logarithmic curve.) Let's say for the merchant's next 100 shipments, 5 of them are total losses (exactly as expected). In that case, his geometric average total return—or more familiar compound growth rate—per shipment over those 100 shipments would be: And, sure enough, his starting capital of 11,000 rubles times 1.098 equals 12,081 rubles, his geometric expected wealth after just one shipment. (These total return calculations assume that our merchant reinvests the same fraction of his total wealth each shipment, and don't worry about that.)

**GPT:** ### The Saint Petersburg Paradox: Bernoulli's Solution and the Merchant's Dilemma

#### Introduction to the Saint Petersburg Paradox

The Saint Petersburg Paradox is a classic problem in probability and economics, initially posed by Nicolaus Bernoulli. The paradox arises from a theoretical lottery game with an infinite expected value, challenging conventional notions of risk and reward. Despite its infinite expected value, rational players are unwilling to pay a large sum to participate, highlighting a disconnect between expected value and practical decision-making.

#### Bernoulli’s Solution to the Paradox

Daniel Bernoulli addressed this paradox by introducing the concept of utility. He proposed that the utility of money is not linear but logarithmic, reflecting diminishing marginal utility. This means that each additional unit of currency provides less additional satisfaction or utility as wealth increases. This insight helped explain why people would not pay a significant amount to enter the game despite its infinite expected value.

#### The Merchant's Dilemma: A Practical Case Study

In addition to resolving the famous paradox, Bernoulli explored a more practical problem faced by a Saint Petersburg merchant. This merchant, transporting commodities from Amsterdam to Saint Petersburg, faced significant risks from piracy and the perils of the sea. This scenario illustrates the application of Bernoulli's theories in a real-world context.

**Scenario Outline:**
- **Wealth and Cargo Value:** The merchant’s commodities are valued at 10,000 rubles, with additional savings of 3,000 rubles, totaling 13,000 rubles.
- **Risk:** There is a 5% probability that the shipment will be seized or lost at sea.
- **Insurance Cost:** The merchant finds an insurance policy for his cargo at a premium of 800 rubles, which he deems excessively high.

#### Expected Value vs. Utility: The Insurance Dilemma

The merchant faces a decision on whether to buy insurance to mitigate the risk of losing his cargo. While the actuarial expected value of the insurance suggests a loss, Bernoulli's utility framework provides a different perspective.

**Expected Value Calculation Without Insurance:**
\[ \text{Expected Loss} = (10,000 \times 0.05) + (0 \times 0.95) = 500 \text{ rubles} \]

**Expected Value of Insurance:**
\[ \text{Expected Value of Insurance} = (-800 \times 0.95) + (9,200 \times 0.05) = -300 \text{ rubles} \]

Despite the apparent expected loss from buying insurance, Bernoulli's framework emphasizes the reduction of risk and the preservation of wealth.

#### Geometric Average and Risk Mitigation

Bernoulli’s use of the geometric average provides a deeper understanding of the merchant's dilemma. The geometric average takes into account the multiplicative nature of returns and the impact of compounding, offering a more accurate measure of long-term wealth.

**Without Insurance:**
- Possible outcomes: 13,000 rubles (safe shipment) or 3,000 rubles (loss).
- Geometric average:
  \[ \left(13,000^{0.95} \times 3,000^{0.05}\right)^{1/1} = 12,081 \text{ rubles} \]

**With Insurance:**
- Wealth after premium: 12,200 rubles.
- Utility: 
  \[ \ln(12,200) \]

By comparing these outcomes, the merchant can see that the insurance policy, despite its cost, actually improves his geometric average wealth.

#### The Net Portfolio Effect

The key insight from Bernoulli’s analysis is the net portfolio effect of risk mitigation. Although the insurance policy results in an arithmetic expected loss, it enhances the geometric average, leading to a net positive effect on the merchant's wealth.

**Illustration of the Net Portfolio Effect:**
- **Without Insurance:** Risk of catastrophic loss leading to a substantial reduction in geometric average wealth.
- **With Insurance:** Preservation of wealth and improvement in geometric average, despite the arithmetic cost.

This highlights the importance of considering the geometric average in risk assessment and decision-making, particularly in contexts involving multiplicative risks and compounding returns.

#### Conclusion

Bernoulli’s solution to the Saint Petersburg Paradox and his analysis of the merchant's dilemma underscore the significance of utility and geometric averaging in understanding risk and making informed decisions. By emphasizing the reduction of risk and the preservation of wealth through insurance, Bernoulli's framework offers valuable insights into effective risk management strategies. This approach remains relevant in modern finance, where the compounding effects of returns and the importance of risk mitigation continue to shape investment strategies and economic theory.

**Mike:** Define" emolumentum medium "

**GPT:** "Emolumentum medium" is a Latin term used by Daniel Bernoulli in his work on the Saint Petersburg Paradox. It can be translated to mean "mean utility" or "average utility." In the context of Bernoulli's work, it refers to the average utility or satisfaction that an individual derives from wealth or monetary gains, rather than the average monetary value itself.

#### Understanding "Emolumentum Medium"

1. **Utility Theory Context:**
   - Bernoulli proposed that people's decisions under uncertainty are better explained by considering their utility (satisfaction or value derived from wealth) rather than the monetary value alone.
   - The "emolumentum medium" represents the mean or expected utility, considering the diminishing marginal utility of wealth.

2. **Logarithmic Utility Function:**
   - Bernoulli suggested that utility is a logarithmic function of wealth, meaning that as wealth increases, the additional utility gained from each extra unit of wealth decreases.
   - The expected utility (emolumentum medium) is calculated by averaging the utility values of all possible outcomes, weighted by their probabilities.

3. **Application in Risk Assessment:**
   - Using the "emolumentum medium," Bernoulli demonstrated that individuals would prefer choices that maximize their expected utility rather than their expected monetary value.
   - This concept helps explain why people might reject bets with high expected values but high variability, favoring more certain outcomes with higher expected utility.

### Example in the Context of the Saint Petersburg Paradox

- **Without Utility Consideration:**
  - The expected monetary value of the Saint Petersburg lottery is infinite, leading to the paradox.
  
- **With Utility Consideration:**
  - Using a logarithmic utility function, the "emolumentum medium" or mean utility is calculated.
  - This provides a finite expected utility, aligning more closely with observed human behavior where individuals place finite value on participating in the lottery.

In summary, "emolumentum medium" is a foundational concept in expected utility theory, emphasizing that decisions should be based on the expected utility rather than just expected monetary value. It highlights the importance of accounting for the diminishing marginal utility of wealth in economic and financial decision-making.

**Mike:** Here is what the book says : Put simply, emolumentum is the logarithm of wealth. (Technically, it is directly proportional to the logarithm of wealth, but the value of a and b are unimportant to us here.) Now, Bernoulli defined his emolumentum medium using the following “fundamental rule”: If the emolumentum of each possible profit expectation is multiplied by the number of ways in which it can occur, and we then divide the sum of these products by the total number of possible cases, an emolumentum medium will be obtained, and the profit which corresponds to this emolumentum will equal the value of the risk in question. In mathematical terms, Bernoulli's emolumentum medium (EM) is the average of the logarithms of all potential total ending wealth outcomes. In the case of our Petersburg wager example (where we wager half of our $100,000 total wealth): And “the profit which corresponds to this emolumentum” is Bernoulli's “value” in question—the Bernoullian expected value (BEV) of the wager. (For the mathematically minded, this requires the exponential, or the inverse function for the logarithm, in order to back out of the logarithmic mapping and into the units of the profit): So there you have it. Take the exponential of the average of the logs of your different potential ending wealth outcomes, and you have Bernoulli's expected value of your wealth from playing that wager. It's a mouthful, but it's pretty simple, really. Let's make it even simpler: Don't wager $50,000 on the Petersburg wager when your total wealth is $100,000, because the Bernoullian expected value of wagering that amount—based on the average log of the potential ending wealth outcomes after playing—is lower than your current wealth. (Current wealth of $100,000 is greater than BEV of $83,114). In other words, given a choice between having $100,000 for sure, or facing the Petersburg wager, which is valued at $83,114, you would obviously prefer the $100,000. Thus, for someone starting with $100,000, wagering $50,000 on the dice game will make them poorer. THE GEOMETRIC AVERAGE On the surface, you can see how academics ran with this over the years, as Bernoulli seemed to have given a psychological explanation for the perception of risk that creates all sorts of opportunities for mathematical torturing of theories and data. (Specifically, economists took Bernoulli to be assuming that people have a logarithmic utility function of wealth.) But what Bernoulli really had in mind was something entirely different. His use of the logarithmic function wasn't just a psychobabble presumption used to create the impression of rigor from esoteric math. On the contrary, it is actually grounded in the physical reality of the real world. Let's see what I mean by that. This logarithmic function harkens back to the Babylonians about 4,000 years ago, and more formally to a Swiss clockmaker (Bürgi) and Scottish mathematician (Napier) in the seventeenth century. They found a simplifying mapping between multiplication (for positive numbers) and addition—which is naturally much easier: Add (or subtract) the log of two numbers and you get the log of their product (or ratio); similarly, divide the log of a number by n and you get the log of the n th root of that number. (The logarithm is still used for that purpose to this day, as in the slide rules that quickly reduce multiplication problems down to addition problems for geeks immemorial.) You see, that mapping from multiplication to addition conveniently allows us to restate Bernoulli's expected value formula as something much more comprehendible and meaningful: the geometric average: As you can see, the geometric average is multiplicative. Unlike the arithmetic average where we add up all the data points, to get the geometric average we multiply them all together. Then, we need to scale them back down to size. In the case of the arithmetic average, this is done by dividing their sum by the number of data points (let's say there are n of them). In the case of the geometric average, this is done by taking the root of their product (specifically, the n th root, or taking the product to the 1/n th power). The geometric average definitely plays second fiddle to the arithmetic average, as the arithmetic average is the one that typically gets all of the attention; it's what we think of whenever we use the term average on its own (or the word mean, which is interchangeable with the word average). When it comes to investing, however, it should play second fiddle no more. Don't worry about the math here. The big idea is that Bernoulli's expected value of a wager is simply the mathematical equivalent of the geometric average of all potential ending wealth outcomes, wrapped around a slick objective function in the form of the logarithm. Bernoulli was not explicit about how all this works, but he relied on it, nonetheless. It was his whole point. As Bernoulli phrased it, his emolumentum “suggests” the rule of taking the geometric average ending wealth, without ever even calling it by name or making the broader economic case for it. He even wrote, regarding the use of the geometric average to value risky bets, “I would elaborate it into a complete theory as has been done with the traditional analysis, were it not that, despite its usefulness and originality, previous obligations do not permit me to undertake this task.” Ultimately, Bernoulli put a stake in the ground for using the geometric average (rather than the expected value or arithmetic average) of wealth outcomes as the principle “essential for the measurement of the value of risky propositions.” He was the first, and the rest was history. We'll see in the chapters ahead that it literally changes everything, especially our understanding of risk mitigation. But for now, let's return to our previously posed question. What is the most you would be willing to pay to play the Petersburg wager? Keeping with our assumed starting wealth of $100,000, we can try a few more examples. Let's try betting all of it, the entire $100,000—bet the ranch (since we've already determined that you have a gambling problem). Here's what that range of potential ending wealth outcomes and their geometric average look like: Just $61. Not good. How about betting just 10% of your wealth, or $10,000? Here's what that looks like: Now your geometric expected value is $136,445. It's finally higher than your astronomical number is precisely what you expect to—and, in this case in fact, will—make across all of the possible paths of the quantum die—all six splintered sides coming up—across the breadth of the multiverse. Looks like that Einstein was a genius. DICE WITH NIETZSCHE'S DEMON (N = 1) Nietzsche liked the dice analogy, not surprisingly, as he elevated what he called the Dionysian ideal of play. He saw life as a dice game, “the great dice game of existence.” He wrote of Zarathustra playing “dice with the gods at their divine table,” and of the dice falling back to be thrown again and again, eternally returning. Thus, they represented what Nietzsche took to be his greatest insight. So, it is appropriate that Nietzsche's demon shows up again and wants to play. He takes the place of Schrödinger's demon across the table from you, and offers you the same dice game, playing for that stack of cash of yours. But now, Nietzsche's demon's house rules apply. Rather than experiencing all six sides of the splintered die for every roll in the multiverse, you experience just one side for each of the 300 rolls, and only one path. (And, lest you forget, you will relive that exact same 300‐roll path for eternity.) Now you have to really think things through. The game was so much simpler in the multiverse. Here, you're back to living in the messy world of just one universe, where with one roll of the die you won't always actually receive that 3.3% average. In fact, in this case you never will because it was purely theoretical. You either make 50%, make 5%, or lose 50%, nothing in between. It's not as bad as the Petersburg wager, but that's still a lot of sampling error, which means risk. One‐sixth of the time, your net worth actually gets cut in half, and that kind of risk is probably unacceptable to you. But then you think of old Jacob Bernoulli again and it occurs to you that, when you keep playing this game over and over with independent rolls, you should quash the randomness and realize your expected fat edge. Just as his Golden Theorem assured you that the die is square, so it can assure you that, with enough rolls, you can expect each side of the die to come up about one‐sixth of the time. Whew, you were entertaining some scary thoughts there for a second (as if playing dice with demons wasn't unnerving enough). And so, your confidence is restored that your average return across all these rolls will converge to 3.3%. You feel as if you are back once again living placidly across the multiverse. It's a comforting thought but, on closer inspection, something looks awry. For instance, let's say the outcomes of your first six rolls are as follows: Your wealth (or total return) after the first roll here would be 1.05.

**GPT:** ### Understanding "Emolumentum Medium" and Bernoulli's Geometric Average

#### Emolumentum Medium Defined

"Emolumentum medium," as used by Daniel Bernoulli, refers to the average utility of wealth. To understand this concept, it's crucial to first grasp Bernoulli's idea of utility and his application of the logarithmic function to wealth.

1. **Utility of Wealth:**
   - Bernoulli posited that the utility (satisfaction or value) derived from wealth is not linear but logarithmic.
   - This means that each additional unit of wealth provides progressively less additional utility, reflecting the principle of diminishing marginal utility.

2. **Logarithmic Function:**
   - Bernoulli used the logarithmic function to model this relationship, where the utility \( U \) of wealth \( W \) is given by:
     \[ U(W) = \log(W) \]

3. **Emolumentum Medium:**
   - Bernoulli's "emolumentum medium" (average utility) is calculated by taking the average of the logarithms of all potential wealth outcomes.
   - Mathematically, it is the mean of the logarithms of the possible ending wealth values, weighted by their probabilities.

4. **Bernoulli's Fundamental Rule:**
   - Bernoulli's rule states that if the utility (emolumentum) of each possible profit is multiplied by the number of ways it can occur, and the sum of these products is divided by the total number of possible cases, the result is the average utility (emolumentum medium).

#### Application in the Saint Petersburg Paradox

The Saint Petersburg Paradox involves a theoretical lottery game where the expected monetary value is infinite. Bernoulli resolved this paradox by considering the utility of wealth rather than its monetary value. He introduced the concept of expected utility, which is finite and aligns with observed behavior.

1. **Expected Utility Calculation:**
   - For each potential outcome, the utility is calculated as the logarithm of the ending wealth.
   - The expected utility is then the average of these utilities, weighted by their probabilities.

2. **Bernoulli's Expected Value (BEV):**
   - The BEV of a wager or investment is the exponential of the average utility (emolumentum medium).
   - This converts the average utility back into monetary terms.

#### Example: Saint Petersburg Wager

Consider the example of wagering $50,000 with a starting wealth of $100,000.

1. **Logarithmic Utility of Wealth:**
   - Possible ending wealth outcomes are calculated, and their logarithms are taken.
   - For instance, if wagering half of the wealth, the possible outcomes might significantly vary, leading to different utilities.

2. **Calculating Emolumentum Medium:**
   - The average utility is found by averaging the logarithms of the possible ending wealth values.
   - Example: If the average of the logarithms of the potential ending wealth outcomes is \(\ln(83,114)\), then the emolumentum medium reflects this average utility.

3. **Back to Monetary Terms:**
   - The Bernoullian expected value (BEV) is the exponential of this average utility:
     \[ \text{BEV} = \exp(\text{average log of ending wealth}) \]
   - If the BEV is $83,114, this is less than the starting wealth of $100,000, indicating that wagering $50,000 is not advisable.

#### Geometric Average and Investment

Bernoulli's insights also extend to the geometric average, which is closely related to the concept of emolumentum medium.

1. **Geometric Average:**
   - The geometric average of wealth outcomes is calculated by multiplying all the wealth values together and then taking the \( n \)th root (where \( n \) is the number of values).
   - Formula: 
     \[ \text{Geometric Average} = \left( \prod_{i=1}^{n} W_i \right)^{1/n} \]

2. **Multiplicative Nature:**
   - The geometric average is particularly relevant in finance, where returns compound multiplicatively over time.
   - It provides a more accurate measure of long-term investment performance compared to the arithmetic average.

3. **Application to Risk:**
   - Bernoulli emphasized using the geometric average for evaluating risky propositions, as it captures the compounding effect of returns.
   - This approach helps in understanding the real impact of risk on long-term wealth.

#### Conclusion

The concept of "emolumentum medium" and Bernoulli's use of the logarithmic function provide profound insights into risk and utility. By focusing on the average utility of wealth, Bernoulli introduced a framework that better reflects human behavior and the real-world impact of risk. This approach not only resolved the Saint Petersburg Paradox but also laid the groundwork for modern risk management and investment strategies.

**Mike:** Break this down like you are explaining it to a 10 grader.

**GPT:** ### Simplifying Bernoulli’s "Emolumentum Medium" and the Saint Petersburg Paradox for a 10th Grader

#### Understanding Utility and Wealth

1. **Utility of Wealth:**
   - Think of utility as happiness or satisfaction you get from having money.
   - The more money you have, the less additional happiness you get from each extra dollar. For example, if you already have $1,000, getting another $100 doesn't make you as happy as if you only had $10 to start with.

2. **Logarithmic Function:**
   - Bernoulli used a math function called the logarithm to describe this decreasing happiness. 
   - Logarithms help us understand how the value (or happiness) we get from money changes as we get more of it.

#### Emolumentum Medium: Average Happiness

1. **Average Utility (Emolumentum Medium):**
   - Instead of just looking at the average amount of money, Bernoulli looked at the average happiness (utility) from all possible outcomes of a gamble or investment.
   - To find this, he calculated the logarithm of each possible ending amount of money and then found the average of these logarithms.

2. **Calculating Emolumentum Medium:**
   - Imagine you have different possible amounts of money you could end up with after a gamble. You calculate the logarithm (log) of each amount.
   - Then, you average these logarithms to find the "emolumentum medium."

#### Example: Saint Petersburg Paradox

1. **The Paradox:**
   - In a special lottery game called the Saint Petersburg Paradox, the expected value (average money) is infinite, which seems weird because people wouldn't actually pay a lot to play.
   - Bernoulli explained this by showing that people think about the happiness (utility) they get from money, not just the money itself.

2. **Using Utility to Solve the Paradox:**
   - If you bet $50,000 out of your $100,000, you could win different amounts. Instead of just adding these amounts, you look at the log of each amount.
   - You then average these logs to find the emolumentum medium, which gives you a better idea of the real value of the gamble in terms of happiness.

3. **Bernoulli's Expected Value (BEV):**
   - To convert this average happiness back to money terms, you use the exponential function (the opposite of the logarithm).
   - This tells you the Bernoullian expected value (BEV) of the gamble.

#### The Geometric Average in Investing

1. **Geometric Average:**
   - Instead of just averaging amounts of money, the geometric average multiplies all the amounts together and then takes the root (like finding the square root, but for more numbers).
   - This is important because it reflects how money grows over time through compounding (earning interest on interest).

2. **Why It Matters:**
   - The geometric average gives a more accurate picture of long-term growth and risk in investing.
   - Bernoulli showed that the geometric average helps understand the true impact of risky decisions over time.

#### Conclusion

Bernoulli’s idea of "emolumentum medium" changes how we think about risk and money. By looking at the average happiness (utility) we get from money, and using the geometric average to understand long-term growth, we get a better understanding of real-world financial decisions. This approach explains why people might avoid risky bets, even if the expected money value seems high, because the happiness (utility) and long-term impact are more important.

**Mike:** Define "logarithm"

**GPT:** ### Defining "Logarithm"

A **logarithm** is a mathematical function that helps us understand the relationship between numbers in terms of their exponents or powers. Here’s a breakdown of what a logarithm is and how it works:

#### Basic Concept

1. **Exponential Form:**
   - If you have a number \( b \) (called the base) raised to the power of \( x \) to get another number \( y \), it’s written as:
     \[ b^x = y \]

2. **Logarithmic Form:**
   - The logarithm tells you what power you need to raise the base \( b \) to get the number \( y \). It’s written as:
     \[ \log_b(y) = x \]

#### Example

1. **Base 10 Logarithm:**
   - If \( 10^2 = 100 \), then \( \log_{10}(100) = 2 \). This means you need to raise 10 to the power of 2 to get 100.

2. **Base 2 Logarithm:**
   - If \( 2^3 = 8 \), then \( \log_{2}(8) = 3 \). This means you need to raise 2 to the power of 3 to get 8.

#### Key Points

1. **Common Bases:**
   - **Base 10 (Common Logarithm):** Often used in science and engineering. Written as \(\log(y)\) or \(\log_{10}(y)\).
   - **Base \( e \) (Natural Logarithm):** Used frequently in mathematics and physics. The number \( e \) is approximately 2.718. Written as \(\ln(y)\) or \(\log_e(y)\).

2. **Properties of Logarithms:**
   - **Product Rule:** \(\log_b(xy) = \log_b(x) + \log_b(y)\)
   - **Quotient Rule:** \(\log_b\left(\frac{x}{y}\right) = \log_b(x) - \log_b(y)\)
   - **Power Rule:** \(\log_b(x^y) = y \cdot \log_b(x)\)

#### Practical Uses

1. **Simplifying Multiplication and Division:**
   - Logarithms turn multiplication into addition and division into subtraction, making complex calculations easier.

2. **Measuring Growth:**
   - Logarithms are used to measure exponential growth or decay, such as population growth, radioactive decay, and interest calculations.

3. **Sound and Earthquakes:**
   - The decibel scale for sound intensity and the Richter scale for earthquake magnitude use logarithms to handle the wide range of values.

#### Summary

A logarithm is a mathematical function that helps us find the exponent to which a base number must be raised to produce a given number. It simplifies complex calculations and is used in various scientific and real-world applications to measure and analyze exponential relationships.

**Mike:** Give me a breakdown of the following experts from the book : Which is better: maximizing your expectation of wealth that you never actually expect to realize—or maximizing your expectation of your growth rate of wealth corresponding to your median of ending wealth that you actually do? When playing dice against Schrödinger's demon, when N = ∞ across the multiverse, we care about the average across the multiverse. When playing our single game of dice against Nietzsche's demon, however, when N = 1, we care about only one path. More to the point, we really care about the one path that we are likely to get. To insulate ourselves from luck, we need to care about lower percentile paths like, for instance, the median. When playing against Nietzsche's demon, you might think that there's some sort of hustle going on. Perhaps like the deceptive variance in poker or backgammon (how I miss the Mayfair Club in the 1990s), your edge was an illusion—there only to keep the fish playing. No, the edge is still there, it's just made to be exceedingly rare. You can think of this as a deceptive sort of vigorish or tax being levied on your median (or geometric average) wealth by this real‐life demon. It is a tax extracted by the multiplicative dynamics of compounding, what I have dubbed the volatility tax—and it is a most insidious wealth tax. It is the geometric cost to your wealth when it plunges down the logarithmic Bernoulli Falls. The further you go, the harder it is to claw your way out. But to those who live only in arithmetic space, it is an entirely hidden tax. In probability theory, a random process is called ergodic when its arithmetic average across the sample space of all possible outcomes over a period of time (known as the ensemble average) is the same as its geometric average outcome over that same period (known as the time average). But let's not overthink this, and let's keep it simple: Non‐ergodicity effectively just means that your average outcome is much higher than your median outcome; so, your distribution is very positively skewed. Focusing on that average means you are focusing on something that, unlike the median, you expect to exceed less than (and sometimes far, far less than) half of the time. That's it. The multiverse, then, is ergodic—as you actually experience the arithmetic average return compounded over time (and the average outcome is thus the same as the median). But none of us lives in that ergodic multiverse. Only with Schrödinger's demon do we get to experience the average return across many 300‐roll games. Alas, we are not a casino. Rather, we are more like a single lottery ticket (though, in this case, one with a very positive edge) as we stand in just one universe, experiencing only one 300‐roll game. The eternal return is clearly highly non‐ergodic. Even when we have many compounding steps, or 300 rolls of the die, because of non‐ergodicity our N still equals 1. We should feel the greatest weight from that. To sum it up here briefly, the two demons' perspectives are mutually exclusive and collectively exhaustive; we have to accept one or the other. Our expectation formed from the multiverse return won't tell us much about what to expect from the eternal return. And, of course, the latter best represents our reality. The frequentist perspective of the multiverse is an illusion, and it will therefore abjectly fail us; it will fool us into doing the wrong thing. Like the Bob Dylan song goes, “Tomorrow is never what it is supposed to be. Thanks to non‐ergodicity.” Or something like that. MAGIC TRICK OR MATH TRICK? The big advantage to the geometric average return calculation is that it avoids the non‐ergodicity problem; it actually maps and tracks the evolution of your capital base through time, something which is lost within the arithmetic average. The geometric return actually is your capital base—it directly translates from returns to wealth. With the arithmetic return you also need to know what the path looks like in order to make that translation; it is path dependent. The capital base is the stake—the very thing that returns are built on, so modern finance's focus on returns while ignoring what they mean for that capital base is just nonsensical. It's shortsighted and naïve; it's as if time is irrelevant, and “everything happens at once.” It's like a farmer focusing on crop yields while ignoring soil degradation. Oops, most do that too through modern industrial agriculture's reliance on monoculture crops, chemical fertilizers and pesticides—except, of course, for those of us who practice regenerative agriculture (such as rotational grazing). But when you shift your focus to that capital base and the geometric average of returns, magical things can start to happen. So, can you do the same thing with your demonic dice games, something a little more regenerative (like those farsighted farmers preserving the soil)? Let's say that, instead of always going all‐in on each roll, you only bet 40% of your total remaining cash on each roll. You keep the remaining 60% on the sidelines earning nothing, and this means that you are cutting by 60% your previous 3.3% expected average return each roll. On the following page is a diagram of this new risk‐mitigated payoff profile. This “Xs and Os Profile” diagram is going to be crucial throughout this book. We will eternally return to it as we examine different case studies. So, it is very important to understand it. It shows the basic delineation among the moving parts of a risk‐mitigation strategy and how they interact. And best of all, it shows the net portfolio effect by aggregating and framing these parts correctly and coherently into a whole, all on the same page, as a risk‐mitigation scoreboard. It literally shows the Xs and Os of risk mitigation. Notice what's going on in it. We are melding the main dice game payoff profile (the Xs) with the cash payoff profile (the Os) and getting a combined payoff profile (the ⊗s). If we just apply Bernoulli's BEV—or the exponential of the average logarithmic return—to this combined profile, then you get the geometric average return equal to the median geometric growth rate if you compound this wager 300 times, and repeat that path 10,000 times. By simply betting less of your stack each roll, your arithmetic average return

**GPT:** ### Simplified Breakdown of Key Concepts

#### 1. Expectation of Wealth vs. Growth Rate of Wealth

**Question:** 
Should you focus on maximizing the average amount of money you expect to have (which might not actually happen) or the rate at which your money grows, which you are more likely to experience?

**Explanation:**
- **Maximizing Expectation of Wealth:** Averages out all possible outcomes, often giving a high number that isn't likely to be your actual result.
- **Maximizing Growth Rate of Wealth:** Focuses on how your money grows over time, giving a more realistic outcome, like the median (middle value) of all possible results.

#### 2. Dice Games with Different Demons

**Schrödinger’s Demon (N = ∞):**
- **Scenario:** You play infinite games, and the focus is on the average result across all these games.
- **Outcome:** The average result across many games represents what you get over time.

**Nietzsche’s Demon (N = 1):**
- **Scenario:** You play a single game, focusing on just one possible path.
- **Outcome:** You care about the median or typical result, as you experience only one path.

#### 3. Insulating from Luck

**Median Focus:**
- **Why:** To protect against bad luck, focus on paths that are more likely (the median) rather than the average.
- **Example:** In gambling, the average return might seem high, but the actual path you experience could be much worse due to volatility.

#### 4. Volatility Tax

**Definition:**
- A hidden cost that reduces your wealth due to the fluctuations in returns (ups and downs).
- **Impact:** Over time, big losses are harder to recover from, creating a "tax" on your wealth growth.

#### 5. Ergodicity

**Ergodic Process:**
- **Definition:** A process where the average outcome over time (time average) is the same as the average outcome across different scenarios (ensemble average).
- **Example:** Rolling a die many times gives the same average as rolling many dice once.

**Non-Ergodic Process:**
- **Definition:** A process where the time average and ensemble average differ.
- **Example:** In real life, we experience only one sequence of events (non-ergodic), so focusing on average returns can be misleading.

#### 6. Geometric Average Return

**Advantage:**
- **Why:** It accurately tracks your wealth over time, considering the effect of compounding.
- **Example:** If you keep betting everything, big losses can wipe you out, but smaller, consistent bets help your wealth grow steadily.

#### 7. Practical Application: Betting Strategy

**New Strategy:**
- **Bet Less:** Instead of going all-in, bet only 40% of your money each time.
- **Outcome:** Reduces risk and helps maintain steady growth, balancing the payoff profile.

**Risk-Mitigation Scoreboard:**
- **Tool:** A diagram that shows how different strategies interact and their effects on your overall wealth.
- **Key Insight:** Combining main bets with safer investments to optimize overall returns.

#### Summary

**Key Takeaway:**
- Focus on realistic, sustainable growth (geometric average) rather than high but unlikely average returns (arithmetic average).
- Understand that real-life wealth growth is non-ergodic, so plan for typical outcomes rather than average outcomes.
- Implement risk-mitigation strategies to protect against volatility and ensure steady compounding of wealth.

**Mike:** Explain the Kelly criterion: Our suggested betting strategy is an example of what is known as the Kelly criterion, dating back to 1956, and named after John Kelly, who was a researcher at Bell Labs. Kelly came up with the criterion as an extension of his colleague Claude Shannon's concept of information entropy (or the degree of information or “surprise” within a crackly communicated message). Kelly's simple formula sized gambling bets based on one criterion: maximizing the expected geometric average of ending wealth (even at the expense of the arithmetic average). You could think of it as formalizing what Daniel Bernoulli first demonstrated back in 1738. And it was first applied formally to the world of investing by Henry Latané in 1959, though abjectly scorned. (Of the two, only Latané read and was heavily influenced by Bernoulli and his paper that was recently translated at the time.) My dice game examples in this chapter very much piggyback on Latané's important work, specifically; Latané was a trailblazer, and deserves so much more credit in investing than he ever gets. Since then, others have carried the ball for Bernoulli, Kelly, and Latané. There was John Burr Williams in 1936 (perhaps the first to emphasize geometric mean maximization since Bernoulli) and Leo Breiman in 1960 (who showed that a geometric mean maximizing strategy both minimized the time to reach a target level of wealth and maximized the level of wealth reached after a given amount of time—and who wouldn't sign up for that?). Ironically, even Harry Markowitz, the original architect of modern portfolio theory in 1952, had become a proponent of the geometric mean criterion by 1959 (and very much so by 1976); but it was too late, as his modern portfolio theory framework had already taken hold—and the rest is history. Perhaps most notable was the magisterial work of Ed Thorp, who has both written about it and put it into practice since the 1960s. Much more recently, Ole Peters has written exhaustive and insightful papers on non‐ergodicity's implications for economic theory. And, of course, Nassim Taleb took up the point in his 2018 book Skin in the Game of the non‐ergodicity of the one‐period ensemble average versus the multi‐period time average. (As Nassim wrote, “more than two decades ago, practitioners such as Mark Spitznagel and myself built our entire business careers around…the effect of the difference between ensemble and time.” That pretty much sums it up.) For a good, not‐too‐technical read on all of this, see the 2005 book Fortune's Formula by William Poundstone; by 2005 I had already long been up to my neck in all of this, and yet it further opened my eyes to the implications of this simple distinction. All three of our triad, Bernoulli, Kelly, and Latané, had their own spin—as well as those who have carried it on. But each points to the very same geometric mean maximizing criterion of our Petersburg merchant trade. Kelly's exact formula here isn't even important; it won't translate very well into the much more nuanced real‐world distributions of financial markets anyway. Your roughly 40% Kelly‐optimal bet size in this dice game can be conceptually found here by moving around the weights in the previous diagram and recalculating the geometric average return or median ending wealth for each weight. (Recall that this is very similar to the iterative search that we did to find the fair value of the Petersburg wager.) The weight with the highest median ending wealth is the Kelly‐optimal bet size. Let's keep it simple. Here is the graph of that relationship: Finding the (Kelly) Optimal Bet Size It seems the Kelly criterion could be more descriptively called the Goldilocks criterion; it must be just right. Setting aside too much of your cash is a bad idea because you aren't betting enough; it's too conservative. Not setting aside enough cash is also a bad idea because you're betting too much; it's too aggressive. Somewhere in between—in this case, just under 40%—is just right. (Don't think that this contradicts the unhappy medium of our great dilemma of risk; it doesn't, as you will see in later chapters.) This also shows why, in case you were tempted, you can't just bet 1/300 th of your wealth each toss, and thus receive the arithmetic average across 300 tiny bets. Well you can, but it would be a waste of time. Only a casino can do this by dicing its bets up each period (diversifying its risk, Daniel Bernoulli‐style), not just dicing them up across time, because it has so many independent, simultaneous rolls of the dice available to it each period. But you don't have a room full of Nietzschean demons to play simultaneous, independent games against. (You are not a casino.) One might say that there is a certain arbitrariness to selecting the 50 th percentile to maximize. It could seem rather chauvinistic toward other percentiles. The other, lower curve on the graph shows what happens to the 5 th percentile ending wealth outcome (the lower bound of the shaded middle 90% confidence interval in previous graphs), meaning the level of wealth that 95% of the time you expect to meet or exceed. That curve peaks at just under a 10% bet size, a much lower percentage of wealth per roll than the almost 40% where the median curve peaks and then falls off precipitously, while the median ending wealth curve has more room to rise with higher bet sizes. The Kelly criterion weighting maximizes the median outcome, though not the really bad outcomes. You can see why professional gamblers often employ a “fractional” Kelly bet size, which effectively maximizes arbitrarily lower percentile outcomes like this 5 th percentile curve (which is maximized at about a quarter‐Kelly), at the expense of the median outcome. This 5 th percentile outcome is known in the investment industry as value at risk, or the 5% VaR. In our case, where the sample space of outcomes is well defined, this 5% VaR is an excellent way to define the degree of risk in the game. After all, we defined risk as exposure to bad contingencies, or these worst potential paths. So think of these worst paths as Graham's margin of safety; the higher that 5 th percentile outcome, the greater the margin of safety, and the safer the wager. In the real world, of course, these bad outcomes are not so well‐defined. There is a spuriousness to the measurement of a portfolio's VaR, and an extremely naïve lack of robustness to its estimation, to the point that its use can do far more harm than good when actually relied upon. This will be a very important point for us in later chapters. But for our dice games, the 5% VaR is an ideal proxy for risk. As we can see, beyond the Kelly optimal bet size, it gets far riskier, and too much of a good thing is not such a good thing. You can overplay your hand, and thus creep too close to the edge of Bernoulli Falls. Yet, curiously, the tools of modern finance would insist that leverage is basically always good when the expected arithmetic returns are positive like this. After all, leverage simply raises the arithmetic average, or expected return, and it doesn't affect the ratio of the average return to the standard deviation of those returns. (A plot

**GPT:** ### The Kelly Criterion Explained for a 10th Grader

#### What is the Kelly Criterion?

The **Kelly Criterion** is a formula used to determine the optimal size of a bet or investment that maximizes the growth rate of your wealth over time. It helps you decide how much of your money you should bet to achieve the best long-term results.

#### Origins of the Kelly Criterion

- **John Kelly**: Developed the criterion in 1956 while working at Bell Labs.
- **Claude Shannon**: His work on information theory (how much information or "surprise" is in a message) inspired Kelly's criterion.
- **Henry Latané**: First applied the Kelly Criterion to investing in 1959, building on ideas from Daniel Bernoulli, a Swiss mathematician.

#### How Does the Kelly Criterion Work?

1. **Maximizing Geometric Average**:
   - The Kelly Criterion focuses on maximizing the geometric average of ending wealth, not the arithmetic average. This means it looks at how your money grows over time, considering the effects of compounding.
   
2. **Balancing Risk and Reward**:
   - The formula helps you balance between betting too much (which is risky) and betting too little (which is too conservative). The goal is to find the "just right" amount to bet, similar to Goldilocks finding the perfect porridge.

3. **Formula**:
   - While the exact formula isn't always used directly in real-world finance because of its complexity, the basic idea is to bet a fraction of your wealth that maximizes long-term growth.

#### Example: Dice Game

Imagine you’re playing a game where you roll a die 300 times. The Kelly Criterion helps you decide how much of your money to bet each time to maximize your wealth after all the rolls.

1. **Betting 40% of Your Wealth**:
   - According to the Kelly Criterion, in the example given, the optimal bet size is about 40% of your total wealth.
   - This means if you have $100, you should bet $40 on each roll, keeping the remaining $60 safe.

2. **Why Not Bet All?**:
   - Betting all your money on each roll is too risky because one big loss could wipe you out.
   - Betting too little means you’re not taking full advantage of the positive expected returns.

#### Practical Applications

1. **Investing**:
   - Investors use the Kelly Criterion to decide how much money to put into different investments, aiming for steady growth without taking excessive risks.

2. **Professional Gambling**:
   - Gamblers use a modified version of the Kelly Criterion to manage their bets, ensuring they don't lose all their money while maximizing their chances of long-term success.

#### Real-World Considerations

1. **Fractional Kelly**:
   - Some people use a smaller fraction of the Kelly bet (like half or a quarter) to further reduce risk, especially in uncertain real-world scenarios.
   
2. **VaR (Value at Risk)**:
   - In investing, VaR is used to estimate the risk of loss in a portfolio. The Kelly Criterion helps balance the expected returns with the risk of significant losses.

#### Summary

- **Kelly Criterion**: A method to determine the best bet size to maximize long-term wealth growth.
- **Key Idea**: Balance risk and reward by betting an optimal fraction of your wealth.
- **Application**: Used in investing and gambling to make smart, risk-managed decisions.

By understanding and applying the Kelly Criterion, you can make more informed decisions about how much of your money to risk, aiming for the best possible growth without taking on unnecessary danger.

**Mike:** Give me an example of the geometric average.

**GPT:** ### Understanding the Geometric Average: A Simple Example

#### Definition

The geometric average (or geometric mean) is a measure of central tendency that is particularly useful for sets of numbers that are multiplied together or that represent exponential growth, such as investment returns. Unlike the arithmetic average, which sums up the numbers and divides by the count, the geometric average multiplies the numbers together and then takes the \( n \)th root (where \( n \) is the total number of numbers).

#### Formula

\[ \text{Geometric Average} = \left( \prod_{i=1}^{n} x_i \right)^{\frac{1}{n}} \]

Where:
- \( x_i \) are the individual numbers.
- \( n \) is the number of numbers.

#### Example: Investment Returns

Let's consider a simple example of investment returns over three years.

- Year 1: 5% return
- Year 2: 10% return
- Year 3: -5% return

First, convert the percentages to decimal form:

- Year 1: \( 1 + 0.05 = 1.05 \)
- Year 2: \( 1 + 0.10 = 1.10 \)
- Year 3: \( 1 - 0.05 = 0.95 \)

Now, calculate the geometric average:

1. **Multiply the Returns Together:**
   \[ 1.05 \times 1.10 \times 0.95 = 1.096875 \]

2. **Take the \( n \)th Root (in this case, the 3rd root):**
   \[ \text{Geometric Average} = (1.096875)^{\frac{1}{3}} \approx 1.031 \]

3. **Convert Back to Percentage:**
   \[ 1.031 - 1 = 0.031 \text{ or } 3.1\% \]

#### Interpretation

The geometric average return over these three years is approximately 3.1%. This means that, on average, the investment grew by about 3.1% per year when considering the compounding effect of the returns.

#### Comparison to Arithmetic Average

To see the difference, let's calculate the arithmetic average:

1. **Sum the Returns:**
   \[ 5\% + 10\% - 5\% = 10\% \]

2. **Divide by the Number of Years:**
   \[ \frac{10\%}{3} \approx 3.33\% \]

The arithmetic average return is 3.33%, which is slightly higher than the geometric average. This difference occurs because the arithmetic average does not account for the compounding effect and volatility in the returns, whereas the geometric average does.

#### Why Use Geometric Average?

The geometric average is more accurate for understanding the true rate of return over multiple periods because it accounts for the effect of compounding. It provides a realistic measure of investment performance, especially when returns vary over time.

### Summary

- **Geometric Average**: Takes into account the compounding effect of returns, giving a true average growth rate.
- **Calculation**: Multiply all the returns together and then take the \( n \)th root.
- **Example**: For returns of 5%, 10%, and -5% over three years, the geometric average is about 3.1%.
- **Comparison**: The arithmetic average does not account for compounding and typically overestimates the growth rate compared to the geometric average.

Understanding the geometric average helps you better assess the long-term growth rate of investments or any other scenarios where values multiply over time.

**Mike:** Explain in more detail : Take the ( n )th Root (in this case, the 3rd root): [ \text{Geometric Average} = (1.096875)^{\frac{1}{3}} \approx 1.031 ]

**GPT:** ### Detailed Explanation of Taking the \( n \)th Root

#### Step-by-Step Calculation

1. **Multiply the Numbers Together:**
   - In the example of investment returns over three years (5%, 10%, and -5%), the first step was to convert these percentages to decimal form:
     - Year 1: \( 1 + 0.05 = 1.05 \)
     - Year 2: \( 1 + 0.10 = 1.10 \)
     - Year 3: \( 1 - 0.05 = 0.95 \)
   - Multiply these decimal values together:
     \[ 1.05 \times 1.10 \times 0.95 = 1.096875 \]

2. **Understanding the \( n \)th Root:**
   - The \( n \)th root of a number is a value that, when multiplied by itself \( n \) times, gives the original number.
   - In our case, \( n \) is 3 (since we have three years of returns).

3. **Mathematical Representation:**
   - To find the geometric average, we take the \( n \)th root of the product of the numbers.
   - This is represented as:
     \[ \left( \prod_{i=1}^{n} x_i \right)^{\frac{1}{n}} \]
   - For our example:
     \[ (1.096875)^{\frac{1}{3}} \]

4. **Calculating the \( n \)th Root:**
   - \( (1.096875)^{\frac{1}{3}} \) means we are finding the cube root of 1.096875.
   - The cube root of a number is a value that, when multiplied by itself three times, equals the original number.

5. **Using a Calculator:**
   - Most scientific calculators have a function to calculate the \( n \)th root.
   - Enter the number 1.096875.
   - Use the cube root function or raise the number to the power of \(\frac{1}{3}\).
   - This will give you the value:
     \[ (1.096875)^{\frac{1}{3}} \approx 1.031 \]

6. **Interpretation:**
   - The result \( 1.031 \) represents the geometric average of the returns.
   - Converting it back to a percentage:
     \[ 1.031 - 1 = 0.031 \text{ or } 3.1\% \]

#### Why Take the \( n \)th Root?

- **Compounding Effect:**
  - The geometric average accounts for the compounding effect of returns over multiple periods.
  - It gives a true representation of the average growth rate per period.

- **Consistency:**
  - By taking the \( n \)th root, you ensure that the average growth rate is consistent across all periods.

#### Practical Example

To make this more tangible, consider a simpler example:

- Suppose you have two years of returns: Year 1 is 50% (or 1.50) and Year 2 is -50% (or 0.50).
- Multiply these returns:
  \[ 1.50 \times 0.50 = 0.75 \]
- Since there are two years, take the square root (2nd root):
  \[ \text{Geometric Average} = (0.75)^{\frac{1}{2}} \approx 0.866 \]
- Convert back to percentage:
  \[ 0.866 - 1 = -0.134 \text{ or } -13.4\% \]

This shows that despite a 50% gain and a 50% loss, the geometric average indicates an overall negative growth rate, highlighting the impact of compounding.

### Summary

- **Step-by-Step Calculation:** Multiply all values, then take the \( n \)th root.
- **Mathematical Representation:** \( ( \text{product of values} )^{\frac{1}{n}} \)
- **Why It's Important:** Reflects true average growth, accounting for compounding.
- **Practical Example:** Demonstrates the effect of gains and losses on overall growth.

Understanding the \( n \)th root and its role in calculating the geometric average helps accurately measure the average rate of return or growth over multiple periods, providing a realistic picture of performance.

**Mike:** Use the following except to explain arithmetic and geometric averages and the difference: The interesting thing is that the arithmetic average return is lowered (visible in the arrow pointing to the left), and everything else being equal that would also lower the geometric average return. But the geometric average or median return is actually raised, in what we will call the net portfolio effect (visible in the arrow pointing to the right). There are really two contrary forces acting on our distribution of outcomes: a visible one lowering it—the arithmetic cost—and a hidden one raising it—the geometric effect. When the latter is greater than the former as it is here, the result is a positive net portfolio effect and cost‐effective risk mitigation. The tension between these two often hidden forces is at the very heart of safe haven investing. The pickup in the median wealth from the Kelly betting strategy is clear—it is what is being maximized, after all. But you can see that it raises the entire distribution. The 5 th percentile outcome (at the lower end of the middle 90% range of outcomes), for instance, has risen from essentially zero to about 0.3. Think of this, again, like an archer slinging arrows at a target. Kelly seeks to get your median arrow closer to the bullseye (as in higher wealth), or more accurate. And, in the process, it tightens the shot grouping, meaning the range is narrower or more precise. There are fewer fliers (stray arrows) than before—less entropy, less required luck. But they are not gone. The fliers aren't what Kelly optimizes. Imagine William Tell—the fourteenth‐century Swiss folk hero and expert marksman who led the Swiss Confederacy's rebellion against their Austrian oppressors—forced to shoot the apple off his son's head. He can miss, but only in one direction, and the stray arrow matters at least as much as his median arrow. He aims to minimize his exposure to bad luck. William Tell's shot requires both precision and accuracy—aim small, miss small. (Contrast this with maximizing a Sharpe ratio by increasing precision at the expense of accuracy.) Those remaining stray arrows are a fair criticism of the aggressive Kelly betting strategy, as it still has an abundance of risk. That 5 th percentile outcome of 0.3 means a 70% loss—so a lot of bad things can still happen between the 5 th and 50 th percentile of our new shot grouping. Because of this, some have even cynically called it the Kamikaze criterion. The economist Paul Samuelson was particularly contentious of the Kelly criterion, and he mockingly wrote a critique of it using only single‐syllable words—all that he thought his detractors could understand. A typical passage from his paper reads: “We should not make mean log of wealth big…When you lose—and you sure can lose—with N large, you can lose real big. Q.E.D.” What is important to recognize here, which may not be obvious, is that Kelly's system of keeping (in this case) 60% of your total wealth in reserve is the equivalent of allocating 60% of your total wealth to a safe haven. With each roll, that cash just sits there earning zero interest (and presumably losing no real value from inflation); it remains available to use, if you so desire, on the next roll. All it does is hold its value in order to cushion a loss from the game. It is what we will refer to as a “store‐of‐value” safe haven. SIDE BETS Let us return briefly to Bernoulli's Petersburg merchant from the last chapter. We can understand his situation better in the context of our demonic dice games. We'll make a few replacements: the player of this game with the hapless merchant, the die roll with random weather and pirates, the payoff with the economic results of the ship full of cargo traversing the Baltic Sea, and Schrödinger's demon for an insurance underwriter. You can see the implications. (Our probabilities and payoffs are a little different this time, but the point is exactly the same.) When you buy insurance on your house, for instance, your intent is for the policy to pay the cost of damage or destruction to your house, spread across many instances in the multiverse. Insurance is, in that sense, letting you act as a casino, playing many simultaneous games against fate. The really bad fates no longer really matter, as the other good fates share the cost. But if setting aside a portion of capital in a safe, non‐returning asset can actually raise the compound growth rate of the total, it must be because that safe asset is providing something to that growth rate other than its own particular capital appreciation. It is providing something hidden, sufficient to overcome its opportunity cost. Since we are trying to use that set‐aside cash to blunt the blow of our losses when they happen, it would make sense for us to look instead at an insurance contract on playing this game. An insurance contract is basically a side bet on the main event and is not the main event itself. It is a bet on the results of another primary bet. Like the side bets in craps or in sports, it is separate from the game itself. It is a derivative, or a contingent claim, whose value is derived from something else. (Insurance companies take great pains to ensure that insurance payoffs aren't actual wagers, like taking out a life insurance policy on someone whose death doesn't impact you.) Consider this diagram of an insurance side bet risk‐mitigated payoff profile and probability distribution, where the insurance contract pays out 500% of your premium when a 1 turns up on the die, and loses 100% of the premium when any other number turns up: Xs and Os Profile: Insurance Note, again, that we need only figure out the geometric average return of the combined ⊗ payoff profile to find the expected geometric average return—and the median geometric return—from playing this game 10,000 times. Compare this Xs and Os profile diagram with our previous one and you can see that the new insurance payoff replaces the old simpler cash set aside.

**GPT:** ### Arithmetic Average vs. Geometric Average: Explained

#### Definitions

1. **Arithmetic Average (Mean)**:
   - This is simply the sum of all the numbers divided by the count of the numbers. It gives a straightforward measure of the central value of a data set.
   - Formula: \[ \text{Arithmetic Average} = \frac{\sum_{i=1}^{n} x_i}{n} \]

2. **Geometric Average (Mean)**:
   - This considers the compounding effect and is the \( n \)th root of the product of the numbers. It provides a better measure for growth rates over time.
   - Formula: \[ \text{Geometric Average} = \left( \prod_{i=1}^{n} x_i \right)^{\frac{1}{n}} \]

#### Example and Explanation

Let's use a hypothetical investment with returns over three years to illustrate the difference between the arithmetic and geometric averages.

- **Year 1 Return**: 5% (1.05 in decimal)
- **Year 2 Return**: 10% (1.10 in decimal)
- **Year 3 Return**: -5% (0.95 in decimal)

**Arithmetic Average Calculation**:

1. Sum the returns: 
   \[ 5\% + 10\% - 5\% = 10\% \]
2. Divide by the number of years:
   \[ \frac{10\%}{3} \approx 3.33\% \]

So, the arithmetic average return is approximately 3.33%.

**Geometric Average Calculation**:

1. Multiply the returns:
   \[ 1.05 \times 1.10 \times 0.95 = 1.096875 \]
2. Take the \( n \)th root (3rd root in this case):
   \[ \left(1.096875\right)^{\frac{1}{3}} \approx 1.031 \]
3. Convert back to a percentage:
   \[ 1.031 - 1 = 0.031 \text{ or } 3.1\% \]

So, the geometric average return is approximately 3.1%.

#### Key Differences

1. **Compounding Effects**:
   - **Arithmetic Average**: Does not consider compounding. It simply averages the values.
   - **Geometric Average**: Accounts for compounding, making it a more accurate measure of returns over time.

2. **Impact of Volatility**:
   - **Arithmetic Average**: Can be misleading when there is significant variability in returns. It might overestimate the true average growth rate.
   - **Geometric Average**: Reflects the impact of volatility and provides a lower, but more realistic, measure of average growth rate.

3. **Practical Implications**:
   - **Arithmetic Average**: Useful for short-term or stable scenarios where returns do not fluctuate much.
   - **Geometric Average**: Essential for long-term investments where returns are volatile and compounded over time.

#### Net Portfolio Effect

- The excerpt discusses the **net portfolio effect**, which highlights the interplay between the arithmetic and geometric averages.
- **Arithmetic Cost**: Refers to the visible reduction in the arithmetic average return due to risk mitigation strategies.
- **Geometric Effect**: Refers to the hidden increase in the geometric average return due to these same risk mitigation strategies.
- **Positive Net Portfolio Effect**: Occurs when the increase in the geometric average return outweighs the decrease in the arithmetic average return, leading to effective risk mitigation and overall portfolio growth.

#### Kelly Criterion and Geometric Average

- The Kelly Criterion is a strategy that aims to maximize the geometric average return.
- By betting a fraction of the total wealth (in this example, 40%), the Kelly strategy balances risk and reward, ensuring the highest possible growth rate over time.
- The **median return** (geometric average) is increased, which means more consistent growth with fewer extreme losses.

#### Visualization with an Example

Imagine an archer aiming for a target:

1. **Arithmetic Approach**: The archer's average shot (mean position of all arrows) might be high, but this doesn't ensure accuracy or consistency.
2. **Geometric Approach**: The archer's median shot (geometric mean position) reflects more consistent, accurate shots closer to the target, even if the average isn't as high.

The **Kelly Criterion** aims to improve both the accuracy (median) and precision (consistency) of the archer's shots, ensuring fewer stray arrows and a higher probability of hitting close to the bullseye.

### Summary

- **Arithmetic Average**: Simple mean, useful for stable returns but can be misleading with volatility.
- **Geometric Average**: Accounts for compounding, more accurate for volatile, long-term returns.
- **Net Portfolio Effect**: Balances the reduction in arithmetic average with the increase in geometric average to achieve effective risk mitigation.
- **Kelly Criterion**: Strategy that maximizes geometric average return, ensuring consistent growth over time by optimally balancing risk and reward.
