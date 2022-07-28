//Get Elements
let start = document.querySelector(".message button");
let message = document.querySelector(".message");
let back = document.querySelector(".back");
let mainText = document.querySelector(".whiteBoard .mainText");
let restart = document.querySelector(".restart");
let again = document.querySelector(".results .again");
let input = document.querySelector(".writeArea");
let result = document.querySelector(".results");

console.log(again);

//variables
let seconds = 0;
let correctWords = 0;
let wrongWords = 0;
let totalWords = 0;
let timer = 0;

//paragraphs
let p1 =
	"It was necessary to shut the window: rain was striking the sill and splashing the parquet and armchairs. With a fresh, slippery sound, enormous silver specters sped through the garden, through the foliage, along the orange sand. The drainpipe rattled and choked. You were playing Bach. The piano had raised its lacquered wing, under the wing lay a lyre, and little hammers were rippling across the strings.";
let p2 =
	"I'm not like them, but I can pretend. The sun is gone, but I have a light. The day is done, but I'm having fun. I think I'm dumb, or maybe just happy. Think I'm just happy.";
let p3 =
	"Is Freedom what comes to mind when you think of being responsible? We are only responsible to one - ourselves. True connection is not possible between people if anyone involved does not hold themselves responsible for their life and emotions. Anytime that someone is playing victim or looking to another to make them whole they are blocking intimacy.";
let p4 =
	"If you are reading this remember you are beautiful, loved, amazing. I hope you had a beautiful day. If you didn't it is okay there is always tomorrow.";
let p5 =
	"Isaac and his mother lived alone in a small house on a hill. Isaac kept to himself, drawing pictures and playing with his toys as his mom watched Christian broadcasts on the television. Life was simple, and they were both happy. That was, until the day Isaac's mom heard a voice from above.";
let p6 =
	"Think of a rock polisher - one of those drums, goes round and round, rolls twenty-four-seven, full of water and rocks and gravel. Grinding it all up. Round and round. Polishing those ugly rocks into gemstones. That's the earth. Why it goes around. We're the rocks. And what happens to us - the drama and pain and joy and war and sickness and victory and abuse - why, that's just the water and sand to erode us. Grind us down. To polish us up, nice and bright.";
let p7 =
	"There is a race between mankind and the universe. Mankind is trying to build bigger, better, faster, and more foolproof machines. The universe is trying to build bigger, better, and faster fools. So far the universe is winning.";
let p8 =
	"Money can't buy you happiness? I am most definitely sure that money can buy you happiness. As long as you live near a store that sells ice cream, you're good to go!";
let p9 =
	"Tonight, you look under your bed, and lo and behold, you find a monster! And you're immediately eaten. Now, if you hadn't looked for the monster, you wouldn't have found it and you'd still be happy in your bed, instead of being slowly digested in the stomach sac of the creature. But, with any luck, your sister or your brothers might have heard your screams, and your endeavor will serve as a valuable lesson to them.";
let p10 =
	"In an intro to one of our early albums, there's a line that says, \"My heart stopped when I was maybe nine or ten.\" Looking back, I think that's when I began to worry about what other people thought of me, and started seeing myself through their eyes. I stopped looking up at the night skies, the stars. I stopped daydreaming. Instead, I just tried to jam myself into the molds that other people made. Soon, I began to shut out my own voice, and started to listen to the voices of others.";
let p11 =
	"I'm not trying to convince you to join the Russian mafia, but have you fully considered the benefits? I just think you need to keep a more open mind. You may not personally choose this, but don't criticize others for doing so.";
let p12 =
	'If the customer ordered a statue of a hunter dominating a ferocious beast, they would receive a miniature statue of a distressed boar running for its life. And when the customer demanded an explanation, he would tell them: "When a formidable hunter closes in on a fierce beast, he may not show his face, but his imposing presence is enough to frighten the beast to its core."';
let p13 =
	"It may seem like we will never reach the distant galaxies millions of light years away; however, it is completely possible. What people are forgetting is that the faster you go the slower time passes. Millions of light years to an outside observer is an instant for a photon of light.";
let p14 =
	"Eventually, all things merge into one, and a river runs through it. The river was cut by the world's great flood and runs over rocks from the basement of time. On some of the rocks are timeless raindrops. Under the rocks are the words, and some of the words are theirs. I am haunted by waters.";
let p15 =
	"Normal people have an incredible lack of empathy. They have good emotional empathy, but they don't have that much empathy for the autistic kid who is screaming at a baseball game because he can't stand the sensory overload. Or the autistic kid having a meltdown in the school cafeteria because there's too much stimulation.";
let p16 =
	"Strength takes many forms, and the most obvious forms are not always the most significant. The men who create power make an indispensable contribution to the Nation's greatness, but the men who question power make a contribution just as indispensable, especially when that questioning is disinterested, for they determine whether we use power or power uses us.";
let p17 =
	"I believe I remember telling all you alive and otherwise what we needed was a suit of armour around the world! Remember that? Whether it impacted our precious freedoms or not - that's what we needed! I said, \"We'd lose.\" You said, \"We'll do that together too.\" And guess what, Cap? We lost. And you weren't there. But that's what we do, right? Our best work after the fact? We're the Avengers. Not the Prevengers.";
let p18 =
	"Realistically speaking, oftentimes, one's happiness comes at the expense of someone else's. Struggling, competing against each other... Happiness attained through victory certainly exists too. In that case, what can we do? Nothing. There are limits. Isn't it conceited to say you want to attain everything?";
let p19 =
	"As if that blind rage had washed me clean, rid me of hope; for the first time, in that night alive with signs and stars, I opened myself to the gentle indifference of the world. Finding it so much like myself, I felt that I had been happy and that I was happy again. For everything to be consummated, for me to feel less alone, I had only to wish that there be a large crowd of spectators the day of my execution and that they greet me with cries of hate.";
let p20 =
	"The thing about games is, players often say they don't care about story, but then if you took the story out, what would their reaction be? If no one cared about story, we'd all still be playing Pac-Man. There's nothing wrong with Pac-Man, but the point is, there's a genre of games in which you want to become part of that world.";
let paragraphs = [
	p1,
	p2,
	p3,
	p4,
	p5,
	p6,
	p7,
	p8,
	p9,
	p10,
	p11,
	p12,
	p13,
	p14,
	p15,
	p16,
	p17,
	p18,
	p19,
	p20,
];

//generate random prag.
function genePrag(arr) {
	let index = Math.floor(Math.random() * 20);
	return arr[index];
}

//split prag
function splitPrag() {
	let usedPrag = Array.from(genePrag(paragraphs));
	return usedPrag;
}

//create spans holding the letters of the parg
function createSpans(arr) {
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
		let span = document.createElement("span");
		let Text = document.createTextNode(arr[i]);
		span.className = i == 0 ? "wgreen" : "wbalck";
		span.appendChild(Text);
		mainText.appendChild(span);
		temp.push(span);
	}
	return temp;
}

function isValidKey(e) {
	var charCode = e.keyCode || e.which;
	if (charCode == 8) {
		console.log(e.code);
		return false;
	}
	return true;
}

//main funciton
function main() {
	let prag = createSpans(splitPrag());
	let i = 0;
	let j = 0;

	input.addEventListener("input", function (e) {
		if (input.value[j] == prag[i].innerHTML) {
			totalWords++;
			prag[i].className = "passedText";
			if (i < prag.length - 1) prag[i + 1].className = "wgreen";
			i++;
			j = input.value.length;
		} else {
			j = input.value.length;
			if (prag[i].className != "wred") {
				prag[i].className = "wred";
				wrongWords++;
			}
		}
		if (i >= prag.length) {
			clearInterval(timer);
			console.log(correctWords);
			console.log(wrongWords);
			console.log(totalWords);
			console.log(seconds);
			result.style.cssText = "width:715px; padding:20px";
			back.style.cssText = "z-index:2;";
			input.disabled = true;
			calcResults();
		}
	});
}

//invoke main
main();

//start button
start.addEventListener("click", function () {
	message.style.cssText = "display:none;";
	back.style.cssText = "display:none;";
	input.focus();
	timer = setInterval(function () {
		seconds++;
	}, 1000);
});

input.addEventListener("blur", function () {
	this.focus();
});

//restart button
restart.addEventListener("click", function () {
	location.reload(true);
});

//'take test again' button
again.addEventListener("click", function () {
	location.reload(true);
});

function calcResults() {
	document.querySelector(".results .speed span").innerHTML = (
		(totalWords - wrongWords) /
		5 /
		(seconds / 60)
	).toFixed(1);
	document.querySelector(".results .accuracy span").innerHTML = (
		((totalWords - wrongWords) /
			(seconds / 60) /
			(totalWords / (seconds / 60))) *
		100
	).toFixed(2);
}
