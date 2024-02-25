<script lang="ts">
  import '@material/web/list/list-item'
  import '@material/web/list/list'
  import Drawer, {Content } from '@smui/drawer';
  import List, { Item, SecondaryText, Graphic} from '@smui/list';

  // options for navigation drawer
  export let selectionIndex =1;
  export let options = [
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
<div>
<Drawer style='width:auto;' class='nav'>
  <Content>
    <List  singleSelection >
      {#each options as option, i}
        <Item href={option.href} class='nav-list-item' style = 'height: 90px; max-width:240px;'
        on:SMUI:action={() => (selectionIndex = i)} selected={selectionIndex === i}>
          <Graphic class="material-icons" >{option.icon}</Graphic>
          <SecondaryText><big>{option.text}</big></SecondaryText>
        </Item>
      {/each}
    </List>
  </Content>
</Drawer>
</div>
<style>

:root {
  --md-filled-button-container-shape: 10px;
}
</style>