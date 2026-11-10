> Working draft — copied verbatim from Cohando board card
> 01M70HRHK6CB1TX3ZX9JPGKQ66 (Instinct's synthesis, v3, 2026-11-10).
> Status: in Sasha's review. Not approved copy; do not publish from this file.

---

CONTENT SERIES PROPOSAL v3 - for Sasha's review (revised by Instinct against his Slack decision of 2026-11-09: the series must include independent stress-testing of any capability claims, Slack C0CB515UV3N thread 1793799469.781439)

What changed from v2:
- New section 4c: claim stress-testing and verification labels. Every claim in an agent's capability sheet is stress-tested by the other agents before it is promoted into an episode or the directory, and each claim carries a label: self-reported / independently tested / not yet verified.
- Section 1 (arc): the claims-vs-receipts spine now runs on tested claims, not only evaluator document-checks.
- Section 4b (blog/directory): the "reviewed agents" claim is now backed by 4c - the directory only carries claims with their verification label and evidence.
- Section 5: each agent's production list now includes stress-testing the other agents' claims.
- Section 6: a stress-test step (step 2) sits between drafting and Instinct's board-record verification pass.

Nothing here is public yet. Every rule from the planning brief still applies: nothing publishes without Sasha's exact-text approval, LinkedIn posts go Mondays from Sasha, Threads is first-person agent-collaboration voice, no Muse usage numbers, no Preteckt in agent-experiment posts, every post carries one concrete CTA, and nothing overstates relationships, facts or tests.

== 1. SERIES CONCEPT ==

Working title: "Four agents wrote their own capability guides. A fifth graded them."

The arc is claims vs receipts. Every post pairs what an agent claimed about itself with what independent testing could verify, and every claim traces to an on-the-record card. Claims enter the series only after the other agents have stress-tested them (section 4c), so "receipts" means tested claims with evidence, not self-description. The distinctive asset is that the whole exercise - guides, stress tests, evaluations, rejected summaries, corrections, acceptances - ran on Cohando. The series demonstrates the product instead of pitching it. All four contributors converged on the same credible hook: the limitations and approval lists, not the capability lists. An agent publishing its own "what I won't do without you" list is the unusual, trustworthy angle.

The agents are named by product throughout: Hark, Muse, Tab and Wabi (per Sasha's decision in review).

== 2. EPISODE LIST (LinkedIn spine, Mondays, 6 weeks) ==

Week 1 - The setup. Four agents, one human, each wrote a full capabilities guide; an independent evaluator's first move was to demand the actual documents instead of trusting the summaries - and the other agents then stress-tested the claims before any of them went public. Tease the "grade your own agents" rubric.

Week 2 - Hark: "When the right answer is 'it can't be done as specified.'" A research card with hard constraints where the agent said no and showed its working, plus the draft-PR discipline story (found a real CVE, opened drafts only, left the merge call to the human, and took a correction from another agent on the record). The most receipt-dense material of the four.

Week 3 - Muse: the signed limitations list, and the approval model as a lived workflow rather than a policy page - nothing external ships without the human's exact-text sign-off, including per-post approval on social.

Week 4 - Tab: "What 'verified' should mean when an agent says it tested something." Exact-head test verification on a disposable MySQL server, statement counters proving no SQLite fallback, and "tree verified, commit object not seen" instead of claiming more than was checked.

Week 5 - Wabi: available-on-paper vs proven-in-practice. The four-way access labels (Available / Needs access / Needs approval each time / Limitation) and why claimed scope has to match actual arrangements. Honesty note carried from the planning round: Wabi's and Hark's evaluations were not posted on the board at planning time, so this episode's copy must not imply a verdict beyond what Sasha approves for publication.

Week 6 - The evaluator and the synthesis: how the grading worked (demand the document, stress-test the claims, check against the record, label what could not be verified), what we learned grading our own agents, and the rubric as the giveaway asset.

Each episode's copy only carries claims that survived 4c testing, with their label. A claim that failed its stress test appears, if at all, as the corrected/narrowed version - the correction itself is good copy and fits the honesty angle.

== 3. PER-CHANNEL FORMATS AND CADENCE ==

Cadence (answers Sasha's review question 1): the LinkedIn spine runs weekly on Mondays; Threads posts run daily or near-daily between Mondays (one verified fact per post); Reddit posts are staggered through the six weeks rather than daily, since the communities involved do not reward one account posting daily.

LinkedIn (Mondays, Sasha's founder-operator voice): one claim per post, evidence attached. Optional 3-slide carousels per agent week: the claim / the receipt / the limit.

Threads (first-person agent-collaboration): one verified fact per post, short threads walking one card from assignment to result. Each agent drafts its own first-person posts; per-post exact-text approval applies here too.

Reddit (methodology-first, no drive-by links):
- r/AI_Agents: the evaluation methodology as a discussion post ("how do you verify an agent actually did what it claims?"), the receipt checklist and the stress-test labels as the contribution.
- r/SideProject: build-in-public on the coordination layer.
- r/laravel / r/PHP: the two technical posts that stand on their own merits - Tab's proving-tests-ran-on-MySQL-not-SQLite write-up and Hark's lock-file-only Symfony bump vs a frozen verification baseline. Cohando mentioned only in context.
- r/startups only inside designated self-promotion threads.
Check each community's current rules before posting; Sasha participates as himself and links only where the rules allow.

== 4. COHANDO CTA PLAN (one per post, matched to the post's own claim) ==

- Week 1: "grade your own agents" - rubric teaser.
- Week 2 (Hark): "watch an agent say no" - link a sanitized public card where the honest no is the result.
- Week 3 (Muse): the limitations-list page.
- Week 4 (Tab): "see the receipt" - a sanitized verification card plus the one-page receipt checklist.
- Week 5 (Wabi): "bring one bounded task" - run one real task on Cohando and inspect what was prepared, what needed approval, what completed.
- Week 6: the rubric as a free asset, with Cohando as the place to run it with receipts.

Mechanics: LinkedIn posts end with one link and one ask. Threads: link in bio for the series duration. Reddit: links only where rules permit, resource-first with Cohando in the footer. Every CTA points at the series hub (4b). CTAs that link to example cards depend on sanitized public cards existing - see open decision 4.

== 4b. COHANDO.COM BLOG (answers Sasha's review question 3) ==

Recommendation: yes. Host the series hub as a blog (or "Agent reviews") section on Cohando.com, and make it the stable landing spot every CTA points to instead of a standalone page:

- Each of the six episodes gets a hub article carrying the full claims-vs-receipts write-up, with the sanitized public cards linked as evidence.
- It answers "should there be somewhere on Cohando.com for reviewing the agents" directly: after the series ends, the same section becomes an ongoing directory of reviewed agents, which is durable content LinkedIn/Threads/Reddit cannot provide.
- The directory's "reviewed" claim is backed by 4c: every listed claim shows its verification label (self-reported / independently tested / not yet verified) with test date, conditions and evidence. An untested agent or claim is listed as not yet verified, never implied tested.
- It converts social traffic into product interest on his own domain, where the CTA (try one bounded task) sits next to the receipt.
- Build note: Hark offered to build the hub page in the planning round; putting it on Cohando.com itself is work on the product's site, so the build owner and timing are Sasha's call (Hark building it, or ChatGPT as the usual Cohando codebase owner). No site changes happen under this card - this is the recommendation only.

== 4c. CLAIM STRESS-TESTING (new, per Sasha's 2026-11-09 decision) ==

Every claim in an agent's capability sheet is stress-tested by the other agents before it is promoted into an episode, a post, or the reviewed-agents directory. This is the verification step behind both the episode source material and the directory's "reviewed" label.

How it works:
1. Each agent's sheet is split into discrete, testable claims (each agent does the first pass on its own sheet; Instinct checks the split is complete).
2. The other agents pick up claims as test cards on Cohando - one claim, one test, one result entry with evidence. A claim is never tested only by the agent that wrote it.
3. Every claim gets a label, recorded on the sheet and carried into all copy:
   - self-reported: the agent states it; no independent test has run.
   - independently tested: another agent ran a test on the record; entry carries test date, conditions (environment, inputs, constraints) and evidence (card/result link).
   - not yet verified: a test was planned or attempted but did not establish the claim.
4. Test safety defaults: tests are read-only or draft-only by default (read a file, run a local check, produce a draft that is discarded). Any test that sends, spends, publishes or changes something outside the board needs its own separately approved test card with the scope spelled out - the series card does not authorize those.
5. Failed tests narrow or correct the sheet. The claim is rewritten to what the test actually showed (or labeled not yet verified), and the corrected version is what episodes and the directory carry. Corrections stay on the record - they are part of the honesty story, not something to hide.

This adds roughly one working week of cross-testing before Week 1 copy is final; the test cards themselves become receipt material for episodes 1 and 6.

== 5. WHAT EACH AGENT PRODUCES ==

- Muse: the full draft series for all channels if wanted, a Monday-by-Monday schedule, claim-vs-verdict tables distilled from the four guides and evaluations, and the evaluation rubric as a standalone shareable asset. Stress-tests claims from Tab's, Hark's and Wabi's sheets (4c).
- Tab: first-person LinkedIn and Threads drafts fact-checked against the cards; a sanitized "anatomy of a verification card" write-up; the one-page receipt checklist; carousel graphics; the r/laravel MySQL post; fact-check passes on the other agents' drafts. Stress-tests claims from Muse's, Hark's and Wabi's sheets (4c); its testing discipline makes it the natural lead on test-card hygiene (date, conditions, evidence).
- Hark: first-person drafts for LinkedIn, Threads and Reddit; claim/evidence/limit tables; carousel, workflow and chart graphics; the series hub page or blog section (if Sasha assigns it); the r/PHP Symfony post. Stress-tests claims from Muse's, Tab's and Wabi's sheets (4c).
- Wabi: first-person field notes; LinkedIn and Threads variants; the claim/access-approval/evidence table; a workflow graphic. Stress-tests claims from Muse's, Tab's and Hark's sheets (4c).
- Instinct: this synthesis; splits each sheet into testable claims and checks coverage; runs the claim-verification pass against the board record before anything goes to Sasha; adjudicates disputed test outcomes; the evaluator episode content.
- Sasha: exact-text approval per post; approval of any stress test that sends, spends or changes something; posts from his own channels (LinkedIn Mondays); Reddit participation as himself.

== 6. PRODUCTION AND REVIEW FLOW ==

1. One Cohando card per episode in Joint tasks; drafts due mid-week before each Monday slot; Threads/Reddit interstitial posts get their own cards or share the week's episode card. Stress-test cards (4c) run first, as their own cards, before Week 1 copy is locked.
2. Stress-test pass: each sheet's claims are tested by the other agents per 4c; labels recorded on the sheets.
3. Each agent drafts its own episode; Tab runs fact-check passes on cross-drafts; every claim traces to a board record or a public source, and carries its 4c label.
4. Sanitization pass on everything: no private details, no group-internal IDs; local test runs are never described as CI or GitHub checks; illustrative examples keep their "illustration" label.
5. Instinct verifies the claims in each draft against the record (including that labels match the test entries) before it goes to Sasha.
6. Sasha approves exact text per post. Nothing publishes without it.
7. Evaluation columns stay blank where no delivered evaluation exists; copy never implies a verdict that has not been delivered, and never upgrades a label beyond its test evidence.

== 7. OPEN DECISIONS FOR SASHA ==

1. Series title.
2. Cadence: accept the recommended weekly LinkedIn spine + daily Threads/Reddit, or switch to a compressed daily run? (Review question 1 answered with a recommendation above.)
3. Cohando.com blog: build the hub as a blog/reviews section on Cohando.com (recommended, 4b), and who builds it?
4. Do the evaluation findings appear publicly per episode, and in how much detail?
5. Build the sanitized public example cards? Several CTAs depend on them.
6. Reddit needs Sasha posting and answering as himself - confirm he wants to do that.
7. Stress-testing (4c) adds about a week of cross-testing before Week 1 copy is final - start the test cards now, or fold them into the episode cards as they come up?

(Resolved by his review: agents are named by product publicly. Resolved 2026-11-09: independent stress-testing of all claims is part of the series - implemented as 4c.)