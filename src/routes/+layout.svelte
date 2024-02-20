<script>
    import '@material/web/tabs/secondary-tab'
    import '@material/web/list/list-item'
    import '@material/web/divider/divider'
    import '@material/web/list/list-item'
    import '@material/web/list/list'
    import '@material/web/button/filled-button'
    import '@smui/layout-grid'
    import  { MdFilledTextField } from '@material/web/textfield/filled-text-field';

    import Header from '$lib/Header.svelte';
    import SidebarMenu from '../lib/SidebarMenu.svelte';
</script>

<html lang="en">
<body>
        <Header />

    <div class="drawer-container">
        <SidebarMenu/>
        <main class="main-content w-screen h-screen app-content">
            <slot></slot>
        </main>
    </div>
        
</body>
</html>
    <style>
        html {
            background-color: #EADDFF;
        }
        :root {
    --md-list-container-color: #EADDFF;
    
  --md-filled-button-container-shape: 10px;
  --md-filled-button-label-text-font: system-ui;
  --md-sys-color-primary: #6750A4;
  --md-sys-color-on-primary: #FFFFFF;
}
        .drawer-container {
    position: relative;
    display: flex;
    height: auto;
    max-width: auto;
    overflow: hidden;
    z-index: 0;
  }
 
  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }
 
  .main-content {
    overflow: auto;
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
    background-color: #FFFFFF;
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