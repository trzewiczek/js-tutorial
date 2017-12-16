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
Whenever we want to express some quantity JavaScript offers us another data type: `number`. Nice thing about JavaScript numbers is that it doesn't make much of a difference if it's an integer (e.g. `3`) or a floating point number (e.g. `3.14`). The only thing we have to remember is that when typing floating point ones, we use `.` (_dot_) not `,` (_comma_).

Some will tell you that in JavaScript you can represent numbers not only as decimals (i.e. `3` or `3.14`) but as well in many other, more advanced formats:

```javascript
123e5
123e-5
01234
-077
-0xCCFF
0xabcdef
```

Fancy! But who wants to read it again? _#readabilitycounts_

In this tutorial we'll stick to regular decimal numbers—the ones we all know from school. Let's then translate those monsters above into something meaningful:

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
Booleans is a fancy name for two values: `true` and `false`. We use them to express the very fact of something being... well... true or false. Just like with our quarterly report from above, where we wanted to express that some customers have more than 5000 users in our system. For some it's true, for others it's false. End of story.

To make this section longer we'll mention [George Boole](https://en.wikipedia.org/wiki/George_Boole), an English mathematician who invented so called [Boolean Algebra](https://en.wikipedia.org/wiki/Boolean_algebra) that turned to be a solid foundation for what we do in programming every day. The name `Booleans` comes from his surname. What a surprise.

## Intermezzo I: Naming things
Being able to express values is valuable in itself. But what fun is that if you cannot name them and use later in your code? Lucky us, JavaScript is easy with naming:

```javascript
const myName = 'Alice'
const aliceNewFriend = 'Cheshire Cat'
const numOfPages = 137
```

First of all, whenever we want to name something—be it a string, a number or a boolean value—we should start with a special `const` word. With its help we ensure that no one will ever change what our name actually means. In our case we're making sure `myName` always be `Alice`, which is a good thing, isn't it?

Next, we come with a name itself. Developers are [recognized to be really bad at naming things](https://martinfowler.com/bliki/TwoHardThings.html), so after you pass this part, the rest will be a piece of cake. By convention (and as a part of the good manners) most names in JavaScript start with lowercase and if consists of a few words put together, all but first start with the uppercase, e.g. `aliceNewFriend`. Funny enough we call it a _Camel Case_.

Next, we meet an equals character (`=`) that—as we, nerds would say—bounds the value to the given name.

Lastly, we provide the actual value we want to name, be it a string, a number or a boolean. Or even something else.

To put it all together we could read our last example simply as: `Ensure that numOfPages is always 137`. Fair enough.

Some will tell you—and they will be right—that besides `const` we've got two other options when naming things: `var` and `let`. The first one is a crazy and buggy legacy JavaScript feature I will mention never again in this tutorial! The later is no legacy at all and it plays a key role in certain, specific, sometimes-to-happen situations we will finally cover later in the tutorial. For now though we stick to `const`—it's save, clear and used in the most situations.

## Data Modeling Continued

Sometimes having a value and naming it is not enough. What if we want to deal with a collection of values, say all usernames in our system? What if we know that some pieces of information when put toghether create a new meaningful piece of information, say username and password as authentication credentials? For these scenarios JavaScript offers us _compound data types_ from which—for the time being—we'll use only two: `Array` and `Object`.

### Arrays
No matter how many hours people waste fighting each other in the Internet, `Array` is just a simple list of elements.

```javascript
const usernames = ['alice', 'rabbit', 'cheshire']
const aliceHeights = [15, 10, 4]
```

Different from some other languages JavaScript doesn't restrict us from putting different things onto one list:

```javascript
const fleaMarket = ['lollipop', 45, true, true, 'Joyce', false, 5]
```

In reality though, we won't probably find too many occasions to put mixed things into array. Once again, by the virtue of the good manners we tend to keep what's on the list consistent. As we'll soon find out, this sacrifice pays off really well.

Putting things into the closed is so much easier than finding them later. So is with the arrays. Before we dive into the problem itself, let's all first agree that when we put our values on the list, we decide to refer to them not as _our values_ but rather as _positions on our list_. In this sense both third and fourth elements on the `fleaMarket` list are `true` and Mr.`Joyce` took the fifth position on this list. So far so good.

The problem comes with how JavaScript counts _position on the list_. And it does it starting with **zero**, so to refer to **fifth** position on the list (Mr.`Joyce` once again) we would write:

```javascript
fleaMarket[4]
```

and to get booleans at **third** and **fourth** position we would write:

```javascript
fleaMartek[2]
fleaMartek[3]
```

Weird? In 50 bugs you'll get used to it, don't you worry.

### Objects
Imagine this:

```javascript
const name = 'Rabbit'
const address = 'Rabbit Hole'
const quote = 'Oh dear! Oh dear! I shall be late!'
```

All good. Now, let's go to the Caterpillar:

```javascript
const name = 'Caterpillar'
const address = 'Mushroom'
const quote = 'You\'ll get used to it in time'
```

All fine? Not really.

First of all, once declared names cannot be re-declared (at least in most cases - we'll get to it), so after we stated `const name`, `const address` and `const quote` for the Rabbit, we cannot do it later for the Caterpillar. Especially that we tried to assign new values to them, which is not allowed when a name is declared as `const`. Two bugs in one sitting.

We could easily avoid this problem by declaring more specific names, e.g.:

```javascript
const rabbitName = 'Rabbit'
const rabbitAddress = 'Rabbit Hole'
const rabbitQuote = 'Oh dear! Oh dear! I shall be late!'

const caterpillarName = 'Caterpillar'
const caterpillarAddress = 'Mushroom'
const caterpillarQuote = 'You\'ll get used to it in time'
```

Problem solved! So now let's take a closer look into these names.

We decided to add some specific prefix to each of them—one for each group of values. We say _a group of values_ because even if it wasn't clearly expressed in the first snippets of code, we think of these values in terms of a bigger entity, i.e. a book character profile. In adding a specific prefix to each name in the group we tried to express this semantic relationship of the values.

But is declaring many separate values artificially prefixed to be recognized as members of a group of values a good practice? Is it the only way?

Obviously not. JavaScript offers as a slick grouping mechanism called `Objects`:

```javascript
const rabbit = {
    name: 'Rabbit',
    address: 'Rabbit Hole',
    quote: 'Oh dear! Oh dear! I shall be late!'
}

const caterpillar = {
    name: 'Caterpillar'
    address: 'Mushroom'
    quote: 'You\'ll get used to it in time'
}
```

It's not that far from what we've done before with the prefixes, only now the prefix becomes a name itself and the rest lands inside the object. Additionally we use a colon (`:`) instead of equal sign (`=`) when inside the object. Not a big deal, in the end.

Names we declare inside an object are called _fields_ and they are visible only within the scope of the object they belong to. In practice it means that `name` is `rabbit`'s field and is separate from `name`—`caterpillar`'s field. In this sense no name collisions are possible here. We'll have to wait a little bit to fully appreciate this fact, so for now, let's all just say: _Oh WOW!_

Just like with `Arrays` it's easier to put things into the object than to get it back. And it's even harder then with arrays due to two ways we can approach the task. The first one differs not much from how we retrieve data from arrays—it's just _field name_ instead of an _index_ we use:

```javascript
rabbit['name']
caterpillar['address']
```

The other way to access the data enclosed in the object is by using so called _dot notation_:

```javscript
rabbit.name
caterpillar.address
```

In terms of the produced outcome there is no difference between them and it's just a pragmatic choice (most of the time) when to use each. And once again to get the rational behind these choices we'll have to gain some more experience with JavaScript. For the time being, let's just continue with the _dot notation_ in hand.


### Objects in the Array
Introducing `Objects` let us deal with semantically related values. But we still face a naming problem—each of the Objects had to have a separate name, one for Rabbit, one for Caterpillar etc. That means that it won't be easy to operate on all of the book characters as one collection.

The rescue comes from the fact that Objects don't differ from other data types when put on the list:

```javascript
const characters = [
  {
    name: 'Rabbit',
    address: 'Rabbit Hole',
    quote: 'Oh dear! Oh dear! I shall be late!'
  },
  {
    name: 'Caterpillar'
    address: 'Mushroom'
    quote: 'You\'ll get used to it in time'
  }
]
```

Now we can retrieve Rabbit's data easily by its list position index:

```javascript
characters[0]
```

This way we don't have to create additional names for the objects and when we want to add yet another one to the books characters collection we just put it on the list. You could ask, so how will we know what is the position on the list of the character we're looking for? We'll manage—they all have `name`s and `address`es, don't they?

The last thing to keep in mind here is that after retrieving an Object from an Array we treat it just like a regular Object, i.e. we can access data enclosed in it using dot notation:

```javascript
const rabbit = characters[0]
rabbit.name
```

or to make it short (we didn't want to create additional names, did we?):

```javascript
characters[0].name
```

Let's go through this example step by step.

When JavaScript sees such a snippet of code it starts with deciphering the names. First it researches what data is bound to the name `characters` and substitutes one with the other. In our case it's a list, so we can try to retrieve the first element of it (position index: `0`). It turns out to be an object so `characters[0]` is substituted by this object. Now we can operate on it using dot notation and access `name` field to get its value—it this case: `'Rabbit'`.

### Array in the Object
Just like with Objects in the Array we can put an Array into the Object:

```javascript
const rabbit = {
    name: 'Rabbit',
    address: 'Rabbit Hole',
    quote: 'Oh dear! Oh dear! I shall be late!',
	attributes: ['waistcoat', 'pocket watch']
}
```

No big deal. We still retrieve it just like the other fields with the _dot notation_:

```javascript
rabbit.attributes
```

and to retrieve its elements we use regular position index, so to get a `'pocket watch'` we would write:

```javascript
rabbit.attributes[1]
```

Just like in the previous example let's go with this one step by step.

When JavaScript sees such a snippet of code it starts with deciphering the names. First it researches what data is bound to the name `rabbit` and substitutes one with the other. In our case it's an object, so we can try to retrieve the data using dot notation (field name: `attributes`). It turns out to be an array so `rabbit.attributes` is substituted by this array. Now we can operate on it using position indices and access second position on the list (index: `1`) to get its value—it this case: `'pocket watch'`.

### All put together
Before we leave Alice and her friends in favor of some closer to real-world examples let's put compound data types into action:

```javascript
const characters = [
  {
    name: 'Rabbit',
    address: 'Rabbit Hole',
    quote: 'Oh dear! Oh dear! I shall be late!',
	attributes: ['waistcoat', 'pocket watch']
  },
  {
    name: 'Caterpillar'
    address: 'Mushroom'
    quote: 'You\'ll get used to it in time',
	attributes: ['pipe']
  },
  {
	name: 'Cheshire Cat',
	address: 'Bough',
	quote: 'We\'re all mad here. I\'m mad. You\'re mad.',
	attributes: []
  }
]
```

`characters[0].name` was running in circles with his `characters[0].attributes[1]` in his hand screaming `character[0].quote`. `characters[1].name` made himself comfortable on his `characters[1].address` and tried to calm down `characters[0].name` saying: `characters[1].quote` with his `characters[1].attributes[0]` in his mouth. Watching the scene from his `characters[2].address` `characters[2].name` cried out loud: `characters[2].quote`!
