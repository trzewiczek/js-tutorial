# JavaScript from Scratch

## Disclaimer
Before we start I'd like to make a kind of disclaimer about the tutorial. Parts of the disclaimer may sound alien at first. That's fine. Focus on JavaScript now and come back to it whenever you feel you want to check what is a teaching approach I took in this tutorial. And this tutorial **is** opinionated.

First of all it focuses only on a subset of JavaScript, the one that will get you up to speed quickly. It won't go into language design details and all the advanced features. It will cover parts most used in the regular day to day programming activities of an average JavaScript developer like myself.

With this in mind tutorial teaches ES6 and beyond, i.e. the modern version of JavaScript. It won't cover legacy concepts and won't make any excuses when using popular [stage-3 JavaScript features](https://github.com/tc39/proposals). This decision is enforced by using [Standard](https://standardjs.com/), a JavaScript linter that helps us keep our code style consistent and following community guidelines.

Last but not least this tutorial is rooted in more functional than object-oriented mindset. It won't go into complex in-depth concepts of functional programming though. It will utilize 'the functional way' to keep code clean, composable and easy to reason about without making too big a deal about fancy names, complex concepts or math theory.

## The metaphor
One of the common programming metaphors is a recipe one. Programming is like making a dinner—a sequence of strict steps leading to a delicious result. Even though it's hard to deny this metaphor there is yet another one that turns out to be useful in software architecture design—the metaphor of [an assembly line](https://youtu.be/ROor6_NGIWU?t=1666). Programming is made of little data transformation shops, each being unaware of the others but being highly skilled in doing one thing, i.e. transforming certain type of objects into another specific ones. Painting shop in car assembly line doesn't necessarily know it's painting a car and why it paints it red, but on the other hand it very well knows how to take this weird silver metal shape from previous shop, how to paint it red and finally how to safely pass it to the next shop, whatever the next one is. What's more if only the manufacture manager is smart enough the painting shop won't only paint red, but you'll be able to select a colour depending on the market demand.

In this tutorial we will try to keep as close to assembly line metaphor as possible. We will focus on these parts of JavaScript and programming in general that help us focus on data processing (painting a silver metal object red) and code modularity (creating small independent transformation shops). If you prefer to learn some recipes instead, go to [Recipe of the Week](http://www.pcrm.org/health/diets/recipes) at [PCRM](http://www.pcrm.org/)—they're healthy and tasty!


## Data Processing
For the programming to be data processing activity we need to be able to do three things: model the data, transform the data and reason about the data. To make it more tangible imagine this task: for quarterly report from all our customers collect only the biggest ones.

First we have to decide how to represent our customers in JavaScript (data modeling). For the sake of this task customer name as plain text and number of her users in our system as an integer is good enough. Next we have to build a data transformation shop (a.k.a. function) that would take a list of all our customers and in return give us only the biggest ones. This function doesn't necessarily understand that these are the customers and we're doing it for quarterly report but is good enough to receive a list of some entities and some condition based on which it will filter out those not satisfying given condition (data transformation). This condition is the last thing we have to come with. In our case the biggest means the one that has a significant number of users in our system, say more than 5000 (reasoning about data).

During the course of this tutorial we'll see more examples, all making clear distinction between data modeling, data transformation and data reasoning.


## Data modeling
JavaScript offers us a collection of tools to model the data. Sooner or later in this tutorial we'll meet significant part of this collection. For now though let's focus on the most common ones, these responsible for modeling text, numbers and logical values.

### Strings
For handling textual data JavaScript offers us strings:

```javascript
'Alice was beginning to get very tired of sitting by her sister on the bank'
```

All strings start with `'` and end with `'`. JavaScript is a good friend so unless you explicitly ask it to, it won't read what's between those two `'` characters. Some will tell you that strings in JavaScript start with `"` and end with `"` and they will be right too. Until you're consistent with your choice JavaScript won't complain. Be it `'` or `"` it's fine. Due to the bias mentioned in the disclaimer, we'll stick to single quotes as `standard` enforces us to do.

With single quotes comes a single problem—how can we represent a sentence containing single quote in it, say: `it was labelled 'ORANGE MARMALADE', but to her great disappointment it was empty` or `There are no mice in the air, I'm afraid, but you might catch a bat, and that's very like a mouse`.

The answer is, we _escape_ every single quote within the string preceding them with `\` character:

```javascript
'it was labelled \'ORANGE MARMALADE\', but to her great disappointment it was empty'
'There are no mice in the air, I\'m afraid, but you might catch a bat, and that\'s very like a mouse'
```

It looks ugly, I agree, but in reality we won't have too many occasions to use it. Most of our programs don't speak proper English, single quote is mostly string beginning or the end.

### Numbers
Whenever we want to express some quantity JavaScript offers us another data type: `number`. Nice thing about JavaScript numbers is that it doesn't make much of a difference if it's an integer (e.g. `3`) or floating point number (e.g. `3.14`).

In JavaScript you can represent numbers in so many formats:

```javascript
123e5
123e-5
01234
-077
-0xCCFF
0xabcdef
```

Fancy, but who wants to read such thing. In this tutorial we'll stick to regular numbers — the ones we all know from school. Let's then translate those monsters above into something meaningful:

```javascript
12300000
0.00123
668
-63
-52479
11259375
```

So much better.

### Booleans
Booleans is the fancy name for two values: `true` and `false`. We use them to express the very fact of something being... well... true or false. Just like with our quarterly report from above, where we wanted to express that some customers have more than 5000 users in our system. For some it's true, so others it's false. End of story.

To make this section longer we'll mention [George Boole](https://en.wikipedia.org/wiki/George_Boole), an English mathematician who invented so called [Boolean Algebra](https://en.wikipedia.org/wiki/Boolean_algebra) that turned to be solid foundation for what we do in programming every day.

