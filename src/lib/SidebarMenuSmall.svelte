<!-- Component for small screen drawer menyu and header with burger button -->

<script lang="ts">
  import IconButton from '@smui/icon-button';
  import '@material/web/divider/divider'
  import Drawer, {
    Content
  } from '@smui/drawer';
  import List, { Item, PrimaryText, SecondaryText, Graphic} from '@smui/list';
  import Accordion, { Panel, Header, Content as AccordionContent } from '@smui-extra/accordion';



  let open = false;
  let active = 'Inbox';

  function setActive(value: string) {
    active = value;
    open = false;
  }

    // options for navigation drawer
    export let selectionIndex =1;
  export let options = [
    {
      subMenu:0,
      title:'Dashboard',
      icon:'dashboard',
      href:['/']
    },
    {
      subMenu: 1,
      title:'Lead Generation',
      elements: ['Lead Generation', 'All Campaigns'],
      icon:'search',
      href:['/lead-search', '/all-campaigns']
    }, 
    {
      subMenu: 0,
      title:'Marketing',
      icon:'trending_up',
      href:['/marketing']
    },
    {
      subMenu: 0,
      title:'Users',
      icon:'people',
      href:['/users']
    },
    {
      subMenu:0,
      title:'Account Overview',
      icon:'person',
      href:['/account-overview']
    },
    {
      subMenu:0,
      title:'Transactions',
      icon:'paid',
      href:['/transactions']
    }
  ]

</script>

<header>
    <div>
        <a href='/'><img alt = 'logo' src = './logo.png' class="logo"></a>
        <div>
          <IconButton class = 'material-icons bell' href='/account-overview' color='secondary'>account_circle</IconButton>
          
          <IconButton class = 'material-icons bell' >notifications</IconButton>
          <IconButton class="material-icons"  on:click={() => (open = !open)}>
            view_list
        </IconButton>
          
      </div>
          
    </div>
</header>
<md-divider></md-divider>

<Drawer style='width:auto; z-index: 9999;' class='nav' variant="modal" fixed={false} bind:open>
  <Content>
    <List >
      {#each options as option, i}
      {#if option.subMenu}
        <Accordion>
          <Panel  variant="unelevated">
            <Header>
              <Graphic class="material-icons" >{option.icon}</Graphic>
              <SecondaryText><big>{option.title}</big></SecondaryText>
            </Header>
            <AccordionContent>
              <List>
              {#each option.elements as txt, i}
                  <Item href={option.href[i]}><SecondaryText>{txt}</SecondaryText></Item>   
              {/each}
            </List>
            </AccordionContent>
          </Panel>
        </Accordion>

     
      {:else}
        <Item href={option.href[0]} class='nav-list-item' style = 'height: 90px; max-width:240px;'
        on:SMUI:action={() => (selectionIndex = i)} selected={selectionIndex === i}>
          <Graphic class="material-icons" >{option.icon}</Graphic>
          <SecondaryText><big>{option.title}</big></SecondaryText>
        </Item>
        {/if}
      {/each}
    </List>
  </Content>
</Drawer>

  
  <style>
     * :global(.item) {
    height: 100px;
  }
  
    * :global(.app-content) {
      flex: auto;
      overflow: auto;
      position: relative;
      flex-grow: 1;
    }
  
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
  