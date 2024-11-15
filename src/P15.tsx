/**
 * ### React Challenge: "Auto-Save Notes with Search and Filter"

**Objective**  
Create a note-taking component in React where users can add, edit, and delete notes. Each note should auto-save to `localStorage` after every edit, and users should be able to search and filter through their notes.

**Requirements**
1. **Note-Taking Functionality**:
   - Implement a form where users can add a new note with a title and content.
   - Each note should be editable, and any edits should be saved automatically to `localStorage`.
   - Allow users to delete notes.

2. **Auto-Save**:
   - The application should save each note to `localStorage` immediately after it’s created or edited.
   - When the page is refreshed, notes should persist by loading from `localStorage`.

3. **Search and Filter**:
   - Implement a search bar that filters notes based on the content of the note or the title.
   - Users should be able to filter notes by creation date or edit date in ascending or descending order.

4. **Clear All**:
   - Provide a "Clear All" button to delete all notes from both the UI and `localStorage`.

5. **Component Structure**:
   - Use multiple components (e.g., `Note`, `NoteList`, `NoteEditor`) to keep the code modular.

**Design Constraints**:
- Use only React hooks (`useState`, `useEffect`) for managing state and persistence with `localStorage`.
- Do not use any external libraries except for basic styling if desired.

**Bonus Challenge**  
Implement an "Undo" feature that allows the user to undo the last deletion.
 */

import { useState, useEffect, useCallback } from 'react';

export default () => {
  return (
    <>
      <div>P15</div>
      <style></style>
    </>
  );
};
