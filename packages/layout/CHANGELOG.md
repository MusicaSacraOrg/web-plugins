# @musica-sacra/layout

## 2.0.0

### Major Changes

- 8799a58: Create new layout King.
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

## 1.1.0

### Minor Changes

- 50e606b: Renamed prop `classname` to `className` in Container.tsx and Prince.tsx
  - **What** Renamed prop `classname` to `className` in Container.tsx and Prince.tsx
  - **Why** Matches React convention, improves consistency.
  - **How** Rename `classname` prop to `className` in `Container` and `LayoutBasic`.
    Update your code by replacing all `classname` props with `className`.

## 1.0.1

### Patch Changes

- ae1aafa: Fix styles.

## 1.0.0

### Major Changes

- 809b5cf: Create new plugin @musica-sacra/layout
