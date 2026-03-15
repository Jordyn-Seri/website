

## Reorder Case Studies

The case studies in `ImpactSection.tsx` are currently ordered:
1. Revenue Automation
2. Medicaid Operations  
3. Strategic Dashboards

Need to reorder the `caseStudies` array to:
1. Revenue Automation (stays first)
2. Strategic Dashboards (move from 3rd to 2nd)
3. Medicaid Operations (move from 2nd to 3rd)

### Change

**File**: `src/components/ImpactSection.tsx`

Swap the order of the Medicaid Operations and Strategic Dashboards objects in the `caseStudies` array (lines 12-27).

