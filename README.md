LeadZam UX Audit & Lead Sources Redesign
A focused UX audit and frontend implementation for LeadZam, centred on the “Where leads come from” section of the Integrations page.
Project Overview
This project reviews potential UX improvements across the LeadZam website and explores one of them through a focused redesign. Rather than rebuilding the entire website, the work concentrates on making lead-source options easier to scan and explore.
The redesigned section presents five lead-source options:
- Meta Lead Ads
- Click-to-WhatsApp
- Google Ads
- LeadZam Forms
- Website & CSV
The design uses a clear introductory area, a consistent card layout, concise descriptions, and visual cues intended to help users recognise that they can explore an option further.
Scope note: This is a focused redesign of one section, not a full LeadZam website redesign. UX findings are audit observations and hypotheses; they should not be presented as validated user research unless separately tested.

Project Goals
- Review potential usability and clarity improvements across the website.
- Prioritise one high-impact opportunity for a focused redesign.
- Improve the scanability of the lead-source options.
- Create the design in Figma and implement the selected section in the frontend.
- Document the design rationale, implementation, and use of AI-assisted tools.
UX Audit
The audit considered potential improvements in areas such as:
1. Lead-source discovery — making available sources easier to scan and explore.
2. Product-benefit comparison — helping visitors distinguish between capabilities.
3. Feature descriptions — explaining practical outcomes more directly.
4. Visual hierarchy — making related capabilities easier to understand.
5. Next-step clarity — helping visitors understand how to continue their journey.
The primary redesign focuses on the first finding: lead-source discovery. The other findings are audit hypotheses and should be supported by relevant page screenshots before being treated as confirmed issues.
Design Approach
What changed in the selected section?
- Clear section introduction: A heading and short explanation provide context before users scan the options.
- Consistent cards: Lead-source options use a repeatable visual structure.
- Action cues: Arrow icons indicate that an option can be explored further.
- Selected labels: “Popular” badges draw attention to selected options in the concept. They should not be interpreted as data-backed popularity claims unless product usage data confirms them.
- Focused scope: The redesign stays within the selected section rather than attempting to redesign every page.
Design file
Add your Figma links before publishing:
- Figma design: [Add Figma design link]
- Figma prototype: [Add Figma prototype link, if available]
Make sure link permissions allow reviewers to open the files.
Frontend Implementation
The selected design was implemented in the frontend using React and TypeScript.
Technology
- React
- TypeScript
- CSS / project styling
- Figma for UI/UX design
Update this list to match the actual dependencies and styling tools in the repository. Do not list a library unless it is used in the project.
Run Locally
Follow these steps to run the project on your computer. These instructions assume the repository uses Node.js and has a package.json.
Prerequisites
- Node.js installed (use the version required by the project, if specified).
- npm, which is included with Node.js.
- Git, if you plan to clone the repository.
Installation
1. Clone the repository:
   git clone <your-repository-url>
2. Move into the project folder:
   cd <your-project-folder>
3. Install the dependencies:
   npm install
4. Start the development server:
   npm run dev
5. Open the local URL shown in the terminal (often http://localhost:5173 for Vite projects).
If the command does not work
Check the scripts section in package.json and run the start command defined there. For example, some projects use npm start instead of npm run dev. If the project requires environment variables, create a local .env file using the variable names documented by the project; never commit secret keys or credentials to GitHub.
Before publishing: Confirm the commands and local URL against your actual project setup. The steps above are a standard starting point and may need adjustment if your project uses a different build tool or package manager.

AI Tools & Workflow
AI-assisted tools supported parts of the workflow. Design decisions, implementation, and final output should be reviewed and verified by the project author.
- ChatGPT — supported UX-audit thinking, helped organise the case-study narrative, and assisted with documenting design rationale.
- Figma Agent — assisted with minor design refinements.
- Google Antigravity — assisted with frontend implementation and troubleshooting minor issues.
AI was used as an assistant, not as a substitute for reviewing the design, checking the code, or making final decisions. AI-generated suggestions or code should be reviewed and adjusted to fit the project.
Interaction & Responsiveness
The intended experience is to let users explore lead-source options with clear visual cues.
- Verify that every arrow/card performs the action intended by the implementation.
- Check the layout at desktop, tablet, and mobile widths.
- Check keyboard focus and accessible labels for interactive elements.
- If an element is only decorative, it should not look like a working control.
Important: Describe only interactions that are implemented and tested in the repository. If the cards currently have no working interaction, update this section to say the current version is a visual frontend implementation.
Screenshots
Add screenshots to a folder such as screenshots/ and update these paths to match your repository:
Preview	Suggested file
Original LeadZam section	screenshots/original-section.png
Figma redesign	screenshots/figma-redesign.png
Frontend implementation	screenshots/frontend-implementation.png


For example, after adding an image to the repository, display it with:
![LeadZam lead sources redesign](screenshots/frontend-implementation.png)
Only include screenshots you have permission to share.
Project Deliverables
- UX audit findings and prioritisation
- Focused Figma redesign
- React + TypeScript frontend implementation
- AI tools and workflow notes
- Screenshots and/or a walkthrough video, if included
Optional links:
- Live demo: [Add deployed demo link, if available]
- Walkthrough video: [Add video link, if available]
- Case study: [Add case-study link, if available]
Limitations
- This project redesigns one selected section rather than the complete website.
- The UX findings are observational hypotheses unless supported by usability testing or product analytics.
- “Popular” labels are visual design choices unless validated with product usage data.
- Implementation details and interactions should be evaluated against the current source code.
