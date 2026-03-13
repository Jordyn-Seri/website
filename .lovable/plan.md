

## Replace All Teal with Olive

The simplest and most thorough approach: change the `--primary` CSS variable value to match `--olive` (`68 73% 28%`). This instantly converts every `text-primary`, `bg-primary`, `border-primary`, `ring-primary` usage — across all UI components (buttons, checkboxes, switches, radio buttons, etc.) and custom sections — to olive. No need to edit 17+ individual files.

### Changes

**`src/index.css`** (2 edits):
- Line 18: `--primary: 179 77% 41%;` → `--primary: 68 73% 28%;`
- Line 38: `--ring: 179 77% 41%;` → `--ring: 68 73% 28%;`
- Line 62: `--primary: 179 77% 41%;` → `--primary: 68 73% 28%;` (dark mode)
- Line 82: `--ring: 179 77% 41%;` → `--ring: 68 73% 28%;` (dark mode)

This makes `primary` = olive globally. The `--olive` variable can remain as-is for any explicit olive references already in the code.

