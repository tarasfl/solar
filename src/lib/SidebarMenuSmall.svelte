<!-- Component for small screen drawer menyu and header with burger button -->

<script lang="ts">
  import IconButton from '@smui/icon-button';
  import '@material/web/divider/divider'
  import Drawer, {
    Content
  } from '@smui/drawer';
  import List, { Item, PrimaryText, SecondaryText, Graphic} from '@smui/list';

  let open = false;
  let active = 'Inbox';

  function setActive(value: string) {
    active = value;
    open = false;
  }

  export let menu_elements = [
    {
      text:'Dashboard',
      icon:'dashboard',
      href:'/'
    },
    {
      text:'Lead Generation',
      icon:'search',
      href:'/lead-search'
    }, 
    {
      text:'Marketing',
      icon:'trending_up',
      href:'/marketing'
    },
    {
      text:'Users',
      icon:'people',
      href:'/users'
    },
    {
      text:'Account Overview',
      icon:'person',
      href:'/account-overview'
    },
    {
      text:'Transactions',
      icon:'paid',
      href:'/transactions'
    }
]
</script>

<header>
    <div>
        <a href='/'><img alt = 'logo' src = './logo.png' class="logo"></a>
          <IconButton class="material-icons"  on:click={() => (open = !open)}>
            view_list
        </IconButton>
    </div>
</header>
<md-divider></md-divider>


   
   <Drawer variant="modal" fixed={false} bind:open>
      <Content>
        <List twoLine singleSelection >
          {#each menu_elements as element }
              <Item href={element.href} on:click={() => (open = false)} class="item">
                <PrimaryText><Graphic class='material-icons'>{element.icon}</Graphic></PrimaryText>
                <SecondaryText>{element.text}</SecondaryText>

              </Item>
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
  