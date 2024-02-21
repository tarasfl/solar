
<header>
    <div>
        <img alt = 'logo' src = './logo.png' class="logo">
        <!-- <Button on:click={() => (open = !open)}>
            <Label>Toggle Drawer</Label>
          </Button> -->
          <IconButton class="material-icons"  on:click={() => (open = !open)}>
            view_list
        </IconButton>
    </div>
</header>
<md-divider></md-divider>


   
   <Drawer variant="modal" fixed={false} bind:open>
      <Content>
        <List>
          <Item href="/" on:click={() => (open = false)}>
            <Text>Dashboard</Text>
          </Item>
          <Item href="/lead-search" on:click={() => (open = false)}>
            <Text>Lead Generation</Text>
          </Item>
          <Item href="/marketing" on:click={() => (open = false)}>
            <Text>Marketing</Text>
          </Item>
          <Item href="/users" on:click={() => (open = false)}>
            <Text>Users</Text>
          </Item>
          <Item href = '/account-overview' on:click={() => (open = false)}>
            <Text>Account Overview</Text>
          </Item>
          <Item href = '/transactions' on:click={() => (open = false)}>
            <Text>Transactions</Text>
          </Item>
    
        </List>
        </Content>
    </Drawer>

  <script lang="ts">
    import IconButton from '@smui/icon-button';
    import '@material/web/divider/divider'
    // import '@material/web/icon/icon'
    // import '@material/web/iconbutton/icon-button'
    import Drawer, {
      AppContent,
      Content,
      Header,
      Title,
      Subtitle,
      Scrim,
    } from '@smui/drawer';
    import Button, { Label } from '@smui/button';
    import List, { Item, Text, Graphic, Separator, Subheader } from '@smui/list';
  
    let open = false;
    let active = 'Inbox';
  
    function setActive(value: string) {
      active = value;
      open = false;
    }
  </script>
  
  <style>
    /* These classes are only needed because the
      drawer is in a container on the page. */
    /* .drawer-container {
      position: relative;
      display: flex;
      height: 350px;
      max-width: 600px;
      border: 1px solid
        var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
      overflow: hidden;
      z-index: 0;
    } */
  
    * :global(.app-content) {
      flex: auto;
      overflow: auto;
      position: relative;
      flex-grow: 1;
    }
  
    /* .main-content {
      overflow: auto;
      padding: 16px;
      height: 100%;
      box-sizing: border-box;
    } */
    header {
        background-color: #ffffff;
        height: 65px;
    }

    .logo {
        margin-left: 5px;
        margin-top: 5px;
        height: 55px;
    }
    div{
        display: flex;
    justify-content: space-between;
    }
* {
    margin: 0;
    padding: 0;
}

  </style>
  