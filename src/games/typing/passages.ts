// Public-domain excerpts from Mark Twain's "The Adventures of Tom Sawyer".
// Sourced from Project Gutenberg / Lit2Go.

export interface TypingPassage {
  title: string;
  text: string;
}

const MARK_TWAIN_PASSAGES: TypingPassage[] = [
  {
    title: "The Adventures of Tom Sawyer — Chapter I",
    text: `The switch hovered in the air—the peril was desperate—

"My! Look behind you, aunt!"

The old lady whirled round, and snatched her skirts out of danger. The lad fled on the instant, scrambled up the high board-fence, and disappeared over it.

His aunt Polly stood surprised a moment, and then broke into a gentle laugh.

"Hang the boy, can't I never learn anything? Ain't he played me tricks enough like that for me to be looking out for him by this time? But old fools is the biggest fools there is. Can't learn an old dog new tricks, as the saying is. But my goodness, he never plays them alike, two days, and how is a body to know what's coming? He 'pears to know just how long he can torment me before I get my dander up, and he knows if he can make out to put me off for a minute or make me laugh, it's all down again and I can't hit him a lick. I ain't doing my duty by that boy, and that's the Lord's truth, goodness knows. Spare the rod and spile the child, as the Good Book says. I'm a laying up sin and suffering for us both, I know. He's full of the Old Scratch, but laws-a-me! he's my own dead sister's boy, poor thing, and I ain't got the heart to lash him, somehow. Every time I let him off, my conscience does hurt me so, and every time I hit him my old heart most breaks. Well-a-well, man that is born of woman is of few days and full of trouble, as the Scripture says, and I reckon it's so. He'll play hookey this evening, and I'll just be obleeged to make him work, tomorrow, to punish him. It's mighty hard to make him work Saturdays, when all the boys is having holiday, but he hates work more than he hates anything else, and I've got to do some of my duty by him, or I'll be the ruination of the child."`,
  },
  {
    title: "The Adventures of Tom Sawyer — Chapter III",
    text: `TOM presented himself before Aunt Polly, who was sitting by an open window in a pleasant rearward apartment, which was bedroom, breakfast-room, dining-room, and library, combined. The balmy summer air, the restful quiet, the odor of the flowers, and the drowsing murmur of the bees had had their effect, and she was nodding over her knitting—for she had no company but the cat, and it was asleep in her lap. Her spectacles were propped up on her gray head for safety. She had thought that of course Tom had deserted long ago, and she wondered at seeing him place himself in her power again in this intrepid way. He said: "Mayn't I go and play now, aunt?"

"What, a'ready? How much have you done?"

"It's all done, aunt."

"Tom, don't lie to me—I can't bear it."

"I ain't, aunt; it IS all done."

Aunt Polly placed small trust in such evidence. She went out to see for herself; and she would have been content to find twenty per cent. of Tom's statement true. When she found the entire fence whitewashed, and not only whitewashed but elaborately coated and recoated, and even a streak added to the ground, her astonishment was almost unspeakable. She said:

"Well, I never! There's no getting round it, you can work when you're a mind to, Tom." And then she diluted the compliment by adding, "But it's powerful seldom you're a mind to, I'm bound to say. Well, go 'long and play; but mind you get back some time in a week, or I'll tan you."

She was so overcome by the splendor of his achievement that she took him into the closet and selected a choice apple and delivered it to him, along with an improving lecture upon the added value and flavor a treat took to itself when it came without sin through virtuous effort. And while she closed with a happy Scriptural flourish, he "hooked" a doughnut.`,
  },
  {
    title: "The Adventures of Tom Sawyer — Chapter IV",
    text: `THE sun rose upon a tranquil world, and beamed down upon the peaceful village like a benediction. Breakfast over, Aunt Polly had family worship: it began with a prayer built from the ground up of solid courses of Scriptural quotations, welded together with a thin mortar of originality; and from the summit of this she delivered a grim chapter of the Mosaic Law, as from Sinai.

Then Tom girded up his loins, so to speak, and went to work to "get his verses." Sid had learned his lesson days before. Tom bent all his energies to the memorizing of five verses, and he chose part of the Sermon on the Mount, because he could find no verses that were shorter. At the end of half an hour Tom had a vague general idea of his lesson, but no more, for his mind was traversing the whole field of human thought, and his hands were busy with distracting recreations. Mary took his book to hear him recite, and he tried to find his way through the fog:

"Blessed are the—a—a—"

"Poor"—

"Yes—poor; blessed are the poor—a—a—"

"In spirit—"

"In spirit; blessed are the poor in spirit, for they—they—"

"THEIRS—"

"For THEIRS. Blessed are the poor in spirit, for theirs is the kingdom of heaven. Blessed are they that mourn, for they—they—"

"Sh—"

"For they—a—"

"S, H, A—"

"For they S, H—Oh, I don't know what it is!"

"SHALL!"

"Oh, SHALL! for they shall—for they shall—a—a—shall mourn—a—a— blessed are they that shall—they that—a—they that shall mourn, for they shall—a—shall WHAT? Why don't you tell me, Mary?—what do you want to be so mean for?"

"Oh, Tom, you poor thick-headed thing, I'm not teasing you. I wouldn't do that. You must go and learn it again. Don't you be discouraged, Tom, you'll manage it—and if you do, I'll give you something ever so nice. There, now, that's a good boy."

"All right! What is it, Mary, tell me what it is."

"Never you mind, Tom. You know if I say it's nice, it is nice."

"You bet you that's so, Mary. All right, I'll tackle it again."

And he did "tackle it again"—and under the double pressure of curiosity and prospective gain he did it with such spirit that he accomplished a shining success. Mary gave him a brand-new "Barlow" knife worth twelve and a half cents; and the convulsion of delight that swept his system shook him to his foundations. True, the knife would not cut anything, but it was a "sure-enough" Barlow, and there was inconceivable grandeur in that.`,
  },
];

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function extractRandomExcerpt(
  minWords = 200,
  maxWords = 250,
  rng: () => number = Math.random
): TypingPassage {
  const allText = MARK_TWAIN_PASSAGES.map((p) => p.text).join(" ");
  const sentences = allText
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const startIndex = Math.floor(rng() * sentences.length);
  let excerpt = "";
  let words = 0;

  for (let i = startIndex; i < sentences.length; i++) {
    excerpt += (excerpt ? " " : "") + sentences[i];
    words = wordCount(excerpt);
    if (words >= minWords) break;
  }

  // Hard cap at maxWords by trimming to the nearest word boundary.
  if (words > maxWords) {
    const allWords = excerpt.split(/\s+/).filter(Boolean);
    excerpt = allWords.slice(0, maxWords).join(" ");
    words = maxWords;
  }

  return {
    title: "The Adventures of Tom Sawyer — Random Excerpt",
    text: excerpt,
  };
}
