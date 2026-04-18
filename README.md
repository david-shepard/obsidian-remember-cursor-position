# Remember cursor position

This plugin for [Obsidian](https://obsidian.md/) remembers the cursor position and scroll for each note. This is very convenient when you switch between notes, go from link to link, go back, you do not need to scroll to the place where you were the last time.

The cursor position, scrolling and text selection  for all notes are stored in a file (the path can be set in the settings), so everything is restored even if you close Obsidian and open it again.

It works in edit and preview mode.

---

## TODO as per [@Thundercraft5 excellent suggestions](https://github.com/dy-sh/obsidian-remember-cursor-position/issues/70#issuecomment-2822711458)

**Issues**

> * Constant polling for changes
> * Expensive comparison of stringified JSON
> * Usage of a large object instead of a `Map()`
> * Writing a large JSON object every file change

**Action items** 

> I recommend: Storing all the files in `IndexedDB` instead of a `.json` file, adding a debounce after typing has finished, and only save the state when edits have finished.

- [ ] Only poll when file has finished editing
- [ ] Use `IndexedDB` (found very useful IndexedDB-based [obsidian lib]((https://github.com/Fevol/obsidian-database-library)) created by @Fevol

## Additional dependencies

- [Fevol/obsidian-database-library: A tiny library for creating persistent IndexedDB databases for usage in the development of Obsidian plugins](https://github.com/Fevol/obsidian-database-library)
