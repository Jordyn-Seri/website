

## Plan: Move Credentials Before About Me

Swap the order of `CredentialsSection` and `PersonalSection` in `src/pages/Index.tsx` so Credentials appears before About Me.

**Current order (lines ~24-25):**
```
<PersonalSection />
<CredentialsSection />
```

**New order:**
```
<CredentialsSection />
<PersonalSection />
```

Single-line swap in one file.

