# bc-BibleVerse.js
### A simple random Bible verse picker. It uses JavaScript and an array of Bible verses to choose a random verse out of the Bible.
The JavaScript libarary has only one function; it is very lightweight and shouldn't bog your website down at all. 

<img src="https://github.com/The-Best-Codes/bc-BibleVerse/assets/106822363/59ebe969-5857-4aac-8e23-580452f5dad3" alt="Bible in circuitry, AI image" ai="true" ai-type="Dalle-3" title="Does anyone ever look at hover titles?" target="_blank" style="border-radius: 15px" /> 


<br />

## Usage

### getRandomVerse()

The `getRandomVerse()` function has four parameters, three of which are booleans and one of which is a string. Below is a description of how to use each parameter.

#### showKey
>**Default Value:** `true`
>
>**Type:** Boolean
>
>**Options:** `true, false`

Determines whether or not the verse will be returned with its key (e.g., Genesis 1:1). Example:

>`true`:
>
>`Genesis 1:1: In the beginning God created the heaven and the earth.`
>
>`false`:
>
>`In the beginning God created the heaven and the earth.`

#### showVerse
>**Default Value:** `true`
>
>**Type:** Boolean
>
>**Options:** `true, false`

Determines whether the verse text will be included in the return value.

Example:

>`true`:
>
>`Genesis 1:1: In the beginning God created the heaven and the earth.`
>
>`false`:
>
>`Genesis 1:1`

#### separationCharacter
>**Default Value:** `': '`
>
>**Type:** String
>
>**Options:** Any string character

Specifies the character used to separate the verse key from the verse text. This can be changed to accommodate verses that contain colons or for stylistic preferences.

Example:

>Default `': '`:
>
>`Genesis 1:1: In the beginning God created the heaven and the earth.`
>
>Custom `' - '`:
>
>`Genesis 1:1 - In the beginning God created the heaven and the earth.`

#### keyAfterText
>**Default Value:** `false`
>
>**Type:** Boolean
>
>**Options:** `true, false`

Determines the position of the verse key in relation to the verse text.

Example:

>`true`:
>
>`In the beginning God created the heaven and the earth. Genesis 1:1.`
>(Assumes that `separationCharacter` is set to ' - '.)
>
>`false`:
>
>`Genesis 1:1: In the beginning God created the heaven and the earth.`

## Other
The list of verses currently only contains a few good ones. You can fork this repository and add your own to the list (JSON format for JS array), or make an issue and submit your favorite verse so I can add it. 
All verses were taken from the KJV.


© 2023 - 2043 by [Best_codes](https://the-best-codes.github.io/?github_bible_repo).

<img src="https://github.com/The-Best-Codes/bc-BibleVerse/assets/106822363/0318979d-cf88-485d-88b7-f633941ebe22" alt="Silly Mona Loading GIF" width=50 height=50 title="Why you hovering me??" target="_blank" onclick="console.log('Why you click me? I know this won't work, so why you looking at my README.md source??')" />
