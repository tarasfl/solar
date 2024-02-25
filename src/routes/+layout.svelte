<script lang='ts'>

    import {onMount} from 'svelte';

    // importing materials UI elements
    import LayoutGrid, { Cell } from '@smui/layout-grid';

    // importing components
    import Header from '../lib/Header.svelte';
    import SidebarMenu from '../lib/SidebarMenu.svelte';
    import Footer from '../lib/Footer.svelte';
    import SidebarMenuSmall from '../lib/SidebarMenuSmall.svelte';


    export let isSmallScreen = false;
    
    // Function to check screen size on mount and resize
  const checkScreenSize = () => {
    isSmallScreen = window.innerWidth < 768; // Adjust the breakpoint as needed
  };

    onMount(() => {
      checkScreenSize();
      window.addEventListener('resize', checkScreenSize);
    })
    
</script>

<html lang="en">
<body>

  <!-- Responsive implementeation -->
  <LayoutGrid>
    {#if !isSmallScreen}
      <Cell span={12}>
        <Header />
      </Cell>
    {/if}
    
    {#if !isSmallScreen}
    <Cell spanDevices={{ desktop: 2, tablet: 2}}>
      <SidebarMenu />
      </Cell>
    {/if}
    
      {#if isSmallScreen}
      <Cell spanDevices={{ phone: 4, tablet: 8}}>
        <SidebarMenuSmall />
      </Cell>
      {/if}
      
    

    <Cell  spanDevices={{ desktop: 10, tablet: 8, phone:4}}>
      <slot></slot>
    </Cell>

    <Cell spanDevices={{ desktop: 12, tablet: 8, phone:4}}>
      <Footer/>
    </Cell>

  </LayoutGrid>
  
        
</body>
</html>
    <style>
     * :global( .page-title){
        margin-bottom: 10px;
      }

      /* body, html {
        height: 100%;
      } */
 
/* Layout grid spacing. */
:root {
  --mdc-theme-secondary: #fff;
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