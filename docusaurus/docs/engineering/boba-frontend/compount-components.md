# Compound Components

Compound components are a common React design pattern where a component (the
parent) also defines other subcomponents (its children) as part of its
interface. Usually, this pattern allows the parent component and the smaller
components to share state with each other. But even when this doesn't happen, we
can use the pattern to make the code a lot more readable.

## What a compound component looks like

One example of compound component is the Layout component. On BobaBoard, the
Layout is made by various parts, including:

- Header
- Sidemenu
- Bottom bar
- Content

If we consider layout a compound component, it might look like this:

```tsx
<Layout accentColor="green" hasNotifications={true}>
  <Layout.Header title="!bobaland" onTitleClick={...} />
  <Layout.SideMenu onOpen={...}>{sideMenuContent}</Layout.SideMenu>
  <Layout.BottomBar>{bottomBarContent}</Layout.BottomBar>
  <Layout.Content>
    The content of the page
  </Layout.content>
</Layout>
```

:::note

Not how this actually looks like

:::

### Advantage 1: Props can go on the component where they belong

Each of these part has properties associated with them (for example, is the
header displaying the title right now? Is the side menu open?) that the other
parts don't care about. Some are of general interest to all components, like
whether notifications should be displayed and what the accent color is. The
compound pattern allows us to give the props to the component that makes sense.

### Advantage 2: Easier to omit props

No bottom bar? Easy peasy: just don't include `<Layout.BottomBar>` as a child.
Note that doing this easily allows you to also automatically skip all the props
related to bottom bar, as they are easily encapsulated within the subcomponent
itself.

### Advantage 3: Connect related components with each others

While this is not mandatory, the parent component can expose the children
component as part of itself (e.g. `Layout.BottomBar`, `Layout.SideMenu`). This
means you can just import `Layout` and get them all, but also that you can avoid
people using `Layout.SideMenu` outside of a `Layout`.

## Demistifying Compound Components

While Compound Components and their handling might seem like magic, they're's
nothing but! Each component is actually just a completely regular React
component, and we simply use fairly straightforward manipulations of the
"`children`" array to get things working as they should.

[link and discuss compound utils]

### Declaring Compound Components

If we wish to export a component as part of other components, we need to declare
these as part of its interface.

Let's take the Layout example above. Normally, its type would be.

```tsx
type Layout = React.FC<LayoutProps>;
```

This is just how a regular React component is typed. However, `Layout` is not a
simple React component: it's a React component that also include other
properties (e.g. `BottomBar`, `SideMenu`) that refer to other React component.

We can then type `Layout` as:

```tsx
type LayoutCompound = React.FC<LayoutProps> & {
  BottomBar: React.FC<BottomBarProps>;
  SideMenu: React.FC<SideMenu>;
  Header: React.FC<Header>;
};
```

After declaring the type of Layout, the implementation is similary
straightforward. We do the following:

```tsx
// Create all the subcomponents
const BottomBar = (props: BottomBarProps) => {
  /* The component */
};
const SideMenu = (props: SideMenuProps) => {
  /* The component */
};
const Header = (props: HeaderProps) => {
  /* The component */
};

// Create the Layout components
const Layout: LayoutCompound = (props: LayoutProps) => {
  /* The component */
};

// Add the subcomponents as the same-named property of the
// compound.
Layout.BottomBar = BottomBar;
Layout.SideMenu = SideMenu;
Layout.Header = Header;
```

If you're subcomponent isn't meant to do anything but serve as a potential
vessel for props (or children), then you can use the utility function
`CreateBaseCompound` to create a subcomponent suitable for that case.

### Accessing Subcomponents from the Parent

Assume you want to be able to create a component that works like this:

```tsx
<Layout accentColor="green" hasNotifications={true}>
  <Layout.Header title="!bobaland" onTitleClick={...} />
  <Layout.SideMenu onOpen={...}>{sideMenuContent}</Layout.SideMenu>
  <Layout.BottomBar>{bottomBarContent}</Layout.BottomBar>
  <Layout.Content>
    The content of the page
  </Layout.content>
</Layout>
```

How would you access the subcomponents from `Layout`?

Just like in the regular case, all children of the `Layout` component will be in
its `children` prop. To get access to the various subcomponents, we can then
just look for them in the children array. Fo rthis, we can use the
`extractCompound` methods in compound-utils.

For example:

```tsx
// The Header subcomponent
const Header = (props: BottomBarProps) => {...};

const Layout: LayoutCompound = (props: LayoutProps) => {
   // Goes through the children and finds the component of type Header
   const header = extractCompound(props.children, Header);

   if (!header) {
     // Do anything you need to do if there's no header
   }

   // Access props passed to that component (including its children)
   const pageTitle = header.props.title;

   // You can even pass MORE props to that component
   const HeaderWithExtraInfo = React.cloneElement(header, {
     ...header.props,
     someExtraProp: "someExtraValue"
   });

   // ....
};
```

:::warning

Unless you write code _specifically_ to allow this, there shouldn't be any additional component between a parent and its subcomponents, not even a fragment! If they aren't part of the children array, the extraction methods will fail.

```tsx
// This won't allow the sidemenu to be extracted, cause it won't be in the children array.
<Layout>
  <>
    <Layout.SideMenu />
  </>
</Layout>
```

:::
