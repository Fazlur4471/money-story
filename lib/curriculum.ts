export type ResourceKind = "video" | "article" | "course" | "community";

export type Resource = {
  label: string;
  url: string;
  kind: ResourceKind;
};

export type Term = { term: string; definition: string };

export type Lesson = {
  slug: string;
  day: number;
  module: ModuleName;
  title: string;
  hook: string;
  minutes: number;
  story: string[];
  terms: Term[];
  whyItMatters: string;
  action: string;
  resources: Resource[];
};

export type ModuleName =
  | "Foundations"
  | "Debt & Credit"
  | "Growing Your Money"
  | "Planning Ahead";

export const MODULE_ORDER: ModuleName[] = [
  "Foundations",
  "Debt & Credit",
  "Growing Your Money",
  "Planning Ahead",
];

const yt = (query: string): string =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;

const KHAN_FINLIT =
  "https://www.khanacademy.org/college-careers-more/financial-literacy";
const KHAN_PERSONAL =
  "https://www.khanacademy.org/college-careers-more/personal-finance";
const INVESTOPEDIA_GUIDE =
  "https://www.investopedia.com/guide-to-financial-literacy-4800530";
const RPF_WIKI = "https://www.reddit.com/r/personalfinance/wiki/index/";
const NERDWALLET = "https://www.nerdwallet.com/";
const THE_BALANCE = "https://www.thebalancemoney.com/";
const INVESTOR_GOV = "https://www.investor.gov/";
const CFPB = "https://www.consumerfinance.gov/";

export const lessons: Lesson[] = [
  {
    slug: "the-money-story-begins",
    day: 1,
    module: "Foundations",
    title: "The Money Story Begins",
    hook: "Why nobody taught you about money — and why that's not your fault.",
    minutes: 15,
    story: [
      "Picture two kids. Both grow up watching adults spend money all day — at shops, on phones, at petrol stations. Both hear the same sentence at some point: \"Money doesn't grow on trees.\" But only one of them ever gets shown WHERE the tree is, or how to plant one.",
      "Here's the strange part: for over a century, schools taught arithmetic, geography, even how to write in cursive — but not how money actually works. Not because money is complicated, but because nobody put it in the syllabus. Banks prefer you don't ask too many questions. Employers prefer you don't negotiate. And the economy runs quite smoothly on people who earn, spend, and never quite work out where it all goes.",
      "So the first chapter of your money story isn't about numbers. It's about noticing the story you already have. Maybe money was \"stressful\" in your house. Maybe it was \"for responsible people, and I'm not one.\" Maybe it was never discussed at all. Everyone has a money story — it's just usually written by someone else, in invisible ink.",
      "This course is a 12-day reset. Each day is one idea, told as a story you could explain to a ten-year-old, sized for 15–20 minutes. No jargon walls, no \"buy my course,\" no pretending a latte is why you're not rich. By the end you'll have an emergency jar, a debt plan, a compound-interest habit, and a rough map of retirement — all in plain language.",
      "Rule zero: there are no dumb money questions here. The only dumb money question is the one you never ask. Ready? Turn the page.",
    ],
    terms: [
      {
        term: "Financial literacy",
        definition:
          "The set of skills that lets you earn, spend, save, borrow, and invest without being tricked — or surprised.",
      },
      {
        term: "Money mindset",
        definition:
          "The beliefs you absorbed about money as a kid. They quietly drive decisions until you drag them into the light.",
      },
    ],
    whyItMatters:
      "You can't fix a system you've never looked at. Day 1 is just looking — that alone changes how the other 11 lessons land.",
    action:
      "Write down the first sentence about money you remember hearing as a kid. Keep it somewhere — you'll compare it on Day 12.",
    resources: [
      {
        label: "Khan Academy — Financial Literacy (free course)",
        url: KHAN_FINLIT,
        kind: "course",
      },
      {
        label: "Tina Huang — Financial Literacy in 63 Minutes",
        url: "https://www.youtube.com/watch?v=ouvbeb2wSGA",
        kind: "video",
      },
      {
        label: "Investopedia — Guide to Financial Literacy",
        url: INVESTOPEDIA_GUIDE,
        kind: "article",
      },
    ],
  },
  {
    slug: "budgeting-envelopes",
    day: 2,
    module: "Foundations",
    title: "The Envelope System",
    hook: "Budgeting isn't a diet — it's giving your money a job before it wanders off.",
    minutes: 15,
    story: [
      "Imagine you get your pocket money on Monday: ten dollars, all in your hand. By Wednesday it's gone and you can't say where. Now imagine a different Monday: you take ten envelopes, label them — snacks, books, fun, saving — and drop the money in before the week starts. By Wednesday you might be broke, but you're broke ON PURPOSE. That's the whole secret of budgeting.",
      "A budget is not a punishment and it's not a spreadsheet hobby (though spreadsheets are allowed). It's a plan you make while calm, for the person you'll be later — the one who's tired on Thursday and tempted by shiny things. Adults call this \"paying yourself first\": the moment money arrives, the savings envelope gets filled before anything else gets a chance.",
      "Try the modern envelope version: one bank account for bills, one for spending, one for goals — or if your bank makes that annoying, three buckets in one account with names. The point isn't the app. The point is that every dollar has a name by the time the week starts.",
      "The most common beginner mistake: writing a budget that assumes you'll become a different person. You won't. You'll still want takeaways and impulse buys. So the fun envelope is not optional — it's the reason the whole system survives past week two. A budget without fun is a diet with no dessert: it lasts exactly until Friday.",
      "Your first version will be wrong. That's fine. Adjust it next Sunday — that weekly ten-minute \"money date\" is the habit that separates people who budget from people who tried budgeting.",
    ],
    terms: [
      {
        term: "Budget",
        definition:
          "A plan for where this month's money goes, made before it goes. Not a record of regret.",
      },
      {
        term: "Pay yourself first",
        definition:
          "Automatically moving money to savings the day you get paid — before spending gets a chance.",
      },
      {
        term: "50/30/20 rule",
        definition:
          "A rough split: 50% needs, 30% wants, 20% savings/debt. A starting point, not a commandment.",
      },
    ],
    whyItMatters:
      "Most money problems aren't income problems — they're naming problems. Dollars with a name don't disappear.",
    action:
      "Split your next income into three named buckets (bills / spending / goals) and write the 50/30/20 split next to them as a sanity check.",
    resources: [
      {
        label: "r/personalfinance wiki — Budgeting",
        url: RPF_WIKI,
        kind: "community",
      },
      {
        label: "YouTube — envelope budgeting explained simply",
        url: yt("envelope budgeting system explained"),
        kind: "video",
      },
      { label: "NerdWallet — budgeting guides", url: NERDWALLET, kind: "article" },
    ],
  },
  {
    slug: "rainy-day-jar",
    day: 3,
    module: "Foundations",
    title: "The Rainy-Day Jar",
    hook: "An emergency fund is not savings — it's a force field around your other plans.",
    minutes: 12,
    story: [
      "Two people, same salary, same flat tyre. Person A puts it on a credit card at 24% interest, misses a payment, and their credit score dips — all because of one bad Tuesday. Person B opens the boot, finds their emergency jar, pays for the tyre, and life continues. Same storm. Different umbrellas.",
      "An emergency fund is money set aside for exactly three things: you lose income, an essential breaks, or an urgent need appears (a flight home for family, a laptop you work on). It is NOT for holidays, sales, or \"I deserve it\" — those are goals, and they get their own envelopes.",
      "How much? Don't shout \"three months' expenses!\" and freeze. Start absurdly small: your first milestone is $500, because $500 stops most small emergencies from becoming credit-card emergencies. Then work toward one month of essential costs, then three. Each milestone is a level of armour.",
      "Where does it live? A separate savings account — ideally one that pays some interest — that you can reach in a day without penalties. If it's tangled up in investments you might be forced to sell at the worst moment. The jar must be boring and instantly reachable. Boring is the feature.",
      "The beautiful side effect: once the jar exists, you stop living one bad day from disaster — and decisions get calmer. You negotiate from strength. You sleep better. The rainy-day jar is quietly the highest-return money you'll ever hold, because it pays out in avoided catastrophes.",
    ],
    terms: [
      {
        term: "Emergency fund",
        definition:
          "Cash reserved for true emergencies only — accessible within days, never invested, never spent on wants.",
      },
      {
        term: "Sinking fund",
        definition:
          "Money saved gradually for a known future cost (laptop, dentist, deposit) — planned, not panicked.",
      },
    ],
    whyItMatters:
      "One flat tyre shouldn't restart your financial life. The jar converts bad luck from a crisis into an inconvenience.",
    action:
      "Open a separate savings account today (or name one \"Jar\") and transfer whatever you can — even $20 is Day 1 of the force field.",
    resources: [
      {
        label: "Khan Academy — Emergency savings lessons",
        url: KHAN_PERSONAL,
        kind: "course",
      },
      {
        label: "YouTube — how much emergency fund do you need",
        url: yt("emergency fund how much beginner"),
        kind: "video",
      },
      {
        label: "The Balance — emergency fund basics",
        url: THE_BALANCE,
        kind: "article",
      },
    ],
  },
  {
    slug: "cookie-thief",
    day: 4,
    module: "Foundations",
    title: "The Cookie Thief",
    hook: "Inflation is the quiet thief that steals cash while you're looking the other way.",
    minutes: 12,
    story: [
      "You have a jar with 100 cookies in it. Every year, someone quietly steals 3 of them — but they also repaint the jar so it says \"100 cookies\" with a little sticker. For a while you believe you still have 100. That's inflation: your money keeps its number but loses its snacks.",
      "If prices rise ~3% a year, $100 in your pocket buys about $97 of stuff next year, and roughly $74 of stuff in ten years. The money didn't move. The PRICES did. This is why hiding cash under the mattress is a slow-motion loss — the mattress pays negative interest.",
      "This isn't all bad news. Inflation is also why your grandparents' house cost less than your phone, and why wages and prices tend to drift up together. The thief is manageable — you just have to stop sleeping with the cookie jar open. Money that sits in a savings account paying 0.5% while inflation runs at 3% is losing ~2.5% a year in real terms.",
      "The two weapons you'll build later in this course: (1) savings accounts and investments that at least TRY to outpace the thief, and (2) skills that raise your income — the one number that reliably beats inflation for most people. Notice inflation at the shop this week; once you see it, you can't unsee it.",
      "One warning about inflation anxiety: it should make you a long-term thinker, not a panic buyer. The people inflation hurts most are those holding only cash for decades — which you now know how to fix.",
    ],
    terms: [
      {
        term: "Inflation",
        definition:
          "The general rise in prices over time — equivalently, the fall in what each unit of cash buys.",
      },
      {
        term: "Purchasing power",
        definition:
          "How much real stuff your money can buy. Inflation eats this even when your balance doesn't change.",
      },
      {
        term: "Real return",
        definition:
          "Your investment return minus inflation. The number that actually matters.",
      },
    ],
    whyItMatters:
      "Cash that isn't growing is shrinking. Understanding the thief is step one of refusing to be its victim.",
    action:
      "Pick one thing you buy often (coffee, bus fare, bread). Look up what it cost 5–10 years ago — feel the thief in the wild.",
    resources: [
      {
        label: "Khan Academy — Inflation lessons",
        url: KHAN_PERSONAL,
        kind: "course",
      },
      {
        label: "YouTube — inflation explained simply",
        url: yt("inflation explained simply for beginners"),
        kind: "video",
      },
      {
        label: "Investopedia — financial literacy guide",
        url: INVESTOPEDIA_GUIDE,
        kind: "article",
      },
    ],
  },
  {
    slug: "debt-snowball-avalanche",
    day: 5,
    module: "Debt & Credit",
    title: "The Snowball and the Avalanche",
    hook: "Two proven ways to kill debt. One is math. One is psychology. Both work.",
    minutes: 18,
    story: [
      "Imagine you owe three friends: $500 at 0% interest, $2,000 at 10%, and $1,000 at 20%. You have $300 spare each month to repay. Two generals want to lead your campaign.",
      "General Avalanche says: \"Attack the 20% debt first. Every month we throw everything at the highest interest rate, then roll down. Mathematically optimal — we pay the least total interest.\" General Snowball says: \"Attack the $500 first, regardless of rate. Clear it fast, celebrate, then roll that payment into the next debt. Momentum wins.\"",
      "Here's the twist: research on real people shows Snowball often wins in practice — not despite being \"worse math,\" but because quick wins keep humans going past month three, which is where most debt plans die. The best debt snowball simulator is your willingness to keep paying on a boring Tuesday in October.",
      "The mechanics are the same for both: (1) list every debt with balance, minimum payment, and rate; (2) pay all minimums; (3) throw every spare dollar at ONE target debt; (4) when it's dead, roll its payment into the next — each victory grows your monthly attack power. This rolling payment is the snowball/avalanche engine.",
      "Two rules. First, stop digging: while you repay, no new debt — cancel the auto-increase on the credit card if needed. Second, watch out for fake deals: 0% \"buy now pay later\" that charges fees late, minimum payments that only cover interest (your balance will sit like a stone). If minimums don't reduce the balance, you need a plan, not patience.",
      "A warning on consolidation loans: they help ONLY if the rate drops AND you close the cards you paid off. Otherwise it's moving the deck chairs — same debt, new label. Choose your general today. Avalanche if numbers motivate you; Snowball if wins do.",
    ],
    terms: [
      {
        term: "APR",
        definition:
          "Annual interest rate — the yearly cost of borrowing. The number your debt diet attacks first.",
      },
      {
        term: "Minimum payment",
        definition:
          "The smallest monthly payment that keeps the lender happy. Often mostly interest — paying only this keeps you stuck.",
      },
      {
        term: "Debt avalanche",
        definition: "Highest interest rate first. Cheapest in total, requires discipline.",
      },
      {
        term: "Debt snowball",
        definition:
          "Smallest balance first. Slightly costlier, far more motivating — momentum compounding.",
      },
    ],
    whyItMatters:
      "Debt at 20%+ APR is a fire. Interest compounds against you daily — but a written payoff plan converts that fire into a countdown.",
    action:
      "List every debt: balance, rate, minimum. Mark which general you're following (Snowball or Avalanche) and your first target.",
    resources: [
      {
        label: "r/personalfinance wiki — Debt",
        url: RPF_WIKI,
        kind: "community",
      },
      {
        label: "YouTube — snowball vs avalanche payoff walkthrough",
        url: yt("debt snowball vs debt avalanche explained"),
        kind: "video",
      },
      { label: "CFPB — debt & credit resources", url: CFPB, kind: "article" },
    ],
  },
  {
    slug: "credit-score-report-card",
    day: 6,
    module: "Debt & Credit",
    title: "Your Financial Report Card",
    hook: "A credit score is a three-digit reputation — and like all reputations, it's built on habits.",
    minutes: 15,
    story: [
      "At school, some kids got report cards that opened doors: scholarships, trust, the good library key. Your credit score is the adult version — a 300–850 number that lenders check before deciding how risky you are and what rate you pay. It's not a measure of how rich you are. It's a measure of how reliably you repay.",
      "What's inside it? Roughly: your payment history (~35%) — do you pay on time, every time; how much you owe vs how much you have available (~30%) — the credit utilisation ratio; length of history (~15%) — old accounts are good; new accounts (~10%) — many recent applications look desperate; and mix (~10%). Notice something? Almost none of it requires being wealthy. It requires being CONSISTENT.",
      "The utilisation rule surprises people: if your card limit is $1,000 and you carry $900, you're at 90% — the score treats that as alarm bells. Keep reported balances under ~30% (under 10% is even better) and pay BEFORE the statement date, because that's what gets reported. Paying in full is still the goal; the statement date is just when the photograph is taken.",
      "The oldest trick in the book that still works: autopay the minimum on everything (so no late payment ever exists), then manually overpay the debt you're actually attacking. Never close your oldest card unless it charges you — history length matters. And checking YOUR score? Free and harmless. Lenders checking it repeatedly? Different story — rate-shop within a short window when applying for loans.",
      "Think of it as gardening, not crisis management: water it monthly and it grows quietly. Ignore it and the weeds (one missed payment) stay visible for seven years.",
    ],
    terms: [
      {
        term: "Credit score",
        definition:
          "A 300–850 summary of how you've handled borrowed money. Higher = cheaper borrowing and more trust.",
      },
      {
        term: "Credit utilisation",
        definition:
          "Balance ÷ credit limit. Keep it under 30% (ideally under 10%) for a healthy score.",
      },
      {
        term: "Hard inquiry",
        definition:
          "A lender's check when you apply for credit — a small, temporary score dip. Rate-shop in bursts.",
      },
    ],
    whyItMatters:
      "Your score decides the interest rate on your future car, flat, and sometimes job. It's reputation you can raise in months.",
    action:
      "Turn on autopay for at least the minimum of every debt you hold, and check your current score from a free source.",
    resources: [
      { label: "CFPB — understanding your credit", url: CFPB, kind: "article" },
      {
        label: "r/personalfinance wiki — Credit",
        url: RPF_WIKI,
        kind: "community",
      },
      {
        label: "YouTube — credit score explained simply",
        url: yt("credit score explained simply for beginners"),
        kind: "video",
      },
    ],
  },
  {
    slug: "magic-money-tree",
    day: 7,
    module: "Growing Your Money",
    title: "The Magic Money Tree",
    hook: "Compound interest is the only force in finance that works while you sleep — if you give it time.",
    minutes: 18,
    story: [
      "Two sisters start planting a magic tree at 25. Maya plants $200 a month and stops after 10 years — total put in: $24,000. Lena starts at 35, plants $200 a month for 30 years — total put in: $72,000. At a typical long-run market return (~8% a year), Lena ends with roughly triple Maya's pile. Wait — Maya STOPPED earlier, planted LESS, and still loses? That's the money tree's trick: it pays its fruit on TIME, not just deposits.",
      "Here's how a tree works. Year one: your $1,000 grows 8% → $1,080. Year two: you earn 8% on $1,080 — including last year's fruit. Interest earning interest is \"compounding.\" It feels boring for the first five years (a pot plant), reasonable for ten (a bush), absurd for twenty (an orchard). Einstein allegedly called it the eighth wonder — whether he said it or not, the maths doesn't care who's credited.",
      "Flip the coin and it's YOUR enemy too: credit card debt compounds the same way, against you. $1,000 at 20% APR, minimum payments only, can take years and multiply the sticker price. The tree doesn't care which side of the ledger you're on — it just grows what you feed it.",
      "The sobering part: because time is the main ingredient, a 25-year-old starting with $100/month often beats a 40-year-old starting with $500/month. Not because they're richer — because the tree had more springs. This is why \"I'll start when I earn more\" is the most expensive sentence in finance.",
      "Play with a compound calculator today (resources below). Move the \"years\" slider and watch the curve bend. Once you've seen the bend with your own eyes, saving stops feeling like sacrifice and starts feeling like watering.",
    ],
    terms: [
      {
        term: "Compound interest",
        definition:
          "Interest earned on your deposits PLUS on previously earned interest — growth feeding on itself.",
      },
      {
        term: "Principal",
        definition: "The original money you put in, before any growth.",
      },
      {
        term: "Time horizon",
        definition:
          "How long until you need the money. Longer horizon = more compounding = more smooth sailing possible.",
      },
    ],
    whyItMatters:
      "Compounding converts consistency into wealth. The earlier you plant, the less you ever need to plant.",
    action:
      "Run one compound calculator: $100/month at 8% for 10, 20, and 30 years. Screenshot the three numbers.",
    resources: [
      {
        label: "YouTube — compound interest visualized",
        url: yt("compound interest explained visual"),
        kind: "video",
      },
      {
        label: "Khan Academy — Interest & debt lessons",
        url: KHAN_PERSONAL,
        kind: "course",
      },
      {
        label: "Investopedia — compound interest calculator",
        url: "https://www.investopedia.com/calculator/compoundinterest.aspx",
        kind: "article",
      },
    ],
  },
  {
    slug: "bank-behind-curtain",
    day: 8,
    module: "Growing Your Money",
    title: "Behind the Bank's Curtain",
    hook: "What your bank actually does with your money — and how to make it work harder.",
    minutes: 12,
    story: [
      "You put $1,000 in a savings account and feel safe. Here's the play behind the curtain: the bank lends your $1,000 out — to someone's car loan at 9% — while paying you 0.5% for the privilege of holding it. The gap is their profit. That's not a scam; it's the entire banking business model. But it explains why your savings account pays so little by default.",
      "Your job is to move your cash to where the competition is. Online banks and savings accounts often pay several times more than high-street ones, because their costs are servers, not marble lobbies. Check the APY — annual percentage yield — and note whether it's a promotional rate that drops after three months. The rate is negotiable by choosing; loyalty pays nothing.",
      "Safety first: in the US, deposits at insured banks are protected up to $250,000 per depositor by the FDIC (UK: FSCS; EU: national schemes). If something offers way above-market returns, that's not a better bank — that's usually a warning. Real savings rates live within sight of each other; outliers are stories, not deals.",
      "The simple system: (1) everyday account for bills and spending; (2) high-yield savings account for your rainy-day jar and near-term goals; (3) anything you won't touch for 5+ years doesn't live in a bank at all — that's investing territory, next lessons. Money has a time horizon, and each horizon has a natural home.",
      "Five minutes of rate-checking beats five years of low interest. The curtain is open now — no reason to stand behind it.",
    ],
    terms: [
      {
        term: "APY",
        definition:
          "Annual Percentage Yield — what your savings actually earn in a year including compounding. Compare this, not the headline rate.",
      },
      {
        term: "FDIC insurance",
        definition:
          "US government protection of bank deposits up to $250k per depositor per bank. The definition of \"boring and safe.\"",
      },
      {
        term: "Spread",
        definition:
          "The gap between what a bank pays savers and charges borrowers. Their profit — your shopping point.",
      },
    ],
    whyItMatters:
      "The difference between 0.5% and 4% APY on your emergency fund is money for doing nothing but switching accounts.",
    action:
      "Check your current savings APY and the best rate you can find in 5 minutes. Open the better account if the gap is real.",
    resources: [
      { label: "FDIC — BankFind (verify insurance)", url: "https://www.fdic.gov/", kind: "article" },
      {
        label: "NerdWallet — best high-yield savings",
        url: NERDWALLET,
        kind: "article",
      },
      {
        label: "YouTube — how banks make money",
        url: yt("how banks make money with your deposits"),
        kind: "video",
      },
    ],
  },
  {
    slug: "whole-grocery-store",
    day: 9,
    module: "Growing Your Money",
    title: "Owning the Whole Grocery Store",
    hook: "Index funds let you stop picking winners and own the winners by default.",
    minutes: 20,
    story: [
      "It's a school talent show and you can bet on ONE act — or buy a ticket to every act in the building. Picking one act feels clever (what if it's the next superstar?), but most acts are mediocre, and betting on one means one bad violin recital can wipe you out. Buying the whole building means every average act, PLUS the superstars, carry your ticket. That's an index fund.",
      "An index fund takes the \"whole building\" idea seriously: it buys a slice of every company in an index — like the S&P 500, the 500 biggest US companies. Instantly you own Apple, the grocery chains, the pharma labs — not because you picked them, but because they're in the index. Your one decision was: own the market.",
      "Why does this beat stock-picking for normal humans? Three reasons. Diversification — one company can bankrupt you, but the whole market has recovered from every crash in history so far (with patience). Fees — a cheap index fund charges ~0.03% a year; hot-picked funds charge 1%+ and, over decades, that \"small\" difference devours six figures. Honesty — most actively picked funds fail to beat the index over 15 years. Wall Street's pros struggle at their own game; we don't need to play it.",
      "How do you actually buy one? Through a brokerage account (or the pension plan your employer offers), searching for a low-fee, broad market fund — the ticker for the classic S&P 500 fund is something like VOO or FXAIX (examples, not advice). You don't need to pick the \"right\" one on day one; you need a low fee, broad coverage, and a plan to keep buying month after month, no matter what the news says.",
      "The strategy has a name — passive investing — and a philosophy: you can't predict which single act will shine, but owning the whole show means the show's growth becomes yours. Time does the heavy lifting (hello again, magic money tree).",
    ],
    terms: [
      {
        term: "Index fund",
        definition:
          "A fund that simply holds everything in a market index instead of trying to beat it. Cheap, diversified, boring — on purpose.",
      },
      {
        term: "S&P 500",
        definition:
          "An index of the 500 largest US companies. The most common \"own the whole building\" yardstick.",
      },
      {
        term: "Expense ratio",
        definition:
          "The fund's annual fee as a percentage. 0.03% is cheap; 1%+ is expensive. It compounds against you.",
      },
      {
        term: "Brokerage account",
        definition:
          "The account through which you buy funds and stocks. Choose one with low fees and insurance on deposits.",
      },
    ],
    whyItMatters:
      "Stock-picking is a game pros lose most of the time. Index funds hand you the market's growth with fees near zero.",
    action:
      "Look up the expense ratio of the default fund inside your workplace pension or the S&P 500 fund on your broker app. Just look — no purchase today.",
    resources: [
      {
        label: "Humphrey Yang — Stock Market for Beginners",
        url: "https://www.youtube.com/watch?v=bb6_M_srMBk",
        kind: "video",
      },
      {
        label: "Netflix Explained — The Stock Market",
        url: "https://www.youtube.com/watch?v=1Qs6q__PUF4",
        kind: "video",
      },
      {
        label: "Khan Academy — Finance & capital markets",
        url: "https://www.khanacademy.org/economics-finance-domain/core-finance",
        kind: "course",
      },
      { label: "Investopedia — index fund basics", url: "https://www.investopedia.com/", kind: "article" },
    ],
  },
  {
    slug: "egg-basket",
    day: 10,
    module: "Growing Your Money",
    title: "The Basket Rule",
    hook: "Risk and return are dating — you need to know how serious they are before you commit.",
    minutes: 15,
    story: [
      "A farmer brings two baskets to market. Basket A holds one giant egg — from her only prize hen. Basket B holds fifty eggs from fifty hens. If a fox gets into the coop at night, Basket A's owner is ruined; Basket B's owner loses 2% of her stock and shrugs. Same farm. Different survival.",
      "Investing has a word for this: diversification. Don't put everything into one company, one sector, one country, one friend's startup. The index fund from yesterday already spreads you across 500 companies — that's why it's basket B. Extra rules: diversify across asset types too (shares, cash, maybe bonds), because when shares dive, bonds and cash behave differently — they don't all fall together.",
      "Now the dating part: risk and return. Money in a jar has almost zero risk and loses to inflation (you've met the thief). Shares swing wildly short-term but have historically out-earned everything else long-term. The trade-off: to earn more, you must tolerate your basket's value wobbling — sometimes badly. The 2022 stock market fell roughly a third of its value and recovered. People who sold at the bottom locked in the loss; people who kept watering recovered and then some.",
      "Your personal risk capacity isn't a feeling — it's a formula: time until you need the money, income stability, and stomach strength. Money for a flat deposit in 2 years = not for stocks. Money for retirement in 30 years = stocks have time to recover from anything. Money you'll need tomorrow should never be in the fox's reach.",
      "The three-question check before any investment: (1) What's this money for and when? (2) If it lost 30% next year, would I need it? (3) Is my basket spread across many hens? If any answer is shaky, slow down.",
    ],
    terms: [
      {
        term: "Diversification",
        definition:
          "Spreading money across many assets so no single failure can sink you. The free lunch of investing.",
      },
      {
        term: "Volatility",
        definition:
          "How wildly prices swing. Higher potential return usually means more rollercoaster.",
      },
      {
        term: "Asset allocation",
        definition:
          "The split between shares, bonds, cash etc. Your single biggest decision — set by time horizon.",
      },
    ],
    whyItMatters:
      "Most investing disasters aren't wrong picks — they're single bets. One egg. One fox.",
    action:
      "Write your three answers: what this money is for, when you'll need it, and whether a 30% drop would force you to sell.",
    resources: [
      {
        label: "Khan Academy — Risk & diversification",
        url: "https://www.khanacademy.org/economics-finance-domain/core-finance",
        kind: "course",
      },
      {
        label: "YouTube — diversification explained with eggs",
        url: yt("diversification explained investing beginners"),
        kind: "video",
      },
      { label: "The Balance — risk tolerance guide", url: THE_BALANCE, kind: "article" },
    ],
  },
  {
    slug: "time-machine-accounts",
    day: 11,
    module: "Planning Ahead",
    title: "The Time Machine Accounts",
    hook: "Retirement accounts let the government PAY you to save. Skipping them is leaving money on the table.",
    minutes: 18,
    story: [
      "Imagine a shop where everything is 20% off — but only if you're buying for Future You. That shop is real: it's called a retirement account, and the discount is tax.",
      "Two main doors. A 401(k) (US; workplace pension elsewhere) is set up by your employer: money comes out of your pay BEFORE tax, grows tax-free inside, and you pay tax when you withdraw it decades later. If your employer matches your contributions — say 50% up to 6% of salary — that match is a guaranteed instant return no investment can promise. NOT taking it is refusing a raise.",
      "An IRA is the door you open yourself: an account at a broker with the same tax-superpowers, with an annual contribution limit. The Roth flavor flips the deal — you pay tax now, withdraw everything later TAX-FREE. Which is better? If you're early in your career (lower tax now than later), Roth is attractive; if you're in your peak-earning years, the upfront deduction shines. The perfect answer depends on your future taxes — which none of us can see. Either door beats the street.",
      "Why \"time machine\"? Because of the magic money tree on maximum volume: $300/month starting at 25 versus 35 (at typical long-run returns) can differ by hundreds of thousands by retirement. The account type multiplies the tree's power; the STARTING DATE decides the forest.",
      "The step order most people follow: (1) grab the full employer match — free money; (2) kill high-interest debt; (3) fill your emergency jar; (4) then max what you can into these accounts. You don't need to be perfect. You need to be automatic: set the contribution on payday and never think about it again. Future You — the one who benefits — will thank Present You in a language of zero stress.",
    ],
    terms: [
      {
        term: "401(k) / workplace pension",
        definition:
          "Pre-tax retirement savings through your employer, often with a matching contribution — instant return.",
      },
      {
        term: "IRA",
        definition:
          "A tax-advantaged retirement account you open yourself, with annual contribution limits.",
      },
      {
        term: "Roth",
        definition:
          "Pay tax now, withdraw later tax-free. Great when you expect taxes to be higher in the future.",
      },
      {
        term: "Employer match",
        definition:
          "Free money your employer adds to your pension. Taking the full match is rule one of personal finance.",
      },
    ],
    whyItMatters:
      "Tax breaks + employer match + decades of compounding = the highest-certitude wealth builder available to employees.",
    action:
      "Check two numbers: what % you currently contribute to your pension/401(k), and what % your employer matches. If match > your %, fix it this week.",
    resources: [
      {
        label: "SEC Investor.gov — retirement accounts",
        url: INVESTOR_GOV,
        kind: "article",
      },
      {
        label: "YouTube — 401k vs IRA for beginners",
        url: yt("401k vs IRA explained for beginners"),
        kind: "video",
      },
      { label: "r/personalfinance wiki — prime directive", url: RPF_WIKI, kind: "community" },
    ],
  },
  {
    slug: "community-bucket",
    day: 12,
    module: "Planning Ahead",
    title: "The Community Bucket",
    hook: "Taxes, explained without rage: where the money goes, and the legal ways to owe less.",
    minutes: 15,
    story: [
      "Picture a village where everyone drops a coin in a big bucket every month. The bucket builds the roads, pays the teachers, runs the hospital, and puts out fires. That bucket is tax. You can argue all day about who should carry it — and democracies do — but understanding HOW it fills and empties makes you a better adult, not a political one.",
      "Here's what actually surprises people: your salary and your take-home pay aren't the same number, and that's by design. In many countries income tax comes in BANDS — you pay 0% on the first chunk, a low rate on the next, a higher rate only on the amount ABOVE each line. Earning into a higher band never makes you poorer overall — the new rate applies only to the slice in that band. The myth \"I got a raise and took home less\" is almost always wrong; it usually means a bonus got taxed at a flat supplemental rate and settles at refund time.",
      "Two streams of income, treated differently: money you EARN gets income tax; money your money EARNS (interest, dividends, capital gains) is taxed too — often at friendlier rates, which is one more reason investing beats hoarding cash. Tax-advantaged accounts (yesterday's lesson) are the legal cheat codes: governments literally built them to incentivise saving for house, health, and retirement.",
      "How to owe less legally: contribute to those retirement accounts; claim every deduction your situation allows (home office, student interest, child costs — rules vary by country); keep records all year instead of scrambling in April; and if you're freelance, set aside a slice of EVERY payment (20–30% is a common rough rule) in a separate \"government envelope\" — so April is boring, not frightening.",
      "Taxes fund the bucket; loopholes are cheating and cheating has interest. Your goal is not zero tax — it's never overpaying by accident.",
    ],
    terms: [
      {
        term: "Tax bracket / marginal rate",
        definition:
          "The rate applied to each SLICE of income above its threshold — not the whole salary at once.",
      },
      {
        term: "Withholding",
        definition:
          "Tax your employer deducts from each paycheche before it reaches you. April's bill is the reconciliation.",
      },
      {
        term: "Deduction",
        definition:
          "A legal amount subtracted from taxable income (retirement contributions, qualifying costs) — reducing what you owe.",
      },
      {
        term: "Capital gains tax",
        definition:
          "Tax on profit from selling investments — usually gentler than income tax rates.",
      },
    ],
    whyItMatters:
      "Tax is your largest lifetime expense category. Understanding bands and deductions is a permanent payrise.",
    action:
      "Find your country's official tax authority site, check your current withholding/marginal band, and set up a \"% of every payment\" transfer rule.",
    resources: [
      { label: "IRS.gov (US official)", url: "https://www.irs.gov/", kind: "article" },
      { label: "GOV.UK income tax (UK official)", url: "https://www.gov.uk/income-tax", kind: "article" },
      {
        label: "YouTube — tax brackets explained simply",
        url: yt("tax brackets explained simply marginal"),
        kind: "video",
      },
      {
        label: "Khan Academy — Taxes lessons",
        url: KHAN_FINLIT,
        kind: "course",
      },
    ],
  },
];

export const getLesson = (slug: string): Lesson | undefined =>
  lessons.find((l) => l.slug === slug);

export const totalMinutes = lessons.reduce((sum, l) => sum + l.minutes, 0);
