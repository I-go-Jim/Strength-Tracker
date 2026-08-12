# Sean's Strength Tracker V6.1 Dynamic Start

## V6.1 changes
- The program start date is no longer cached
- The earliest remaining workout is always the program start date
- Deleting the oldest workout immediately recalculates every workout week
- Importing a backup recalculates all workout weeks
- Adding an older workout recalculates the entire timeline
- Weeks continue beyond 12: Week 13, Week 14, and so on
- Only Week 6 and Week 12 are labeled `(Deload)`
- Keeps the V6 clean two-tab layout and all V5 workout features

## Test locally
Run `python -m http.server 7007` in this folder, then open `http://localhost:7007`.
