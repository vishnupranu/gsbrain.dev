# Frontend & Design System Specification

## Principles
Human-centered, premium, clear, accessible and responsive. Motion supports feedback and orientation; it must not obscure content or slow core tasks.

## Tokens
Define semantic tokens for:
- color: background, surface, elevated surface, text, muted text, border, focus, accent, success, warning and danger;
- typography: family, size, weight, line height and content width;
- spacing and layout grid;
- radii, borders, elevation and shadows;
- z-index layers;
- motion duration, easing and stagger;
- responsive breakpoints;
- focus ring and disabled-state treatment.

Avoid hardcoded values in feature components. Use semantic tokens, not brand-color values directly.

## Component inventory
Foundation: typography, links, icons, code, badges, tooltip, skeleton, divider.
Inputs: text field, textarea, combobox, select, checkbox, radio, switch, slider, validation.
Actions: button variants, icon button, menu, command palette, confirmation dialog.
Feedback: toast, alert, progress, empty state, loading, error, retry.
Navigation: sidebar, breadcrumbs, tabs, project switcher, mobile navigation.
Data: table, filtering, sorting, pagination, activity feed, status, log viewer.
Chat: composer, streaming message, code block, attachment, tool activity, plan approval.
Workspace: file tree, Monaco editor, diff, split panes, terminal, preview toolbar.
Visual builder: canvas, layers, selection, properties inspector, tokens editor.
Workflow: graph canvas, node palette, typed ports, validation, execution timeline.
Admin: users, roles, permissions, audit, provider settings, monitoring and deployments.

## Required states
Every interactive component defines default, hover, focus, pressed, selected, disabled, loading, success, warning, error, empty, overflow and permission-denied states as applicable.

## Motion
Use one primary motion library for common UI transitions. Add a specialized timeline library only when needed. Respect `prefers-reduced-motion`. Avoid continuous decorative animation and do not animate large lists unnecessarily.

## Screens
Landing, authentication, onboarding, project dashboard, chat/build workspace, specification editor, code workspace, preview, workflow editor, model settings, usage, team/permissions, releases/deployments, admin, documentation and account settings.

## Quality gates
- Keyboard navigation and visible focus.
- WCAG 2.2 AA target.
- Responsive checks at defined viewports.
- No hydration errors or theme flash.
- Lazy-load heavy editor/canvas modules.
- Virtualize large logs and histories.
- Avoid full workspace rerenders per streamed token.
- Use real API data in production; demo fixtures must be explicitly labelled.
- Browser tests cover critical workflows and error states.
