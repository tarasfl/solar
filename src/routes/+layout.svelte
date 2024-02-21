<script lang='ts'>

    // importing materials UI elements
    import '@smui/layout-grid'
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    // importing components
    import Header from '../lib/Header.svelte';
    import SidebarMenu from '../lib/SidebarMenu.svelte';
    import Footer from '../lib/Footer.svelte';

    // importing svelte components
</script>

<html lang="en">
<body>

  <!-- Responsive implementeation -->
  <LayoutGrid>
    <Cell span={12}>
      <Header />
    </Cell>

    <Cell span={3}>
      <SidebarMenu/>
    </Cell>

    <Cell span={9}>
      <slot></slot>
    </Cell>

    <Cell span={12}>
      <Footer />
    </Cell>

  </LayoutGrid>
        
        
</body>
</html>
    <style>

      body, html {
        height: 100%;
      }
 
/* Layout grid spacing. */
:root {
  --mdc-layout-grid-margin-desktop: 24px;
  --mdc-layout-grid-gutter-desktop: 24px;
  --mdc-layout-grid-column-width-desktop: 72px;
  --mdc-layout-grid-margin-tablet: 16px;
  --mdc-layout-grid-gutter-tablet: 16px;
  --mdc-layout-grid-column-width-tablet: 72px;
  --mdc-layout-grid-margin-phone: 16px;
  --mdc-layout-grid-gutter-phone: 16px;
  --mdc-layout-grid-column-width-phone: 72px;
}
    </style>