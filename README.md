# JavaScript from Scratch

## The metaphor
One of the common programming metaphors is a recipe one. Programming is like making a dinner -- a sequence of strict steps leading to a delicious result. Even though it's hard to deny this metaphor there is yet another one that turns out to be useful in software architecture design -- the metaphor of an assembly line. Programming is made of little data transformation shops, each being unaware of the others but being highly skilled in doing one thing, i.e. transforming certain type of objects into another specific ones. Painting shop in car assembly line doesn't necessarily know it's a car and why it's to be painted red, but knows how to take this weird silver metal shape from previous shop, how to paint it red and finally how to safely pass it to the next shop, whatever it is. What's more if only the manufacture manager is smart enough the painting shop won't only paint red, but you'll be able to select a colour depending on the market demand.

In this tutorial we will try to keep as close to assembly line metaphor as possible. We will focus on these parts of JavaScript and programming in general that help us focus on data processing and code modularity. If you prefer to learn some recipes instead, go to [Recipe of the Week](http://www.pcrm.org/health/diets/recipes) at [PCRM](http://www.pcrm.org/).


## Data Processing
For the programming to be data processing activity we need to be able to do three things: model the data, transform the data and reason about the data. To make it more tangible imagine this task: for quarterly report from all our customers collect only the biggest ones.

First we have to decide how to represent our customers in JavaScript. For the sake of this task customer name as plain text and number of her users in our system as an integer is good enough. Next we have to build a data transformation shop (a.k.a. function) that would take a list of all our customers and in return give us only the biggest ones. This function doesn't necessarily understand that these are the customers and we're doing it for quarterly report but is good enough to receive a list of some entities and some condition based on which it will filter out those not satisfying given condition. Now this condition--i.e. the way we reason about data--is the last thing we have to come with. In our case the biggest means the one that has a significant number of users in our system (say, more than 5000).

During the course of this tutorial we'll see more examples, all making clear distinction between data modeling, data transformation and data reasoning.


## Data modeling
JavaScript offers us a collection of tools to model the data. Sooner or later in this tutorial we'll meet significant part of this collection. For now though let's focus on the most common ones, these responsible for modeling text, numbers and logical values.

### Strings
For handling textual data JavaScript offers us strings:

```javascript
'Alice was beginning to get very tired of sitting by her sister on the bank'
```

All strings start with `'` and end with `'`. JavaScript is a good friend so unless you explicitly ask it to, it won't read what's between those two `'` characters. Some will tell you that strings in JavaScript start with `"` and end with `"` and they will be right too. Until you're consistent with your choice JavaScript won't complain. Be it `'` or `"` it's fine. Due to bias mentioned in the introduction paragraph, we will stick to single quote as `standard` enforces us to do.

```javascript
'it was labelled \'ORANGE MARMALADE\', but to her great disappointment it was empty'
```

Enough strings.

### Numbers
