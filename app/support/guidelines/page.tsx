import { MDXRemote } from "next-mdx-remote/rsc"
import { GuidelinesHeader } from "@/components/guidelines-header"
import { GuidelinesSidebar } from "@/components/guidelines-sidebar"

const guidelinesContent = `
<div id="general">

# GTAPoliceMods Community Guidelines

## General Guidelines

Our community thrives on respect, collaboration, and high-quality content. These guidelines ensure a positive experience for all members.

</div>

<div id="outside">

## Outside Policy

- No discussion of illegal activities
- Respect intellectual property rights
- No sharing of personal information
- Keep discussions relevant to the community

</div>

<div id="punishment">

## Punishment Policy

### Warning System
- First offense: Written warning
- Second offense: Temporary suspension
- Third offense: Permanent ban

### Appeal Process
- Appeals must be submitted within 14 days
- Include reason for appeal and corrective actions
- Review by moderation team

</div>

<div id="low-quality">

## Low Quality Posts

To maintain high standards:
- No spam or repetitive content
- Provide meaningful titles and descriptions
- Include necessary details in help requests
- Use appropriate formatting

</div>

<div id="harassment">

## Member Harassment

We have zero tolerance for:
- Personal attacks or bullying
- Discriminatory behavior
- Threats or intimidation
- Stalking or targeted harassment

</div>

<div id="content">

## User Content

### Content Standards
- Original content only
- Credit all sources
- No adult or inappropriate content
- Family-friendly language

### Quality Requirements
- Clear documentation
- Tested and working
- Regular maintenance
- Responsive to feedback

</div>

<div id="moderation">

## Moderation Actions

Our moderation team may:
- Remove inappropriate content
- Issue warnings
- Suspend accounts
- Ban repeat offenders

</div>

<div id="support">

## Support & Help

Need assistance?
- Contact moderators
- Join our Discord
- Use support tickets
- Report violations

</div>

---

*These guidelines are subject to change. Last updated: ${new Date().toLocaleDateString()}*
`

export default function GuidelinesPage() {
  return (
    <div className="min-h-screen bg-background">
      <GuidelinesHeader />
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <GuidelinesSidebar />
          <div className="md:col-span-3">
            <div className="prose prose-neutral dark:prose-invert max-w-4xl">
              <MDXRemote source={guidelinesContent} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}