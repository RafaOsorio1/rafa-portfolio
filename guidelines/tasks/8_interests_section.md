# Task: Interests Section Cleanup

This task cleans up the Interests section to align with the 80/20 professional/personal rule. It removes junior/student details (like specific hours played and numerical game scores) and frames the tabs as secondary, elegant features.

## Target Files
* `src/data/constants.ts`
* `src/sections/Interests.tsx`

## Step-by-Step Instructions

### Step 1: Remove Hours Played and Scores from Games Constants
Open `src/data/constants.ts` and edit the `GAMES` array (lines 227-282).
1. For each game object, delete the `hours` property (e.g. `hours: '350h+'`).
2. Delete the `rating` property (e.g. `rating: 10`).
3. Replace them with brief details about the developer's engagement style (e.g. platform and play category).

### Step 2: Remove Game Rating Progress Bars in Interests.tsx
Open `src/sections/Interests.tsx` and find the `GamesTab` component (lines 185-242).
1. Delete the rating render block and the loop that draws progress bar ticks (lines 225-236).
2. Clean up the platform badge layout so it displays only Platform and Genre.

### Step 3: Simplify the Pets Section Layout
In `src/sections/Interests.tsx`, simplify the `PetsTab` component (lines 275-390):
1. Remove the click speech bubbles (`petBubble` and `activePet` hooks) if they clutter the view or add code complexity.
2. Ensure the layout remains clean and is presented as a minor visual section at the bottom of the page.

---

## Verification Criteria
1. Run local dev server.
2. Go to the "Interests" section and select the "Juegos / Gaming" tab. Verify that specific numbers of hours played and numerical review scores are no longer present.
3. Switch between tabs (F1, Gaming, Cinema, Pets) to verify that layout alignments are correct and there are no rendering overflows.
