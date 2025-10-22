---
"@musica-sacra/layout": major
---

Create new layout King.

- **what** Create new 3 column layout KIng and refactor old layouts.
- **why** We wanted a 3 column layout.
- **how** Breaking changes! Follow instructions:

1. **If you are using layout `<LayoutBasic>`**
   
This layout was renamed to `<Prince>`. All classNames derived from `layout-basic` were renamed to `prince`.

There was change from layout content + sidebar width, from `1200px` to `1280px`.

2. **If you are using layout `<LayoutWithSidebar>`**

This layout was renamed to `<Queen>`. All classNames derived from `layout-with-sidebar` were renamed to `queen`.

There was added prop `fullWidth`, default set to `false`. With this prop you can make the layout to take full width of the page, and dont have max-width of content.

There was change from layout content + sidebar width, from `1200px` to `1280px`.

3. **New layout `<King>`**

There was added new layout `<King>`. Layout has 3 column, see readme for more information.



